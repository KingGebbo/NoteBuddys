# Gap round: Chinese embodied-AI, medical/legal-AI and AI-lab demand for human/training data (status 12 Nov 2026)

Scope and method: This round only closes gaps left by the first round (`research_notes/Asiatische AI Labs mit Datenbedarf/china_startups_embodied.md` and the report section "Lücken / nicht verifiziert"). Findings already in the first round (Moonshot, Shengshu procurement roles of Jul/Aug 2026, MiniMax prospectus, Baichuan's medical part-time roles, JD/Genrobot/ChinaTalk embodied economics, Manus' Oct 2026 round) are not repeated unless updated. 30 WebSearch calls were used (the hard limit). Sources were then read with direct fetches: DataHub (datahub.ac.cn, a third-party mirror of Feishu, BOSS直聘 and Moka postings), LinkedIn guest job pages, Chinese press, and gov.cn. LinkedIn returned HTTP 429 after about 10 calls. cntechpost.com and yicaiglobal.com could not be reached from this session. BOSS直聘 and the Shanghai AI Lab careers page render only through JavaScript, so their listings could not be read. Labels used below:
- "Seen via snippet": the fact comes from a search-result summary and the page was not opened.
- "DataHub list": the posting title and date come from the DataHub company list, and the original posting was not opened.
- "ASSESSMENT": my own inference, not a sourced fact.

## Q1. Embodied AI (AgiBot, Galbot, Unitree, UBTech, Fourier, Galaxea, Leju, X Square, Spirit AI): data-procurement and vendor roles, and buying of egocentric or teleoperation data abroad

### Takeaway
No posting was found at any of the nine robot makers for data procurement, data-supply-chain or external data-vendor management, and no evidence was found that any of them buys egocentric or teleoperation data from Europe. Leju gets 44.94% of its main humanoid product line's revenue from selling robots to state-backed data-collection centres, so these firms are mostly sellers into a state-subsidised data build-out, not buyers of data. The clearest new signal runs the other way:
- **AgiBot** bought custom data from the Hubei innovation centre in a first-of-its-kind deal in January 2026.
- Its data subsidiary 觅蜂科技 subcontracts collection to partners through "委派订单" (delegated orders), runs a "global collection network", and pays crowd collectors 14–37 RMB per task.
- In November 2026 AgiBot advertised a Europe-based **"Business Development Manager (KA), Robotics & Physical AI Data"** role. AgiBot is therefore selling physical-AI data into Europe, not buying it there.

### Cited Findings

