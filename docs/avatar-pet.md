# Interactive avatar pet

The pet lives beside the profile photo. Click or press Enter to pet it, drag
and release to lift it, or choose the paper button to feed it. After 15 seconds
without activity it sleeps. No service, API key, or added runtime dependency is
required.

- Original artwork: `images/yier_bubu_avatar.png`.
- Expression atlas: `images/avatar-pet-sprites.png`, 384 × 384, about 167 KiB.
- Atlas cells, in reading order: looking left, looking right, happy, sleeping.
- Behavior: `assets/js/avatar-pet.js`.
- Reduced motion disables decorative movement and animated returns; direct
  dragging and expression changes remain available.

The expression atlas was generated with the built-in ImageGen tool using the
existing artwork as the edit target, then resized for the small on-page slot.

## Generation prompt

Use case: precise-object-edit. Asset type: ONE production sprite sheet for the existing tiny interactive website avatar pet. Edit target: the supplied transparent PNG of TWO cute bears stacked on a blue oval mat, white bear on top and tan bear underneath. Preserve the exact original characters, clean brown outlines, pink cheeks, hearts, palette, pose, mat, proportions and simple flat sticker art. Make a square 2-by-2 sprite atlas with 4 equal square cells, no gaps or lines, each full two-bear sticker centered at exactly the same scale and placement with transparent padding around it, fully visible. Each sticker fills about 88% of its cell. TOP LEFT: both characters looking LEFT, pupils subtly shifted left, sweet alert expressions. TOP RIGHT: both looking RIGHT, pupils subtly shifted right. BOTTOM LEFT: both delighted, happy curved closed eyes, smiling mouths, slightly stronger blush, same pose. BOTTOM RIGHT: both asleep, closed gentle curved eyes, relaxed mouths, same pose. Only facial expressions and pupil direction change between cells. No new limbs, no new props, no text, no Z lettering, no borders, no labels, no grid, no shadows outside the original sticker, no background. Maintain genuine alpha transparency throughout. This is a single spritesheet image asset, not a UI mockup.

## Checks

```sh
node --test test/avatar_pet_interaction_test.js
ruby test/avatar_decoration_test.rb
```
