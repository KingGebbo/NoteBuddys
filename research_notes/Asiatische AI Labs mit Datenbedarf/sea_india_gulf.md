# Human-data demand and procurement channels of AI labs in the Gulf, Singapore, India and Southeast Asia (as of 12 Nov 2026), seen from PathWize (EU expert human-data provider)

Scope note: PathWize already knows about SEA-LION/Project SEALD, ByteDance/Moonshot in Singapore, Sarvam/BharatGen's 22 Indian languages, the Inception–Scale AI deal, and that MBZUAI and TII exist. These notes add detail beyond that. Facts carry inline sources. Anything marked **[Assessment]** is my inference. The research session hit its web-search budget (200 searches per turn, shared by all agents). Several follow-up lookups could not run and are listed under Gaps.

---

## Q1. What data needs are documented, organisation by organisation (domains, languages, RLHF/reasoning, expert evaluation, Arabic–English)?

### Takeaway
The Gulf labs document the strongest needs for post-training, evaluation and expert data. G42/Inception buys SFT/RLHF and industry evaluation datasets (including healthcare) from Scale AI. MBZUAI-IFM openly manages "external data vendors and domain experts". TII trains Falcon-H1 natively on 10 European languages. M42 runs clinical LLM evaluation. HUMAIN's models are Arabic-first and now partly commissioned from China's MiniMax. Singapore's national programme mostly relies on unpaid partner contributions. India's sovereign-model push is about Indic languages and runs through domestic channels. Rest-of-SEA programmes are local-language-only and mostly do their curation in-house.

### Cited Findings

#### Gulf: UAE

