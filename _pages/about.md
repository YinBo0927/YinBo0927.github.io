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

I am currently pursuing a Master of Science in Computer Engineering at the National University of Singapore (NUS). I obtained my undergraduate degree in Artificial Intelligence from the South China University of Technology (SCUT). I am conducting CEG5003 (Research Project) under the guidance of [Prof. Xinchao Wang](https://cde.nus.edu.sg/ece/staff/wang-xinchao/) on LLM safety, while also interning at the LV Lab supervised by [Prof. Shuicheng Yan](https://yanshuicheng.info/).

Research Interests: <strong>PEFT, AIGC, MLLM</strong>. If you are interested in collaborating on related topics, please feel free to reach out!

<p class="notice-line">I am looking for summer research internship opportunities in mainland China and 2027 Spring PhD opportunities. Please feel free to contact me!</p>

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News

<div class="news-carousel" aria-label="News">
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <div class="carousel-item"><span class="news-date">2026.05</span><span>🎉 Three papers, <strong>FeRA</strong>, <strong>L2-VMAS</strong>, and <strong>VPD-100K</strong>, were accepted by <strong>ICML 2026</strong>.</span></div>
      <div class="carousel-item"><span class="news-date">2025.11</span><span>I submitted 1 paper to CVPR 2026.</span></div>
      <div class="carousel-item"><span class="news-date">2025.09</span><span>I submitted 2 papers to ICLR 2026.</span></div>
      <div class="carousel-item"><span class="news-date">2025.08</span><span>🎉 I join the LV Lab as a research intern, supervised by Prof. <a href="https://yanshuicheng.info/">Shuicheng Yan</a>.</span></div>
      <div class="carousel-item"><span class="news-date">2024.10</span><span>I got the No.1 in the Happy Frisbee activity in NUSRI-CQ!</span></div>
      <div class="carousel-item"><span class="news-date">2024.09</span><span>🌟 I was selected for my favorite FYP project--<em>Learnable Activation Networks for Vision</em>.</span></div>
      <div class="carousel-item"><span class="news-date">2024.07</span><span>🎉🎉 I get the 3+1+1 programme offer from the NUSRI-CQ.</span></div>
      <div class="carousel-item"><span class="news-date">2024.03</span><span>🎉 I get the trainee offer from the HSBC Technology China.</span></div>
      <div class="carousel-item"><span class="news-date">2024.01</span><span>🎉 I get the excellent group as leader in the winter exchange program in National University of Singapore.</span></div>
      <div class="carousel-item"><span class="news-date">2023.12</span><span>🎉 I get the intern offer from the TGAILab, supervised by Prof. <a href="https://www.westlake.edu.cn/faculty/yaochu-jin.html">Yaochu Jin</a>.</span></div>
    </div>
  </div>
  <div class="carousel-buttons">
    <button class="carousel-btn carousel-btn-prev" type="button" aria-label="Show newer news">↑ Newer</button>
    <button class="carousel-btn carousel-btn-next" type="button" aria-label="Show older news">Older ↓</button>
  </div>
</div>


# 📝 Publications 

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-accepted">ICML 2026</div>
      <img src='images/fera.svg' alt="FeRA: Frequency-Energy Constrained Routing for Effective Diffusion Adaptation Fine-Tuning" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**FeRA: Frequency-Energy Constrained Routing for Effective Diffusion Adaptation Fine-Tuning**

**Bo Yin**, Xiaobin Hu, Xingyu Zhou, Peng-Tao Jiang, Yue Liao, Junwei Zhu, Jiangning Zhang, Ying Tai, Chengjie Wang, Shuicheng Yan

[<img src="https://img.shields.io/badge/arXiv-2511.17979-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2511.17979) [<img src="https://img.shields.io/badge/GitHub-FeRA-blue?logo=github&logoColor=white" alt="GitHub" style="height:20px;">](https://github.com/YinBo0927/FeRA)

We present a novel fine-tuning approach for diffusion models, termed Frequency-Energy constrained Routing Adaptation (FeRA), which uses frequency-domain analysis to guide the fine-tuning process, enhancing both efficiency and effectiveness.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-accepted">ICML 2026</div>
      <img src='images/vpd_100k_framework.png' alt="VPD-100K frequency-enhanced detection framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**VPD-100K: Towards Generalizable and Fine-grained Visual Privacy Protection**

Xiaobin Hu, Enpu Zuo, Lanping Hu, Kaiwen Yang, Dianshu Liao, Tianyi Zhang, **Bo Yin**, Yinsi Zhou, Shidong Pan, Xiaoyu Sun

We present VPD-100K, a large-scale fine-grained visual privacy dataset with 100,000 images, 33 classes, and over 190,000 object instances, together with a frequency-enhanced lightweight mechanism for robust privacy detection.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-accepted">ICML 2026</div>
      <img src='images/l2_vmas_framework.png' alt="Dual Latent Memory for Visual Multi-agent System framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Dual Latent Memory for Visual Multi-agent System**

Xinlei Yu, Chengming Xu, Zhangquan Chen, **Bo Yin**, Cheng Yang, Yongbo He, Yihao Hu, Jiangning Zhang, Cheng Tan, Xiaobin Hu, Shuicheng Yan

[<img src="https://img.shields.io/badge/arXiv-2602.00471-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2602.00471) [<img src="https://img.shields.io/badge/GitHub-L2--VMAS-blue?logo=github&logoColor=white" alt="GitHub" style="height:20px;">](https://github.com/YU-deep/L2-VMAS)

We introduce L<sup>2</sup>-VMAS, a model-agnostic framework that enables visual multi-agent collaboration through dual latent memories, improving scalability while reducing token-heavy text communication.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-preprint">arXiv 2026</div>
      <img src='images/vla_safety_framework.png' alt="Vision-Language-Action Safety landscape framework" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Vision-Language-Action Safety: Threats, Challenges, Evaluations, and Mechanisms**

Qi Li<sup>*</sup>, **Bo Yin**<sup>*</sup>, Weiqi Huang<sup>*</sup>, Ruhao Liu<sup>*</sup>, Bojun Zou, Runpeng Yu, Jingwen Ye, Weihao Yu, Xinchao Wang

<span class="contribution-note"><sup>*</sup> Equal contribution.</span>

[<img src="https://img.shields.io/badge/arXiv-2604.23775-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2604.23775) [<img src="https://img.shields.io/badge/GitHub-VLA--Safety-blue?logo=github&logoColor=white" alt="GitHub" style="height:20px;">](https://github.com/LiQiiiii/Awesome-VLA-Safety)

We survey VLA safety across threats, defenses, evaluation, and deployment, highlighting the unique risks introduced by embodied vision-language-action systems.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-under-review">Under Review</div>
      <img src='images/repro.png' alt="repro" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Refinement Provenance Inference: Detecting LLM-Refined Training Prompts from Model Behavior**

**Bo Yin**, Qi Li, Runpeng Yu, Xinchao Wang

[<img src="https://img.shields.io/badge/arXiv-2601.01966-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2601.01966) [<img src="https://img.shields.io/badge/GitHub-RePro-blue?logo=github&logoColor=white" alt="GitHub" style="height:20px;">](https://github.com/YinBo0927/RePro)

We propose an instance-level auditing method that infers, from a model's behavior, whether it was trained on an original prompt or an LLM-refined version of that prompt within a mixed training corpus.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-under-review">Under Review</div>
      <img src='images/nora.svg' alt="Don't Forget the Nonlinearity" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Don't Forget the Nonlinearity: Unlocking Activation Functions in Efficient Fine-Tuning**

**Bo Yin**, Xingyi Yang, Xinchao Wang

[<img src="https://img.shields.io/badge/arXiv-2509.13240-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2509.13240) [<img src="https://img.shields.io/badge/GitHub-NoRA-blue?logo=github&logoColor=white" alt="GitHub" style="height:20px;">](https://github.com/YinBo0927/NoRA)

We propose a novel and effective fine-tuning paradigm that introduces learnable activation functions to adapt large pre-trained models to downstream tasks while preserving their computational efficiency.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-under-review">Under Review</div>
      <img src='images/lacadm.png' alt="lacadm" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**LacaDM: A Latent Causal Diffusion Model for Multiobjective Reinforcement Learning**

Xueming Yan, **Bo Yin**, Yaochu Jin

[<img src="https://img.shields.io/badge/arXiv-2512.19516-b31b1b?logo=arxiv&logoColor=white" alt="arXiv" style="height:20px;">](https://arxiv.org/abs/2512.19516)

We propose a novel multi-objective reinforcement learning framework that leverages latent temporal causal structures to enhance generalization and significantly outperform state-of-the-art baselines in complex dynamic environments.

  </div>
</div>

- [Precise Apple Detection and Localization in Orchards using YOLOv5 for Robotic Harvesting Systems](https://ieeexplore.ieee.org/document/10692278), Jiang Ziyue, **Yin Bo**, Lu Boyun, <span class="venue-label">**AIPMV 2024**</span>

- [A Discussion of Migration of Common Neural Network Regularization Methods on SNNs](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13291/132915G/A-discussion-of-migration-of-common-neural-network-regularization-methods/10.1117/12.3034448.short), Lv Yilin, **Yin Bo**, <span class="venue-label">**ISAEECE 2024**</span>

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

# 📖 Educations

- <img src="images/nus_logo.jpg" alt="NUS" style="width:40px; margin-right: 10px;" align="middle"/> **National University of Singapore**, M.Sc. in Computer Engineering, *2025.08 - 2027.01*

- <img src="images/nus_logo.jpg" alt="NUSRI" style="width:40px; margin-right: 10px;" align="middle"/> **NUS Research Institute in Chongqing**, 3+1+1 Program, *2024.09 - 2025.06*

- <img src="images/scut_logo.jpg" alt="SCUT" style="width:40px; margin-right: 10px;" align="middle"/> **South China University of Technology**, B.Eng. in Artificial Intelligence, *2021.09 - 2025.07*


# 💻 Internships

- <img src="images/huawei_logo.jpg" alt="Huawei" style="width:40px; margin-right: 10px;" align="middle"/> [**Huawei**](https://www.huawei.com/sg/), Singapore, *2026.01 - now*

- <img src="images/nus_logo.jpg" alt="LV Lab" style="width:40px; margin-right: 10px;" align="middle"/> [**LV Lab**](https://www.lv-lab.org/nus/index.html), National University of Singapore, Singapore, *2025.08 - now*

- <img src="images/hsbc_logo.png" alt="HSBC" style="width:40px; margin-right: 10px;" align="middle"/> [**HSBC Technology China**](https://www.about.hsbc.com.cn/zh-cn/careers/technology), Guangzhou China, *2024.04 - 2024.08*

- <img src="images/westlake_logo.png" alt="Westlake" style="width:40px; margin-right: 10px;" align="middle"/> [**TGAILab**](https://www.scholat.com/org/tgai), Westlake University, Hangzhou China, *2023.12 - 2024.05*
