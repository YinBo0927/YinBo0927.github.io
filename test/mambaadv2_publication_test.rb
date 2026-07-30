require "minitest/autorun"

class MambaADv2PublicationTest < Minitest::Test
  TITLE = "MambaADv2: Evolving Duality-enhanced State Space Model for Unsupervised Anomaly Detection"
  AUTHORS = "Xiaobin Hu, Haoyang He, **Bo Yin**, Yu He, Lei Xie, Jiangning Zhang, Yu-Gang Jiang, Shuicheng Yan"

  def test_homepage_contains_under_review_publication
    homepage = File.read("_pages/about.md")

    assert_equal 1, homepage.scan(TITLE).length
    assert_includes homepage, AUTHORS
    assert_match(
      /badge badge-under-review.*?images\/mambaadv2_framework\.png.*?#{Regexp.escape(TITLE)}/m,
      homepage
    )
    assert_includes homepage, "https://arxiv.org/abs/2606.23126"
  end

  def test_publication_uses_framework_figure
    assert File.exist?("images/mambaadv2_framework.png")
  end

  def test_under_review_card_follows_preprint_publications
    homepage = File.read("_pages/about.md")
    vla_position = homepage.index("Vision-Language-Action Safety: Threats, Challenges, Evaluations, and Mechanisms")
    mamba_position = homepage.index(TITLE)
    fate_position = homepage.index("On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment")

    assert_operator mamba_position, :>, vla_position
    assert_operator mamba_position, :<, fate_position
  end
end
