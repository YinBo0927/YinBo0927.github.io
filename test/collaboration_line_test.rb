require "minitest/autorun"

class CollaborationLineTest < Minitest::Test
  RESEARCH_INTERESTS = "Efficient AI, Diffusion Model, MLLM, World Model"

  def test_homepage_lists_availability_and_contact
    homepage = File.read("_pages/about.md")

    assert_equal 1, homepage.scan('class="opportunities-note"').length
    assert_includes homepage, "Fall 2027 PhD positions"
    assert_includes homepage, "industry opportunities"
    assert_includes homepage, "research collaborations"
    assert_includes homepage, 'href="mailto:yb0927@outlook.com"'
    refute_includes homepage, "Spring/Fall 2027"
  end

  def test_homepage_lists_current_research_interests
    homepage = File.read("_pages/about.md")

    assert_includes homepage, "Research Interests: <strong>#{RESEARCH_INTERESTS}</strong>."
    refute_includes homepage, "PEFT, AIGC, MLLM"
  end

  def test_homepage_lists_lv_lab_internship
    homepage = File.read("_pages/about.md")

    assert_includes homepage, "[NUS LV Lab](https://www.lv-lab.org/nus/index.html)"
    assert_includes homepage, "Prof. [Shuicheng Yan](https://yanshuicheng.info/)"
  end
end
