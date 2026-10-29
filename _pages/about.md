---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="/assets/css/news-carousel.css">

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently pursuing a Master of Science in Computer Engineering at the National University of Singapore (NUS). I obtained my undergraduate degree in Artificial Intelligence from the South China University of Technology (SCUT). I am also a research intern at the [NUS LV Lab](https://www.lv-lab.org/nus/index.html), supervised by Prof. [Shuicheng Yan](https://yanshuicheng.info/), and work closely with Dr. [Xiaobin Hu](https://huuxiaobin.github.io/).

Research Interests: <strong>Efficient AI, Diffusion Model, MLLM, World Model</strong>.

<p class="collaboration-line">I am currently seeking Spring/Fall 2027 PhD opportunities and am always open to research collaborations. Please feel free to contact me!</p>

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News

<section class="news-panel" aria-label="News">
  <ol class="news-list">
    <li class="news-item"><time class="news-date" datetime="2026-08">2026.08</time><span class="news-copy"><strong>RePro</strong> was accepted by <strong>EMNLP 2026 Findings</strong>.</span></li>
    <li class="news-item"><time class="news-date" datetime="2026-06">2026.06</time><span class="news-copy"><strong>SPOT-E</strong> was accepted by <strong>ECCV 2026</strong>.</span></li>
    <li class="news-item"><time class="news-date" datetime="2026-05">2026.05</time><span class="news-copy">Three papers, <strong>FeRA</strong>, <strong>L2-VMAS</strong>, and <strong>VPD-100K</strong>, were accepted by <strong>ICML 2026</strong>.</span></li>
  </ol>
  <div class="news-archive" id="earlier-news">
    <div class="news-archive-inner">
      <ol class="news-list">
        <li class="news-item"><time class="news-date" datetime="2025-11">2025.11</time><span class="news-copy">I submitted 1 paper to CVPR 2026.</span></li>
        <li class="news-item"><time class="news-date" datetime="2025-09">2025.09</time><span class="news-copy">I submitted 2 papers to ICLR 2026.</span></li>
        <li class="news-item"><time class="news-date" datetime="2025-08">2025.08</time><span class="news-copy">I join the LV Lab as a research intern, supervised by Prof. <a href="https://yanshuicheng.info/">Shuicheng Yan</a>.</span></li>
        <li class="news-item"><time class="news-date" datetime="2024-10">2024.10</time><span class="news-copy">I got the No.1 in the Happy Frisbee activity in NUSRI-CQ!</span></li>
        <li class="news-item"><time class="news-date" datetime="2024-09">2024.09</time><span class="news-copy">I was selected for my favorite FYP project--<em>Learnable Activation Networks for Vision</em>.</span></li>
        <li class="news-item"><time class="news-date" datetime="2024-07">2024.07</time><span class="news-copy">I get the 3+1+1 programme offer from the NUSRI-CQ.</span></li>
        <li class="news-item"><time class="news-date" datetime="2024-03">2024.03</time><span class="news-copy">I get the trainee offer from the HSBC Technology China.</span></li>
        <li class="news-item"><time class="news-date" datetime="2024-01">2024.01</time><span class="news-copy">I get the excellent group as leader in the winter exchange program in National University of Singapore.</span></li>
        <li class="news-item"><time class="news-date" datetime="2023-12">2023.12</time><span class="news-copy">I get the intern offer from the TGAILab, supervised by Prof. <a href="https://www.westlake.edu.cn/faculty/yaochu-jin.html">Yaochu Jin</a>.</span></li>
      </ol>
    </div>
  </div>
  <button class="news-toggle" type="button" aria-expanded="false" aria-controls="earlier-news" hidden><span>Earlier updates</span><i class="fas fa-chevron-down" aria-hidden="true"></i></button>
</section>


# 📝 Publications 

<div class="publication-filters" role="group" aria-label="Filter publications">
  <button type="button" class="publication-filter" data-filter="selected" aria-pressed="true">Selected Publications</button>
  <button type="button" class="publication-filter" data-filter="all" aria-pressed="false">All</button>
</div>
<span class="publication-status" role="status" aria-live="polite"></span>
<noscript><style>.publication-filters{display:none}.paper-box[hidden]{display:grid}</style></noscript>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-accepted">ECCV 2026</div>

**SPOT-E: Test-Time Entropy Shaping with Visual Spotlights for Frozen VLMs**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/spote_framework.png' alt="SPOT-E test-time visual spotlight framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Xiaobin Hu, Chengming Xu, Ruolin Shen, Mo Yang, Jiangning Zhang, Peng-Tao Jiang, Cheng Tan, Shuicheng Yan
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2606.20244"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YinBo0927/SPOT-E"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We introduce SPOT-E, a plug-and-play test-time visual adaptation framework that keeps the VLM frozen while optimizing question-conditioned visual spotlights through entropy shaping, improving evidence utilization without model retraining.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-accepted">ICML 2026</div>

**FeRA: Frequency-Energy Constrained Routing for Effective Diffusion Adaptation Fine-Tuning**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/fera.svg' alt="FeRA: Frequency-Energy Constrained Routing for Effective Diffusion Adaptation Fine-Tuning" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Xiaobin Hu, Xingyu Zhou, Peng-Tao Jiang, Yue Liao, Junwei Zhu, Jiangning Zhang, Ying Tai, Chengjie Wang, Shuicheng Yan
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2511.17979"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YinBo0927/FeRA"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We present a novel fine-tuning approach for diffusion models, termed Frequency-Energy constrained Routing Adaptation (FeRA), which uses frequency-domain analysis to guide the fine-tuning process, enhancing both efficiency and effectiveness.

  </div>
</div>

<div class='paper-box' data-selected='false' hidden>
  <div class='paper-heading' markdown="1">

<div class="badge badge-accepted">ICML 2026</div>

**VPD-100K: Towards Generalizable and Fine-grained Visual Privacy Protection**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/vpd_100k_framework.png' alt="VPD-100K frequency-enhanced detection framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

Xiaobin Hu, Enpu Zuo, Lanping Hu, Kaiwen Yang, Dianshu Liao, Tianyi Zhang, **Bo Yin**, Yinsi Zhou, Shidong Pan, Xiaoyu Sun
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2605.10229"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://vpd-100k.github.io/"><i class="fas fa-globe" aria-hidden="true"></i> Project</a>
{: .paper-links}

We present VPD-100K, a large-scale fine-grained visual privacy dataset with 100,000 images, 33 classes, and over 190,000 object instances, together with a frequency-enhanced lightweight mechanism for robust privacy detection.

  </div>
</div>

<div class='paper-box' data-selected='false' hidden>
  <div class='paper-heading' markdown="1">

<div class="badge badge-accepted">ICML 2026</div>

**Dual Latent Memory for Visual Multi-agent System**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/l2_vmas_framework.png' alt="Dual Latent Memory for Visual Multi-agent System framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

Xinlei Yu, Chengming Xu, Zhangquan Chen, **Bo Yin**, Cheng Yang, Yongbo He, Yihao Hu, Jiangning Zhang, Cheng Tan, Xiaobin Hu, Shuicheng Yan
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2602.00471"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YU-deep/L2-VMAS"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We introduce L<sup>2</sup>-VMAS, a model-agnostic framework that enables visual multi-agent collaboration through dual latent memories, improving scalability while reducing token-heavy text communication.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-accepted">EMNLP 2026 Findings</div>

**Refinement Provenance Inference: Detecting LLM-Refined Training Prompts from Model Behavior**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/repro.png' alt="repro" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Qi Li, Runpeng Yu, Xinchao Wang
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2601.01966"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YinBo0927/RePro"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We propose an instance-level auditing method that infers, from a model's behavior, whether it was trained on an original prompt or an LLM-refined version of that prompt within a mixed training corpus.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-under-review">Under Review</div>

**FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/framemorrow_overview.png' alt="FrameMorrow prospective frame selection and training overview" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Xiaobin Hu, Jiaqi Zhao, Shuicheng Yan
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2609.38839"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a>
{: .paper-links}

FrameMorrow predicts compact prospective tokens to select historical frames according to future information needs, improving long-horizon video generation across diverse models.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-preprint">arXiv 2026</div>

**Vision-Language-Action Safety: Threats, Challenges, Evaluations, and Mechanisms**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/vla_safety_framework.png' alt="Vision-Language-Action Safety landscape framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

Qi Li<sup>*</sup>, **Bo Yin**<sup>*</sup>, Weiqi Huang<sup>*</sup>, Ruhao Liu<sup>*</sup>, Bojun Zou, Runpeng Yu, Jingwen Ye, Weihao Yu, Xinchao Wang
{: .paper-authors}

<span class="contribution-note"><sup>*</sup> Equal contribution.</span>

<a class="paper-link" href="https://arxiv.org/abs/2604.23775"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/LiQiiiii/Awesome-VLA-Safety"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We survey VLA safety across threats, defenses, evaluation, and deployment, highlighting the unique risks introduced by embodied vision-language-action systems.

  </div>
</div>

<div class='paper-box' data-selected='false' hidden>
  <div class='paper-heading' markdown="1">

<div class="badge badge-under-review">Under Review</div>

**MambaADv2: Evolving Duality-enhanced State Space Model for Unsupervised Anomaly Detection**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/mambaadv2_framework.png' alt="MambaADv2 architecture framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

Xiaobin Hu, Haoyang He, **Bo Yin**, Yu He, Lei Xie, Jiangning Zhang, Yu-Gang Jiang, Shuicheng Yan
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2606.23126"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a>
{: .paper-links}

We introduce MambaADv2, a multi-class unsupervised anomaly detection framework that combines a frozen encoder with a Mamba-inspired decoder using Duality-enhanced State Space modules to jointly model global, local, and frequency information with linear complexity.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-under-review">Under Review</div>

**On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/fate_framework.png' alt="FATE on-policy self-evolution framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Qi Li, Xinchao Wang
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2605.11882"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YinBo0927/FATE"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We introduce FATE, an on-policy self-evolving framework that converts verifier-scored failure trajectories into repair supervision and uses Pareto-Front Policy Optimization to improve trajectory-level safety while preserving utility.

  </div>
</div>

<div class='paper-box' data-selected='true'>
  <div class='paper-heading' markdown="1">

<div class="badge badge-under-review">Under Review</div>

**Don't Forget the Nonlinearity: Unlocking Activation Functions in Efficient Fine-Tuning**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/nora.svg' alt="Don't Forget the Nonlinearity" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Bo Yin**, Xingyi Yang, Xinchao Wang
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2509.13240"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a> <a class="paper-link" href="https://github.com/YinBo0927/NoRA"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
{: .paper-links}

We propose a novel and effective fine-tuning paradigm that introduces learnable activation functions to adapt large pre-trained models to downstream tasks while preserving their computational efficiency.

  </div>
</div>

<div class='paper-box' data-selected='false' hidden>
  <div class='paper-heading' markdown="1">

<div class="badge badge-under-review">Under Review</div>

**LacaDM: A Latent Causal Diffusion Model for Multiobjective Reinforcement Learning**
{: .paper-title}

  </div>
  <div class='paper-box-image'>
    <div>
      <img src='images/lacadm.png' alt="lacadm" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

Xueming Yan, **Bo Yin**, Yaochu Jin
{: .paper-authors}

<a class="paper-link" href="https://arxiv.org/abs/2512.19516"><i class="fas fa-file-alt" aria-hidden="true"></i> arXiv</a>
{: .paper-links}

We propose a novel multi-objective reinforcement learning framework that leverages latent temporal causal structures to enhance generalization and significantly outperform state-of-the-art baselines in complex dynamic environments.

  </div>
</div>

<!-- - [SAM-MSF^2: SAM finetune-based Multi-Scale Feature Fusion for Retinal Vessel Segmentation](../bibm.pdf), Yuancong Liang, Huihui Fang, **Bo Yin**, Lingyue Xie, Enqi Ouyang, Kaiyan Chen, Ying Chen, Shiqi Zhou, Hanyi Yu, Yanwu Xu, *Submitted* in <span style="color: red;">**BIBM 2024**</span> -->
<!-- - [EmoDM: A Diffusion Model for Evolutionary Multi-objective Optimization](https://arxiv.org/abs/2401.15931), Yan Xueming, Jin Yaochu, *Contributer*: **Yin Bo**, *Submitted* in <span style="color: red;">**IEEE**</span> -->

<!-- # 📚 Research Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/ai_interior.png' alt="sym" width="500" height="300"></div></div>
<div class='paper-box-text' markdown="1">

[AI Interior Decoration Design](../AI_designt.pptx)

**Yin Bo**, Cai Zihao, Xia Jianan, Chen Qiyue, He Yu

[**Project**](https://github.com/YinBo0927/AI_interior_decoration_design_assistant) 
- The course project from the ai system design and got 95 points.
- This project based on fine-tuning the qiwen model and stable diffusion model to generate the interior design according to the user's requirements.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/navagation_car.png' alt="sym" width="500" height="300"></div></div>
<div class='paper-box-text' markdown="1">

[Mobile Robot Autonomous Navigation System Based on Deep Learning](../car.docx)

Han Yuxiang, Zhang XiaoXun, Hu Yufan, **Yin Bo**

<!-- [**Project**]() -->

<!-- - This is the Student Reasearch Project(SRP) from the South China University of Technology.
- I got 4 innovation points in this project which satisfied the requirements of the SRP.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/bear.png' alt="sym" width="500" height="300"></div></div>
<div class='paper-box-text' markdown="1">

[CuteBear Multi-modal Sentiment Analysis Robot](../bear.doc)

Zhan Zhenrong, **Yin Bo**, Liu Ziyun, Liu Yingying, Chen Boyang, He Yu, Chen Qiyue

<!-- [**Project**](https://github.com/YinBo0927/AI_interior_decoration_design_assistant)  -->
<!-- - The project applied for the South China University of Technology hundred-step ladder climbing plan, and won 10,000 yuan of funding.
- The project also won the third prize of the South China University of Technology Challenge Cup
</div>
</div> -->


<h1 id="-educations">📖 Education</h1>

<div class="experience-list" role="list" aria-label="Education">
  <div class="experience-item" role="listitem">
    <div class="experience-logo experience-logo-nus"><img src="images/nus_logo.jpg" alt=""></div>
    <div class="experience-details">
      <strong class="experience-name">National University of Singapore</strong>
      <span>M.Sc. in Computer Engineering</span>
    </div>
    <span class="experience-date">Aug 2025 – Jan 2027</span>
  </div>
  <div class="experience-item" role="listitem">
    <div class="experience-logo experience-logo-nus"><img src="images/nus_logo.jpg" alt=""></div>
    <div class="experience-details">
      <strong class="experience-name">NUS Research Institute in Chongqing</strong>
      <span>3+1+1 Program</span>
    </div>
    <span class="experience-date">Sep 2024 – Jun 2025</span>
  </div>
  <div class="experience-item" role="listitem">
    <div class="experience-logo"><img src="images/scut_logo.jpg" alt=""></div>
    <div class="experience-details">
      <strong class="experience-name">South China University of Technology</strong>
      <span>B.Eng. in Artificial Intelligence</span>
    </div>
    <span class="experience-date">Sep 2021 – Jul 2025</span>
  </div>
</div>


# 💻 Internships

<div class="experience-list" role="list" aria-label="Internships">
  <div class="experience-item" role="listitem">
    <div class="experience-logo experience-logo-nus"><img src="images/nus_logo.jpg" alt=""></div>
    <div class="experience-details">
      <a class="experience-name" href="https://www.lv-lab.org/nus/index.html">NUS LV Lab</a>
      <span>Research Intern · Singapore</span>
    </div>
    <span class="experience-date">Aug 2025 – <span class="experience-current">Present</span></span>
  </div>
  <div class="experience-item" role="listitem">
    <div class="experience-logo"><img src="images/huawei_logo.jpg" alt=""></div>
    <div class="experience-details">
      <a class="experience-name" href="https://www.huawei.com/sg/">Huawei</a>
      <span>Singapore</span>
    </div>
    <span class="experience-date">Jan 2026 – May 2026</span>
  </div>
  <div class="experience-item" role="listitem">
    <div class="experience-logo"><img src="images/hsbc_logo.png" alt=""></div>
    <div class="experience-details">
      <a class="experience-name" href="https://www.about.hsbc.com.cn/zh-cn/careers/technology">HSBC Technology China</a>
      <span>Guangzhou, China</span>
    </div>
    <span class="experience-date">Apr 2024 – Aug 2024</span>
  </div>
  <div class="experience-item" role="listitem">
    <div class="experience-logo"><img src="images/westlake_logo.png" alt=""></div>
    <div class="experience-details">
      <a class="experience-name" href="https://www.scholat.com/org/tgai">TGAILab</a>
      <span>Westlake University · Hangzhou, China</span>
    </div>
    <span class="experience-date">Dec 2023 – May 2024</span>
  </div>
</div>


# 📌 Honors

- *2024.09* Xiao Noodles Third-class Scholarship
- *2024.09* SCUT Academic Scholarship
- *2024.05* Tai Hu Innovation Scholarship
- *2022.11* Tai Hu Innovation Scholarship
- *2022.09* SCUT Academic Scholarship
- *2022.09* Huameng Scholarship

<!-- # 🏆 Awards

- *2024.02*, Honorable Mention in Mathematical Contest in Modeling (MCM), the Consortium for Mathematics and Its Applications
- *2023.11*, Second Prize in Guangdong Division of Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM), China Society for Industrial and Applied Mathematics
- *2023.06*, Second Prize in MathorCup Mathematical Contest in Modeling, Chinese Society of Optimization, Overall Planning and Economical Mathematics
- *2023.05*, Second Prize in SCUT Division of Mathematical Contest in Modeling for Universities in Guangzhou City, South China University of Technology
- *2023.03*, Third Prize in Challenge Cup of South China University of Technology, South China University of Technology
- *2021.12*, First Prize in Baidu PaddlePaddle Cup, South China University of Technology -->


<!-- # 🌍 Overseas Exchange Certificate

<div style="text-align: center;">
  <img src="images/cambridge.png" alt="alt text" width="500" height="300">
  <img src="images/oxford.png" alt="alt text" width="500" height="300">
</div> -->


<h1 id="academic-service">🎓 Academic Service</h1>

<div class="service-panel">
  <div class="service-row">
    <div class="service-role"><i class="fas fa-clipboard-check" aria-hidden="true"></i> Conference Reviewer</div>
    <ul class="service-venues" role="list" aria-label="Conferences reviewed">
      <li><strong>ICLR</strong><span>2027</span></li>
      <li><strong>ACL</strong><span>2026</span></li>
    </ul>
  </div>
  <div class="service-row">
    <div class="service-role"><i class="fas fa-book-open" aria-hidden="true"></i> Journal Reviewer</div>
    <ul class="service-venues" role="list" aria-label="Journals reviewed">
      <li><strong>Neurocomputing</strong></li>
    </ul>
  </div>
</div>
