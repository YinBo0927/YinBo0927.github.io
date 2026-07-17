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
