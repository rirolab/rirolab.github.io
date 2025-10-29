---
layout: page
title: Research Areas
permalink: /research/topics
main_nav: true
---

<h3>Introduction!</h3>

<div class="video-single-container">
    <iframe src="https://www.youtube.com/embed/U--BgrBPQfI?start=37&end=86&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen align="middle" seamless></iframe>
</div>
<br>
<br>


<div class="research">

    <!---------------- Topic --------------------->
    <div class="research-section">Generalist Robots in the Wild: Foundation Models for Real-World Tasks</div>
    <div class="boundary-line"></div>

    <div class="research-container">
        <br>
        <div class="img-multi-container">
             <div class="responsive-img">
                  <img src="/assets/equipment/fm_goal.png" alt="High-precision task for Humanoid Robot ">
             </div>
             <div class="responsive-img">
                  <img style="width: 85%" src="/assets/research/research_humanoid_nav.png">
             </div>
             <div class="responsive-img">
                  <img style="width: 85%" src="/assets/research/2024_ISR_LLM.png">
             </div>
        </div>

        <br>
        We aim to develop fundamental learning methodologies for whole-body manipulation using humanoid robots, including a humanoid platform (e.g., Unitree G1) and a mobile humanoid platform (T.B.D). Whole-body manipulation has recently emerged as a key frontier in robotics. To lead advancements in this domain, the RIRO Lab focuses on two core directions: (1) developing novel policy learning methods based on imitation and reinforcement learning, and (2) designing high-level planning strategies that leverage large language models (LLMs) and other foundation models such as vision-language-action (VLA) models. Our long-term goal is to build hierarchical foundation models capable of generalizing across complex, real-world tasks. The proposed methods will be rigorously evaluated using our robotic platforms and through collaborative efforts with industry partners.
        <br>
        <br>
        <b>Keywords</b>: Imitation learning, State-space models (SSM), Diffusion policy, Constraint learning, humanoid navigation
        <br>    
        <b>Selected paper</b>: <a href="https://arxiv.org/abs/2409.14719" target="_blank">[under review]</a> 
    </div>
    <div class="boundary-line"></div>
    <br>

    <!---------------- Topic --------------------->
    <div class="research-section">Interactive Learning Toward In-hand Manipulation of Deformable Objects</div>
    <div class="boundary-line"></div>

    <div class="research-container">
        <br>
        <div class="img-multi-container">
             <div class="responsive-img">
                  <img style="width: 100%" src="/assets/research/2025_RSS_INR_DOM.gif">
             </div>
             <div class="responsive-img">
                  <img style="width: 85%" src="/assets/research/2025_RSS_ILCL.png">
             </div>
             <div class="responsive-img">
                  <img src="/assets/research/research_iitp.png" alt="Deformable object manipulation + Inverse constraint learning">
             </div>
        </div>
        
        <br>
        In-hand manipulation of deformable objects offers unprecedented opportunities to resolve various real-world problems, such as binding and taping. This project aims to develop a visuotactile in-hand manipulation that repositions/reorientations deformable objects in hand as we want. Toward this line of research, we propose three research thrusts: 1) a physics-informed reinforcement learning (RL) framework, 2) an interactive RL framework, and 3) Sim2Real transfer learning method.
        <br>
        <br>
        <b>Keywords</b>: (Inverse) Reinforcement learning, Deformable obejct manipulation, Sim2Real transfer learning, 
        <br>    
        <b>Selected paper</b>: <a href="https://proceedings.mlr.press/v100/park20a.html" target="_blank">[CoRL19]</a>, <a href="https://arxiv.org/abs/2306.12357" target="_blank">[RA-L23]</a> 
    </div>
    <div class="boundary-line"></div>
    <br>

    <!---------------- Topic --------------------->
    <div class="research-section">LLM/VLM-based Task-and-Motion Planning</div>
    <div class="boundary-line"></div>

    <div class="research-container">
        <br>
        <div class="img-multi-container">
             <div class="responsive-img">
                  <img style="width: 95%" src="/assets/research/2021_RAL_LTL_BT.gif">
             </div>
             <div class="responsive-img">
                  <img style="width: 95%" src="/assets/research/2026_ICRA_SuReNav.gif">
             </div>
             <div class="responsive-img">
                  <img style="width: 95%" src="/assets/research/2025_CoRL_ForeSight.gif">
             </div>
        </div>
        
        <br>
        We aim to introduce task-and-motion planning (TAMP) framework that is to solve complex and longer-time horizon of human tasks. To resolve completeness, optimality, and robustness issues, we are working on various task planning and motion planning approaches. We will show a generalizable TAMP framework under human operator’s cooperative or adversarial interventions.
        <br>    
        <br>
        <b>Keywords</b>: Large language models, Large multimodal models, Semantic perception, Behavior tree
        <br>        
        <b>Selected paper</b>: <a href="https://ieeexplore.ieee.org/abstract/document/9561807" target="_blank">[ICRA21]</a>,  <a href="https://ieeexplore.ieee.org/abstract/document/9851942" target="_blank">[RA-L22]</a>, <a href="https://arxiv.org/abs/2310.04044" target="_blank">[ICRA24]</a>       
    </div>
    <div class="boundary-line"></div>
    <br>

    <!---------------- Topic --------------------->
    <div class="research-section">Language-Guided Navigation & Manipulation </div>
    <div class="boundary-line"></div>

    <div class="research-container">
        <br>
        <div class="img-multi-container">
             <div class="responsive-img">
                  <img style="width: 100%" src="/assets/research/2020_IJRR_opt.png">
             </div>
             <div class="responsive-img">
                  <img style="width: 95%" src="/assets/research/2025_IJCNLP_C2F.png">
             </div>
             <div class="responsive-img">
                  <img style="width: 100%" src="/assets/research/2024_LINGO-Space_demo.gif">
             </div>
        </div>
        <br>
Natural language is one of the most intuitive and accessible ways for humans to convey intent, without the need for specialized tools or training. This research aims to ground natural language instructions in real-world robotic tasks involving navigation and manipulation. While conventional natural language grounding (NLG) methods often focus on mapping language to sparse goal specifications, our approach explores richer forms of grounding—spanning spatial reasoning, action understanding, and plan generation—by leveraging common-sense knowledge and motion demonstrations.

A key challenge in this domain is the inherent ambiguity and implicit assumptions in human instructions. To address this, we develop frameworks that learn common-sense priors from language-motion pairs, enabling robots to interpret under-specified instructions in a context-aware manner.

Our methods are evaluated on diverse mobile platforms, including quadrupedal robots such as Boston Dynamics Spot, demonstrating the effectiveness of language-guided policy learning in both structured and unstructured environments.
        <br>
        <br>
        <b>Keywords</b>: Quadruped robot, Semantic SLAM, Natural language grounding, Space grounding
        <br>        
        <b>Selected paper</b>: <a href="https://journals.sagepub.com/eprint/PSW4Z5AXF4AYTSXRN7AI/full" target="_blank">[IJRR20]</a>, <a href="http://fieldrobotics.net/Field_Robotics/Volume_2_files/Vol2_17.pdf" target="_blank">[FR22]</a>, <a href="https://arxiv.org/abs/2402.01183" target="_blank">[AAAI24]</a>
    </div>
    <div class="boundary-line"></div>
    <br>


</div>
