# Visitor Globe Design

## Goal

Restore the MapMyVisitors globe to the bottom of the homepage sidebar without
changing the tracking script supplied by the site owner.

## Implementation

- Add the globe after the sidebar social links in
  `_includes/author-profile.html`.
- Preserve this script exactly:

  ```html
  <script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=qf6kvMTFW8RNu_6-0h0vn-ssyA9rmp4q8SUzZruuBS4"></script>
  ```

- Restore the existing `.visitor-map` and `.visitor-globe` styles so the globe
  is centered and constrained to the sidebar width.
- Keep the previous responsive behavior: show the globe on desktop and hide it
  below 768 pixels.

## Verification

- Confirm the source template contains the exact script once.
- Build the Jekyll site successfully.
- Confirm the generated homepage contains the exact script once and does not
  rewrite its `src` value.
- Confirm no unrelated files are included in the change.
