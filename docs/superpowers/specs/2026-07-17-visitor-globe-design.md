# Visitor Map Design

## Goal

Show the MapMyVisitors map at the bottom of the homepage sidebar using the
tracking script supplied by the site owner.

## Implementation

- Keep the visitor map after the sidebar social links in
  `_includes/author-profile.html`.
- Preserve this script exactly:

  ```html
  <script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=080808&amp;w=a&amp;t=tt&amp;d=M01uwhY-dXdWK9hCoU4QUc9PMERHOsej8TDziOxqKDo&amp;co=ffffff&amp;ct=808080&amp;cmo=3acc3a&amp;cmn=ff5353'></script>
  ```

- Remove the previous `globe.js` script completely.
- Keep the existing `.visitor-map` and `.visitor-globe` wrapper styles so the
  widget remains centered in the sidebar.
- Keep the responsive behavior: show the map on desktop and hide it
  below 768 pixels.

## Verification

- Confirm the source template contains the new exact script once and contains
  no `globe.js` reference.
- Build the Jekyll site successfully.
- Confirm the generated homepage contains the new exact script once, preserves
  each `&amp;` parameter separator, and contains no `globe.js` reference.
- Confirm no unrelated files are included in the change.
