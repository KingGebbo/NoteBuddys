# AI labs in South Korea, Japan and Taiwan: training-data demand and procurement channels (as of 12 Nov 2026), with fit for PathWize

Research note. The web-search budget ran out partway through, after about 25 searches and 30 page fetches. Coverage is therefore uneven. Korea's national programs and Japan's GENIAC/NEDO are covered from primary documents (MSIT/NIA call PDF, NEDO adoption lists). Many single companies are covered only thinly, especially in Japan (NTT, NEC, Fujitsu, ELYZA, Rakuten, LINE Yahoo, Kotoba, Ubitus, ABEJA, medical AI) and Taiwan (FoxBrain, Breeze, iKala, Appier, ASUS/Quanta/Pegatron). Those are listed under Gaps. Anything labeled "Assessment" is my inference, not a sourced fact.

---

## Q1: Company and program profiles: documented data needs, procurement channels, and fit

### Takeaway
In Korea, money for training data is concentrated in the government's foundation-model program. Three teams remain: LG AI Research, SK Telecom and Upstage. A much larger "frontier AI" data budget is proposed for 2027 (KRW 750bn for training data, to be routed as equity through the state bank KDB). In Japan, GENIAC/NEDO shifted in 2026 toward industrial, physical-AI and robotics data: 9 manufacturing-data themes, 9 data-ecosystem themes and 13 plus 2 robot-foundation-model themes, with named adoptees. Taiwan's activity is mostly government corpus-building in Traditional Chinese and local languages, with no visible annotation procurement. None of the sources I read documents demand for European-language or Western-expert data.

### Cited Findings

