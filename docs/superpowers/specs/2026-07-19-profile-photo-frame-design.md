# Profile Photo Frame Redesign

## Goal

Replace the current elliptical profile photo treatment with a vertical rounded
rectangle that preserves more of the portrait and night skyline. The result
should feel consistent with the site's restrained card styling while keeping
the existing Yier and Bubu decoration.

## Photo Presentation

- Keep `images/photo.jpg` as the profile photo source.
- Display the photo at a 4:5 aspect ratio with `object-fit: cover`.
- Use an object position that keeps the face and upper body visible while
  retaining some of the skyline.
- Use a desktop width of 164 pixels and allow the existing 75-pixel mobile
  profile column to determine the compact width.
- Override the theme's default `border-radius: 50%` so the image uses a
  12-pixel corner radius.
- Add a one-pixel theme-aware border and a restrained shadow. The border and
  shadow must remain legible without becoming prominent in light or dark mode.

## Decoration

- Keep `images/yier_bubu_avatar.png` inside the existing avatar wrapper.
- Reposition the decoration at the lower-right edge of the new rectangular
  frame without covering the subject's face, author name, or contact links.
- Preserve the existing 450-millisecond one-shot hover animation.
- Preserve the existing reduced-motion behavior and decorative accessibility
  attributes.

## Responsive Behavior

- On desktop, render the complete 164-by-205-pixel frame within the sidebar.
- On viewports below 768 pixels, use the existing 75-pixel avatar column and a
  4:5 frame without changing the profile row's horizontal layout.
- Keep the decoration fully visible at both breakpoints.
- Do not change the profile name, social links, visitor map, theme toggle, or
  publication layout.

## Implementation Scope

- Add scoped overrides in `assets/css/custom.css`.
- Keep the existing author profile markup and both image assets unchanged.
- Extend `test/avatar_decoration_test.rb` to protect the frame aspect ratio,
  corner radius, desktop width, mobile sizing, and decoration placement.
- Do not modify theme SCSS because the custom stylesheet already owns homepage
  refinements and can safely override the inherited avatar rules.

## Verification

- Run the focused avatar decoration test.
- Run the visitor map regression test to catch sidebar regressions.
- Build the Jekyll site successfully.
- Inspect the homepage at representative desktop and mobile widths in both
  light and dark modes.
- Confirm the portrait is not elliptical, the face is framed clearly, the
  decoration is not cropped, and no profile text overlaps the images.
- Commit only the intended specification and implementation files; leave
  unrelated local files untracked.
