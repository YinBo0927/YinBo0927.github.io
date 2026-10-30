const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

function setup(reduced = false) {
  let now = 0, nextId = 1;
  const timers = new Map();
  const animations = [];
  function element() {
    const handlers = new Map(), classes = new Set(), captures = new Set();
    return {
      dataset: { state: 'idle' },
      style: { transform: '', setProperty(name, value) { this[name] = value; } },
      classList: { add: (...names) => names.forEach(n => classes.add(n)), remove: n => classes.delete(n), contains: n => classes.has(n) },
      addEventListener(name, fn) { handlers.set(name, [...(handlers.get(name) || []), fn]); },
      emit(name, event = {}) { (handlers.get(name) || []).forEach(fn => fn(event)); },
      getBoundingClientRect() { return {left:100,top:200,right:174,bottom:274,width:74,height:74}; },
      getAnimations: () => [],
      animate(frames, options) { animations.push({frames, options}); },
      setPointerCapture: id => captures.add(id),
      hasPointerCapture: id => captures.has(id),
      releasePointerCapture: id => captures.delete(id)
    };
  }
  const pet = element(), button = element(), feed = element(), snack = element(), message = element(), portrait = element();
  const eyes = [[135.5,170],[135.5,170],[166.25,237.5],[166.25,237.5]].map(([x,y]) => Object.assign(element(), {dataset:{x,y}}));
  portrait.getBoundingClientRect = () => ({left:100,top:200,right:174,bottom:272.15,width:74,height:72.15});
  const elements = {'.avatar-pet-button':button,'.avatar-pet-feed':feed,'.avatar-pet-message':message,'.avatar-pet-snack':snack,'.avatar-pet-portrait':portrait};
  pet.querySelector = selector => elements[selector];
  pet.querySelectorAll = () => eyes;
  const document = Object.assign(element(), {hidden:false,querySelector:()=>pet,documentElement:element()});
  const window = Object.assign(element(), {innerWidth:390,innerHeight:844,matchMedia:()=>({matches:reduced})});
  const schedule = (fn, delay) => { const id=nextId++; timers.set(id,{fn,at:now+delay}); return id; };
  function tick(ms) {
    const end = now + ms;
    while (true) {
      const next = [...timers.entries()].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];
      if (!next) break;
      now = next[1].at; timers.delete(next[0]); next[1].fn();
    }
    now = end;
  }
  vm.runInNewContext(fs.readFileSync('assets/js/avatar-pet.js','utf8'), {
    document,window,setTimeout:schedule,clearTimeout:id=>timers.delete(id),
    requestAnimationFrame:fn=>schedule(fn,16),cancelAnimationFrame:id=>timers.delete(id),
    performance:{now:()=>now}
  });
  return {pet,button,feed,message,document,window,tick,animations,eyes};
}

test('idle sleeps, pointer wakes, and petting and feeding react', () => {
  const h = setup();
  assert.equal(h.button.disabled,false);
  h.tick(15000);
  assert.equal(h.pet.dataset.state,'sleeping');
  h.document.emit('pointermove',{pointerType:'mouse',clientX:0,clientY:200});
  h.tick(16);
  assert.equal(h.pet.dataset.state,'idle');
  assert.ok(parseFloat(h.eyes[0].style['--eye-x']) < 0);
  h.button.emit('click',{detail:0});
  assert.equal(h.pet.dataset.state,'happy');
  assert.equal(h.message.textContent,'Hi, paper friend!');
  h.tick(1400);
  assert.equal(h.pet.dataset.state,'idle');
  h.feed.emit('click');
  assert.equal(h.message.textContent,'Nom nom… more papers!');
  h.tick(16400);
  assert.equal(h.pet.dataset.state,'sleeping');
});