#### KOREA: national foundation-model program ("독자 AI 파운데이션 모델", short 독파모)
- **Stage-2 result, 18 Aug 2026.** Upstage, SK Telecom and LG AI Research advanced. Motif Technologies was eliminated, even though its Motif 3 scored 47 on the Artificial Analysis AAII index, the highest of the four teams. — [fnnews/Newsis, 18 Aug 2026](https://www.fnnews.com/news/202608181111487214)
- **Stage-2 scoring: expert review counts for 35%.** Benchmarks were 40 points, expert review 35 and user evaluation 25. Averages were 22.5, 28.8 and 17.6 respectively. — [fnnews, 18 Aug 2026](https://www.fnnews.com/news/202608181111487214)
  - Assessment: expert evaluation is a formal scoring pillar in this program, so the teams are structurally motivated to buy expert evaluation and benchmark work.
- **What reviewers credited each team for (stage 2):**
  - SKT consortium: "competitive math reasoning and multilingual performance", a tax-domain model, a manufacturing-agent demo, and the domain model "AX K1".
  - LG AI Research: work with "global international organizations", agentic-AI definition, trustworthy-AI efforts.
  - Upstage: link to the Daum portal and the Timely platform, NPU work with FuriosaAI.
  - Source: [fnnews, 18 Aug 2026](https://www.fnnews.com/news/202608181111487214)
- **LG model size.** A search-result summary says K-EXAONE 2.0 has 750B parameters, which would be the largest in Korea. I did not verify this in a fetched article. — [Asiae, 18 Aug 2026](https://view.asiae.co.kr/article/2026081812122580686), [Dealsite](https://dealsite.co.kr/articles/167396) (403 on fetch)
- **GPU support for the advancing teams** rises from about 768 to about 1,000 Nvidia B200 in H2 2026. — [fnnews](https://www.fnnews.com/news/202608181111487214)
- **Stage 3 timing.** The three teams improve their models until end of January 2027. The government plans to finish the stage-3 evaluation around mid-February 2027 and select two teams. Vice-minister Ryu said support for 2027 is being "completely re-examined". — [Ajunews, 9 Nov 2026](https://www.ajunews.com/view/20261109142854617); [Korea Daily, 17 Aug 2026](https://www.koreadaily.com/article/20260817204250205)
- **Stage-3 user evaluation.** MSIT and the teams are discussing a "double-blind" user evaluation. — [ZDNet Korea, 3 Nov 2026](https://zdnet.co.kr/view/?no=20261103163035)
- **Frontier AI 2027 budget proposal.** Total KRW 4.625tn: about KRW 3.85tn for Nvidia GPUs, **KRW 750bn for training data** and KRW 25bn for talent, all channeled as equity into a corporation.
  - The public call opens around December 2026 and closes February 2027. The 독파모 finalists are included and MSIT will "preferentially propose" frontier AI to them.
  - The corporation is targeted for H1 2027. The National Assembly Budget Office (NABO) projects about October 2027.
  - Source: [Ajunews, 9 Nov 2026](https://www.ajunews.com/view/20261109142854617)
- **How the data money would flow, and why it is contested.** The 독파모-related line was merged into a KRW 800bn "data competitiveness for frontier-class AI" program: KRW 750bn for frontier AI data and KRW 50bn for cybersecurity-AI training infrastructure. It moved from a KRW 25bn grant to a KRW 750bn equity contribution to KDB, which invests in domestic AI companies. The opposition calls the use "unclear". The Assembly is reviewing the budget until early December. — [search summary citing fnnews, Oct 2026](https://www.fnnews.com/news/202610020951155119); [Money Today, 4 Nov 2026](https://www.mt.co.kr/article/2026110423122682128)
- **2025 data support inside 독파모.** The opening announcement cited a KRW 15bn data-construction budget for 2025. Coverage also describes three funding lines: a KRW 10bn joint-purchase pool, KRW 20bn for broadcast video, and KRW 2.8bn per team for team-specific data. This is a secondary source and the relationship between the figures is unclear. — [Pebblous, Aug 2026](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- **Motif's support package (added as a team on 20 Feb 2026):** B200 768 GPUs, KRW 1.75bn for team-specific data construction and processing, and about KRW 10bn for joint data purchase and use. Its consortium included Crowdworks, Moreh, Ndotlight, SNU, KAIST, Hanyang Univ., Samil PwC and the Korea Heritage Agency. — [Hankyung, 20 Feb 2026](https://www.hankyung.com/article/202602204330i)
- **Opened datasets.** 29 dataset entries (22 unique on AI Hub, IDs 71890–71913) built in the program were opened on AI Hub (announced 27 Aug 2026), about 1.56T tokens. Contributors:
  - NC AI (10): incl. **Medical AI** (71909), **Multilingual pretraining** (71905), **Multilingual reading comprehension** (71906), reasoning-process seed, AI safety alignment.
  - Upstage (5): pretraining, agent, knowledge, user-preference, benchmark.
  - SKT (4): speech-text, image-text, post-training, red-teaming.
  - Naver Cloud (2): video.
  - LG (1): home-humanoid-robot scene understanding (71899).
  - Upstage's pretraining set was built at 19.7T tokens and released at about 1T. **Korean was only about 1.2% of its tokens.**
  - Source: [Pebblous analysis, Aug 2026](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- **Other data channels into the program.**
  - The National Library supplied 297 digitized books and 955 magazine articles to 독파모 participants.
  - A 10-type reasoning-data project and physical-AI data were also mentioned: 35 tasks proposed in July 2026, with consortia recruited, focused on tacit expert behavior data such as manufacturing know-how.
  - Source: [MTN, 25 Aug 2026](https://news.mtn.co.kr/news-detail/2026082516181527346)

#### KOREA: NIA / AI Hub / MSIT data-construction calls (2026)
- **Joint-use data support project, round 2** (MSIT notice 제2026-0877, 12 Aug 2026; issued by MSIT, NIA and K-DATA). Read in the primary PDF:
  - Total KRW 4.35bn, of which about KRW 2.15–2.2bn is government funding.
  - Two data fields: **certification-exam lectures** (national/professional qualifications, KRW 2.2bn) and **STEM lectures** (KRW 2.15bn).
  - Applicants: companies, universities, public bodies or associations, alone or in a consortium. Applications ran 12 Aug–2 Sep 2026 by email to ai_data@kdata.or.kr.
  - Required documents include a Korean business registration certificate, a corporate registry extract, and national and local tax certificates.
  - Evaluation criteria include "domain-expert cross-review" and CoT-data processing technique.
  - Data augmented with ChatGPT-type generative models is not allowed.
  - **Nationality rule:** "참여인력(크라우드 소싱 포함)은 원칙상 국내거주 대한민국 국적자로 제한". This means participating staff, crowdworkers included, must in principle be Korean nationals living in Korea. **Exception:** foreigners living abroad whose native language is a foreign language may take part, with prior approval and within the scope set by the coordination committee, when this is unavoidable for **language-related data** (speech, natural language). Foreigners living in Korea may also take part where unavoidable.
  - Source: [MSIT/NIA/K-DATA call PDF (thevc mirror)](https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85(2%EC%B0%A8)+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf)
- **AI model benchmark dataset construction, round 2** (NIA notice 2026-105, 12 Aug 2026):
  - KRW 1.2bn: 2 fields × KRW 600m government funding.
  - Consortium must include a firm with generative-AI development capability.
  - Submission only via NIA's DPMS (propose.nia.or.kr) with a Korean NPKI business certificate. Deadline 11 Sep 2026.
  - Source: [AI Hub notice](https://www.aihub.or.kr/aihubnews/bsnspblanc/view.do?currMenu=133&topMenu=103&nttSn=10557)
- **Reasoning data, 10 types** (MSIT/NIA, call since April 2026, KRW 6.6bn):
  - 5 LLM sets: multi-document reasoning, AI-for-Science research process, Korean tool-calling, web/GUI action, error augmentation/correction.
  - 5 physical-AI sets: manufacturing multi-sensor anomaly diagnosis, surface-defect analysis, robot task-failure recovery, humanoid physics simulation, asynchronous-process causality.
  - All outputs are to be published on AI Hub.
  - Source: [News1, 1 Apr 2026](https://www.news1.kr/amp/it-science/general-it/6121582); detail from a secondary page, [EommyDocs](https://www.eommydocs.com/data-analysis/public-sector/projects/korea-reasoning-data-2026/) (not cross-checked against the official call).
- **NIA 2026 IT budget:** above KRW 600bn across 31 large projects. **AI Hub operation KRW 30bn.** — [Digital Daily, 31 Mar 2026](https://m.ddaily.co.kr/page/view/2026033116251474140)
- **NIA "AI training-data integrated provision system"** (an SI project, about KRW 2.9bn, procured via 나라장터, July 2026). — [IT Daily](https://www.itdaily.kr/news/articleView.html?idxno=240162) (search snippet only)
- **Direction of NIA data-construction budgets (older, flagged).** The NIA division head said data-construction budgets are shrinking. Focus moves to quality and six sectors: media content, manufacturing, beauty/health, disaster safety, **finance/accounting**, **global cooperation**. Expert labelers would be assigned where needed. This interview dates from **28 Nov 2024**. — [AI Times](https://www.aitimes.com/news/articleView.html?idxno=165739)

#### KOREA: individual companies

**LG AI Research (EXAONE / K-EXAONE 2.0)**
- (a) Data needs:
  - Showed the "EXAONE Data Foundry" at ICML 2026. It auto-generates specialized, expert-level data and produced more than 10,000 expert data records per day in a pilot with the National Pension Service. LG claims at least 1,000× productivity. — [ZDNet Korea, 8 Jul 2026](https://zdnet.co.kr/view/?no=20260708100002)
  - Contributed a home-humanoid scene-understanding dataset to AI Hub. — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- (b) Jobs:
  - In June 2026 LG AI Research was hiring for 25 positions, mainly physical AI, robot foundation models, agent AI, and data and security roles. Specific titles and URLs were not verified. — [Newsis via Nate, 22 Jun 2026](https://m.news.nate.com/view/20260622n28626)
  - A "2026 Summer Internship" listing includes data scientist and ML engineer roles. — [Catch](https://www.catch.co.kr/NCS/RecruitInfoDetails/532672) (snippet only)
- Note: an "offensive" security model based on EXAONE is being built in the cyber-AI project. This is out of scope for PathWize. — [News1](https://www.news1.kr/it-science/cc-newmedia/6278791) (snippet)

**SK Telecom (A.X K2 / AX K1)**
- (a) Data needs:
  - Contributed four datasets to the national program: speech-text, image-text, LLM/LAM post-training, red-teaming. — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
  - Its multilingual performance and tax/manufacturing domain models were credited in stage 2. — [fnnews](https://www.fnnews.com/news/202608181111487214)
- (b) Jobs: an SK Careers posting (R241005) appeared for an "LLM training data purchase" query, but its content was **not verified**. — [SK Careers](https://www.skcareers.com/Recruit/Detail/R241005)

**Upstage (Solar / Solar Open)**
- Funding: USD 400M (KRW 560bn) announced 3 May 2026. The government-listed uses include the next Solar Pro run, compute, and **Korean-language data acquisition (including the Daum corpus)**. — [Pebblous, citing Hankyung / Digital Times, 3 May 2026](https://blog.pebblous.ai/report/upstage-national-fund-2026-05/en/)
- Daum deal (sources conflict):
  - Pebblous describes a January 2026 stock-swap MOU with Kakao.
  - Korea Herald describes a preliminary agreement to acquire AXZ, the Daum operator. — [Korea Herald](https://www.koreaherald.com/article/10665900)
- Synthetic data: Solar Open 100B used 4.5T synthetic tokens from Solar Pro 2. — [Pebblous, citing arXiv:2601.07022](https://blog.pebblous.ai/report/upstage-national-fund-2026-05/en/)
- (b) Job: **"Data Manager"** (Wanted via zighang), Gyeonggi, posted **30 Sep 2025**, now shown closed.
  - Duties: data collection, processing, evaluation, benchmark design, human-feedback loops, and coordinating with **external** teams to produce datasets.
  - Source: [zighang](https://zighang.com/recruitment/abc8da74-f9a8-4459-b82b-9149640b1160)
- Workforce MOU with Day1 Company (23 Jan 2026): Upstage provides datasets and evaluation systems. — [KoreaTechDesk](https://koreatechdesk.com/upstage-day1-company-ai-education-collaboration) (snippet)

**Naver Cloud (HyperCLOVA X)**
- Out of 독파모 (its data was still opened on AI Hub). — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- Leads the government cybersecurity foundation-model project with about 830TB of security data. **Out of scope for PathWize.** — [ZDNet Korea, 22 Sep 2026](https://zdnet.co.kr/view/?no=20260922161236)
- Joined Nvidia's "Nemotron" coalition, which shares pre- and post-training data, tasks and RL environments. — [Digital Daily, 9 Nov 2026](https://www.ddaily.co.kr/page/view/2026110914412377799) (snippet)

**Kakao (Kanana)**
- The Kanana stand-alone app and PC service closed on **15 Oct 2026**. Kakao refocused on AI inside KakaoTalk. — [Hankook Ilbo, 15 Sep 2026](https://www.hankookilbo.com/news/article/A2026091517040005335)
- (b) Job: **"LLM Research Engineer (Pre-training) (신입/경력)"**, Gyeonggi (Pangyo), posted 2/3 Oct 2026 (sources differ by one day), open until filled.
  - Includes "LLM 학습용 대규모 데이터 수집·생성 및 메타 정보 부착 기술 개발", i.e. developing technology to collect and generate large-scale LLM training data and attach metadata. This is a research role, not procurement.
  - Source: [zighang](https://zighang.com/recruitment/502ca2e0-e77c-48be-8d14-8c76098572e3)

**KT (Mi:dm K 2.5 Pro)**
- Gets data through the "K Data Alliance" (public bodies, academia, media, education). Already offers finance and legal domain services. Expanded from Korean and English to **Japanese and Chinese** (4 languages). — [ZDNet Korea, 26 Feb 2026](https://zdnet.co.kr/view/?no=20260226085930)
- In 2025 KT said all its data was bought or obtained through partnerships, and grey-licence data was excluded. — [fnnews, 3 Jul 2025](https://www.fnnews.com/news/202507031542066753) (older; snippet)

**NC AI (VARCO)**
- Eliminated earlier from 독파모. Built 10 opened datasets, including Medical AI and two **multilingual** sets. — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- No 2026 hiring or data-buying signal was found.

**Motif Technologies**
- Selected 20 Feb 2026, eliminated 18 Aug 2026. Crowdworks was a consortium member (details above). — [Hankyung](https://www.hankyung.com/article/202602204330i); [fnnews](https://www.fnnews.com/news/202608181111487214)

**Trillion Labs**
- Not selected in the Feb 2026 add-on round. — [Money Today, 20 Feb 2026](https://www.mt.co.kr/tech/2026/02/20/2026022016035860851)
- Its Wanted profile shows 0 openings and about 25 staff (snapshot date unclear). — [Wanted](https://www.wanted.co.kr/company/50202)

**Lunit (medical AI: radiology and pathology)**
- IR deck, Q1 2026 (read in the PDF):
  - "15+ full-time board-certified physician[s]".
  - "10+ million medical data collected for AI training".
  - "Large-scale medical data for R&D (N = +4 million cases)".
  - A cancer-screening **foundation model** roadmap with "AI customization using data provided from each site" and periodic core-model updates.
  - "Lunit International (former Volpara)", acquired May 2024.
  - Registered in Europe and 19+ countries (customer quote).
  - Source: [Lunit IR deck 2026.1Q](https://www.lunit.io/wp-content/uploads/2026/05/Lunit_IR-Deck_EN_2026.1Q.pdf)
- (b) Jobs: aggregators list 14–19 Lunit roles (e.g., Senior Data Platform Engineer, Seoul; Director of Clinical Deployment, US). No annotation or radiologist-labeler posting was visible. — [startup.jobs (Aug 2026)](https://startup.jobs/company/lunit) (403 on fetch; snippet only); [Glassdoor](https://www.glassdoor.com/Jobs/Lunit-Jobs-E4776470.htm)

#### JAPAN: GENIAC / NEDO 2026 (primary NEDO adoption lists)
- **GENIAC "Manufacturing data AI-Ready" call** (opened 27 Jan, closed 26 Feb 2026, adopted 13–14 May 2026). Nine adoptees:
  - AIONA (design knowledge)
  - iCrystal (process informatics)
  - SyntheticGestalt (small-molecule data)
  - **Stockmark** (unstructured manufacturing data, interview agent for tacit knowledge)
  - Hitachi (industrial data spaces)
  - **FastLabel** (structuring tacit knowledge of production technicians)
  - Fairy Devices (patrol-work quality data)
  - Hutzper (AI-driven manufacturing)
  - FLYWHEEL (AI-Ready tools)
  - Source: [NEDO list PDF](https://www.nedo.go.jp/content/800054839.pdf); [NEDO call list](https://www.nedo.go.jp/koubo/2026_list_05_03.html)
- **GENIAC "Data ecosystem" call** (opened 25 Mar, closed 23 Apr 2026, decided 2 Jul 2026; 36 applications, 9 adopted). Projects run up to 2 years within FY2026–28. Adoptees:
  1. AI Robot Association: robot motion data in real homes
  2. ELEMENTS + Kawasaki Heavy + Osaka Univ.: manufacturing multimodal data for physical AI
  3. **FANUC + FingerVision + Yaskawa**: visuo-tactile data for VTLA models
  4. **Kobe University: "AI-OP (AI robotic surgery)" multi-source data ecosystem**
  5. Komatsu + AIST: production planning
  6. STATION Ai: worker multimodal data for physical-AI robots
  7. DMG Mori + AIST + WALC: machine-tool data
  8. Hosei Univ. + Pacific Consultants + space-services cooperative: hybrid real/synthetic infrastructure-inspection datasets
  9. **Bears**: behavior data of skilled housekeeping staff
  - Source: [NEDO decision page](https://www.nedo.go.jp/koubo/CD3_100430.html); [NEDO adoption list PDF](https://www.nedo.go.jp/content/800057699.pdf)
- **GENIAC robot foundation models, round 1** (opened 20 Feb, closed 23 Mar 2026, decided 14 May 2026). 3 applications, 2 adopted; names not found.
  - Scope: robots that use public infrastructure (autonomous vehicles, drones, ships), including robot VLMs and **world models**.
  - Projects generally last 1 year, extendable to 3 with on-premise requirements.
  - Source: [NEDO CD3_100427](https://www.nedo.go.jp/koubo/CD3_100427.html)
- **GENIAC robot foundation models, round 2** (opened 18 May, closed 16 Jun 2026, decided 9 Sep 2026). 29 applications, 13 adopted. This was the first round open to multipurpose robots and humanoids. Adoptees:
  - Atom (humanoid tactile VLA)
  - **SB Intuitions** (failure-anticipating fast VLA for dual-arm production-line robots plus remote co-operation)
  - XNOVA (power-tool VLA)
  - KDDI (mobile manipulator/humanoid for retail logistics)
  - Telexistence
  - Highlanders (VLA and physical-state **world model** for car-manufacturing alignment)
  - Hitachi Construction Machinery
  - **FastLabel** (quadruped loco-manipulation and VLA for plant inspection)
  - **Preferred Networks + Preferred Robotics** (environment-understanding foundation model)
  - MW ("AI Data Factory" for large-scale behavior data in Japanese homes)
  - Muso Action
  - Mercari
  - ugo
  - Source: [NEDO CD3_100434](https://www.nedo.go.jp/koubo/CD3_100434.html); [adoption list PDF](https://www.nedo.go.jp/content/800068757.pdf)
- **GENIAC compute support, phase 4:** 16 foundation-model themes adopted 4 Jun 2026. The list was not read because METI blocked the fetch. — [METI press title](https://www.meti.go.jp/press/2026/06/20260604003/20260604003.html); [NEDO call list](https://www.nedo.go.jp/koubo/2026_list_05_03.html)
- **No NEDO AI call was open in November 2026.** The last deadline on NEDO's FY2026 AI call list is 24 Aug 2026. — [NEDO FY2026 AI call list](https://www.nedo.go.jp/koubo/2026_list_05_03.html)
- **Eligibility.** NEDO pages list applicants as "企業（団体等を含む）、大学等" (companies incl. organizations, and universities). They say nothing explicit about foreign firms. — [NEDO CD3_100430](https://www.nedo.go.jp/koubo/CD3_100430.html)
- **National physical-AI model, "Noetra"** (SoftBank Corp., Sony, NEC, Honda, with AIST):
  - Selected 30 Jun 2026 under NEDO's "multimodal foundation model for AI robots / physical AI" program.
  - ¥387.3bn in subsidies this fiscal year and about ¥1tn over 5 years.
  - Data sources cited by the minister: elderly care, disaster response, manufacturing sites, Fukushima decommissioning.
  - Seeks about 40 further companies (autos, electronics, logistics, telecom, IT, finance).
  - Source: [Asia Times, Jul 2026](https://asiatimes.com/2026/07/japan-rallies-tech-giant-alliance-to-build-sovereign-ai/)
  - Related: a separate NEDO P26013 survey contract went to BCG, with Deloitte Tohmatsu, Nikkei BP and Hakuhodo as subcontractors (decided 31 Aug 2026). — [NEDO CD3_100437](https://www.nedo.go.jp/koubo/CD3_100437.html)
  - Naming conflict: the April 2026 venture is reported as "Japan AI Foundation Model Development" (SoftBank, NEC, Honda, Sony, plus minority investors Nippon Steel, Kobe Steel, MUFG, SMBC, Mizuho). I could not confirm how it relates to "Noetra"; it is likely the same vehicle but this is unverified. — [Seoul Economic Daily, 12 Apr 2026](https://en.sedaily.com/finance/2026/04/12/softbank-nec-honda-sony-form-japan-ai-alliance); [TechWire Asia](https://techwireasia.com/2026/04/japan-physical-ai-softbank-nec-honda-sony/)

#### JAPAN: individual companies
**Sakana AI**
- The careers page lists 39 roles. None is for annotation, data procurement or AI trainers. Data and evaluation-adjacent roles:
  - [Data Engineer (Product)](https://sakana.ai/careers/data-engineer-product/)
  - [Member of Technical Staff (LLM Development)](https://sakana.ai/careers/member-of-technical-staff-llm-development/): pre-, mid- and post-training plus evaluation
  - [Software Engineer (R&D)](https://jobs.luxcapital.com/companies/sakana-ai-2/jobs/84582993-software-engineer-research-and-development): data pipelines and benchmarking, Tokyo, June 2026
  - Partner Alliances Manager ISV/SI
  - Source: [Sakana careers](https://sakana.ai/careers/)
- An IP Specialist role covers "defense and intelligence AI R&D". **This is a PathWize red flag** (no defense work). — [Sakana careers](https://sakana.ai/careers/)

**SB Intuitions (SoftBank; Sarashina)**
- Sarashina3 mini/nano released 30 Jun 2026: about **30T pretraining tokens, mainly Japanese and English**, plus synthetic data. SB Intuitions built a **large in-house Japanese annotation/evaluation organization** with dedicated evaluators and specialist teams, used multi-stage RL, and mentions no external vendors. — [SB Intuitions blog, 30 Jun 2026](https://www.sbintuitions.co.jp/blog/entry/2026/06/30/100000)
- Sarashina3 translate (JA↔EN) used human preference and severity annotation. — [SB Intuitions blog, 14 Jul 2026](https://www.sbintuitions.co.jp/blog/entry/2026/07/14/100002) (snippet)
- **Med-Sarashina** medical LLM: joint research since June 2026 with Juntendo University (clinical-reasoning case data built under Juntendo supervision, physician verification), SoftBank and HEMILLIONS. — [SB Intuitions press, 10 Aug 2026](https://www.sbintuitions.co.jp/news/press/20260810_01/)
- Also adopted for GENIAC robot foundation models (above).
- About 23 openings on Talentio as of 4 Oct 2026 (third-party count; titles not verified). — [techgym](https://techgym.jp/column/startup/sb-intuitions-hyoban/)

**NII LLM-jp**
- LLM-jp-4.1 released 28 Sep 2026. — [LLM-jp](https://llm-jp.nii.ac.jp/news/llm-jp-4-1/)
- Medical LLM "SIP-jmed-llm-4", built on LLM-jp-4: above 90% on the Japanese medical licensing exam benchmark, plus a knowledge graph of about 30k cases. A limited trial with physicians is planned within FY2026. — [LLM-jp news, 26 Oct 2026](https://llm-jp.nii.ac.jp/news/20261026/)

**Stockmark, FastLabel, PFN, KDDI, Mercari, Hitachi:** GENIAC 2026 adoptees (see lists above).

#### TAIWAN
- **MODA "Sovereign AI Training Corpus".** Launched end of 2025.
  - January 2026: about 1.1bn tokens. Applicants for access included TAIDE and Google DeepMind. — [MODA press release, Mar 2026](https://moda.gov.tw/en/press/press-releases/19082); [Taipei Times, 28 Jan 2026](https://www.taipeitimes.com/News/taiwan/archives/2026/01/28/2003851350)
  - September 2026: more than 5,000 datasets and 2.1bn tokens (a later feature says 2.2bn). Topics include law and healthcare.
  - On 15 Sep 2026 MODA invited publishers, writers and e-book platforms to contribute under consent/opt-out arrangements. The corpus is used by AI teams in Taiwan, Japan and the US.
  - Source: [Taipei Times, 15 Sep 2026](https://www.taipeitimes.com/News/taiwan/archives/2026/09/15/2003864319); [Taipei Times feature, 24 Sep 2026](https://www.taipeitimes.com/News/feat/archives/2026/09/24/2003864793)
- **TAIDE.** Led by NSTC and run by NIAR with Academia Sinica and universities. It adapts foreign open-weight models: the current Gemma-3-TAIDE-12B-Chat-2602 (February 2026) used about 22B Traditional Chinese tokens of mid-training. Downloads exceeded 260k by June 2026. — [Taipei Times, 24 Sep 2026](https://www.taipeitimes.com/News/feat/archives/2026/09/24/2003864793); [Cloud Insight (secondary)](https://cloudinsight.cc/en/blog/taiwan-llm)
- **Other MODA programs:** an NT$10bn AI-startup investment program, a GPU pool that supported 186 enterprises and 266+ models by end-2025, and "Demo Day" matchmaking incl. healthcare/hospital IT. — [MODA](https://moda.gov.tw/en/press/press-releases/19082)
- **MediaTek Research (Breeze):** Llama-Breeze2-8B (2025), Traditional-Chinese optimized. No 2026 data-sourcing information was found. — [Cloud Insight (secondary)](https://cloudinsight.cc/en/blog/taiwan-llm)

### Inferences (Assessment, not sourced fact)
- **Korea, 독파모 finalists (LG / SKT / Upstage): fit medium-high but indirect.**
  - Why: expert review is 35% of stage scoring, there is a large 2027 data budget, and SKT's multilingual performance is explicitly scored.
  - However: national-program data spending runs through Korean consortia and agencies (NIA/K-DATA) under nationality rules. PathWize's realistic route is direct commercial work for the labs' own evaluation and post-training (bilingual EN/EU-language expert evaluation, Western law/finance/medicine reasoning sets), or subcontracting under Crowdworks or SelectStar.
  - Timing: the 2027 frontier-AI tender (call December 2026 to February 2027) and the KRW 750bn data line are the main "watch" items.
- **KT: fit medium.** It already sells finance and legal domain services and now covers Japanese and Chinese, but no European-language need is documented.
- **Lunit: fit medium for radiology.** It has in-house physicians and large data, and sells in Europe. A pitch would be EU-radiologist validation and site-specific annotation for European customers (Lunit International, ex-Volpara). This is speculative: no outsourcing signal was found.
- **Japan, GENIAC: fit is best through adoptees as subcontractors, not as a direct bidder.**
  - Most relevant to PathWize: Kobe Univ. AI-OP (surgical/medical data); SB Intuitions (Med-Sarashina, dual-arm VLA); Highlanders and PFN (world models); Bears and MW (expert behavior data).
  - FastLabel and Stockmark are more likely competitors or partners than clients.
- **Sakana AI: fit low** (no data roles; defense exposure).
- **Taiwan: fit low.** The focus is Traditional Chinese and local-language corpora, built mostly from government and publisher donations, with no annotation procurement visible.
- **Exclude for PathWize:** Naver Cloud and LG security/offense models, the KRW 50bn cyber-AI line in 2027, and Sakana defense work.

### Gaps
- **Not found because the search budget was exhausted:**
  - 2026 data needs and job postings for Samsung Research (Gauss), Konan Technology, VUNO, NC AI (2026).
  - Japan: NTT (tsuzumi), NEC (cotomi), Fujitsu (Takane), ELYZA, Rakuten AI, LINE Yahoo, Kotoba Technologies, Ubitus, ABEJA, AI Medical Service, LPIXEL, AIST.
  - Taiwan: Foxconn FoxBrain, Academia Sinica, ASUS, Quanta, Pegatron, iKala, Appier.
- **Not identified:** the two round-1 robot-foundation-model adoptees and the 16 GENIAC phase-4 compute adoptees (the METI pages were not readable).
- **Unconfirmed:** that "Noetra" and "Japan AI Foundation Model Development" are the same vehicle.
- **Unknown:** the stage-3 independent data budget for 독파모 teams in H2 2026, and how the KRW 750bn frontier data equity will actually be spent (licensing vs. construction vs. purchase from vendors).

---

## Q2: Open roles for data procurement, partnerships, vendor management, AI trainers, multilingual data, and medical/legal annotation

### Takeaway
I found **no verified open posting** at any of the target labs in Korea, Japan or Taiwan specifically for data procurement, vendor management, AI trainers or medical/legal annotation. The closest are research or data-ops roles that touch data collection (Kakao, Upstage, Sakana) and in-house annotation teams (SB Intuitions). The labs appear to keep annotation in-house or route it through domestic vendors.

### Cited Findings
- Verified job postings:

| Company | Title | Location | Date / status | Data relevance | URL |
|---|---|---|---|---|---|
| Kakao | LLM Research Engineer (Pre-training) (신입/경력) | Gyeonggi (Pangyo) | posted 2/3 Oct 2026, open until filled | "large-scale data collection/generation for LLM training + metadata" | [zighang](https://zighang.com/recruitment/502ca2e0-e77c-48be-8d14-8c76098572e3) |
| Upstage | Data Manager | Gyeonggi | posted 30 Sep 2025, shown closed (older) | data collection/eval/benchmarks; work with external teams | [zighang](https://zighang.com/recruitment/abc8da74-f9a8-4459-b82b-9149640b1160) |
| Sakana AI | Data Engineer (Product) | Tokyo (hybrid) | listed Nov 2026, no date shown | data infrastructure, LLM logs | [sakana.ai](https://sakana.ai/careers/data-engineer-product/) |
| Sakana AI | Member of Technical Staff (LLM Development) | Tokyo | listed Nov 2026 | pre/post-training + evaluation | [sakana.ai](https://sakana.ai/careers/member-of-technical-staff-llm-development/) |
| Sakana AI | Software Engineer (R&D) | Tokyo | June 2026 | data pipelines, benchmarking | [Lux Capital jobs](https://jobs.luxcapital.com/companies/sakana-ai-2/jobs/84582993-software-engineer-research-and-development) |
| Sakana AI | Partner Alliances Manager ISV / SI | Tokyo | listed Nov 2026 | sales partnerships, not data | [sakana.ai/careers](https://sakana.ai/careers/) |

- **Not verified** (title or count only):
  - LG AI Research: 25 roles (June 2026) incl. data and security. — [Nate/Newsis](https://m.news.nate.com/view/20260622n28626)
  - SK Careers posting R241005: content not read. — [SK Careers](https://www.skcareers.com/Recruit/Detail/R241005)
  - SB Intuitions: about 23 openings (4 Oct 2026). — [techgym](https://techgym.jp/column/startup/sb-intuitions-hyoban/)
  - SelectStar: 6 postings in H2 2026, data manager/analyst/AI engineer. — [Jobplanet](https://www.jobplanet.co.kr/companies/389186/job_postings/%EC%85%80%EB%A0%89%ED%8A%B8%EC%8A%A4%ED%83%80) (403)
  - Lunit: 14–19 roles, none annotation-related visible. — [Glassdoor](https://www.glassdoor.com/Jobs/Lunit-Jobs-E4776470.htm)
- **Closed, older vendor-side postings** (data labeling ops at AIMMO, Romin, Allbigdat, Deep Natural) show typical Korean "data manager / labeling ops" titles. — [Wanted AIMMO](https://www.wanted.co.kr/wd/30147); [Wanted Romin](https://www.wanted.co.kr/wd/194613); [Wanted Allbigdat](https://www.wanted.co.kr/wd/254966)
- **In-house annotation model:** SB Intuitions runs a "large in-house Japanese annotation/evaluation organization". — [SB Intuitions blog](https://www.sbintuitions.co.jp/blog/entry/2026/06/30/100000)

### Inferences (Assessment)
- Korean and Japanese labs seem to hire data **engineers/managers** in-house and buy human data via domestic vendors or government programs, not through "data procurement manager" roles. For PathWize, job boards are a weak lead source here. Direct outreach to post-training and evaluation leads, plus domestic vendor partnerships, are likely more productive.
- Search terms that surfaced relevant roles: "데이터 매니저", "학습데이터셋 매니저", "LLM Research Engineer (Pre-training)" (KR); "Data Engineer", "MTS LLM Development" (Sakana).

### Gaps
- Not checked (search budget exhausted): Wanted, Saramin, JobKorea, Rocketpunch, Wantedly, Green, doda, BizReach, 104.com.tw, CakeResume, and a systematic LinkedIn scan.
- No posting found for medical or legal annotators at Lunit, VUNO, AI Medical Service or LPIXEL; this is not proof that none exist.

---

## Q3: Explicit demand for European languages, Western legal/medical/finance knowledge, or expert evaluation from abroad

### Takeaway
**No source documents an explicit need for European-language data or Western professional expertise** at these labs. Indirect signals are multilingual capability being scored (SKT), multilingual dataset construction (NC AI), JA/EN translation preference data (SB Intuitions), and Korean rules that allow foreign native speakers abroad for language data.

### Cited Findings
- SKT's stage-2 evaluation credited "multilingual performance". — [fnnews](https://www.fnnews.com/news/202608181111487214)
- LG was credited for work with "global international organizations". — [fnnews](https://www.fnnews.com/news/202608181111487214)
- NC AI built "Multilingual pretraining" and "Multilingual reading comprehension" datasets for the national program. — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- Upstage's opened pretraining set is only about 1.2% Korean, i.e. predominantly non-Korean (language mix not detailed). — [Pebblous](https://blog.pebblous.ai/report/dokpamo-training-data-aihub-open-2026-08/ko/)
- KT Mi:dm covers Korean, English, Japanese and Chinese. — [ZDNet Korea](https://zdnet.co.kr/view/?no=20260226085930)
- Sarashina3 is mainly Japanese and English. Sarashina3 translate used human pairwise preference annotation. — [SB Intuitions blog](https://www.sbintuitions.co.jp/blog/entry/2026/06/30/100000); [blog, 14 Jul 2026](https://www.sbintuitions.co.jp/blog/entry/2026/07/14/100002)
- The Korean MSIT/NIA call allows **foreigners abroad whose native language is foreign** to work on language data, with prior approval. Otherwise staff and crowdworkers must be Korean nationals living in Korea. — [call PDF](https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85(2%EC%B0%A8)+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf)
- Lunit is registered in Europe and 19+ countries and owns ex-Volpara (Lunit International). — [Lunit IR deck](https://www.lunit.io/wp-content/uploads/2026/05/Lunit_IR-Deck_EN_2026.1Q.pdf)

### Inferences (Assessment)
- The pitch to these labs would have to be built rather than answered. Examples:
  - EU-language evaluation for labs going global (SKT's multilingual scoring; KT's and Upstage's global ambitions).
  - Western law/finance/medicine benchmark and evaluation sets for "frontier-class" claims.
  - EU-radiologist reads for Lunit's European deployments.
- The Korean "foreign native-speaker exception" is the only documented formal door for non-Korean experts inside government data projects. It is limited to language data and requires approval.

### Gaps
- No primary statements from lab leaders about European languages. Japanese and Taiwanese labs' multilingual plans beyond EN/JA/ZH were not researched.

---

## Q4: Public procurement channels for training data and whether foreign firms can bid or join consortia

### Takeaway
- **Korea** has the most structured channels: MSIT/NIA/K-DATA calls via DPMS, email or 나라장터, and AI Hub. They effectively require a Korean legal entity (business registration, NPKI certificate, tax certificates) and Korean-national staff, with a narrow language-data exception. Foreign firms can realistically only take part as subcontractors or experts approved through a Korean prime.
- **Japan**: GENIAC/NEDO calls are open to "companies and universities". No AI call was open in November 2026.
- **Taiwan**: data comes from government and donated corpora, not tendered annotation.

### Cited Findings
- **Korea, eligibility evidence:**
  - Required documents are a business registration certificate, corporate registry extract, seal certificate, and national and local tax certificates. Submission is by email to K-DATA.
  - Staff and crowdworkers must be Korean nationals living in Korea, with the language-data exception for foreign native speakers.
  - Source: [MSIT call 2026-0877 PDF](https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85(2%EC%B0%A8)+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf)
  - NIA's benchmark call requires a NPKI business certificate and submission via DPMS (propose.nia.or.kr). — [AI Hub notice](https://www.aihub.or.kr/aihubnews/bsnspblanc/view.do?currMenu=133&topMenu=103&nttSn=10557)
- **Korea, cost-sharing:** government covers up to 75% of total cost for SMEs, 70% for mid-sized firms, 50% for large firms, and 100% for non-profits. — [call PDF](https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85(2%EC%B0%A8)+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf)
- **Korea, 2026 calls and budgets found:**

| Call | Budget | Timing / channel | Source |
|---|---|---|---|
| Joint-use data, round 2 | KRW 4.35bn | 12 Aug – 2 Sep 2026 | [call PDF](https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85(2%EC%B0%A8)+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf) |
| Benchmark datasets, round 2 | KRW 1.2bn | deadline 11 Sep 2026 | [AI Hub](https://www.aihub.or.kr/aihubnews/bsnspblanc/view.do?currMenu=133&topMenu=103&nttSn=10557) |
| Reasoning data | KRW 6.6bn | call since April 2026 | [News1](https://www.news1.kr/amp/it-science/general-it/6121582) |
| AI Hub operation | KRW 30bn | 2026 | [Digital Daily](https://m.ddaily.co.kr/page/view/2026033116251474140) |
| Data integrated provision system (SI) | KRW 2.9bn | 나라장터 | [IT Daily](https://www.itdaily.kr/news/articleView.html?idxno=240162) |
| 2027 frontier AI data (proposed) | KRW 750bn | KDB equity, call Dec 2026 – Feb 2027 | [Ajunews](https://www.ajunews.com/view/20261109142854617) |

- **Japan, GENIAC/NEDO:**
  - Applicants: "企業（団体等を含む）、大学等". — [NEDO](https://www.nedo.go.jp/koubo/CD3_100430.html)
  - Every FY2026 AI call had closed by 24 Aug 2026. — [NEDO call list](https://www.nedo.go.jp/koubo/2026_list_05_03.html)
  - Data-ecosystem projects run up to 2 years within FY2026–28; robot projects 1 year, extendable to 3. — [NEDO CD3_100430](https://www.nedo.go.jp/koubo/CD3_100430.html); [NEDO CD3_100427](https://www.nedo.go.jp/koubo/CD3_100427.html)
  - METI published a document on future GENIAC calls (26 Dec 2025, revised 9 Jan 2026) that I could not read (403). — [METI PDF](https://www.meti.go.jp/policy/mono_info_service/joho/post5g/pdf/20260109_GENIAC.pdf)
  - Noetra is recruiting about 40 member companies. — [Asia Times](https://asiatimes.com/2026/07/japan-rallies-tech-giant-alliance-to-build-sovereign-ai/)
- **Taiwan:**
  - The corpus is built from 200+ agencies' open data plus publisher and author contributions (consent/opt-out). — [Taipei Times](https://www.taipeitimes.com/News/taiwan/archives/2026/09/15/2003864319); [Chambers 2026 (snippet)](https://practiceguides.chambers.com/practice-guides/ai-intellectual-property-2026/taiwan/trends-and-developments)
  - MODA "Demo Day" matchmaking. — [MODA](https://moda.gov.tw/en/press/press-releases/19082)
  - No annotation tender was found.

### Inferences (Assessment)
- **Korea:** without a Korean subsidiary, PathWize cannot lead a bid. Options are:
  - (i) partner with Crowdworks or SelectStar as a foreign expert or language subcontractor, using the language-data exception;
  - (ii) sell directly to LG, SKT or Upstage out of their own or KDB-funded budgets, where commercial contracts are not bound by the call's nationality rule (this is my inference; check contract terms);
  - (iii) watch the 2027 frontier-AI data deployment.
- **Japan:** NEDO commissioning or subsidy generally assumes a Japan-based entity. This was not stated on the pages read, so verify the 募集要項. The practical path is subcontracting to GENIAC adoptees (Kobe Univ. AI-OP, SB Intuitions, PFN, Highlanders, MW, Bears) or joining Noetra's partner network via a Japanese partner.
- **Taiwan:** low priority for procurement.

### Gaps
- No explicit statement found on whether NEDO accepts foreign-registered entities.
- No full 2026 AI Hub "AI 학습용 데이터 구축 사업" (classic large-scale construction) budget figure found. Only individual calls, plus a 2024 statement that budgets are shrinking.
- KONEPS (나라장터) listings were not searched directly.
- No Taiwan NSTC or MODA tender data was found.

---

## Q5: Domestic data vendors fronting these programs (brief)

### Takeaway
Crowdworks and SelectStar front the Korean national program. FastLabel and Stockmark are GENIAC adoptees in Japan. These are likely partners or competitors for PathWize rather than clients.

### Cited Findings
- **Crowdworks:**
  - Member of the Motif consortium (독파모, February 2026). — [Hankyung](https://www.hankyung.com/article/202602204330i)
  - Runs the "CrowdJobs" side-job platform and physical-AI data-engineer academy courses. — [CrowdJobs](https://jobs.crowdworks.kr/); [Crowdworks AI edu](https://aiedu.crowdworks.ai/arc)
- **SelectStar:** 6 postings in H2 2026 (data manager/analyst/AI engineer) on Jobplanet, not verified. A closed "AI Researcher" role defined LLM evaluation metrics. — [Wanted 222017](https://www.wanted.co.kr/wd/222017)
- **FastLabel:** adopted twice in GENIAC 2026 (manufacturing tacit-knowledge data; quadruped robot VLA). — [NEDO PDF (manufacturing)](https://www.nedo.go.jp/content/800054839.pdf); [NEDO PDF (robots)](https://www.nedo.go.jp/content/800068757.pdf)
- **Stockmark:** GENIAC manufacturing AI-Ready adoptee. — [NEDO PDF](https://www.nedo.go.jp/content/800054839.pdf)
- **Japanese annotation outsourcing:** guides name Scale AI, Labelbox, FastLabel, Appen and Toloka as main players. LLM answer-writing requires native speakers and domain knowledge. — [AI Souken 2026](https://www.ai-souken.com/article/annotation-overview); [atglobal](https://www.atglobal.co.jp/blog/ai-training-data-creation/)

### Inferences (Assessment)
- The Korean prime vendors must staff Korean nationals by default. That creates a niche for an EU partner who can supply approved foreign native-speaker or expert reviewers for multilingual and Western-domain tasks.

### Gaps
- Testworks, Datamaker, Flitto, Human Science, Baobab and Annotation One were not researched (another researcher covers vendors).
