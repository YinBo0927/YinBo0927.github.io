require "minitest/autorun"

class CollaborationLineTest < Minitest::Test
  MESSAGE = "I am currently seeking Spring/Fall 2027 PhD opportunities and am always open to research collaborations. Please feel free to contact me!"
  RESEARCH_INTERESTS = "Efficient AI, Diffusion Model, MLLM, World Model"

  def test_homepage_uses_one_standalone_collaboration_line
    homepage = File.read("_pages/about.md")

    assert_equal 1, homepage.scan(MESSAGE).length
    assert_includes homepage, %(<p class="collaboration-line">#{MESSAGE}</p>)
    refute_includes homepage, "If you are interested in collaborating on related topics"
    refute_includes homepage, 'class="notice-line"'
  end

  def test_collaboration_line_is_plain_red_emphasis
    css = File.read("assets/css/custom.css")
    light_rule = css[/p\.collaboration-line\{(?<body>.*?)\}/m, :body]
    dark_rule = css[/html\[data-theme="dark"\] p\.collaboration-line\{(?<body>.*?)\}/m, :body]

    refute_nil light_rule
    assert_includes light_rule, "color: #d00000;"
    assert_includes light_rule, "font-size: 1.08em;"
    assert_includes light_rule, "font-weight: 700;"
    refute_match(/\b(?:background|border|padding)\s*:/, light_rule)

    refute_nil dark_rule
    assert_includes dark_rule, "color: #ff6b6b;"
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