**Job-page coverage (negative results)**
- DataHub's 39-company index covers none of AgiBot, Galbot, Unitree, UBTech, Fourier, Galaxea, Leju, X Square, Spirit AI, Shanghai AI Lab, Infinigence, Yidu, Medlinker, United Imaging, Powerlaw or Manus. Of the companies in this brief, only Shengshu and ModelBest are covered — [DataHub index](https://datahub.ac.cn/ai-jobs/)
- A guessed Feishu career URL for AgiBot (agibot.jobs.feishu.cn) returned 404, and BOSS直聘 search pages render only a loading screen — [Feishu attempt](https://agibot.jobs.feishu.cn/); [BOSS直聘](https://www.zhipin.com/gongsi/job/?query=%E6%95%B0%E6%8D%AE%E9%87%87%E8%B4%AD%20%E5%85%B7%E8%BA%AB)
- A Chinese search for "具身" + "数据采购" + 经理 found no procurement-manager title. The closest roles were a Meituan "机器人数据运营" (robot data operations) role that recruits and trains collectors and controls collection cost, a Shanghai humanoid firm's embodied data engineer (15–20K/month, master's degree), and many collection internships. All seen via snippet — [niuqizp search results](https://campus.niuqizp.com/job-vY85MCntz.html)
- Galbot: the only hits were 2027 campus recruitment (applications 28 Jul–26 Sep 2026) for algorithm, planning and control roles in Beijing, Shenzhen and Suzhou. No data-collection or procurement role appeared. Seen via snippet — [niuqizp Galbot](https://campus.niuqizp.com/job-vUk5znZzn.html)

**AgiBot (智元) and its data arm 觅蜂科技**
- Recruitment: a posting dated late May 2026 from 上海智元新创科技有限公司 seeks "机器人数据采集师/标注师" (robot data collector/annotator) to gather training and test data in set quantities. Seen via snippet — [niuqizp AgiBot](https://campus.niuqizp.com/job-vwk5zZt5N.html)
- AgiBot as buyer:
  - On 15 January the Hubei Humanoid Robot Innovation Center signed a data service agreement with AgiBot (智元创新(上海)) and delivered "数千小时" (thousands of hours) of custom-collected humanoid training data. Tasks included box moving, cup making, precision grasping and clothes folding, and AgiBot staff were stationed on site.
  - The article calls it "国内首例企业间专业化、定制化人形机器人数据交易" (the first specialised, customised humanoid-data transaction between companies in China). This is phase one, and no price was disclosed.
  - The year (2026) comes from a search summary — [CLS](https://www.cls.cn/detail/2260010)
- 觅蜂 data platform:
  - Launched 16 April 2026 with real-robot, simulation and human-demonstration data.
  - Targets "千万小时级数据产能" (tens of millions of hours of capacity) in 2026 through a "全球化采集网络" (global collection network), and 百亿 (ten billion) hours by 2030.
  - Asset-light model: part of the collection is done by partners through "委派订单的形式" (delegated orders).
  - Domestic real-robot data is priced at about **500–1,000 RMB per hour**.
  - Customers are large-model companies, embodied-AI leaders, start-ups and world-model companies.
  - "Overseas institutions" are among the first responders to its 蜂巢数据共创行动 (Hive data co-creation initiative); none are named.
  - Source: [Yicai, 17 Apr 2026](https://www.yicai.com/news/103137306.html)
- 觅蜂派 crowdsourcing app:
  - Launched 23 September and passed 150,000 registered users in just over a month.
  - Task pay is 14–37 RMB including daily bonuses. The head-mounted Mego Ego device rents for 19 RMB per day (39 RMB after the promotion), with a deposit of up to 5,000 RMB.
  - The data is egocentric ("无本体", collected without a robot body). The company's CEO says it costs about one-half to one-third of teleoperation at scale and feeds AgiBot's roughly 1M hours of pretraining data.
  - The article does not mention overseas collection or purchases. Its date is not stated; the image path suggests late Sep 2026 — [Jiemian](https://m.jiemian.com/article/15303490.html)
- AgiBot in Europe:
  - LinkedIn posting "Business Development Manager (KA), Robotics & Physical AI Data", AGIBOT (Germany), posted about 6 days before 12 Nov 2026. Base: London, Berlin, Amsterdam, Paris or Munich; reports to the VP International Business.
  - Duties include working "with product, delivery, and data operations teams" and tracking trends in "physical AI data". "AI training data" and "physical AI / embodied AI ecosystem" experience are nice-to-haves; additional European languages are a plus — [LinkedIn](https://de.linkedin.com/jobs/view/bd-manager-at-agibot-4477111589)
  - A second AgiBot posting, "Robotics Business Development & Project Manager" (Spain, about 2 weeks old), covers distributors and pilots. It requires English **and Mandarin**, with Spanish or German a plus, and does not mention data — [LinkedIn](https://es.linkedin.com/jobs/view/robotics-business-development-project-manager-at-agibot-4483534315)
- Caixin (10 Mar 2026): Unitree, AgiBot and MagicLab are pushing into Europe "to secure partners, build distribution networks and gather real-world data". AgiBot formed a European team of about 10 people across the UK, France, Germany, Italy and Spain in late 2025. The body of the article is paywalled — [Caixin Global](https://www.caixinglobal.com/2026-03-10/chinese-robotics-startups-push-into-europe-as-industry-seeks-scale-102421334.html)
- AgiBot's European CEO reportedly said "data generated in Europe stays here", and that partner Minth provides factory environments for training. Seen via snippet; the cntechpost page could not be fetched — [CnTechPost](https://cntechpost.com/2026/02/25/agibot-sets-foot-in-europe-showcasing-robotics-in-munich)

**Galaxea (星海图)**
- At its June 2026 developer conference Galaxea set a plan to collect **1M hours** of real data within the year and about **10M hours** within three years. Its CEO put the market price for compliant, high-quality real data at **100–150 RMB per hour**, implying 100–200M RMB for 1M hours. Galaxea invested in 18 upstream and downstream embodied companies in the past year, plans to reach 30–50, and plans to open a public data foundation to the industry — [Caizhongshe via NetEase, 17 Jun 2026](https://www.163.com/dy/article/KVLAJM1D05568V7Z.html)
- Galaxea co-founded a data company, "亦数智能", with Beijing Yizhuang and holds 25% of it (25M RMB subscribed). It raised a RMB 1B Series B in Feb 2026. Seen via snippet — [itiger](https://www.itiger.com/news/2610601935)

**Leju (乐聚)**
- From Leju's IPO prospectus, as summarised by 36Kr:
  - "这部分产品收入的44.94%来自数据采集领域的采购，尤其是全国地方数据中心建设项目" (44.94% of Kuavo product revenue came from data-collection procurement, especially local data-centre projects).
  - Top 2025 customers include 北京石景山产业发展有限公司, 青岛高科产业发展有限公司 and 北京通用人工智能研究院.
  - About 610M RMB (23.7%) of the raise goes to an "一体化数据工厂" (integrated data factory).
  - Leju intends to "自己生成数据、训练模型" (generate its own data and train its own models).
  - The prospectus was not opened directly — [36Kr](https://www.36kr.com/p/3828816885666696)
- 2025 revenue was 2.58亿 RMB (258M), with Kuavo at 69.5% (1.77亿) and a net loss of 71.2M RMB — [36Kr](https://www.36kr.com/p/3818940918727810)
- Leju opened its data-collection training ground 2.0 on 28 Apr 2026. It uses motion capture, VR teleoperation and real-robot data, and claims "国内最大的人形机器人数据训练中心" (China's largest humanoid data training centre). No overseas activity is mentioned — [Datayuan Substack, 7 May 2026](https://datayuan.substack.com/p/ai-995)

**Other collection models**
- Daimon Robotics and China Mobile: crowdsourced collection in China Mobile stores (pilot in Chenzhou, from 15 Jul 2026), starting with 1,000 device sets and targeting 1M hours per year.
- JD: targets 5M hours of human video in one year and 10M in two, plus 1M hours of robot data. It sells the JoyEgoCam wearable and runs a data trading platform that launched with 2,000 annotated hours.
- The Gasgoo article mentions no overseas collection or foreign vendors — [Gasgoo, 13 Jun 2026](https://autonews.gasgoo.com/articles/news/tech-giants-turn-to-crowdsourced-data-collection-to-train-robots-2065729953579245569)
- Collectors are recruited on BOSS直聘 through "劳务公司" (labour-service agencies), and the robot company runs the second interview round. Part-time day rates are about 200–250 RMB — [PEdaily, 30 Jun 2026](https://news.pedaily.cn/202606/565691.shtml)

**Shengshu (embodied side, update)**
- New posting "数据采集工程师（视频／多模态／爬虫方向）" (data collection engineer, video/multimodal/scraping), 14 Oct 2026:
  - Researches and onboards "professional footage libraries, creators, and production houses" and weighs "acquisition cost".
  - Must keep records of "sources, licenses, and collection basis".
  - Nice-to-have: "independently research and onboard foreign data sources".
  - Original: [Feishu 7696209835772315954](https://shengshu.jobs.feishu.cn/career/position/detail/7696209835772315954) via [DataHub](https://datahub.ac.cn/ai-jobs/jobs/job_3e19be3626de.html)
- "具身智能数据采集专家" (embodied data collection expert), 20 Jul 2026: sets collection standards, SOPs and QC, and coordinates "collection teams" (in-house or external is not stated). No vendor or overseas mention — [Feishu 7657487042796341540](https://shengshu.jobs.feishu.cn/career/position/detail/7657487042796341540)
- Also on the DataHub list: "具身数据采集现场管理负责人" (on-site embodied collection lead, 5 Jan 2026) and "具身智能数据工程师" ×2 (20 Jul 2026). DataHub counts 193 Shengshu postings, 37 of them posted after 31 Aug 2026 — [DataHub Shengshu](https://datahub.ac.cn/ai-jobs/companies/company-dc21f90e51.html)

### Inferences
- ASSESSMENT: Chinese embodied firms are **net suppliers of physical-AI data**. AgiBot/觅蜂 markets data in Europe, Leju sells robots to data centres, and Galaxea/亦数 and JD run data platforms. For PathWize this means:
  - (a) Chinese robot makers are unlikely buyers of European egocentric or teleoperation volume, given domestic prices of 14–37 RMB per crowd task, 100–150 RMB per hour for real data (Galaxea) and 500–1,000 RMB per hour for real-robot data (觅蜂).
  - (b) AgiBot Europe is more likely a **competitor or white-label partner** for European physical-AI data. Its "data generated in Europe stays here" stance (snippet) and its European data-operations team could create a need for EU collection partners (GDPR consent, EU labour law). That is a hypothesis to test with the BD role above.
- ASSESSMENT: The only Chinese embodied-adjacent buyer with an explicit outward-facing sourcing function remains Shengshu: an embodied data supply-chain manager (Jul 2026) plus a collection engineer who onboards foreign sources (Oct 2026). Shengshu's B round is led by Alibaba Cloud (see Q4), and Alibaba Group has been on 1260H since June 2026 (first-round report), so compliance screening is needed.

### Gaps
- No primary career pages could be read for AgiBot, Galbot, Unitree, UBTech, Fourier, Galaxea, Leju, X Square or Spirit AI. Their URLs are unknown or JavaScript-rendered, DataHub does not cover them, and LinkedIn guest search hit rate limits. A procurement or "数据BD" role at these firms is therefore **not ruled out**, only not found.
- No source names a European vendor supplying egocentric or teleoperation data to any Chinese robot maker. The "global collection network" of 觅蜂 and the "overseas institutions" in its initiative are unnamed.
- Unitree's STAR prospectus and UBTech's HKEX filings were not checked for data-procurement disclosures. X Square (自变量) and Spirit AI (千寻) returned no data-sourcing facts in this round.

## Q2. Chinese medical and legal AI (Yidu, Medlinker, United Imaging Intelligence, iFlytek Healthcare, Ping An Good Doctor, JD Health, Powerlaw, other legal LLMs): expert annotators, foreign-language or foreign-guideline needs, external vendors

### Takeaway
Chinese medical and legal AI firms build expert data **inside China, with Chinese clinicians and lawyers, against Chinese guidelines and exams**:
- Medlinker relies on more than 10,000 platform doctors (about 20,000 feedback records per week) and 32 domestic clinical experts for its CSEDB benchmark.
- JD Health benchmarks against China's senior-title exams and builds evaluation sets with Peking University Cancer Hospital.
- Powerlaw relies on an in-house Chengdu legal team and client contract data.

No posting or source found any need for foreign-language data, foreign guidelines or overseas experts at these firms. The only general vendor signal is that third-party "medical annotation" vendors serve model makers in China at 10K–50K RMB per month per doctor, a market that is shrinking. ModelBest is the one firm with a new **expert-data ecosystem lead** naming law, finance and medicine (30 Oct 2026), but it is domestic too.

### Cited Findings

**Medical: market for clinician annotators**
- Huxiu/健闻咨询 (20 Aug 2026), interviewing three doctors:
  - Postings range from 10K to 50K RMB per month, and pay rises with clinical years and title.
  - Tasks include record tagging (quotas rose from 150 to about 300 patients per day), dual-rater chatbot scoring with lead review, and single-image dermatology diagnosis.
  - Third-party vendors serve model makers; one worked with 300–400 hospitals.
  - Alignment time was unpaid. Model answers were checked against domestic guidelines.
  - All three doctors had left, and the vendor was downsizing. The client companies are not named — [Huxiu](https://m.huxiu.com/article/4884422.html)
- National data-annotation pilot: Shanghai Xuhui is among 32 second-batch pilot sites, with a focus on **medical** data annotation and a shift toward "人机协同、专家深度参与" (human-machine collaboration with deep expert participation). No vendors and no foreign participation are mentioned — [CLS, 1 Sep 2026](https://www.cls.cn/detail/2470582)

**Medlinker / Future Doctor (医联 / 未来医生, MedGPT)**
- The CSEDB benchmark was published in npj Digital Medicine. It has 2,069 open questions across 26 specialties and 30 indicators (17 safety, 13 effectiveness). It was co-drafted by **32 domestic clinical experts** from 23 specialties at hospitals including Peking Union Medical College Hospital and Huashan Hospital.
- More than 10,000 doctors produce about 20,000 "真实诊疗反馈" (real clinical feedback records) per week. No vendors and no overseas deployment are mentioned — [Xinhua, 8 Jan 2026](https://www.news.cn/health/20260108/f41b90127c8845c0b6462b61f11c73f4/c.html)
- Medlinker's cooperation page lists more than 4,000 attending physicians from tertiary hospitals, more than 30 Medical Association chairs and 100 key tertiary hospitals. Coverage is 34 provincial-level regions; no international partners are listed — [Medlinker](https://m.medlinker.com/index/en/cooperation-company.html)

**JD Health (京东健康)**
- Its 京医千询 model passed all ten subjects of the 2026 senior health-professional title exam it was tested on (Oct 2026).
- With a Peking University Cancer Hospital team it released a GI-oncology evaluation set v1.0 (Sep 2026).
- It runs more than 1,500 "expert doctor agents" (Jan 2026).
- All seen via snippet — [STDaily](https://www.stdaily.com/web/gdxw/2026-10/12/content_594448.html); [Chinanews](https://www.chinanews.com.cn/cj/2026/10-10/10710622.shtml)

**Ping An Good Doctor**
- Only mentioned as an app that added AI Q&A. No annotation or evaluation facts were found. Seen via snippet — [search result: STDaily](https://www.stdaily.com/web/gdxw/2026-09/19/content_584221.html)

**Yidu Tech (医渡科技, 2158.HK)**
- 2026 intern recruitment (26 Jun–26 Jul 2026) includes "大模型医学产品实习生" (Beijing, requires a medical-school master's) and large-model algorithm interns. No expert-annotator or vendor role was found. Seen via snippet — [niuqizp](https://campus.niuqizp.com/job-vsm5zaCNN.html)

**United Imaging Intelligence (联影智能)**
- No annotator recruitment was found.
- The company released the "元智" medical video-understanding model (Apr 2026; CVPR 2026 paper). Its MedVidBench dataset passed 30,000 downloads by end-Aug 2026, and it launched a "元医院" (meta-hospital) strategy at WAIC 2026.
- Seen via snippet — [Sina](https://news.sina.cn/sx/2026-08-28/detail-inipvvzv4642009.d.html); [CSDN](https://www.csdn.net/article/2026-08-27/164119633)

**iFlytek Healthcare**
- US-sanctioned since Oct 2019 (first round). Excluded.

**Baichuan (update after 31 Aug 2026)**
- New roles:
  - "医学科研与学术合作负责人" (medical research and academic partnerships lead), 28 Oct 2026.
  - "战略投资高级经理" (senior manager, strategic investment), 20 Oct 2026.
  - "AI Agent 高级产品经理（医疗健康方向）" (senior AI agent PM, health), 19 Sep 2026.
- No overseas or foreign-language medical role appears among 82 postings — [DataHub Baichuan](https://datahub.ac.cn/ai-jobs/companies/company-47ce5eabe1.html) (DataHub list)

**Powerlaw (幂律智能, legal)**
- Training data comes from public legal data, "expert data compiled by its internal legal team" (Chengdu), and "客户授权后脱敏的合同数据" (client-authorised, desensitised contract data).
- Since 2025 Powerlaw has stopped large-scale incremental training. It now does tool-calling fine-tuning and small private-deployment training.
- Partner lawyers review AI-drafted legal letters, and an "人工专家审核" (human expert review) feature is planned.
- The focus is domestic SMEs. The last disclosed round was RMB 80M (Aug 2023).
- Source: [Huxiu, 21 Apr 2026](https://www.huxiu.com/article/4850995.html)

**ModelBest (legal and expert data, update)**
- Plans "CPM for Legal" as legal-services infrastructure — [PEdaily, 15 Jul 2026](https://news.pedaily.cn/202607/566303.shtml)
- "专家数据生态负责人" (expert data ecosystem lead), 30 Oct 2026:
  - Builds and runs a domain-expert community (sourcing, screening, co-creation, incentives).
  - Turns "industry challenges, academic papers, and real work processes" into benchmarks and data pipelines.
  - Preferred: experience on expert or crowdsourcing platforms, or "vendor operations"; project experience in mathematics, physics, chemistry, biology, **law, finance or medicine**.
  - No overseas experts are mentioned.
  - Original: [Feishu 7702421709458655507](https://modelbest.jobs.feishu.cn/career/position/detail/7702421709458655507) via [DataHub](https://datahub.ac.cn/ai-jobs/jobs/job_dacf2cf0f585.html)
- "前沿数据平台产品运营负责人" (frontier data platform operations lead), 27 Oct 2026, has the same expert-community scope — [Feishu 7701240470185953578](https://modelbest.jobs.feishu.cn/career/position/detail/7701240470185953578)
- Further legal roles on the DataHub list:
  - "大模型解决方案架构师（法律方向）" (LLM solutions architect, legal), 2 Nov 2026.
  - "大模型项目经理（法律行业）" (LLM project manager, legal sector), Shenzhen, 22 Sep 2026.
  - "产品解决方案经理" (legal clients), 15 Oct 2026.
  - Source: [DataHub ModelBest](https://datahub.ac.cn/ai-jobs/companies/company-50d74f662d.html)

### Inferences
- ASSESSMENT: Chinese medical and legal AI firms are **low-fit direct buyers** for PathWize. Their quality bar is Chinese exams (senior-title exams), Chinese guidelines and Chinese tertiary-hospital doctors. Large in-house doctor networks (Medlinker with more than 10,000 doctors, Ant AQ from the first round) cover their needs cheaply. The only plausible opening is if one of them goes abroad: an export product would need EU-guideline evaluation and European-language patient dialogue. No such product was found for Yidu, Medlinker, UII or JD Health.
- ASSESSMENT: ModelBest's expert-data ecosystem lead, with its "vendor operations" preference, is the one new medical/legal-adjacent role. ModelBest's legal business is Chinese-law-focused, so PathWize fit is limited to finance and science slices, and possibly English-language legal reasoning benchmarks. Neither need has been shown.
- ASSESSMENT: The shrinking domestic medical-annotation vendor market (Huxiu) suggests buyers are consolidating to fewer, higher-tier experts. That fits a "Tier-1 only" positioning, but in a China-domestic credential context.

### Gaps
- No Yidu, UII, Medlinker, Ping An Good Doctor or JD Health posting was opened, because their career pages were not found or not indexed. Yidu's annual report (FY ending Mar 2026) was not checked for annotation spend.
- No other Chinese legal LLM firms (e.g., 法研 or court-system vendors) were identified with data roles. Powerlaw's hiring was not verified.
- No source confirms or rules out foreign-guideline or foreign-language evaluation demand at any Chinese medical AI firm.

## Q3. Shanghai AI Lab (InternLM/Intern-S1) and Infinigence: data procurement, expert annotation roles, open data tenders

### Takeaway
No data-procurement or expert-annotation role and no data tender could be found for Shanghai AI Lab. Its careers page loads job listings through JavaScript; its 2026 campus and "星启" programmes list research and engineering categories only; and two searches of Shanghai procurement material found no lab-issued annotation or corpus tender. Shanghai's corpus push runs through the state-backed platform company 库帕思 (Copath), whose "语料普惠计划2.0" targets 300 scarce datasets by end-2027, partly in scientific domains. That is a more plausible public channel than the lab itself, but whether it buys from foreign suppliers is unverified. Infinigence is a compute-infrastructure "middle layer" with no data or annotation demand visible.

### Cited Findings

**Shanghai AI Lab**
- Homepage navigation shows research, news, open source (models, datasets, evaluation sets), about and careers (/joinus/social). There is no procurement or tender section on the homepage, and OpenDataLab is its open-data platform — [shlab.org.cn](https://www.shlab.org.cn/)
- The social-recruitment page renders only template placeholders without JavaScript, so no titles could be read — [shlab.org.cn/joinus/social](https://www.shlab.org.cn/joinus/social)
- 2026 global campus recruitment (applications 20 Aug–20 Oct 2025, archived) has six categories: algorithm, R&D, product, operations, solutions and support. No data annotation, procurement, medical, legal or language role is listed — [niuqizp archive](https://campus.niuqizp.com/job-vyU5LaMnM.html)
- "星启人才计划" research scientist call (12 Nov–12 Dec 2025, archived): research areas are foundation models, AGI4S and general AI architecture. No data roles — [niuqizp archive](https://campus.niuqizp.com/job-vYU5NZCZn.html)
- Intern-S1 (arXiv, Aug 2025, flagged older) was continually pre-trained on 5T tokens, more than 2.5T of them scientific. The abstract mentions no expert annotation or vendors — [arXiv 2508.15763](https://arxiv.org/abs/2508.15763)
- Corpus ecosystem:
  - The GDPS 2026 corpus forum (Mar 2026) was co-hosted by Shanghai AI Lab and 上海库帕思科技有限公司.
  - 库帕思 leads "模塑申城语料普惠计划2.0", which aims to link 500 innovation entities and build 300 scarce datasets by end-2027, with a focus on AI-for-Science corpora.
  - Shanghai AI Lab runs the city's LLM evaluation and verification centre.
  - Seen via snippet — [The Paper](https://www.thepaper.cn/newsDetail_forward_32857026); [The Paper](https://www.thepaper.cn/newsDetail_forward_33616684)
- A July 2026 Shanghai corpus-ecosystem forum (co-hosted by 数传集团, Shanghai State-owned Capital Investment and GOMAX LAB) released an eight-stage roadmap "from expert knowledge capture to standards". No procurement or foreign suppliers are mentioned — [STDaily, 21 Jul 2026](https://www.stdaily.com/web/gdxw/2026-07/21/content_550706.html)
- Two searches ("上海人工智能实验室 数据标注 采购 公告 2026"; "…采购公告 语料 数据集 服务 中标") returned only unrelated Shanghai procurement PDFs: an AI training-lab purchase (about 1.92M RMB) and AI curriculum resources (2M RMB) for schools. Seen via snippet — [zfcg.sh.gov.cn example](https://jpg.zfcg.sh.gov.cn/sh-gov-open-doc/1108QZ/48187f58-4c21-4094-8ef2-92659b146e5c.pdf)

**Infinigence (无问芯穹)**
- Series C of RMB 2.3B (12 Oct 2026), with cumulative funding of RMB 4.3B.
- Its business is heterogeneous compute scheduling, mixed-chip training, cross-region training and an Agentic MaaS "token factory". The article does not mention data, datasets or annotation.
- Its investors include Tencent and Baidu.
- Bloomberg (as relayed) reports a confidential HK IPO filing targeting H1 2027.
- Source: [10jqka / IT之家](https://news.10jqka.com.cn/20261012/c680580495.shtml)
- An earlier round of more than RMB 700M (May 2026) was led by Hangzhou Gaoxin Jintou and 惠远资本. Seen via snippet — [10jqka](https://stock.10jqka.com.cn/20260509/c676558210.shtml)

### Inferences
- ASSESSMENT: Shanghai AI Lab looks like a **low-accessibility** target. It is a state-backed new-type R&D institution, and no external data-purchase channel was visible. Its science-model needs (Intern-S1: chemistry, biology, materials) would fit PathWize's biochemistry PhDs, but contact would have to go through research collaboration (e.g., joint benchmarks or evaluation sets via its evaluation centre) rather than a tender.
- ASSESSMENT: 库帕思's scarce-dataset programme is the more likely Shanghai public buyer of expert corpora. It is likely limited to domestic or Shanghai-registered entities, which is unverified.
- ASSESSMENT: Infinigence: no fit. Drop from the target list.

### Gaps
- The live Shanghai AI Lab job list and any OpenDataLab expert-contributor programme were not read (JavaScript). ccgp.gov.cn and zfcg.sh.gov.cn search interfaces were not queried directly; only search-engine hits were seen. The lab may procure through its own channel rather than government portals, which is unverified.
- Whether Shanghai AI Lab is on any US list was not checked in this round.

## Q4. Funding: Shengshu (Vidu), ModelBest, Genspark, Baichuan IPO status

### Takeaway
All three start-ups raised large sums in 2026:
- **Shengshu**: RMB 600M+ Series A+ in Feb 2026, then an **RMB 2B Series B led by Alibaba Cloud** on 13 Apr 2026, with the state-linked China Internet Investment Fund and Baidu Ventures also in the round.
- **ModelBest**: more than RMB 5B in H1 2026 at a valuation above RMB 20B, according to unnamed sources.
- **Genspark**: a Series B totalling US$485M at a **US$2.6B post-money valuation** (June 2026).

**Baichuan** has not filed for a Hong Kong IPO as far as could be found. Its CEO pointed to 2027 in January 2026, and an investor-relations role (Jul 2026) refers to 18C preparation.

### Cited Findings

**Shengshu**
- Series B (13 Apr 2026): RMB 2B, led by **Alibaba Cloud**.
  - New investors: Andon Haitang, **China Internet Investment Fund**, TAL Education and Luminous Ventures.
  - Follow-on investors: LINK-X Capital, Delta Capital and **Baidu Ventures**.
  - Use of funds: a "general world model" with a World Generation Model (Vidu) and a World Action Model for physical interaction. Valuation not disclosed — [Kosmo / PR release](https://www.kosmo.com.my/2026/04/13/shengshu-launches-vidu-q3-reference-to-video-with-expanded-visual-and-audio-capabilities/)
  - Yicai Global (10 Apr) and Reuters reported the same round, about US$293M. Yicai labels it Series B; other outlets label it differently. Seen via snippet — [Yicai Global](https://www2.yicaiglobal.com/news/chinese-ai-startup-shengshu-bags-usd293-million-in-latest-fundraiser-led-by-alibaba-cloud)
- Series A+ (Feb 2026): more than RMB 600M, co-led by Zhongguancun Science City and LINK-X Capital. Seen via snippet — [TNGlobal PR](https://technode.global/prnasia/shengshu-technology-completes-series-a-funding-of-over-rmb-600-million/)
- Dealroom gives total funding above US$380M; this is not verified, and aggregators conflict — [Dealroom](https://dealroom.co/news/127301-alibaba-leads-293m-bet-on-shengshu-as-chinas-ai-video-race-heats-up/) (snippet)

**ModelBest (面壁智能)**
- New round reported 15 Jul 2026 from national-level funds, central SOEs, automakers and financial investors. H1 2026 cumulative funding is "超50亿元" (above RMB 5B) and the valuation "超200亿" (above RMB 20B), per unnamed sources; the company did not confirm.
- Earlier 2026 rounds: China Telecom led one after Spring Festival, and SZVC with Inovance co-led one in April. No IPO has been announced.
- Business lines: on-device models (MiniCPM, more than 38M downloads), cars (Changan, SAIC, Geely), the planned "CPM for Legal", and embodied AI.
- Source: [PEdaily](https://news.pedaily.cn/202607/566303.shtml)

**Genspark (MainFunc)**
- Series B extension of US$100M at **US$2.6B post-money**, taking the Series B total to **US$485M** (press release dated 17/18 Jun 2026; Axios 11 Jun) — [BusinessWire title](https://businesswire.com/news/home/20260617758937/en/Genspark.ai-Extends-Series-B-to-%24485M-at-%242.6B-Post-Money-Valuation-Appoints-Jamison-Powell-as-Chief-Revenue-Officer) (page returned 403; title and summary seen via snippet); [Axios](https://www.axios.com/pro/enterprise-software-deals/2026/06/11/genspark-extension-agentic-workplace) (snippet)
- Earlier: a March 2026 extension to US$385M at about US$1.6B, and a Nov 2025 Series B of US$275M at about US$1.25B. The company claimed an annual run-rate of US$200M in Mar 2026; total funding conflicts across sources (US$360–645M). Seen via snippet — [AI Magazine](https://aimagazine.com/news/genspark-how-the-ai-workspace-hit-at-us-2-6bn); [Sacra](https://sacra.com/c/genspark/)

**Baichuan**
- On 13 Jan 2026 the CEO said the company could pursue an IPO "as early as 2027" and had not formally launched the process. Cash on hand is RMB 3B (about US$414M) — [TMTPost, 14 Jan 2026](https://en.tmtpost.com/news/7842808)
- A secondary source repeats the 2027 target and gives the last round as about RMB 5B (Jul 2024) at a valuation above RMB 20B — [Crypto Briefing, 20 Jul 2026](https://cryptobriefing.com/baichuan-ai-2027-ipo-china/)
- Searches in Chinese and English for a 2026 HKEX filing found none — [search: itiger/taibo results](https://en.taibo.cn/news/25325017) (snippet)
- First round: an investor-relations director role (20 Jul 2026) refers to Chapter 18C matters — [DataHub Baichuan](https://datahub.ac.cn/ai-jobs/companies/company-47ce5eabe1.html)

### Inferences
- ASSESSMENT: Shengshu can pay, but its cap table now has **Alibaba Cloud as lead investor**, and Alibaba Group has been on 1260H since 8 Jun 2026 (first-round report). Baidu (also on 1260H) and the state-run China Internet Investment Fund are shareholders too. This does not sanction Shengshu, but it moves Shengshu closer to the Tencent/Alibaba risk tier in PathWize's compliance screen.
- ASSESSMENT: ModelBest's RMB 5B+ raise from SOEs and national funds makes it solvent. The state and SOE investor profile and its government and enterprise focus point to domestic-only data sourcing.
- ASSESSMENT: Genspark is a US-style agent company and is not a Chinese lab for compliance purposes. Its HQ and entity were not re-verified here. No data-buying signal was found.
- ASSESSMENT: Baichuan's IPO is 2027 at the earliest. Budget pressure before listing argues against expensive foreign expert data.

### Gaps
- Shengshu's valuation and total raised are not disclosed. ModelBest's numbers rest on unnamed sources. Genspark's HQ, legal entity and total funding conflict across sources. No HKEX application-proof search was run for Baichuan.

## Q5. Manus (Butterfly Effect, Singapore): data, AI-trainer or vendor hiring in 2026

### Takeaway
None of Manus' visible Singapore postings (all 10 posted about 1–4 weeks before 12 Nov 2026) are data-annotation, AI-trainer or vendor-management roles. Manus does build training and evaluation data in-house through an "LLM Algorithm Engineer" role and an "Agent Evaluation Engineer" role. No external human-data buying signal was found.

### Cited Findings
- LinkedIn guest search ("Manus AI", Singapore, 12 Nov 2026) returned 10 Manus AI postings, all in Singapore:
  - Agent Evaluation Engineer, Agent Harness Engineer and LLM Algorithm Engineer (each about 3 weeks old).
  - Agent Product Manager and User and Product Operations Manager (about 3 weeks).
  - Full Stack Engineer and DevOps Engineer (about 6 days).
  - Product Designer ×2 and Customer Support Specialist (about 1 month).
  - Source: [LinkedIn search](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=Manus%20AI&location=Singapore)
- Agent Evaluation Engineer duties include "Support post-training evaluations and comparisons of third-party model quality" and "Develop new tasks, metrics or experimental methods for capabilities". User-research methods are preferred. There is no mention of annotators, domain experts or vendors — [LinkedIn 4480898815](https://sg.linkedin.com/jobs/view/agent-evaluation-engineer-at-manus-ai-4480898815)
- LLM Algorithm Engineer duties include "Build and iterate on training data, adjusting quality, distribution and usage strategies" and familiarity "with SFT, reinforcement learning or preference optimization" (173 applicants). There is no mention of human data or vendors — [LinkedIn 4480908339](https://sg.linkedin.com/jobs/view/llm-algorithm-engineer-at-manus-ai-4480908339)
- A worldwide search for "Manus AI data" returned no Manus postings; the hits were TaskUs, Mass Markets and Imagene — [LinkedIn search](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=Manus%20AI%20data&location=Worldwide)
- Background (first round): Manus raised more than US$500M on 8 Oct 2026, with Tencent among the investors — [TNGlobal](https://technode.global/2026/10/08/manus-parent-raises-more-than-500-million-after-meta-exit/)

### Inferences
- ASSESSMENT: Manus is post-training its own models and building agent evaluations in Singapore. It *could* buy expert agentic trajectories or domain evaluation tasks (finance, legal, medical workflows), but there is no posted vendor or AI-trainer function. Fit is low to medium and should be tested by direct outreach to the evaluation team, with a Singapore contracting entity.

### Gaps
- Manus' own careers page (404 in the first round) and any Chinese-side Beijing postings were not checked. LinkedIn rate limits stopped further queries. No vendor relationships of Manus were found.

## Q6. Chinese government and public procurement (中国政府采购网, 公共资源交易) for LLM training data or expert annotation in 2026, foreign-language or medical/legal content, and foreign-supplier eligibility

### Takeaway
Four searches found **no 2026 public tender for LLM training data or expert annotation that names foreign-language, medical or legal expert data**. Public AI spending flows mainly into platform, compute and application projects won by large domestic firms acting as general contractors. In those projects, data cleaning and labelling sit inside the platform scope. Examples: iFlytek RMB 427.6M, Alipay RMB 206M, Baidu RMB 169M (late 2025); Zhipu RMB 93.9M (Shenzhen).

Foreign eligibility:
- **Government Procurement Law Art. 10** requires procuring domestic goods, works and services. The exceptions are items unavailable domestically on reasonable terms, items for use abroad, and other statutory exceptions.
- The 2025 State Council notice (effective 1 Jan 2026) bars discrimination by "投资者国别" (investor nationality) but defines "domestic" only for **products**.

ASSESSMENT: A foreign-registered EU vendor is effectively excluded from direct bids. A China-registered (including foreign-invested) entity could compete.

### Cited Findings

**Procurement activity found**
- Yicai (25 Dec 2025, flagged older):
  - Within one month: iFlytek won a national "人工智能应用中试基地" (AI application pilot base) project for RMB 427.6M; Alipay a Zhejiang medical-AI innovation platform for RMB 206M; Baidu a Guangzhou respiratory-infection early-warning system for RMB 169M.
  - "很少能看到中小医疗AI企业的身影" (small medical-AI firms are rarely seen); big firms act as general contractors.
  - No separate data-annotation tender is mentioned, and data cleaning and label governance are part of the platform scope.
  - No foreign suppliers or foreign-language data are mentioned.
  - Source: [Yicai](https://www.yicai.com/news/102974509.html)
- Shenzhen: 深圳市智慧城市科技发展集团's "基于国产大模型的全球科创分析服务项目" (global sci-tech analysis service based on a domestic LLM) named Zhipu first-ranked candidate at RMB 93.9M. Seen via snippet — [ifeng](https://tech.ifeng.com/c/8xQj61dYqB9)
- Shenzhen Qianhai:
  - "2026年多语种翻译服务项目" (2026 multilingual translation services, QH2026028): cap RMB 400k, won by 深圳优译文化传播有限公司 at RMB 49,860, published 7 Apr 2026. This is translation, not training data.
  - An internet information collection service (RMB 610k, Jul 2026) went to 深圳中泓在线.
  - Both seen via snippet — [sz.gov.cn](https://www.sz.gov.cn/szzt2010/wgkzl/jcgk/jcygk/zdgcxm/content/post_12725077.html); [sz.gov.cn](https://www.sz.gov.cn/szzt2010/wgkzl/jcgk/jcygk/zdgcxm/content/post_12945099.html)
- Beijing Huilongguan Hospital tendered AI compute servers for a medical LLM (bids due 28 Jul 2026). This is hardware, not data. Seen via snippet — [Beijing public resources](https://ggzyfw.beijing.gov.cn/cmsbj/u/cms/cn.gov.bjggzyfw.www/202608/04170833hxad.pdf)

**Market structure context**
- CAICT's "人工智能数据标注产业图谱（2026年）" (Mar 2026) maps more than 1,000 firms in 14 verticals and adds an "行业专识数据" (industry expert-knowledge data) dimension. The source is a promotional reprint — [Jiemian](https://www.jiemian.com/article/14101842.html)
- A buyer's guide on enterprise procurement of LLM training data (18 Sep 2026; sponsored content for vendor 甲骨易) describes the typical process:
  - Shortlist 3–5 vendors.
  - Run a trial on 1–3% of volume.
  - Sample at least 10% of routine work, or 30–50% in critical scenarios.
  - Medical, legal, financial and embodied tasks need "domain-qualified annotators".
  - Cross-border transfer adds compliance cost.
  - Source: [China.com](https://m.tech.china.com/articles/20260918/202609181960740.html)

**Eligibility rules**
- Government Procurement Law Art. 10: government procurement shall buy domestic goods, works and services, except where (1) they cannot be obtained in China or not on reasonable commercial terms, (2) they are for use outside China, or (3) other laws or administrative regulations provide otherwise. What counts as "domestic" is defined by the State Council. Law text seen via snippet of reproductions — [NDRC](https://www.ndrc.gov.cn/xxgk/zcfb/qt/200507/t20050706_967929.html); [GDUFS PDF](https://zcc.gdufs.edu.cn/zfcgf.pdf)
- 国办发〔2025〕34号 "国务院办公厅关于在政府采购中实施本国产品标准及相关政策的通知" (State Council notice on domestic-product standards in government procurement):
  - Issued 28 Sep 2025, effective 1 Jan 2026.
  - Defines 本国产品 (domestic products) for **goods only**: "本国产品标准适用于货物，包括政府采购货物项目和服务项目中涉及的货物" (the standard applies to goods, including goods within service projects).
  - States that SOEs, private and foreign-invested enterprises "平等享受" (equally enjoy) domestic-product support.
  - Bars differential treatment based on "所有制形式、组织形式、股权结构、投资者国别" (ownership form, organisational form, shareholding structure or investor nationality).
  - Source: [gov.cn Gazette](https://www.gov.cn/gongbao/2025/issue_12346/202510/content_7044731.html)
- A Ministry of Finance notice requires equal treatment of products and services "在中国境内生产" (produced in China) by domestic and foreign-invested firms, except for national-security and state-secret projects. Seen via snippet — [Pekingnology](https://www.pekingnology.com/p/govt-procurement-finance-ministry)

### Inferences
- ASSESSMENT: Chinese public procurement is **not a realistic direct channel** for PathWize:
  - (a) No tender for expert or foreign-language training data was found.
  - (b) Art. 10 favours domestic services, and the non-discrimination rules protect *foreign-invested companies operating in China*, not offshore suppliers.
  - (c) AI budgets are bundled into platform contracts won by Chinese majors, some of which are 1260H- or sanctions-listed (iFlytek, Baidu).
  - Any participation would have to be as a subcontractor to a domestic prime or data vendor (e.g., Haitian Ruisheng/Dataocean from the first round), with China's cross-border data rules applying.
- ASSESSMENT: State-backed data platforms (Shanghai 库帕思, national annotation pilot bases such as Xuhui for medicine, Galaxea/Yizhuang's 亦数) are the public-sector demand pockets. They are framed around domestic expert participation.

### Gaps
- ccgp.gov.cn and provincial 公共资源交易 search interfaces were not queried directly; only search-engine indexing was used. Tenders may exist that were not indexed.
- No official text was found on whether an offshore (non-China-registered) supplier may bid for services, beyond Art. 10. China's status under the WTO GPA was not verified in this session.
- No 2026 tender naming foreign-language corpora, foreign medical guidelines or foreign legal expertise was found, so the question of foreign-supplier eligibility for such content remains theoretical.
