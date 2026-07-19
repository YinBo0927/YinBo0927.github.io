# Yier And Bubu Avatar Decoration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied Yier and Bubu artwork as a transparent, lightly animated decoration at the lower-right edge of the homepage profile avatar.

**Architecture:** A processed transparent PNG lives with the site's existing image assets. The author profile include renders one decorative image inside the existing avatar wrapper, while scoped custom CSS controls absolute positioning, responsive sizing, one-shot hover animation, and reduced-motion behavior.

**Tech Stack:** Jekyll, Liquid templates, CSS, Ruby Minitest, ImageGen, Playwright

## Global Constraints

- Use only the supplied 450-by-444 PNG as the visual source.
- Preserve both characters, the hearts, the blue mat, original colors, outlines, and proportions.
- Save the transparent production asset as `images/yier_bubu_avatar.png`.
- Use a 74-pixel width on desktop and a 56-pixel width on mobile.
- Move the decoration upward by 3 pixels with one side-to-side rotation over 450 milliseconds on avatar hover.
- Do not loop the animation, recolor the artwork, make it clickable, or add a keyboard focus stop.
- Disable movement when `prefers-reduced-motion: reduce` is active.
- Do not stage `.superpowers/` or the unrelated `paper_list.txt`.

---

### Task 1: Add The Failing Decoration Regression Test

**Files:**
- Create: `test/avatar_decoration_test.rb`

**Interfaces:**
- Consumes: `_includes/author-profile.html`, `assets/css/custom.css`, and `images/yier_bubu_avatar.png`.
- Produces: regression coverage for the exact decorative markup, asset, responsive dimensions, hover animation, and reduced-motion override.

- [ ] **Step 1: Create the focused test**

```ruby
require "minitest/autorun"

class AvatarDecorationTest < Minitest::Test
  MARKUP = '<img src="/images/yier_bubu_avatar.png" class="author__avatar-decoration" alt="" aria-hidden="true">'

  def test_profile_renders_one_decorative_image
    profile = File.read("_includes/author-profile.html")

    assert_equal 1, profile.scan(MARKUP).length
    assert File.exist?("images/yier_bubu_avatar.png")
  end

  def test_decoration_has_scoped_layout_and_motion
    css = File.read("assets/css/custom.css")

    assert_includes css, ".profile_box > .author__avatar"
    assert_includes css, ".author__avatar-decoration"
    assert_includes css, "width: 74px;"
    assert_includes css, "@keyframes yier-bubu-peek"
    assert_includes css, "animation: yier-bubu-peek 450ms ease-out;"
    assert_match(/@media \(max-width: 767px\).*?\.author__avatar-decoration\s*\{.*?width: 56px;/m, css)
    assert_match(/@media \(prefers-reduced-motion: reduce\).*?\.author__avatar-decoration\s*\{.*?animation: none !important;/m, css)
  end
end
```

- [ ] **Step 2: Run the test and verify it fails for the missing feature**

Run: `ruby test/avatar_decoration_test.rb`

Expected: FAIL because the profile markup, production asset, and decoration styles do not exist.

---

### Task 2: Process The Artwork And Implement The Decoration

**Files:**
- Create: `images/yier_bubu_avatar.png`
- Modify: `_includes/author-profile.html`
- Modify: `assets/css/custom.css`

**Interfaces:**
- Consumes: `/var/folders/_q/6s18x90j2zl3yyy9yb62mp8h0000gn/T/codex-clipboard-7997c51f-9ef8-476e-a809-83c9833baafb.png`.
- Produces: a transparent decorative PNG and stable avatar-edge presentation on desktop and mobile.

- [ ] **Step 1: Remove the white background with ImageGen**

Edit the supplied image with this instruction:

```text
Preserve the supplied Yier and Bubu illustration exactly. Remove only the
solid white background and make it fully transparent. Keep both characters,
all three hearts, the blue mat, every outline, the original colors, and the
original proportions unchanged. Crop only excess transparent outer padding.
Do not redraw, restyle, smooth, add, remove, or reposition any part of the
illustration. Output a PNG with a transparent alpha channel.
```

Save the generated result to `images/yier_bubu_avatar.png`.

