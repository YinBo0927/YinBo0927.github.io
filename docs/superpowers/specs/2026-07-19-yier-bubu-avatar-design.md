# Yier and Bubu Avatar Decoration Design

## Goal

Add the supplied Yier and Bubu artwork as a small decorative element peeking
from the lower-right edge of the homepage profile avatar. The decoration
should add personality without competing with the academic content.

## Asset

- Use the supplied 450-by-444 PNG as the only visual source.
- Remove the white background while preserving both characters, the hearts,
  the blue mat, original colors, outlines, and proportions.
- Crop excess transparent padding and save the production asset as
  `images/yier_bubu_avatar.png`.
- Do not redraw, restyle, add text, or introduce other visual elements.

## Placement

- Render the decoration inside the existing avatar container in
  `_includes/author-profile.html`.
- Position it at the avatar's lower-right edge without covering the subject's
  face or the author name.
- Use a 74-pixel width on desktop and a 56-pixel width on mobile.
- Keep the asset fully visible and prevent it from changing the avatar or
  sidebar layout dimensions.

## Interaction

- Keep the decoration still by default.
- On mouse hover or keyboard focus within the avatar area, move it upward by
  3 pixels and apply one small side-to-side rotation over 450 milliseconds.
- Do not run a looping animation and do not make the decoration clickable.
- Mark the image as decorative and remove it from the accessibility tree.
- Disable all movement when `prefers-reduced-motion: reduce` is active.

## Theme And Responsive Behavior

- Use the same transparent asset in light and dark modes without recoloring it.
- Keep the decoration visible on both desktop and mobile.
- Ensure it does not overlap the author name, contact links, theme toggle, or
  page content at representative desktop and mobile viewport sizes.

## Verification

- Add a focused regression test for the decorative image markup, asset path,
  positioning classes, responsive width, and reduced-motion behavior.
- Build the Jekyll site successfully.
- Confirm the generated homepage references the production asset once.
- Inspect desktop and mobile screenshots in light and dark modes.
- Confirm no unrelated files are staged or committed.
