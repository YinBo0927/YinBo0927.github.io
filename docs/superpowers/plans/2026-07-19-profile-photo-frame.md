# Profile Photo Frame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the elliptical author photo with a responsive 4:5 rounded portrait frame while preserving the existing Yier and Bubu decoration.

**Architecture:** Keep the current author profile markup and image assets unchanged. Extend the focused Ruby regression test first, then add scoped rules to the existing custom stylesheet so they override the theme's circular avatar styling without changing shared theme SCSS.

**Tech Stack:** Jekyll, Liquid, CSS, Ruby Minitest, Playwright CLI

## Global Constraints

- Keep `images/photo.jpg` and `images/yier_bubu_avatar.png` unchanged.
- Use a 4:5 photo frame, a desktop width of 164 pixels, and a 12-pixel corner radius.
- Use the existing 75-pixel avatar column below 768 pixels.
- Keep the existing 450-millisecond one-shot decoration animation and reduced-motion behavior.
- Do not change profile text, links, visitor map, theme toggle, or publications.

---

### Task 1: Add The Responsive Portrait Frame

**Files:**
- Modify: `test/avatar_decoration_test.rb`
- Modify: `assets/css/custom.css`

**Interfaces:**
- Consumes: the existing `.profile_box > .author__avatar` wrapper, the child `img.author__avatar`, and `.author__avatar-decoration`.
- Produces: scoped CSS that renders the profile photo as a 164-by-205-pixel desktop frame and a 75-by-93.75-pixel mobile frame.

- [ ] **Step 1: Write the failing frame test**

Add a focused test to `test/avatar_decoration_test.rb`:

```ruby
def test_profile_photo_uses_vertical_rounded_frame
  css = File.read("assets/css/custom.css")

  assert_includes css, ".profile_box > .author__avatar > img.author__avatar:not(.author__avatar-decoration)"
  assert_includes css, "width: 164px;"
  assert_includes css, "aspect-ratio: 4 / 5;"
  assert_includes css, "border-radius: 12px;"
  assert_includes css, "object-fit: cover;"
  assert_includes css, "object-position: 50% 58%;"
  assert_match(/@media \(max-width: 767px\).*?img\.author__avatar:not\(\.author__avatar-decoration\)\s*\{.*?width: 75px;/m, css)
end
```

Extend the decoration layout test with:

```ruby
assert_includes css, "right: -14px;"
assert_includes css, "bottom: -10px;"
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```bash
ruby test/avatar_decoration_test.rb
```

Expected: FAIL because the custom stylesheet does not yet contain the 4:5
profile frame selector, dimensions, corner radius, or revised decoration
position.

- [ ] **Step 3: Add the minimal frame styles**

Extend the existing avatar block in `assets/css/custom.css`:

```css
.profile_box > .author__avatar > img.author__avatar:not(.author__avatar-decoration){
  display: block;
  box-sizing: border-box;
  width: 164px;
  max-width: 164px;
  min-width: 164px;
  aspect-ratio: 4 / 5;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  object-fit: cover;
  object-position: 50% 58%;
  box-shadow: var(--card-shadow);
  transition: border-color var(--transition), box-shadow var(--transition);
}
```

Update the desktop decoration offsets:

```css
right: -14px;
bottom: -10px;
```

Add this rule inside the existing `@media (max-width: 767px)` block:

```css
.profile_box > .author__avatar > img.author__avatar:not(.author__avatar-decoration){
  width: 75px;
  max-width: 75px;
  min-width: 75px;
}
```

- [ ] **Step 4: Run focused sidebar tests and verify GREEN**

Run:

```bash
ruby test/avatar_decoration_test.rb
ruby test/visitor_globe_test.rb
```

Expected: both test files pass with zero failures and zero errors.

- [ ] **Step 5: Build the site**

Run:

```bash
BUNDLE_PATH="$HOME/.bundle/codex-bundles/YinBo0927.github.io" \
BUNDLE_FROZEN=true \
BUNDLE_FORCE_RUBY_PLATFORM=true \
bundle exec jekyll build
```

Expected: Jekyll exits with status 0 and generates `_site/index.html`.

- [ ] **Step 6: Inspect the generated stylesheet contract**

Run:

```bash
rg -n "aspect-ratio: 4 / 5|border-radius: 12px|object-position: 50% 58%" _site/assets/css/custom.css
```

Expected: the generated custom stylesheet contains all three profile frame
rules.

- [ ] **Step 7: Perform responsive visual QA**

Start the generated site locally and use Playwright CLI to inspect:

- Desktop light mode at 1440 by 1000.
- Desktop dark mode at 1440 by 1000.
- Mobile light mode at 390 by 844.
- Mobile dark mode at 390 by 844.

For every viewport, confirm:

- The photo is a 4:5 rounded rectangle rather than an ellipse.
- The face and upper body remain clearly framed.
- The decoration is fully visible and does not overlap profile text.
- The visitor map, theme toggle, and publication content remain in place.
- The browser console has no errors.

- [ ] **Step 8: Review and commit the implementation**

Run:

```bash
git diff --check
git diff -- test/avatar_decoration_test.rb assets/css/custom.css
git status --short
```

Expected: only the plan, test, and stylesheet are intended changes; the
temporary visual companion directory and `paper_list.txt` remain untracked and
unstaged.

Commit:

```bash
git add docs/superpowers/plans/2026-07-19-profile-photo-frame.md \
  test/avatar_decoration_test.rb \
  assets/css/custom.css
git commit -m "Redesign profile photo frame"
```

- [ ] **Step 9: Push and verify the remote branch**

Run:

```bash
git push origin main
git status --short --branch
git log -3 --oneline --decorate
```

Expected: `main` and `origin/main` point to the implementation commit, while
`.superpowers/` and `paper_list.txt` remain untracked.