**G42 / Inception (now "Inception42") / Core42**
- Inception–Scale AI partnership: Scale provides "post-training support, including Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF)" for new Inception LLMs. The two will jointly build "industry-specific evaluation datasets" for government, investment, corporate and **healthcare** use cases. Work begins in the UAE and is meant to expand to other international markets. — [Zawya press release](https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-ho8awi0i). The date is Feb 2025 per search coverage — [Zawya (alt)](https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-tpbw4pi7)
- Jais 2 (Dec 2025): Inception, Cerebras and MBZUAI-IFM released Jais-2-8B-Chat and Jais-2-70B-Chat as open-weight Arabic LLMs on Hugging Face. — [Middle East AI News](https://www.middleeastainews.com/p/inception-cerebras-and-mbzuai-release); [WAM](https://www.wam.ae/en/article/bn4kwsw-inception-cerebras-mbzuai-release-jais)
- Inception builds sovereign bilingual models for non-Arabic markets:
  - Nanda (Hindi–English), including an upgraded Nanda 87B. — [Middle East AI News](https://www.middleeastainews.com/p/mbzuai-inception-launch-enhanced)
  - Sherkala (Kazakh), an 8B model trained on 45B words across Kazakh, English, Russian and Turkish. — [Middle East AI News](https://www.middleeastainews.com/p/inception-and-mbzuai-unveil-kazakh)
- Rebrand: inceptionai.ai now 301-redirects to inception42.ai (observed 12 Nov 2026 via fetch). Inception42 launched "Seraj", an Arabic-first enterprise model built with Microsoft. — [Middle East AI News](https://www.middleeastainews.com/p/inception42-advances-arabic-ai-for-enterprise). A profile site dates Seraj to July 2026 and lists a "Jais 3" in Oct 2026. **Not verified** — [ai-market-watch](https://www.ai-market-watch.com/company/inception42)
- Arabic evaluation work: Inception and MBZUAI launched the AraGen leaderboard (3C3H metric, Dec 2024) and an Arabic Leaderboards Space (Mar 2025). — [Inception](https://inceptionai.ai/2025/03/25/redefining-arabic-ai-evaluation-inception-and-mbzuai-launch-arabic-leaderboards-space/index.html)
- European tie: G42/Core42 partnered with Italy's iGenius to deploy the "Colosseum" supercomputer. This is compute, not an Italian language model. — [Core42](https://www.core42.ai/en/news/g42-and-igenius-join-forces-to-deploy-europes-largest-ai-compute-cluster)
- Structure: Core42 was formed in Oct 2023 by merging G42 Cloud, Inception and Injazat — [Khaleej Times](https://www.khaleejtimes.com/tech/gitex-global-abu-dhabis-g42-merges-3-subsidiaries-creating-technology-giant-core42). Inception was later relaunched as a separate entity — [Middle East AI News](https://www.middleeastainews.com/p/g42-inception-20-open-source-jais-llms) (older items, 2023–24).

**M42 (G42 healthcare): Med42 and MEDIC**
- Med42-v2 (8B/70B, Llama-3-based) is "instruction and preference fine-tuned" for clinical use — [arXiv 2408.06142](https://arxiv.org/html/2408.06142v1) (2024, older). The first Med42 reached up to 72% zero-shot on USMLE — [Maginative](https://www.maginative.com/article/m42-health-unveils-med42-a-milestone-for-open-access-in-ai-for-healthcare/) (2023, older).
- MEDIC is M42's clinical-LLM evaluation framework. It covers five dimensions: medical reasoning, ethics/bias, data and language understanding, in-context learning, and clinical safety. — [arXiv 2409.07314](https://arxiv.org/html/2409.07314v2). M42 also runs a public MEDIC leaderboard that accepts outside submissions — [Middle East AI News](https://www.middleeastainews.com/p/g42-m42-releases-medic-llm-leaderboard)
- The Abu Dhabi Department of Health signed an MoU to roll Med42 out across the emirate's healthcare system — [M42](https://m42.ae/media-center/news/the-department-of-health-abu-dhabi-partners-with-m42-to-deploy-new-clinical-generative-ai-model) (2023, older).
- A July 2026 opinion blog says Med42's model card states the model "is not ready for real clinical use" and needs extensive human evaluation. It argues that independent graders are missing. — [Tarry Singh blog](https://www.tarrysingh.com/blog/one-million-genomes-bedside-model-waits) (opinion)

**MBZUAI: Institute of Foundation Models (IFM), K2 Think**
- IFM was launched in May 2025 as a multi-site institute: a new Silicon Valley lab (Sunnyvale) plus previously announced labs in **Paris** and Abu Dhabi. — [MBZUAI](https://mbzuai.ac.ae/news/mbzuai-launches-institute-of-foundation-models-and-establishes-silicon-valley-ai-lab/)
- K2 Think (Sep 2025):
  - Post-training used RLVR (verifiable rewards) instead of preference-based RLHF. — [arXiv 2509.07604](https://arxiv.org/html/2509.07604v1)
  - The SFT stage used the public AM-Thinking-v1-Distilled dataset. — [arXiv 2509.07604](https://arxiv.org/html/2509.07604v1)
- K2 Think V2 (Jan 2026, 70B) is "fully sovereign" and uses IFM-curated data only; its RL stage uses the Guru dataset. — [MBZUAI](https://mbzuai.ac.ae/news/k2-think-v2-a-fully-sovereign-reasoning-model/); [MarkTechPost](https://www.marktechpost.com/2026/01/28/mbzuai-releases-k2-think-v2-a-fully-sovereign-70b-reasoning-model-for-math-code-and-science/)
- BALSAM (the Saudi Arabic benchmark) lists MBZUAI as a partner. — [Middle East AI News](https://www.middleeastainews.com/p/saudi-arabic-llm-index-launched-at-gain)

**TII: Falcon**
- Falcon-H1 is trained natively on 18 languages, 10 of them European: Czech, German, Spanish, French, Italian, Dutch, Polish, Portuguese, Romanian and Swedish. The rest are Arabic, English, Hindi, Japanese, Korean, Russian, Urdu and Chinese. Its tokenizer scales to 100+ languages. — [TII GitHub Falcon-H1](https://github.com/tiiuae/Falcon-H1)
- Falcon-H1-Arabic (Jan 2026):
  - About 300B tokens in a near-equal mix of Arabic, English and multilingual content. — [Hugging Face blog](https://huggingface.co/blog/tiiuae/falcon-h1-arabic)
  - Post-training was SFT followed by DPO (preference optimization). — [Hugging Face blog](https://huggingface.co/blog/tiiuae/falcon-h1-arabic)
  - Covers Egyptian, Levantine, Gulf and Maghrebi dialects. — [TII interview, Dr. Hakim Hacid](https://www.tii.ae/node/3964)
- Falcon-Emirati (Oct 2026) was trained on native Emirati material, MSA content on UAE culture and synthetic data. — [Gulf Business](https://gulfbusiness.com/en/2026/artificial-intelligence/uae-tii-falcon-emirati-arabic-ai-model/); [Enterprise AM](https://enterpriseam.com/ai/2026/10/08/tii-launches-an-ai-model-built-for-emirati-arabic/)
- Falcon-ASR (1.6B, Arabic/Emirati speech) was launched on 7 Oct 2026. — [FourWeekMBA](https://fourweekmba.com/ai-tii-launches-1-6b-falcon-asr-for-arabic-and-emirati-speech/)

**OpenAI Stargate UAE and Microsoft–G42**
- Stargate UAE's first 200 MW was targeted to come online in Q3 2026. It is a 1 GW first phase of a 5 GW campus, built with G42, OpenAI, Oracle, Nvidia, Cisco and SoftBank. — [Gulf News](https://gulfnews.com/business/markets/stargate-uae-first-phase-of-200mw-to-complete-by-2026-1.500310364); [The New Arab / Reuters](https://www.newarab.com/news/stargate-uae-ai-datacenter-begin-operation-2026). I found no data-procurement signal; this is a compute project.

#### Gulf: Saudi Arabia

**HUMAIN (PIF 51% / Aramco 49%)**
- Ownership: Aramco completed its acquisition of a 49% stake and PIF keeps 51%. — [Entrepreneur ME](https://mena.entrepreneur.com/?p=42604)
- HUMAIN Chat went live on 25 Aug 2025 on ALLaM 34B:
  - Saudi-only at launch, hosted in-Kingdom and designed for PDPL compliance, with a regional and global rollout to follow. — [SPA](https://www.spa.gov.sa/en/N2385004); [Middle East AI News](https://www.middleeastainews.com/p/humain-chat-live-allam-34b-llm)
  - ALLaM was reportedly trained by a 40-strong PhD team on proprietary in-Kingdom datasets (citing Asharq Al-Awsat). — [fwdstart](https://www.fwdstart.me/p/humain-to-launch-arabic-centric-allam-34b-foundation-model-by-end-of-august)
  - The ALLaM 7B preview used 4T English tokens, then 1.2T mixed Arabic/English, and was instruction-tuned on curated Arabic and English data. This is a secondary summary of the HF model card. — [lmmarketcap](https://lmmarketcap.com/reports/allam)
- **humain-m3** (3 Sep 2026, LEAP Riyadh):
  - A 428B MoE model "commissioned in partnership with Chinese AI developer MiniMax" on the "MiniMax-M3 lineage". — [Middle East AI News](https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic)
  - Pre-trained on more than 1T tokens of native Arabic content. — [Middle East AI News](https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic)
  - Available as a research preview on HUMAIN Node; public weights are to follow "after safety alignment and fine-tuning" under the MiniMax Community License. — [Middle East AI News](https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic); [Unite.ai](https://www.unite.ai/?p=461213)
- HUMAIN and Microsoft are bringing ALLaM into Microsoft Foundry and the Microsoft 365 Copilot ecosystem. — [MENA Startup Digest](https://menastartupdigest.com/?p=49384); [Middle East AI News](https://www.middleeastainews.com/p/humain-arabic-models-coming-to-microsofts). AGBI's Aug 2026 headline reads "Microsoft puts Saudi Arabic language AI model on global platform" (article returned 403; headline only). — [AGBI](https://www.agbi.com/tech/2026/08/microsoft-puts-saudi-arabic-language-ai-model-on-global-platform/)
- HUMAIN–Adobe (Nov 2025): AI models "tuned for the Arab world" built on ALLaM and Firefly Foundry. — [Adobe](https://news.adobe.com/news/2025/11/humain-adobe-announce-global-strategic-partnership)
- HUMAIN–AWS: a joint investment of more than $5B, which includes spurring ALLaM development. — [Amazon](https://www.aboutamazon.com/news/company-news/amazon-aws-humain-ai-investment-in-saudi-arabia)
- An independent UI-level evaluation of ALLaM 34B (Aug 2025) relied mainly on LLM judges. It called for direct human evaluation and wider dialect coverage. — [arXiv 2508.17378](https://arxiv.org/abs/2508.17378v1)

**SDAIA and King Salman Global Academy for Arabic Language (KSGAAL)**
- BALSAM Arabic LLM benchmark: 78 tasks across 14 categories with 52K examples (Arabic NLP conf., Nov 2025). — [ACL Anthology](https://preview.aclanthology.org/ingest-emnlp/2025.arabicnlp-main.21.pdf)
- BALSAM was launched by SDAIA and KSGAAL. Partners are aiXplain, KAU, KSU, NYUAD and MBZUAI. — [Middle East AI News](https://www.middleeastainews.com/p/saudi-arabic-llm-index-launched-at-gain); [KSAA](https://ksaa.gov.sa/en/initiatives/50862-BALSAM-Index-for-Evaluating-Arabic-Large-Language-Models-LLM)
- KSGAAL's Arabic AI Center has a "Data Formatting Lab" for aggregating, annotating and quality-checking Arabic data. — [KSAA](https://ksaa.gov.sa/en/-/مجمع-الملك-سلمان-العالمي-للغة-العربية-يُطلق-رسمي)
- A 2025 SDAIA/KSGAAL study found global models outperformed Arabic-specific models in most language-skill categories. It flagged a shortage of Arabic data and benchmarks. — [Riyadh Daily](https://alriyadhdaily.com/article/0aae08348d7c49e2ae494f0e5af79826)

**KAUST**: No data-procurement information found (see Gaps).

#### Gulf: Qatar

- **QCRI Fanar 2.0** (Mar 2026):
  - Fanar-27B was continually pre-trained from Gemma-3-27B on 120B curated tokens. — [arXiv 2603.16397](https://arxiv.org/abs/2603.16397)
  - Everything was "designed and operated entirely at QCRI, Hamad Bin Khalifa University" on 256 H100s. — [arXiv 2603.16397](https://arxiv.org/abs/2603.16397)
  - Includes Fanar-Sadiq, a multi-agent system for Islamic content, and reports +7.6 pts in English capability. — [arXiv 2603.16397](https://arxiv.org/abs/2603.16397)
  - The original Fanar paper (Jan 2025) has a "Collection of User Feedback" section and used machine translation to augment Arabic data. — [arXiv 2501.13944](https://arxiv.org/abs/2501.13944v1)
- **Qai**, launched 8 Dec 2025:
  - A national AI company under the Qatar Investment Authority (QIA), chaired by Abdulla Al Misnad. — [QNA](https://qna.org.qa/en/newsbulletins/2025-12/8/0081-qatar-launches-national-ai-firm-to-advance-digital-transformation); [The National](https://www.thenationalnews.com/future/technology/2025/12/09/qatar-establishes-ai-company-as-gulf-positions-itself-as-tech-hub)
  - Its mandate is to develop, operate and invest in AI infrastructure. Search-surfaced coverage says Qai will **not** build its own LLMs. **Not verified**; outlet not pinned down; see [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2025/qatar-launches-national-ai-firm-as-gulf-tech-investments-ramp-up/), [Bloomberg](https://www.bloomberg.com/news/articles/2025-12-08/qatar-sets-up-national-ai-firm-following-wealthy-gulf-neighbors).
- **Scale AI–Qatar MCIT**: a five-year deal signed in Feb 2025 at Web Summit Qatar. It targets 50+ government AI use cases by 2029, with 4 already in progress; value undisclosed. — [Mobile World Live](https://www.mobileworldlive.com/ai-cloud/qatar-looks-for-ai-boost-with-5-year-deal/); [Capacity](https://capacityglobal.com/news/article-scale-ai-qatar/)

#### Singapore

- **National Multimodal LLM Programme (NMLP)**: S$70M funded by NRF, run by IMDA with AI Singapore and A*STAR (announced Dec 2023, older). — [IMDA](https://imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2023/sg-to-develop-southeast-asias-first-llm-ecosystem)
  - On data sourcing, a parliamentary answer (7 May 2024) says researchers used "open government publications and records" and "contributed content from partners for which no remuneration was required". — [MDDI PQ answer](https://www.mddi.gov.sg/newsroom/pq-on-remuneration-for-national-multimodel-large-language-model-programme/)
- **A*STAR MERaLiON** (built at I2R under NMLP):
  - Fine-tuned on the National Speech Corpus. — [NSCC](https://www.nscc.sg/portfolio/item/meralion-advancing-multimodal-ai-for-singapores-future-in-language-processing/)
  - About 260,000 hours of speech. — [NSCC](https://www.nscc.sg/portfolio/item/meralion-advancing-multimodal-ai-for-singapores-future-in-language-processing/)
  - The MERaLiON Consortium includes NCS (founding member); DBS is testing use cases. — [NCS](https://www.ncs.co/en-sg/insights/giving-ai-a-southeast-asian-voice/)
  - AudioLLM v3 targets paralinguistic intelligence across SEA languages. — [EDB](https://www.edb.gov.sg/en/about-edb/media-releases-publications/singapore-grows-ai-ecosystem-for-real-world-deployment.html)
- **Sea Ltd**:
  - Set up an AI Centre of Excellence in Singapore on 20 Apr 2026, backed by DISG, with demand for at least 100 R&D roles over three years. — [EDB](https://www.edb.gov.sg/en/about-edb/media-releases-publications/sea-establishes-ai-centre-in-singapore-for-innovation.html)
  - A secondary stock-pitch piece says Sea's 245B "Compass Max v3.5" LLM for SEA languages and e-commerce is live on Shopee. — [Yahoo Finance / Insider Monkey](https://finance.yahoo.com/sectors/technology/articles/sea-limited-se-building-own-074324172.html)
- **Grab**: runs an internal LLM evaluation platform, "EvalsHub". Grab job ads describe golden datasets and LLM-as-judge work (see Q2).
- **Manus (Butterfly Effect)**: acquired by Meta for more than $2B (Dec 2025). The team and headquarters stay in Singapore, and the deal was under Chinese regulatory review. — [Built In](https://builtin.com/articles/manus-acquired-by-meta-for-2b-20251230); [The Batch](https://www.deeplearning.ai/the-batch/meta-strikes-a-deal-to-acquire-manus-a-singapore-based-agentic-ai-startup-with-chinese-origins)
- **MiniMax**: shows up in this region as the contracted developer behind HUMAIN's humain-m3 (see Saudi section). — [Middle East AI News](https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic)

#### India

- **IndiaAI foundation-model grantees**:
  - Round 1 (Apr–May 2025): Sarvam, Soket AI, Gnani.ai, Gan.ai. — [AIM](https://analyticsindiamag.com/ai-news-updates/with-34000-gpus-indiaai-mission-backs-soket-ai-gnani-ai-gan-ai-for-foundation-models)
  - Round 2 (18 Sep 2025): Avataar.ai, BharatGen (IIT Bombay), Fractal, Tech Mahindra, Zeinteiq, Genloop, NeuroDX/Intellihealth and Shodh AI. — [Business Standard](https://www.business-standard.com/industry/news/govt-selects-eight-startups-to-build-indigenous-llms-slms-125091801138_1.html)
  - Date conflict: one outlet places the Round 2 announcement at the "AI Impact Summit 2026", which conflicts with the Sep 2025 date. — [Entrepreneur India](https://india.entrepreneur.com/news-and-trends/india-expands-ai-mission-with-12-llm-builders/497343)
  - BharatGen: Rs 988.6 crore sanctioned. — [AIM](https://analyticsindiamag.com/ai-news-updates/bharatgen-tech-mahindra-and-fractal-selected-for-phase-2-of-indiaai-mission/)
  - Tech Mahindra: a 1-trillion-parameter sovereign LLM. — [OpenSourceForU](https://www.opensourceforu.com/2025/10/tech-mahindra-builds-1-trillion-parameter-sovereign-llm/)
  - NeuroDX: a 20B EEG foundation model. Genloop: three 2B SLMs. — [Business Standard](https://www.business-standard.com/industry/news/govt-selects-eight-startups-to-build-indigenous-llms-slms-125091801138_1.html)
- **Sarvam AI**:
  - Its "Data Scientist – Evaluations, Chanakya" role builds "domain-specific datasets including human annotation workflows where needed". Quality metrics are defined "in collaboration with domain experts and clients", and the source data includes "PDFs, doctrine documents, transcripts, and field reports". — [Sarvam careers](https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e)
  - Secondary source: Sarvam-M was post-trained with SFT and RLVR. — [GitHub interview notes](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/14-company-interview-questions/sarvam-ai.md)
- **Krutrim (Ola)**:
  - Cut about 50 linguistics roles in Sep 2025 (its third round), which a spokesperson tied to the end of an in-house data-annotation phase. — [Entrackr](https://entrackr.com/news/olas-krutrim-cuts-50-jobs-in-linguistics-team-report-9777156)
  - Earlier cuts: more than 100 roles in July, and over 200 departures since June 2025. — [Storyboard18](https://storyboard18.com/brand-marketing/olas-ai-arm-krutrim-lays-off-50-employees-in-third-round-since-june-80055.htm); [Entrepreneur India](https://india.entrepreneur.com/news-and-trends/krutrims-layoffs-cloud-the-future-of-its-next-ai-model/496636)
- **BharatGen**: anchored at IIT Bombay, backed by DST NM-ICPS, targets 22+ languages, and released Param-1 in May 2025. In 2026 it signed an MoU with IIT Bombay and C-DAC. — [AIM](https://analyticsindiamag.com/ai-news/bharatgen-signs-mou-with-iit-bombay-c-dac-to-advance-sovereign-ai-for-indias-linguistic-diversity/)
- **Fractal**:
  - Vaidya 2.0 launched in Feb 2026 at the India AI Impact Summit. Fractal claims 50.1 on OpenAI's HealthBench (hard), ahead of GPT-5 (vendor claim). — [TechNode Global / PR Newswire](https://technode.global/prnasia/fractal-launches-vaidya-2-0-outperforming-leading-frontier-models-on-healthcare-ai-benchmarks/)
  - The "Fathom-Vaidya" paper (EMNLP 2026) uses synthetic data and rubric-based RL for clinical reasoning. — [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1109/)
- **Tech Mahindra Project Indus**: covers Hindi plus 37 dialects. Data scarcity forced the team to collect dialect samples from its own employees. — [AIM](https://analyticsindiamag.com/tech-mahindra-finally-launches-project-indus-indic-llm-with-37-hindi-dialects/)
- **Soket AI (Project EKA)**: plans a 120B+ sparse MoE model for math, code, reasoning and multilingual use, with IIT Gandhinagar and IIT Roorkee as collaborators. — [Inc42](https://inc42.com/startups/can-soket-ai-power-indias-foundational-llm-dream/)
- **Reliance**:
  - Reliance Enterprise Intelligence Ltd (REIL) is a JV with Meta's Facebook Overseas (70/30), with Rs 855 crore initial investment, for enterprise AI on Llama (Oct 2025). — [Outlook Business](https://www.outlookbusiness.com/corporate/ril-metas-new-joint-venture-to-invest-855-crore-will-focus-on-developing-distributing-ai-services-in-india)
  - Reliance Intelligence and a Google Cloud pact were announced at the Aug 2025 AGM. — [TechCrunch](https://techcrunch.com/2025/08/29/billionaire-ambani-taps-google-meta-to-build-indias-ai-backbone)
- **Infosys / TCS / Wipro as buyers of expert data**: no evidence found (see Gaps).

#### Rest of Southeast Asia

- **Indonesia, Sahabat-AI (GoTo + Indosat)**:
  - 8B/9B models launched Nov 2024; partners Nvidia and AI Singapore; Tech Mahindra fine-tuned the Llama-3 8B base. — [NVIDIA blog](https://blogs.nvidia.com/blog/indonesia-tech-leaders-sovereign-ai); [IT Brief](https://itbrief.asia/story/indosat-goto-launch-sahabat-ai-llm-for-five-languages)
  - A 70B version followed in Jun 2025, covering Indonesian, Javanese, Sundanese, Balinese and Batak. — [Selular](https://selular.id/2025/06/indosat-dan-goto-luncurkan-layanan-chat-multibahasa-sahabat-ai-dengan-70-miliar-parameter/)
- **Vietnam**:
  - FPT co-founded the Au Lac AI Alliance (Jun 2025) to develop Vietnamese LLMs. — [FPT](https://fpt.com/en/news/launch-of-the-au-lac-ai-alliance-with-more-than-20-founding-members-registered)
  - Zalo contributed the VMLU evaluation set (10,000+ questions). — [VIR](https://vir.com.vn/au-lac-ai-alliance-makes-debut-in-vietnam-131022.html)
  - Viettel reportedly built VT-Super-120B (secondary source). — [b-company](https://b-company.jp/?p=23243)
- **Thailand, ThaiLLM**:
  - Launched by NSTDA in Apr 2026 with MDES, BDI, MHESI and NECTEC, funded by the Digital Economy and Society Development Fund (DEF). — [NSTDA](https://www.nstda.or.th/en/news/news-years-2026/thaillm.html); [Nation Thailand](https://www.nationthailand.com/business/tech/40065259)
  - Trained on 100B+ Thai tokens, in 8B and 30B versions. Its sub-models include SCB 10X's Typhoon-S-ThaiLLM-8B and KBTG's THaLLE. It runs on the ThaiSC supercomputer. — [NSTDA](https://www.nstda.or.th/en/news/news-years-2026/thaillm.html)
  - Siam AI committed 300M baht under a Jun 2025 MoU. — [Thaiger](https://thethaiger.com/news/business/thailand-invests-300-million-baht-in-thai-ai-language-model)
  - A 2025 paper with SCB 10X authors argues that "culturally and professionally grounded instruction data" is needed for lower-resource languages. — [arXiv 2508.15239](https://arxiv.org/pdf/2508.15239v1)
- **Malaysia, ILMU (YTL AI Labs + Universiti Malaya)**:
  - Launched 12 Aug 2025. — [Malay Mail](https://www.malaymail.com/news/malaysia/2025/08/12/pm-anwar-launches-ilmu-malaysias-first-home-grown-multimodal-ai/187359)
  - Trained on public and licensed third-party corpora, with an **in-house** annotation and filtering team. — [W.Media](https://w.media/ilmu-deep-dive-into-malaysias-first-homegrown-llm-with-prof-chan/)
  - Deployed to 3M+ Yes users and used by Ryt Bank. — [The Edge Malaysia](https://theedgemalaysia.com/node/808329)
- **Philippines**: DOST's NAICRI has an approved programme to develop a Philippine LLM. The DOST Secretary says the country's edge is a "sovereign dataset", not a frontier model. — [GMA News](https://www.gmanetwork.com/news/scitech/science/978046/dost-launches-ai-research-hub-says-ph-not-behind-in-ai-adaptation/story). FiLLM is a research model built on SeaLLM-7B. — [AITopics/arXiv](https://aitopics.org/doc/arxivorg:49B688DC)

### Inferences
- **[Assessment]** Demand for paid post-training and evaluation data is clearest at G42/Inception, which already outsources to Scale AI, and at MBZUAI-IFM (vendor management stated in a job ad). M42's clinical evaluation is a third candidate. The Saudi side (HUMAIN) is Arabic-first and in-Kingdom, and it now co-develops with MiniMax. The MiniMax link suggests the post-training and safety-alignment pipeline may be partly external, but no vendor is named.
- **[Assessment]** In Singapore, Malaysia, Thailand and Vietnam, national programmes rely on in-house curation, unpaid partner contributions or national corpora. They are weak paying buyers of European expert data.
- **[Assessment]** India's grantee programmes run on Indic-language data through domestic channels such as Bhashini and AIKosh. Fractal's Vaidya, a medical reasoning model scored on HealthBench (rubric-based), is the main India-side overlap with PathWize's medical-expert strengths.

### Gaps
- KAUST, Core42 (separately from Inception), Microsoft–G42 and Qai: no documented data needs or vendor relationships were found. The search budget ran out before targeted queries could run.
- MBZUAI BiMediX/BiMediX2 (bilingual Arabic–English medical LLMs) could not be researched after the budget ran out. It is a likely high-relevance lead to verify.
- I could not confirm whether HUMAIN's humain-m3 weights were released (target Oct 2026), or who does its safety alignment and fine-tuning.
- GovTech Singapore and A*STAR data procurement were not researched in depth.

---

## Q2. Which organisations post open jobs (2025–2026) that signal data procurement, AI trainers, expert annotators, RLHF or multilingual data?

### Takeaway
I found very few lab-side postings for in-house "AI trainer" or "expert annotator" roles. The labs post evaluation, post-training and data-vendor-management roles. The crowd and expert work itself is advertised by vendors (Appen, Turing, Toloka, Bayanat Labs, CNTXT AI). The most telling lab postings are at MBZUAI-IFM (managing external data vendors and domain experts), Sarvam (evaluation with human annotation and domain experts), Grab (managing human annotation for post-training) and Shopee (in-house AI trainers and annotation QA).

### Cited Findings

**Verified on an employer or primary job page**
- **MBZUAI-IFM, "Research Scientist, Agentic Data & Benchmarking"**:
  - Location "CA" (Sunnyvale lab), posted 2026-06-08. — [zapply.jobs listing](https://zapply.jobs/jobs/722c6f66-4a65-47e2-a13a-08e7df6ce4b8/)
  - Key duties: "Manage technical relationships with external data vendors and domain experts"; "Partner with an external data vendor or domain expert to source high-quality trajectories"; "Source, generate, and curate high-quality agentic training data"; "Design and scale RL environments and reward signals". — [zapply.jobs listing](https://zapply.jobs/jobs/722c6f66-4a65-47e2-a13a-08e7df6ce4b8/)
- **Sarvam AI, "Data Scientist – Evaluations, Chanakya"**:
  - Bengaluru, on-site, Engineering. — [Sarvam careers](https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e); [Ashby](https://jobs.ashbyhq.com/sarvam/7c42207a-bb56-413c-839f-9ad692df840e)
  - Covers human annotation workflows, metrics set with domain experts, and "doctrine documents" and "field reports" as source data. — [Sarvam careers](https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e)
  - A third-party site gives a publish date of 17 Apr 2026. — [onjob.io](https://onjob.io/jobs/bengaluru/data-scientist-evaluations-chanakya/ab-7c42207abb5641/)

**Surfaced via aggregators or search snippets (not verified on the employer site)**
- **MBZUAI-IFM, "Research Scientist" (Sunnyvale)**: data-centric LLM work including model evaluation and "human rating studies". The listing was removed on 27 Oct 2026. — [BuiltInSF](https://www.builtinsf.com/job/research-scientist/9902859)
- MBZUAI headcount signals: Simplify reports about 43–45 IFM vacancies — [Simplify](https://simplify.jobs/c/Institute-Of-Foundation-Models). A third-party snapshot from 21 Oct 2026 lists 95 MBZUAI vacancies — [careeraidhub](https://careeraidhub.com/mbzuai-jobs-faculty-postdoc-research-careers/). **Not verified.**
- **Shopee (Singapore)**, via Glassdoor/Indeed snippets (**not verified** on Shopee careers):
  - "AI Trainer, Product Operations Specialist", preferring a degree in Arts, Linguistics or Languages.
  - A "Data Quality Assurance Engineer" internship (Summer 2026) covering "LLM model evaluation data".
  - "LLM Algorithm Engineer (Post Training)" (Glassdoor estimate SGD 96–142K), which manages "collection, cleaning, synthesis, and annotation workflows for post-training data".
  - Also a "Data Annotation Quality Analyst".
  - Sources: [Glassdoor SG AI trainer](https://www.glassdoor.sg/Job/singapore-ai-trainer-jobs-SRCH_IL.0,9_IN217_KO10,20.htm); [Glassdoor data annotation SG](https://www.glassdoor.com/Job/data-annotation-jobs-SRCH_IN217_KO0,15.htm); [Indeed SG](https://sg.indeed.com/Data-Annotation-jobs-in-Singapore)
- **Grab**, via aggregators (**not verified**):
  - "Principal Machine Learning Engineer, AI Platform (Foundation Model Post-Training)" (Dec 2025): "managing human annotation workflows for post-training data" and building human-in-the-loop evaluation suites. — [grab.careers](https://www.grab.careers/en/jobs/744000147146029/principal-machine-learning-engineer/)
  - "Intern, AI Engineer" (Malaysia, May 2026) on EvalsHub: golden datasets and LLM-as-judge evaluators. — [Space Talent](https://jobs.spacetalent.org/companies/grab-com/jobs/78904265-intern-ai-engineer)
  - "Lead Data Scientist – LLM post-training" (Aug 2025). — [jobr.pro](https://jobr.pro/job/26494041/lead-data-scientist-llm-post-training)
- **AI Singapore**, via the AISEAN aggregator (**not verified** on aisingapore.org/careers):
  - "Research Engineer, Agentic LLMs (SEA-LION)" (2026-06-01).
  - "Research Scientist, NLP / Multilingual LLM" (2026-05-01).
  - "AI Safety Researcher" (2026-05-16): "Evaluate LLMs for safety, bias, and cultural alignment across SEA languages".
  - Also IMDA "AI Safety Engineer, Red Teaming" (2026-04-20).
  - Source: [AISEAN jobs](https://aisean.org/jobs/)
- **SCB 10X (Thailand)**: "NLP Engineer, Thai Language AI", fine-tuning on Thai financial and banking domains (2026-05-03). — [AISEAN jobs](https://aisean.org/jobs/) (**not verified**)
- **Sarvam (secondary blog claims, not verified)**: hiring an RLHF lead, a post-training engineer and a multilingual data engineer (June 2026). — [ownyourcareer.in](https://www.ownyourcareer.in/blog/sarvam-ai-unicorn-india-foundation-model-engineer-hiring-june-2026). An older Mar 2025 X post advertised reasoning-team engineering, product and GTM roles, with nothing on annotation. — [Sarvam on X](https://x.com/SarvamAI/status/1906674089235784109)
- **Inception (G42)**: hiring focus is reportedly LLM researchers, evaluation engineers and Arabic NLP specialists. — [artificial.ae](https://artificial.ae/companies/inception/) (aggregator). A "Data Architect, Inception42, Abu Dhabi" listing also exists. — [artificial.ae](https://artificial.ae/jobs/inception42-data-architect-abu-dhabi/)
- **G42**: a "Vendor Management Lead" posting appeared on GulfTalent; the fetch returned 403, so **not verified**. — [GulfTalent](https://www.gulftalent.com/mobile/uae/jobs/vendor-management-lead-334936)

**HUMAIN, TII, QCRI, BharatGen**
- I found no lab-side annotation, AI-trainer or data-partnership postings for these four.
- HUMAIN on TheOrg: one snippet shows a "Data Annotation" team of 9 people. A later fetch showed 0 open jobs. This is a third-party org chart and may be stale. — [TheOrg](https://theorg.com/org/humain/teams/data-annotation)

**Vendor-side postings (they show demand but name no end client)**
- **Appen**: recruiting Gulf Arabic speech contributors resident in Saudi Arabia (CrowdGen account registered in KSA). — [alignlist](https://alignlist.com/jobs/appen-speech-data-collection-contributor-arabic-saudi-arabiaexternal-recruitment-e1913720)
- **Turing**: "QA Specialist Audio Annotation & Diarization (Arabic)" for an evaluation-grade Saudi audio dataset. — [Sabbar](https://sabbar.com/en/jobs/r-qa-specialist-audio-annotation-diarization-arabic/id-0e6aa21a-30d4-45ee-8fe0-fca820cf84fe)
- **Toloka**: remote "AI Trainer – Freelance Data Annotator". — [Sabbar](https://sabbar.com/en/jobs/r-ai-trainer-freelance-data-annotator/id-b05c4ae2-6c7c-4df8-8d6a-85ccc4818e01)
- **Bayanat Labs (Riyadh)** recruits:
  - "Medical Arabic Expert (Physician)", "Legal Arabic Expert (Lawyer)" and "Finance Arabic Expert" at "Premium rate". — [Bayanat Labs talent network](https://www.bayanatlabs.com/talent-network)
  - A "KSA In-Kingdom Data Annotator" for projects that "must stay inside Saudi Arabia for data-protection (PDPL) compliance". — [Bayanat Labs talent network](https://www.bayanatlabs.com/talent-network)
- **CNTXT AI**: an "Arabic/English Bilingual AI Data Annotator & Evaluator" contract role (Riyadh/remote), seen in a search snippet. The listing had expired when fetched, so **not verified**. — [Localization Academy](https://localizationacademy.com/job/arabic-english-bilingual-ai-data-annotator-evaluator-remote-hourly-contractor-f550f16e/)
- **India**: Indika AI posted data-annotator roles for Indian-language voice datasets (Feb 2026, marked filled). — [Catalitium](https://catalitium.com/jobs/162683-indika-ai-hiring-data-annotator-voice-datasets)

### Inferences
- **[Assessment]** In these regions, labs run expert data through vendors rather than in-house AI-trainer staff. The buyer-side contacts to target are post-training, evaluation and "agentic data & benchmarking" leads, not HR pipelines for annotators.
- **[Assessment]** The Sarvam "Chanakya" role mentions "doctrine documents" and "field reports". This points to a government or defence-adjacent domain, which falls inside PathWize's exclusions (defence and dual-use).

### Gaps
- Several leads could not be checked against employer career pages after the search budget ran out: LinkedIn, Naukri, Instahyre and MyCareersFuture searches; HUMAIN's own careers site; TII and QCRI/HBKU career pages; and the AI Singapore careers page.
- Two contract listings surfaced without a traceable source URL: "Cultural Data Annotator – MARS Project" (Singapore, Oct 2026, employer unnamed), and Meridial freelance AI-trainer ads (Indonesian/English, $65/h). Both are excluded as unverifiable.

---

## Q3. Which organisations have documented contracts or partnerships with external human-data or evaluation vendors?

### Takeaway
Documented vendor relationships:
- **Scale AI**: G42/Inception (SFT, RLHF, evaluation datasets) and Qatar's MCIT (government AI).
- **aiXplain**: an independent human evaluation of ALLaM for HUMAIN, per a competitor's write-up; also a BALSAM benchmark partner.
- **Tech Mahindra**: fine-tuning for Sahabat-AI.
- **MiniMax**: model development for HUMAIN.

No documented deals were found with Surge, Mercor, iMerit, Deccan AI or TELUS Digital for any covered lab.

### Cited Findings
- **Inception (G42) ↔ Scale AI**: SFT and RLHF post-training, plus jointly built industry evaluation datasets (government, investment, corporate, healthcare); UAE first, then international. — [Zawya](https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-ho8awi0i)
- **Qatar MCIT ↔ Scale AI**: five-year deal (Feb 2025) for 50+ government use cases by 2029. — [Mobile World Live](https://www.mobileworldlive.com/ai-cloud/qatar-looks-for-ai-boost-with-5-year-deal/)
- **HUMAIN ↔ aiXplain**: a vendor-comparison page says aiXplain "ran an independent human evaluation of ALLaM for HUMAIN". The page is by Bayanat Labs, a competitor, dated Oct/Nov 2026, and has not been confirmed by aiXplain or HUMAIN. — [Bayanat Labs](https://www.bayanatlabs.com/insights/arabic-llm-evaluation-companies)
  - The same page compares six Arabic LLM evaluation vendors: Bayanat Labs, aiXplain, Arabic.AI, Scale AI, Toloka and Welo Data. — [Bayanat Labs](https://www.bayanatlabs.com/insights/arabic-llm-evaluation-companies)
- **SDAIA/KSGAAL BALSAM ↔ aiXplain** (partner, alongside KAU, KSU, NYUAD and MBZUAI). — [Middle East AI News](https://www.middleeastainews.com/p/saudi-arabic-llm-index-launched-at-gain)
- **HUMAIN ↔ MiniMax**: humain-m3 was "commissioned in partnership with" MiniMax. — [Middle East AI News](https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic)
- **HUMAIN ↔ Accenture, McKinsey**: enterprise AI adoption partnerships (consulting channel). — [Scene Now](https://scenenow.com/Business/HUMAIN-Accenture-Partner-to-Scale-Enterprise-AI-in-Saudi-Arabia); [McKinsey/HUMAIN PR](https://www.wboc.com/online_features/press_releases/humain-and-mckinsey-announce-collaboration-to-accelerate-ai-transformations-across-saudi-arabia/article_cdcf0713-79d9-594f-81f7-d3e97ca8e4fd.html)
- **Sahabat-AI ↔ Tech Mahindra** (fine-tuning); **↔ AI Singapore, Nvidia** (partners). — [IT Brief](https://itbrief.asia/story/indosat-goto-launch-sahabat-ai-llm-for-five-languages); [NVIDIA](https://blogs.nvidia.com/blog/indonesia-tech-leaders-sovereign-ai)
- **Singapore Global AI Assurance Pilot** (Feb 2025, IMDA + AI Verify Foundation):
  - Paired 17 deployers with 16 specialist testers from Singapore and 8 other geographies, across industries including healthcare. — [AI Verify Foundation main report](https://assurance.aiverifyfoundation.sg/wp-content/uploads/2025/06/Assurance-Pilot-Main-Report.pdf)
  - **Paris-based PRISM Eval** tested Changi Airport Group's (CAG) AskMax. — [CAG × PRISM Eval case study](https://assurance.aiverifyfoundation.sg/wp-content/uploads/2025/05/CAG-x-Prism-Eval-x-Guardrails.pdf)
- **Supply-side presence in the Gulf** (no named lab client):
  - TELUS Digital opened a Dubai office in Jul 2025. — [TELUS Digital](https://www.telusdigital.com/about/newsroom/telus-digital-expands-into-middle-east-with-new-dubai-office)
  - Appen and Turing are recruiting Saudi Arabic contributors (see Q2).
- **Not found**: any documented deal between the covered labs and Surge, Mercor, iMerit, Deccan AI, Karya (named only in an unverified blog as hiring), TELUS Digital or Appen.

### Inferences
- **[Assessment]** Scale AI is the incumbent with Gulf sovereign actors (Inception, Qatar). A European expert provider is more likely to be added as a specialist or language-domain subcontractor, or as a second source, than to replace Scale.
- **[Assessment]** Saudi evaluation work is going to local or regional players (aiXplain, Bayanat Labs). They advertise physician, lawyer and finance Arabic experts, so Arabic-medical evaluation is already contested. PathWize's angle would be English and European-language clinical expertise, not Arabic.
- **[Assessment]** HUMAIN's MiniMax commission suggests it will buy model development from outside. That opens possible demand for independent evaluation of a Chinese-built model before it is released.

### Gaps
- No primary-source confirmation (from aiXplain or HUMAIN) of the ALLaM human-evaluation engagement.
- Not checked after the budget ran out: Scale AI's newsroom for further Gulf, India or SEA deals; Appen's, TELUS Digital's and Turing's case studies naming these labs.

---

## Q4. Which explicitly need non-local (European) languages or Western expert knowledge?

### Takeaway
The only explicit, documented European-language training need is **TII's Falcon-H1**, trained on 10 European languages. **MBZUAI-IFM** has a Paris lab. Western clinical and benchmark expertise is relevant in three places:
- G42 healthcare (M42's English clinical LLM Med42; Inception–Scale healthcare evaluation datasets).
- Fractal's Vaidya, which targets OpenAI's HealthBench (physician-rubric based).
- HUMAIN's ALLaM, now distributed globally via Microsoft.

The Saudi, Qatari, Singaporean, Indian and SEA national models are all built for local languages.

### Cited Findings
- Falcon-H1's native training languages include Czech, German, Spanish, French, Italian, Dutch, Polish, Portuguese, Romanian and Swedish. — [TII GitHub](https://github.com/tiiuae/Falcon-H1)
- Launch press coverage says Falcon-H1 "continues to support European-origin languages". — [Zawya PR](https://www.zawya.com/en/press-release/companies-news/middle-easts-leading-ai-powerhouse-tii-launches-two-new-ai-models-dbtkw18q)
- MBZUAI-IFM has a Paris lab facility, alongside Sunnyvale and Abu Dhabi. — [MBZUAI](https://mbzuai.ac.ae/news/mbzuai-launches-institute-of-foundation-models-and-establishes-silicon-valley-ai-lab/)
- Inception's Sherkala includes Russian and Turkish alongside Kazakh and English, showing that G42 builds sovereign bilingual models for other countries. — [Middle East AI News](https://www.middleeastainews.com/p/inception-and-mbzuai-unveil-kazakh)
- G42/Core42 is in an Italian compute partnership with iGenius. — [Core42](https://www.core42.ai/en/news/g42-and-igenius-join-forces-to-deploy-europes-largest-ai-compute-cluster)
- The Inception–Scale scope includes "healthcare" use cases and industry evaluation datasets, with international expansion planned. — [Zawya](https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-ho8awi0i)
- M42's Med42 was benchmarked on USMLE, a US licensing exam. — [Maginative](https://www.maginative.com/article/m42-health-unveils-med42-a-milestone-for-open-access-in-ai-for-healthcare/)
- MEDIC covers clinical safety, ethics and bias dimensions. — [arXiv](https://arxiv.org/html/2409.07314v2)
- Fractal Vaidya 2.0 is benchmarked on OpenAI's HealthBench (hard) and MedExpert. — [TechNode Global](https://technode.global/prnasia/fractal-launches-vaidya-2-0-outperforming-leading-frontier-models-on-healthcare-ai-benchmarks/)
- ALLaM's pretraining was English-heavy at first: the 7B preview used 4T English tokens before 1.2T Arabic/English. — [lmmarketcap](https://lmmarketcap.com/reports/allam) (secondary)
- ALLaM is being brought to Microsoft Foundry and M365 Copilot. — [MENA Startup Digest](https://menastartupdigest.com/?p=49384)
- QCRI reports a +7.6-point English capability gain for Fanar 2.0. — [arXiv 2603.16397](https://arxiv.org/abs/2603.16397)
- Local-only examples:
  - Sahabat-AI covers Indonesian and regional languages. — [Selular](https://selular.id/2025/06/indosat-dan-goto-luncurkan-layanan-chat-multibahasa-sahabat-ai-dengan-70-miliar-parameter/)
  - ThaiLLM is Thai only. — [NSTDA](https://www.nstda.or.th/en/news/news-years-2026/thaillm.html)
  - ILMU uses Malaysia-centric data. — [W.Media](https://w.media/ilmu-deep-dive-into-malaysias-first-homegrown-llm-with-prof-chan/)
  - Bhashini covers the 22 scheduled Indian languages. — [SiliconIndia](https://www.siliconindia.com/news/technology/bhashini-invites-partners-to-annotate-indian-language-data-for-ai-training-nid-237365-cid-2.html)

### Inferences
- **[Assessment]** TII (Falcon-H1 multilingual) is the best documented match for PathWize's European-language expert data, such as German, French, Italian or Polish STEM, medical, legal and finance SFT and preference data. However, no procurement signal or vendor relationship was found, so this would be cold outreach.
- **[Assessment]** For medical expertise, the strongest matches are:
  - M42 (English clinical LLM plus the MEDIC evaluation framework).
  - G42/Inception's healthcare evaluation datasets (through Scale or directly).
  - Fractal's Vaidya (HealthBench-style rubric work).
- **[Assessment]** Labs whose models are being globalised (HUMAIN via Microsoft, Inception internationally) will plausibly need non-Arabic evaluation. This is inference only; neither has published such a need.

### Gaps
- No lab in scope explicitly asks for Western legal or finance expert data in a public document or job ad that I found.
- Not researched after the budget ran out: MBZUAI BiMediX (Arabic–English medical) and the Paris IFM lab's specific data programmes.

---

## Q5. What are the procurement routes and named buyer teams, and are foreign/European vendors eligible?

### Takeaway
- **G42 (UAE)**: the clearest door for a foreign vendor is the Coupa supplier portal, which explicitly lets overseas suppliers register at no fee.
- **Saudi government procurement (Etimad)**: practically closed to a small EU firm without a Saudi presence. Bidders need MoC temporary registration or a Saudi agent, and the Regional HQ rule (15 FTE) applies. Saudi PDPL in-Kingdom data rules also apply.
- **India (Bhashini, AIKosh)**: geared to Indian-language domestic work; AIKosh is unpaid.
- **Singapore**: the NMLP has relied on unpaid partner content. The IMDA/AI Verify Global AI Assurance Sandbox is an open, international route for specialist testers.

### Cited Findings

**UAE**
- **G42 supplier portal (Coupa)**:
  - "Coupa is G42's dedicated procurement management platform." **Overseas suppliers "can register through the same link."** There are no registration fees. — [G42 Become a Supplier](https://www.g42.ai/collaborations/become-g42-supplier)
  - Requirements: a valid trade licence, NDA, bank letter and tax certificate. IT-category suppliers also complete an InfoSec questionnaire. Due diligence runs on Corestream (about 14 days). — [G42 Become a Supplier](https://www.g42.ai/collaborations/become-g42-supplier)
  - Registration covers the G42 Group **except M42, Presight, Khazna and Space42**. Contact: supplierregistration@g42.ai. — [G42 Become a Supplier](https://www.g42.ai/collaborations/become-g42-supplier)
  - A 2022 Coupa guide is also on file. — [G42 Coupa guide PDF](https://www.g42.ai/application/files/2317/4400/0402/How_To_-_G42_Coupa_Supplier_Portal.pdf)
- G42 uses an Inception AI tool in procurement (Jul 2025). — [WAM](https://www.wam.ae/en/article/bkhwzdj-g42-accelerates-procurement-efficiency-40-with-new)
- **Abu Dhabi Government Procurement Gate (ADGPG)** is used for Abu Dhabi government entities. Holders of an Abu Dhabi DED licence self-register; other suppliers submit an entity request. — [Abu Dhabi Media Office](https://www.mediaoffice.abudhabi/en/supplier-registration-in-abu-dhabi-government/)

**Saudi Arabia**
- **Etimad**:
  - "As a general rule, all government procurements must be listed on the Etimad Platform." Healthcare procurement runs via NUPCO. — [US trade.gov Country Commercial Guide, updated 2026-05-19](https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector)
  - Foreign suppliers without a MISA licence "must obtain a temporary registration from the Ministry of Commerce" or use a Saudi agent. — [trade.gov](https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector)
  - Since 1 Jan 2024, firms bidding on Etimad tenders must have a Saudi regional headquarters with 15 FTE in year one, 3 of them C-suite. — [trade.gov](https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector)
  - Other rules: local-content quotas, a 10% price preference for GCC products, and a requirement for foreign suppliers to train Saudi nationals. — [trade.gov](https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector)
  - Consultancy guides add MISA licence, CR and Saudization certificate requirements (secondary). — [Setup in Saudi](https://www.setupinsaudi.com/en/news/announcements/winning-government-contracts-in-saudi-what-foreign-companies-need-to-know)
- **PDPL in-Kingdom constraint**: "Some KSA projects require you to be based inside Saudi Arabia for data-protection (PDPL) reasons." Medical, legal and finance expert roles list Saudi residency as "preferred". — [Bayanat Labs](https://www.bayanatlabs.com/talent-network)
- **HUMAIN named buyer-side roles** (third-party org chart, may be stale):
  - Dirk Karl, Chief Procurement Officer
  - Shehram Jamal, Chief Product Officer for Data & Models
  - Yaser Al-Onaizan, Deputy CEO and Data & AI Models President
  - Mohammad Alzahrani, Head of Partnerships
  - Source: [TheOrg](https://theorg.com/org/humain/teams/data-annotation)
  - No HUMAIN supplier portal was found.

**India**
- **Bhashini RFE** (Aug 2025):
  - The Digital India Bhashini Division (MeitY) invited agencies to annotate and label datasets in 22 Indian languages for ASR, MT, TTS, OCR and transliteration. — [SiliconIndia](https://www.siliconindia.com/news/technology/bhashini-invites-partners-to-annotate-indian-language-data-for-ai-training-nid-237365-cid-2.html)
  - "All annotation work must be performed on Bhashini's in-house Data Capture and Curation Framework." — [SiliconIndia](https://www.siliconindia.com/news/technology/bhashini-invites-partners-to-annotate-indian-language-data-for-ai-training-nid-237365-cid-2.html)
  - One-year empanelment, extendable to two; bids due 28 Aug. Eligibility details were not in the article. — [SiliconIndia](https://www.siliconindia.com/news/technology/bhashini-invites-partners-to-annotate-indian-language-data-for-ai-training-nid-237365-cid-2.html)
- **AIKosh**:
  - Launched 6 Mar 2025. — [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2108961&reg=48&lang=2)
  - Its EOI invites dataset contributions (not paid procurement) from academia, startups, non-profits and CSOs. Data must be non-personal and anonymised and comply with DPDPA and NDSAP. — [IndiaAI](https://indiaai.gov.in/article/now-open-expression-of-interest-eoi-to-contribute-datasets-and-ai-artefacts-to-aikosh); [AIKosh EOI PDF](https://aikosh.indiaai.gov.in/static/datasets_EOI.pdf)
  - IndiaAI runs Data Annotator and Data Curator courses at NIELIT and ITI "IndiaAI Data Labs". — [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2108961&reg=48&lang=2)
  - A MeitY/DIC advertisement (INDAI/14/2025) mentions "AI Curation Units" under AIKosh and vendor empanelment as a deployment route. — [MeitY PDF](https://www.meity.gov.in/static/uploads/2026/05/a42b150e584503acf55bc6b6716b032b.pdf)
- Bhashadaan is Bhashini's crowdsourced data-contribution route. Bhashini is also integrated with GeM, India's Government e-Marketplace. — [Bureaucrats India](https://bureaucratsindia.in/news/tech-governance/bhashini-and-gem-join-hands-to-make-public-procurement-accessible-in-every-indian-language)
- Older example (2022): IIT Madras open tender for speech data collection and manual transcription in Indian languages. — [IIT Madras tender PDF](https://tenders.iitm.ac.in/sites/default/files/OpenTenderDataCollection.pdf)

**Singapore**
- **GeBIZ**: the MOF dataset lists open tenders since FY2021, with agency, supplier and award amount. No annotation-specific tender was found. — [data.gov.sg](https://data.gov.sg/datasets/d_acde1106003906a75c3fa052592f2fcb/view)
- **NMLP data**: so far drawn from open government records and partner contributions "for which no remuneration was required". — [MDDI](https://www.mddi.gov.sg/newsroom/pq-on-remuneration-for-national-multimodel-large-language-model-programme/)
- **Global AI Assurance Sandbox** (IMDA + AI Verify Foundation), the successor to the 2025 pilot:
  - Specialist testers are "technical testing firms" offering benchmarking, red-teaming and automated evaluators. — [AI Verify Foundation](https://aiverifyfoundation.sg/ai-assurance/)
  - Apply via "Submit Interest to Join"; testing is completed within 3 months. — [AI Verify Foundation](https://aiverifyfoundation.sg/ai-assurance/)
  - 30 applications, 12 geographies, 14 industries. Logo filenames suggest healthcare participants such as Changi Hospital, NTU LKC Medicine and Synapxe; this is an inference from images only. — [AI Verify Foundation](https://aiverifyfoundation.sg/ai-assurance/)
  - A Paris-based tester (PRISM Eval) took part in the pilot, so foreign testers are admitted in practice. — [CAG × PRISM Eval](https://assurance.aiverifyfoundation.sg/wp-content/uploads/2025/05/CAG-x-Prism-Eval-x-Guardrails.pdf)

**Qatar**
- No public vendor portal or tender for data was found. Scale AI's MCIT deal was a direct government agreement. — [Capacity](https://capacityglobal.com/news/article-scale-ai-qatar/)

### Inferences
- **[Assessment]** Fastest formal entry points for PathWize:
  1. Register on G42's Coupa portal (foreign vendors allowed). M42 is outside the central registration, so it needs a direct approach.
  2. Apply as a specialist tester to Singapore's Global AI Assurance Sandbox, offering clinical, legal or finance expert evaluation. It brings reputation and introductions to deployers, possibly healthcare ones, but likely little direct revenue.
  3. Go directly or through partners to MBZUAI-IFM's data and benchmarking leads, which are explicitly vendor-facing.
- **[Assessment]** Saudi Etimad is unrealistic without a Saudi entity. HUMAIN, a PIF company, likely runs its own procurement, and its Chief Procurement Officer and Data & Models leadership would be the targets. PDPL in-Kingdom rules may limit remote EU annotators to non-sensitive tasks, such as English or European-language evaluation and synthetic-data review.
- **[Assessment]** India's government channels (Bhashini, AIKosh, GeM) are built for Indian-language domestic suppliers and unpaid contributions. They are low fit for an EU vendor.

### Gaps
- Not verified: whether HUMAIN, TII, MBZUAI and QCRI have their own supplier portals.
- Not verified: the exact eligibility clauses of the Bhashini RFE (Indian registration, turnover). The RFE PDF was not retrieved.
- GeBIZ keyword searches ("annotation", "data curation", "LLM evaluation") could not be run directly.
- I could not confirm whether the Saudi RHQ rule has 2026 exemptions for small foreign service providers.

---

## Q6. What budget and funding signals exist?

### Takeaway
The large budgets are in the Gulf, but most of that money goes to compute and infrastructure: HUMAIN's AWS (more than $5B) and Infra ($1.2B) deals, and Stargate UAE (1 GW first phase). Model and data budgets are visible in India (BharatGen Rs 988.6 crore; 12 IndiaAI grantees) and Singapore (S$70M NMLP). The AI-specific spending of Qatar's Qai was not disclosed.

### Cited Findings
- **HUMAIN**:
  - AWS: a joint investment of more than $5B, including ALLaM development. — [Amazon](https://www.aboutamazon.com/news/company-news/amazon-aws-humain-ai-investment-in-saudi-arabia)
  - Infra financing framework of up to $1.2B (Jan 2026). — [MEA Tech Watch](https://meatechwatch.com/2026/01/23/humain-infra-announce-1-2bn-ai-projects-funding-plan/)
  - Aramco's 49% stake is completed. — [Entrepreneur ME](https://mena.entrepreneur.com/?p=42604)
- **Stargate UAE**: 1 GW first phase of a planned 5 GW campus, with 200 MW targeted for Q3 2026. — [Gulf News](https://gulfnews.com/business/markets/stargate-uae-first-phase-of-200mw-to-complete-by-2026-1.500310364)
- **Qai (QIA)**: investment amount not disclosed. — [PYMNTS](https://www.pymnts.com/artificial-intelligence-2/2025/qatar-launches-national-ai-firm-as-gulf-tech-investments-ramp-up/)
- **Scale AI–Qatar**: value not disclosed. — [Mobile World Live](https://www.mobileworldlive.com/ai-cloud/qatar-looks-for-ai-boost-with-5-year-deal/)
- **India**:
  - BharatGen: Rs 988.6 crore sanctioned. — [AIM](https://analyticsindiamag.com/ai-news-updates/bharatgen-tech-mahindra-and-fractal-selected-for-phase-2-of-indiaai-mission/)
  - IndiaAI compute: more than 34,000 GPUs at the May 2025 announcement. — [AIM](https://analyticsindiamag.com/ai-news-updates/with-34000-gpus-indiaai-mission-backs-soket-ai-gnani-ai-gan-ai-for-foundation-models)
  - REIL (Reliance–Meta): Rs 855 crore initial. — [Outlook Business](https://www.outlookbusiness.com/corporate/ril-metas-new-joint-venture-to-invest-855-crore-will-focus-on-developing-distributing-ai-services-in-india)
- **Sarvam funding (conflicting and unverified)**:
  - A blog claims a $1.5B valuation after an HCLTech-led $234M Series B in Jun 2026. — [ownyourcareer.in](https://www.ownyourcareer.in/blog/sarvam-ai-unicorn-india-foundation-model-engineer-hiring-june-2026)
  - Another site cites a "$3 billion valuation". — [CareerIndia](https://www.careerindia.com/news/sarvam-ai-hiring-surge-3-billion-valuation-tech-roles-2026-011-67087.html)
  - Both are **unverified**.
- **Krutrim**: layoffs were reportedly linked to funding delays and limited product traction (negative signal). — [Entrepreneur India](https://india.entrepreneur.com/news-and-trends/krutrims-layoffs-cloud-the-future-of-its-next-ai-model/496636)
- **Singapore**:
  - NMLP S$70M over two years (2023, older). — [IMDA](https://imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2023/sg-to-develop-southeast-asias-first-llm-ecosystem)
  - Sea AI CoE: at least 100 roles over 3 years. — [EDB](https://www.edb.gov.sg/en/about-edb/media-releases-publications/sea-establishes-ai-centre-in-singapore-for-innovation.html)
- **Thailand**:
  - ThaiLLM is funded by the DEF. — [NSTDA](https://www.nstda.or.th/en/news/news-years-2026/thaillm.html)
  - Siam AI committed 300M baht. — [Thaiger](https://thethaiger.com/news/business/thailand-invests-300-million-baht-in-thai-ai-language-model)

### Inferences
- **[Assessment]** Gulf money is abundant but compute-heavy. Spending on human data is not itemised anywhere. Its existence is inferred from the Scale AI deals and from vendor activity (Appen, Turing, Bayanat Labs, TELUS Digital Dubai).
- **[Assessment]** India's sovereign budgets are large but cost-sensitive. Krutrim's linguist layoffs and Fractal's synthetic-data approach suggest a preference for synthetic or automated data over premium human experts.

### Gaps
- No itemised human-data or annotation budgets were found for any organisation.
- Not verified: Sarvam's 2026 round, the IndiaAI incentive-pool size, and MBZUAI-IFM and TII budgets.

---

## Q7. How well does each organisation fit PathWize? [Assessment, built on the findings above]

### Takeaway
**[Assessment]** Priority targets:
1. **MBZUAI-IFM**: vendor-facing data and benchmarking leads; Paris lab; reasoning/RL trajectories; STEM and biochem PhD experts.
2. **G42 group**: Coupa registration is open to foreign vendors; Inception's healthcare evaluation datasets (Scale incumbent; a specialist subcontracting angle); **M42** for clinical evaluation, approached separately.
3. **TII**: Falcon-H1 trained on European languages; cold outreach.
4. **Fractal (Vaidya)**: medical rubric-based RL and evaluation.
5. **Singapore AI Assurance Sandbox**: credentialing channel for medical, legal and finance evaluation.

Lower fit: HUMAIN (Arabic-first, in-Kingdom, PDPL), QCRI and Qai, the NMLP/SEA-LION (unpaid data), Sarvam (Indic; the "doctrine" domain falls in the defence exclusion), Krutrim (shrinking), BharatGen and the IndiaAI grantees (Indic), and the SEA national models (local languages, in-house curation).

### Cited Findings
(Fit ratings rest on the facts cited in Q1–Q6. Key anchors:)
- IFM "Manage technical relationships with external data vendors and domain experts". — [zapply.jobs](https://zapply.jobs/jobs/722c6f66-4a65-47e2-a13a-08e7df6ce4b8/)
- G42 overseas suppliers "can register through the same link". — [G42](https://www.g42.ai/collaborations/become-g42-supplier)
- Falcon-H1's 10 European training languages. — [TII GitHub](https://github.com/tiiuae/Falcon-H1)
- Inception–Scale healthcare evaluation datasets. — [Zawya](https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-ho8awi0i)
- M42 MEDIC framework and leaderboard. — [Middle East AI News](https://www.middleeastainews.com/p/g42-m42-releases-medic-llm-leaderboard)
- Fractal's rubric-based RL for medical reasoning. — [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1109/)
- Paris-based PRISM Eval in Singapore's assurance pilot. — [AI Verify Foundation](https://assurance.aiverifyfoundation.sg/wp-content/uploads/2025/05/CAG-x-Prism-Eval-x-Guardrails.pdf)
- NMLP partner content was unremunerated. — [MDDI](https://www.mddi.gov.sg/newsroom/pq-on-remuneration-for-national-multimodel-large-language-model-programme/)
- PDPL in-Kingdom requirement for some KSA projects. — [Bayanat Labs](https://www.bayanatlabs.com/talent-network)
- Sarvam "doctrine documents / field reports". — [Sarvam careers](https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e)

### Inferences (fit matrix, all [Assessment])

| Organisation | Fit | Rationale | Entry route |
|---|---|---|---|
| MBZUAI-IFM (Abu Dhabi / Paris / Sunnyvale) | **High** | Explicit external vendor and domain-expert sourcing; reasoning and agentic data; academic culture suits Master/PhD/Professor experts; Paris lab | Direct contact with IFM data & benchmarking research leads; IFM "Collaborate" page ([ifm.ai/collaborate](https://ifm.ai/collaborate/)), content not reviewed |
| M42 (Med42 / MEDIC) | **High (medical)** | Clinical LLM evaluation framework; English clinical benchmarks; radiology and dermatology expertise could support MEDIC-style safety evaluation | Direct (M42 sits outside G42's Coupa registration) |
| G42 / Inception42 | **Medium–High** | Healthcare evaluation datasets and international expansion; Scale AI is the incumbent | Coupa supplier registration; pitch as specialist or second source |
| TII (Falcon) | **Medium–High** | Only documented European-language training need; no procurement signal | Cold outreach on European-language expert SFT and preference data |
| Fractal (Vaidya) | **Medium** | Medical reasoning; rubric-based RL; HealthBench focus; Indian cost sensitivity, synthetic-first | Direct; offer physician rubric authoring and evaluation |
| Singapore AI Assurance Sandbox (IMDA) | **Medium (channel)** | Foreign testers admitted; healthcare deployers present | "Submit Interest to Join" as a specialist tester |
| HUMAIN | **Low–Medium** | Arabic-first; PDPL in-Kingdom; MiniMax-built humain-m3 may need independent evaluation; global Microsoft distribution may require English evaluation | Named CPO and Data & Models leadership; no public portal found |
| Shopee / Sea, Grab | **Low** | In-house AI trainers and annotation; e-commerce and SEA languages | n/a |
| QCRI Fanar, Qai | **Low** | Fully in-house at QCRI; Qai reportedly not building LLMs | n/a |
| AI Singapore / NMLP, A*STAR MERaLiON | **Low** | SEA languages; unpaid partner data | n/a |
| Sarvam | **Low** | Indic focus; evaluation role touches "doctrine" (defence-adjacent, excluded) | n/a |
| Krutrim, BharatGen, Soket, Gnani, Gan.ai, Tech Mahindra | **Low** | Indic languages; domestic channels; Krutrim cutting linguists | n/a |
| Sahabat-AI, ThaiLLM/Typhoon, ILMU, Vietnam (FPT/Viettel/Zalo), Philippines | **Low** | Local languages; in-house or national curation | n/a |

- Competitive landscape PathWize would face in the Gulf:
  - Scale AI (incumbent with Inception and Qatar).
  - aiXplain (HUMAIN evaluation, BALSAM).
  - Bayanat Labs (Riyadh; physician, lawyer and finance Arabic experts).
  - CNTXT AI, Appen, Turing, Toloka, Welo Data and Arabic.AI.
  - TELUS Digital (Dubai).
- Differentiation should rest on the European languages and EU/Western clinical, legal and finance expertise that these regional vendors do not claim.

### Gaps
- No confirmation that any of these organisations currently buys European-language or Western expert data. The ratings are inference.
- Direct verification of contact persons (LinkedIn) and live postings could not be done after the search budget ran out. A follow-up session could cover:
  - HUMAIN, TII and QCRI career pages.
  - MBZUAI BiMediX.
  - GeBIZ and Etimad keyword searches.
  - KAUST.
  - Microsoft–G42.
  - Infosys, TCS and Wipro as buyers.
