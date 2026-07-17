# Visitor Globe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the MapMyVisitors globe at the bottom of the homepage sidebar while preserving the supplied tracking script byte for byte.

**Architecture:** The author profile include owns the third-party script and a small wrapper that positions it in the sidebar. Existing custom CSS provides desktop sizing and hides the widget on narrow screens; a focused Ruby regression test protects the exact tracking URL and wrapper selectors.

**Tech Stack:** Jekyll, Liquid templates, CSS, Ruby Minitest

## Global Constraints

- The script must remain exactly `<script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=qf6kvMTFW8RNu_6-0h0vn-ssyA9rmp4q8SUzZruuBS4"></script>`.
- Place the globe after the sidebar social links.
- Center the globe at a 200-pixel desktop width and hide it below 768 pixels.
- Do not stage or commit the unrelated `paper_list.txt`.

---

### Task 1: Restore and Protect the Visitor Globe

**Files:**
- Create: `test/visitor_globe_test.rb`
- Modify: `_includes/author-profile.html`
- Modify: `assets/css/custom.css`

**Interfaces:**
- Consumes: Jekyll's `author-profile.html` include and MapMyVisitors' `mmvst_globe` script.
- Produces: One centered desktop visitor globe at the bottom of the sidebar, with the exact tracking identifier supplied by the site owner.

- [ ] **Step 1: Write the failing regression test**

```ruby
require "minitest/autorun"

class VisitorGlobeTest < Minitest::Test
  EXACT_SCRIPT = '<script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=qf6kvMTFW8RNu_6-0h0vn-ssyA9rmp4q8SUzZruuBS4"></script>'

  def test_profile_contains_exact_tracking_script_once
    profile = File.read("_includes/author-profile.html")

    assert_equal 1, profile.scan(EXACT_SCRIPT).length
    assert_includes profile, '<div class="visitor-map visitor-globe" aria-label="Visitor globe">'
  end

  def test_globe_layout_and_mobile_visibility_are_defined
    css = File.read("assets/css/custom.css")

    assert_includes css, ".visitor-globe"
    assert_includes css, "width: 200px !important;"
    assert_match(/@media \(max-width: 767px\).*?\.visitor-map\s*\{\s*display: none;/m, css)
  end
end
```

- [ ] **Step 2: Run the test and verify the missing widget causes failure**

Run: `ruby test/visitor_globe_test.rb`

Expected: FAIL because `_includes/author-profile.html` does not contain the exact script and `assets/css/custom.css` does not define `.visitor-globe`.

- [ ] **Step 3: Restore the sidebar script**

Add this block after `.author__urls-wrapper` in `_includes/author-profile.html`:

```html
  <div class="visitor-map visitor-globe" aria-label="Visitor globe">
    <script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=qf6kvMTFW8RNu_6-0h0vn-ssyA9rmp4q8SUzZruuBS4"></script>
  </div>
```

- [ ] **Step 4: Restore the sidebar layout styles**

Add the following desktop rules to `assets/css/custom.css`:

```css
.visitor-map{
  margin-top: 1rem;
  text-align: center;
}

.visitor-map img{
  max-width: 100%;
  border-radius: 6px;
}

.visitor-globe{
  display: flex;
  justify-content: center;
  min-height: 210px;
  overflow: visible;
}

.visitor-globe #mmvst_a,
.visitor-globe .mmvst_outer{
  display: inline-block !important;
  width: 200px !important;
  max-width: 100% !important;
  margin: 0 auto !important;
}

.visitor-globe .mmvst_inner,
.visitor-globe .mmvst_globe{
  display: block !important;
  margin: 0 auto !important;
}
```

Add this rule inside the existing `@media (max-width: 767px)` block:

```css
  .visitor-map{
    display: none;
  }
```

- [ ] **Step 5: Run the focused test and verify it passes**

Run: `ruby test/visitor_globe_test.rb`

Expected: 2 runs, 0 failures, 0 errors.

- [ ] **Step 6: Build and inspect the generated homepage**

Run:

```bash
BUNDLE_PATH="$HOME/.bundle/codex-bundles/YinBo0927.github.io" BUNDLE_FROZEN=true BUNDLE_FORCE_RUBY_PLATFORM=true bundle exec jekyll build
```

Then run:

```bash
ruby -e 'expected = %q{<script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=qf6kvMTFW8RNu_6-0h0vn-ssyA9rmp4q8SUzZruuBS4"></script>}; html = File.read("_site/index.html"); abort "exact script count: #{html.scan(expected).length}" unless html.scan(expected).length == 1'
```

Expected: Jekyll exits successfully and the generated-script check exits with status 0.

- [ ] **Step 7: Commit and push only the visitor-globe work**

```bash
git add docs/superpowers/plans/2026-07-17-visitor-globe.md test/visitor_globe_test.rb _includes/author-profile.html assets/css/custom.css
git diff --cached --check
git commit -m "Restore visitor globe tracking"
git push origin main
```

Expected: the commit and push succeed, and `paper_list.txt` remains untracked.
