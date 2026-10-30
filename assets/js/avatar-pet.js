(function() {
  const pet = document.querySelector('.avatar-pet');
  if (!pet) return;

  const button = pet.querySelector('.avatar-pet-button');
  const feed = pet.querySelector('.avatar-pet-feed');
  const message = pet.querySelector('.avatar-pet-message');
  const snack = pet.querySelector('.avatar-pet-snack');
  const portrait = pet.querySelector('.avatar-pet-portrait');
  const eyes = pet.querySelectorAll('.avatar-pet-eye');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let idleTimer, reactionTimer, trayTimer, frame;
  let drag = null;
  let pointer = null;
  let ignoreClickUntil = 0;
  let greeting = 0;
  const greetings = ['Hi, paper friend!', 'That tickles!', 'Good luck with your research!', 'Another little paper?'];
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function resetLook() {
    eyes.forEach(function(eye) {
      eye.style.setProperty('--eye-x', '0px');
      eye.style.setProperty('--eye-y', '0px');
    });
  }

  function scheduleSleep() {
    clearTimeout(idleTimer);
    if (document.hidden) return;
    idleTimer = setTimeout(function() {
      if (drag || reactionTimer) return;
      resetLook();
      pet.dataset.state = 'sleeping';
      message.textContent = 'Taking a tiny nap…';
    }, 15000);
  }

  function react(text) {
    clearTimeout(reactionTimer);
    clearTimeout(trayTimer);
    resetLook();
    message.textContent = text;
    pet.dataset.state = 'happy';
    pet.classList.add('is-engaged');
    trayTimer = setTimeout(() => pet.classList.remove('is-engaged'), 4000);
    reactionTimer = setTimeout(function() {
      reactionTimer = null;
      pet.dataset.state = 'idle';
      scheduleSleep();
    }, 1400);
  }

  function bounce() {
    button.getAnimations().forEach(animation => animation.cancel());
    if (reducedMotion.matches) return;
    button.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-9px) rotate(-4deg)', offset: .4 },
      { transform: 'translateY(0) rotate(2deg)', offset: .75 },
      { transform: 'none' }
    ], { duration: 440, easing: 'ease-out' });
  }

  button.addEventListener('click', function(event) {
    if (event.detail > 0 && performance.now() < ignoreClickUntil) return;
    react(greetings[greeting++ % greetings.length]);
    bounce();
  });

  document.addEventListener('pointermove', function(event) {
    if (event.pointerType === 'touch' || drag || document.hidden) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (frame) return;
    const rect = portrait.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    frame = requestAnimationFrame(function() {
      frame = null;
      if (drag || !pointer) return;
      eyes.forEach(function(eye) {
        const dx = pointer.x - rect.left - Number(eye.dataset.x) / 400 * rect.width;
        const dy = pointer.y - rect.top - Number(eye.dataset.y) / 390 * rect.height;
        // Each pair shares a gaze origin; perspective eases into the travel limit.
        const depth = Math.hypot(dx, dy, 220);
        eye.style.setProperty('--eye-x', dx / depth * 3.5 + 'px');
        eye.style.setProperty('--eye-y', dy / depth * 2.3 + 'px');
      });
      if (!reactionTimer) pet.dataset.state = 'idle';
      scheduleSleep();
    });
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', function() {
    pointer = null;
    resetLook();
  });

  button.addEventListener('pointerdown', function(event) {
    if (event.button !== 0 || drag) return;
    clearTimeout(idleTimer);
    clearTimeout(reactionTimer);
    reactionTimer = null;
    button.getAnimations().forEach(animation => animation.cancel());
    resetLook();
    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      rect: button.getBoundingClientRect(),
      moved: false
    };
    button.setPointerCapture(event.pointerId);
  });

  button.addEventListener('pointermove', function(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const rawX = event.clientX - drag.x;
    const rawY = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(rawX, rawY) < 6) return;
    drag.moved = true;
    pet.classList.add('is-dragging');
    pet.dataset.state = 'lifted';
    const x = clamp(rawX, 8 - drag.rect.left, window.innerWidth - drag.rect.right - 8);
    const y = clamp(rawY, 8 - drag.rect.top, window.innerHeight - drag.rect.bottom - 8);
    button.style.transform = `translate(${x}px, ${y}px) rotate(${clamp(x / 8, -16, 16)}deg)`;
  });

  function finishDrag(cancelled) {
    if (!drag) return;
    const previous = drag;
    drag = null;
    pet.classList.remove('is-dragging');
    if (button.hasPointerCapture(previous.id)) button.releasePointerCapture(previous.id);
    const from = button.style.transform || 'none';
    button.style.transform = '';
    if (previous.moved) {
      ignoreClickUntil = performance.now() + 500;
      if (!cancelled) react('Wheee! Back to my spot.');
      if (!reducedMotion.matches) {
        button.animate([
          { transform: from },
          { transform: 'translateY(-8px) rotate(-4deg)', offset: .65 },
          { transform: 'translateY(3px) rotate(2deg)', offset: .85 },
          { transform: 'none' }
        ], { duration: 650, easing: 'cubic-bezier(.22, 1, .36, 1)' });
      }
    }
    if (cancelled) pet.dataset.state = 'idle';
    scheduleSleep();
  }

  button.addEventListener('pointerup', () => finishDrag(false));
  button.addEventListener('pointercancel', () => finishDrag(true));
  button.addEventListener('lostpointercapture', () => finishDrag(true));
  window.addEventListener('resize', function() {
    finishDrag(true);
    resetLook();
  });

  feed.addEventListener('click', function() {
    react('Nom nom… more papers!');
    bounce();
    snack.getAnimations().forEach(animation => animation.cancel());
    if (reducedMotion.matches) return;
    const start = feed.getBoundingClientRect();
    const end = snack.getBoundingClientRect();
    snack.animate([
      { transform: `translate(${start.left - end.left}px, ${start.top - end.top}px) rotate(-15deg)`, opacity: 1 },
      { transform: 'translateY(-6px) rotate(12deg)', opacity: 1, offset: .8 },
      { transform: 'scale(.1)', opacity: 0 }
    ], { duration: 650, easing: 'ease-in' });
  });

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      finishDrag(true);
      clearTimeout(idleTimer);
      if (frame) cancelAnimationFrame(frame);
      frame = null;
    } else {
      scheduleSleep();
    }
  });

  button.disabled = false;
  pet.classList.add('is-ready', 'is-engaged');
  trayTimer = setTimeout(() => pet.classList.remove('is-engaged'), 6000);
  scheduleSleep();
})();
