# Interactive avatar pet

The original two-bear artwork stays fixed beside the profile photo. Four SVG
pupils independently track the mouse with a short CSS transition, within an
elliptical 7 × 5 artwork-pixel range. The SVG masks only the original eye dots
and paints matching face colors underneath; the original PNG is unchanged.
No image switching, image generation, service, API key, or new dependency.

Click or press Enter to pet it, drag and release to lift it, or choose the paper
button to feed it. After 15 seconds without activity it closes its eyes to nap.
Happy and sleeping expressions scale the same pupils rather than swapping art.
Leaving the page recenters the eyes. Touch supports petting, dragging and feeding.
Reduced motion disables transitions, bounces and breathing; direct gaze and
dragging remain available.

- Original artwork: `images/yier_bubu_avatar.png`.
- Fixed portrait and four eye groups: `_includes/author-profile.html`.
- Behavior: `assets/js/avatar-pet.js`.
- Styling: `assets/css/custom.css`.
- The old generated sprite PNGs remain unused.

## Checks

```sh
node --test test/avatar_pet_interaction_test.js
ruby test/avatar_decoration_test.rb
```
