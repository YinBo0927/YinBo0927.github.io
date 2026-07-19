require "minitest/autorun"

class VisitorGlobeTest < Minitest::Test
  EXACT_SCRIPT = %q{<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=080808&amp;w=a&amp;t=tt&amp;d=M01uwhY-dXdWK9hCoU4QUc9PMERHOsej8TDziOxqKDo&amp;co=ffffff&amp;ct=808080&amp;cmo=3acc3a&amp;cmn=ff5353'></script>}

  def test_profile_contains_exact_tracking_script_once
    profile = File.read("_includes/author-profile.html")

    assert_equal 1, profile.scan(EXACT_SCRIPT).length
    refute_includes profile, "globe.js"
    assert_includes profile, '<div class="visitor-map visitor-globe" aria-label="Visitor globe">'
  end

  def test_globe_layout_and_mobile_visibility_are_defined
    css = File.read("assets/css/custom.css")

    assert_includes css, ".visitor-globe"
    assert_includes css, "width: 200px !important;"
    assert_match(/@media \(max-width: 767px\).*?\.visitor-map\s*\{\s*display: none;/m, css)
  end
end