test('drag returns home, suppresses accidental click, and handles cancellation', () => {
  const h = setup();
  h.button.emit('pointerdown',{button:0,pointerId:1,clientX:130,clientY:230});
  h.button.emit('pointermove',{pointerId:1,clientX:230,clientY:160});
  assert.equal(h.pet.dataset.state,'lifted');
  assert.ok(h.button.style.transform.includes('100px, -70px'));
  h.button.emit('pointerup');
  assert.equal(h.button.style.transform,'');
  assert.equal(h.pet.classList.contains('is-dragging'),false);
  h.button.emit('click',{detail:1});
  assert.equal(h.message.textContent,'Wheee! Back to my spot.');
  h.tick(1500);
  h.button.emit('pointerdown',{button:0,pointerId:2,clientX:130,clientY:230});
  h.button.emit('pointermove',{pointerId:2,clientX:-900,clientY:-900});
  assert.ok(h.button.style.transform.includes('-92px, -192px'));
  h.button.emit('pointercancel');
  assert.equal(h.pet.dataset.state,'idle');
  assert.equal(h.button.style.transform,'');
  assert.equal(h.button.hasPointerCapture(2),false);
});

test('reduced motion keeps reactions without animation', () => {
  const h = setup(true);
  h.button.emit('click',{detail:0});
  h.feed.emit('click');
  assert.equal(h.pet.dataset.state,'happy');
  assert.equal(h.animations.length,0);
});

test('hidden pages pause idle timer; resize safely cancels a drag', () => {
  const h = setup();
  h.document.hidden = true;
  h.document.emit('visibilitychange');
  h.tick(20000);
  assert.equal(h.pet.dataset.state,'idle');
  h.document.hidden = false;
  h.document.emit('visibilitychange');
  h.tick(15000);
  assert.equal(h.pet.dataset.state,'sleeping');
  h.button.emit('pointerdown',{button:0,pointerId:3,clientX:130,clientY:230});
  h.button.emit('pointermove',{pointerId:3,clientX:180,clientY:180});
  h.window.emit('resize');
  assert.equal(h.button.style.transform,'');
  assert.equal(h.button.hasPointerCapture(3),false);
});

test('each eye follows the latest pointer smoothly within its elliptical travel', () => {
  const h = setup();
  h.document.emit('pointermove',{pointerType:'mouse',clientX:-1000,clientY:200});
  h.document.emit('pointermove',{pointerType:'mouse',clientX:1000,clientY:800});
  h.tick(16);
  h.eyes.forEach(eye => {
    const x = parseFloat(eye.style['--eye-x']), y = parseFloat(eye.style['--eye-y']);
    assert.ok(x > 0 && y > 0);
    assert.ok((x / 3.5) ** 2 + (y / 2.3) ** 2 <= 1.000001);
  });
  assert.equal(h.eyes[0].style['--eye-x'], h.eyes[1].style['--eye-x']);
  assert.equal(h.eyes[2].style['--eye-y'], h.eyes[3].style['--eye-y']);
  assert.notEqual(h.eyes[0].style['--eye-y'], h.eyes[2].style['--eye-y']);
  assert.equal(h.pet.dataset.state, 'idle');
  h.document.documentElement.emit('pointerleave');
  h.eyes.forEach(eye => assert.equal(eye.style['--eye-x'], '0px'));
  const eye = h.eyes[0];
  h.document.emit('pointermove',{pointerType:'mouse',clientX:100 + 135.5 / 400 * 74,clientY:200 + 170 / 390 * 72.15});
  h.tick(16);
  assert.ok(Number.isFinite(parseFloat(eye.style['--eye-x'])));
  assert.ok(Math.abs(parseFloat(eye.style['--eye-x'])) < 0.00001);
  h.document.emit('pointermove',{pointerType:'touch',clientX:1000,clientY:800});
  h.tick(16);
  assert.ok(Math.abs(parseFloat(eye.style['--eye-x'])) < 0.00001);
});

test('gaze approaches its limit gradually and makes small near-face movements', () => {
  const h = setup();
  const centerX = 100 + 135.5 / 400 * 74;
  const centerY = 200 + 170 / 390 * 72.15;
  const look = distance => {
    h.document.emit('pointermove',{pointerType:'mouse',clientX:centerX + distance,clientY:centerY});
    h.tick(16);
    return parseFloat(h.eyes[0].style['--eye-x']);
  };
  const near = look(40), middle = look(200), far = look(1000);
  assert.ok(near > 0 && near < 1);
  assert.ok(near < middle && middle < far && far < 3.5);
});
