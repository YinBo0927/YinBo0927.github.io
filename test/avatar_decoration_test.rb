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