If the built-in edit redraws or restyles the illustration, reject that output.
Preserve the original pixels by using FFmpeg's `floodfill` filter to make only
the solid white region connected to the outer canvas transparent, then crop
the remaining transparent padding. This deterministic fallback must not apply
a global white color key because the panda contains required opaque white
regions.

- [ ] **Step 2: Add the exact decorative markup**

Inside the existing `.author__avatar` wrapper, immediately after the profile
photo, add:

```html
    <img src="/images/yier_bubu_avatar.png" class="author__avatar-decoration" alt="" aria-hidden="true">
```

- [ ] **Step 3: Add scoped desktop layout and one-shot hover motion**

Add the following rules to `assets/css/custom.css`:

```css
.profile_box > .author__avatar{
  position: relative;
  overflow: visible;
}

.profile_box > .author__avatar > .author__avatar-decoration{
  position: absolute;
  z-index: 2;
  right: -10px;
  bottom: -8px;
  width: 74px;
  min-width: 0;
  max-width: none;
  padding: 0;
  border: 0;
  border-radius: 0;
  pointer-events: none;
  transform-origin: 50% 90%;
}

.profile_box > .author__avatar:hover > .author__avatar-decoration{
  animation: yier-bubu-peek 450ms ease-out;
}

@keyframes yier-bubu-peek{
  0%,
  100%{
    transform: translateY(0) rotate(0);
  }

  40%{
    transform: translateY(-3px) rotate(-2deg);
  }

  70%{
    transform: translateY(-2px) rotate(2deg);
  }
}
```

- [ ] **Step 4: Add mobile sizing and reduced-motion behavior**

Inside the existing `@media (max-width: 767px)` block, add:

```css
  .profile_box > .author__avatar > .author__avatar-decoration{
    right: -8px;
    bottom: -6px;
    width: 56px;
  }
```

Inside the existing `@media (prefers-reduced-motion: reduce)` block, add:

```css
  .author__avatar-decoration{
    animation: none !important;
    transform: none !important;
  }
```

- [ ] **Step 5: Verify the PNG and run all focused tests**

Run:

```bash
sips -g pixelWidth -g pixelHeight -g hasAlpha images/yier_bubu_avatar.png
ruby test/avatar_decoration_test.rb
ruby test/visitor_globe_test.rb
```

Expected: `hasAlpha: yes`; both test files report 0 failures and 0 errors.

---

### Task 3: Build And Visually Verify The Homepage

**Files:**
- Verify: `_site/index.html`
- Verify: desktop and mobile screenshots in a temporary QA directory

**Interfaces:**
- Consumes: the completed Jekyll template, styles, and transparent asset.
- Produces: evidence that the decoration renders without overlap in light and dark themes.

- [ ] **Step 1: Build the site**

Run:

```bash
BUNDLE_PATH="$HOME/.bundle/codex-bundles/YinBo0927.github.io" BUNDLE_FROZEN=true BUNDLE_FORCE_RUBY_PLATFORM=true bundle exec jekyll build
```

Expected: Jekyll exits with status 0.

- [ ] **Step 2: Verify generated markup**

Run a source check confirming `_site/index.html` contains exactly one
`/images/yier_bubu_avatar.png` reference.

- [ ] **Step 3: Inspect four representative screenshots**

Serve `_site`, then use Playwright to capture and inspect:

- Desktop light mode at 1440 by 1000.
- Desktop dark mode at 1440 by 1000.
- Mobile light mode at 390 by 844.
- Mobile dark mode at 390 by 844.

Confirm the decoration is visible, uncropped, does not cover the avatar face or
author name, does not overlap contact links or the visitor map, and does not
change layout dimensions. If placement fails, adjust only `right` and `bottom`
while preserving the approved responsive widths, then repeat the focused tests
and visual inspection.

- [ ] **Step 4: Commit only the approved implementation**

```bash
git add docs/superpowers/specs/2026-07-19-yier-bubu-avatar-design.md docs/superpowers/plans/2026-07-19-yier-bubu-avatar.md test/avatar_decoration_test.rb images/yier_bubu_avatar.png _includes/author-profile.html assets/css/custom.css
git diff --cached --check
git commit -m "Add animated avatar decoration"
```

Expected: the commit succeeds while `.superpowers/` and `paper_list.txt` remain untracked.
