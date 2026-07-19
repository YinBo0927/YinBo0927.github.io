# Visitor Map Script Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the sidebar MapMyVisitors globe script with the exact map script supplied by the site owner and push the verified result to `main`.

**Architecture:** Keep the existing sidebar wrapper and responsive CSS unchanged. Update the focused Ruby regression test first, then replace only the script element in the author profile include and verify both source and generated HTML.

**Tech Stack:** Jekyll, Liquid templates, Ruby Minitest

## Global Constraints

- The new script must remain exactly `<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=080808&amp;w=a&amp;t=tt&amp;d=M01uwhY-dXdWK9hCoU4QUc9PMERHOsej8TDziOxqKDo&amp;co=ffffff&amp;ct=808080&amp;cmo=3acc3a&amp;cmn=ff5353'></script>`.
- The previous `globe.js` script must be absent from the source and generated homepage.
- Keep the visitor widget at the bottom of the sidebar with the current responsive behavior.
- Do not stage or commit the unrelated `paper_list.txt`.

---

### Task 1: Replace and Verify the Visitor Script

**Files:**
- Modify: `test/visitor_globe_test.rb`
- Modify: `_includes/author-profile.html`

**Interfaces:**
- Consumes: the existing visitor widget wrapper in `_includes/author-profile.html`.
- Produces: one exact MapMyVisitors `map.js` script and no legacy `globe.js` script.

- [ ] **Step 1: Update the regression test before production code**

Replace the exact-script constant and add a legacy-script assertion:

```ruby
EXACT_SCRIPT = %q{<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=080808&amp;w=a&amp;t=tt&amp;d=M01uwhY-dXdWK9hCoU4QUc9PMERHOsej8TDziOxqKDo&amp;co=ffffff&amp;ct=808080&amp;cmo=3acc3a&amp;cmn=ff5353'></script>}

def test_profile_contains_exact_tracking_script_once
  profile = File.read("_includes/author-profile.html")

  assert_equal 1, profile.scan(EXACT_SCRIPT).length
  refute_includes profile, "globe.js"
  assert_includes profile, '<div class="visitor-map visitor-globe" aria-label="Visitor globe">'
end
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `ruby test/visitor_globe_test.rb`

Expected: FAIL because the source still contains `globe.js` and does not contain the new exact `map.js` script.

- [ ] **Step 3: Replace only the script element**

Keep the wrapper unchanged and use this exact HTML:

```html
  <div class="visitor-map visitor-globe" aria-label="Visitor globe">
    <script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=080808&amp;w=a&amp;t=tt&amp;d=M01uwhY-dXdWK9hCoU4QUc9PMERHOsej8TDziOxqKDo&amp;co=ffffff&amp;ct=808080&amp;cmo=3acc3a&amp;cmn=ff5353'></script>
  </div>
```

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `ruby test/visitor_globe_test.rb`

Expected: 2 runs, 0 failures, 0 errors.

- [ ] **Step 5: Build and inspect the generated homepage**

Run:

```bash
BUNDLE_PATH="$HOME/.bundle/codex-bundles/YinBo0927.github.io" BUNDLE_FROZEN=true BUNDLE_FORCE_RUBY_PLATFORM=true bundle exec jekyll build
```

Then verify `_includes/author-profile.html` and `_site/index.html` each contain the exact new script once and no `globe.js` reference.

- [ ] **Step 6: Commit and push the exact change**

```bash
git add docs/superpowers/plans/2026-07-19-visitor-map-script.md test/visitor_globe_test.rb _includes/author-profile.html
git diff --cached --check
git commit -m "Replace visitor globe with map"
git push origin main
```

Expected: the push succeeds and `paper_list.txt` remains untracked.
