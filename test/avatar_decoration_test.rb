require "minitest/autorun"

class AvatarDecorationTest < Minitest::Test
  MARKUP = '<image href="/images/yier_bubu_avatar.png"'

  def test_pet_keeps_original_art_and_accessible_controls
    profile = File.read("_includes/author-profile.html")

    assert_equal 1, profile.scan(MARKUP).length
    assert File.exist?("images/yier_bubu_avatar.png")
    assert_equal 4, profile.scan('class="avatar-pet-eye"').length
    refute_includes profile, 'avatar-pet-sprite'
    assert_includes profile, 'mask="url(#avatar-pet-eye-mask)"'
    assert_includes profile, 'aria-label="Play with Yier and Bubu"'
    assert_includes profile, 'aria-describedby="avatar-pet-help"'
    assert_includes profile, 'aria-label="Feed a little paper to Yier and Bubu"'
  end

  def test_decoration_has_scoped_layout_and_motion
    css = File.read("assets/css/custom.css")

    assert_includes css, ".profile_box > .author__avatar"
    assert_includes css, ".avatar-pet"
    assert_includes css, "width: 74px;"
    assert_includes css, "right: -14px;"
    assert_includes css, "bottom: -10px;"
    assert_includes css, "touch-action: none;"
    assert_match(/@media \(max-width: 767px\).*?\.avatar-pet\s*\{.*?width: 56px;/m, css)
    assert_match(/@media \(prefers-reduced-motion: reduce\).*?\.avatar-pet-art\s*\{.*?animation: none !important;/m, css)
  end

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
end
