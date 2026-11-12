# Chinese Big-Tech AI Labs: Human-Data Demand and Procurement Channels (as of 12 Nov 2026)

Scope note: Research done 12 Nov 2026 for PathWize (EU expert human-data provider). The shared web-search budget ran out partway through (a limit of 200 searches per turn across all agents), so the second-tier companies (Kuaishou, Meituan, Xiaomi, JD, Huawei, iFlytek, SenseTime, NetEase, PDD, Shein, Trip.com) are covered only thinly. LinkedIn, Glassdoor, Forbes and the Federal Register blocked direct fetching (403 or a redirect wall). Where a posting is cited from an aggregator or a search snippet, this is marked. "ASSESSMENT" marks my own judgement, not a documented fact.

---

## 1. Market-level context: verification and updates of what PathWize already knows

### Takeaway
The Forbes figure of about USD 500M per year (5 Aug 2026) and the ChinaTalk vendor map (11 Nov 2026) hold up. New since then: ByteDance and Tencent have both built **formal, centralised AI-data organisations** (Aug–Sep 2026). Chinese **domestic expert-data vendors** (Humanlaya/TalentsAI, UniPat) are now valued at roughly USD 1B and serve the same labs. Chinese labs are reported to be price-sensitive and to buy **non-exclusive** data.

### Cited Findings
- Forbes (Anna Tong, 5 Aug 2026): the top six Chinese AI labs spend about USD 500M per year with American data-labeling companies. The estimate comes from two data-labeling entrepreneurs who had seen market-size figures from Tencent and ByteDance executives. Named buyers: Tencent, Alibaba, Ant Group, ByteDance, Moonshot. Forbes reviewed a message from a Tencent executive saying the company relies on Surge. It also cites internal project documentation showing Turing worked with ByteDance. Seen via search snippet and secondary coverage; the original returned 403 to WebFetch. — [Forbes](https://www.forbes.com/sites/annatong/2026/08/05/silicon-valleys-other-china-problem-its-training-their-ai/); [AI Weekly summary](https://aiweekly.co/alerts/surge-ai-mercor-reportedly-sell-training-data-to-chinese-labs)
- Secondary coverage of Forbes: the client list includes ByteDance, Alibaba, Ant Group and Tencent. China was 2% of Mercor's Q2 2026 revenue. AfterQuery earns at least USD 50M in recurring revenue from Chinese labs. Growing demand is cited in law, medicine and software engineering. — [EdgeX/CryptoBriefing summary](https://pro.edgex.exchange/en-US/news/article/us-data-labeling-firms-china-ai-revenue)
- ChinaTalk, "Piggybacking to the Frontier" (Aqib Zakaria and Quinn Ennis, 11 Nov 2026):
  - Mercor sold SWE RL environments to Alibaba.
  - Turing sells to Tencent and Alibaba.
  - Surge is said to sell RL environments to Tencent, Z.ai and Moonshot.
  - Abundant (code), Pareto (human data collection) and Eaglepoint (code and healthcare) sold to ByteDance. Eaglepoint is majority-owned by Beijing-based Mofy AI.
  - DeccanAI sold to Tencent and ByteDance.
  - An anonymous Chinese-lab source says it buys from Invisible.
  - ChinaTalk could not independently verify any AfterQuery sales.
  - ByteDance's data-buying desks are in Singapore and San Jose.
  - — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- ChinaTalk, same piece: job ads from Tencent Hunyuan, Moonshot ("AI Data Resource Operations"), MiniMax and Alibaba ask for experience with **overseas suppliers**. A StepFun buyer ad lists deliverables "repo, docker, task, trajectory, reward, rubric, verification". Tencent's CL-bench rubrics appear to be written by Western experts. ByteDance is bringing STEM experts in-house ("seedstem"). Scale, micro1 and fleet say publicly that they forgo China business. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- AI Proem (Grace Shao, 9 Oct 2026):
  - ByteDance is described as "one of the most aggressive buyers", with a reported budget above USD 1B (period and scope unclear).
  - Alibaba and Tencent follow ByteDance's lead.
  - Domestic vendors **UniPat** (Beijing, founded Dec 2025, about USD 1B pre-money) and **Humanlaya** (about USD 1B post-money; co-founder Jasper Jiao helped build ByteDance's Xpert) reportedly serve Alibaba, ByteDance, Moonshot and DeepSeek.
  - Humanlaya's expert platform TalentsAI has more than 100,000 registered people from about 300 disciplines.
  - Some Chinese labs reportedly wait for exclusivity periods on datasets bought by US labs to expire, then buy the same data "at a fraction of the price".
  - Big tech now keeps proprietary data, core research and evaluation in-house while **outsourcing expert recruitment, specialised datasets and training environments**.
  - Healthcare is named as a major opportunity for specialised multimodal data.
  - — [AI Proem](https://aiproem.substack.com/p/does-china-not-have-data-vendors)
- Rest of World (Viola Zhou, 9 Sep 2026): Chinese expert trainers earn about 100–500 yuan (USD 15–74) per task, with each task taking a few hours, which is below US rates. IDC expects China's AI training-data market to reach 7.8B yuan (about USD 1.1B) in 2026, up 25% from 2025. The article says medicine and finance "need more data". — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/)
- Epoch AI, via ChinaTalk: American labs may pay 4–5x more for exclusive products. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- A supplier map dated 15 Oct 2026 found **no documented foreign data vendor** for any Chinese model company in primary filings. It documents domestic vendors only: Haitian Ruisheng for ByteDance; Fabon (法本信息) for ByteDance; Datatang for Tencent and Baidu (pre-LLM era); unnamed vendors for MiniMax, Zhipu and Xiaomi. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)

### Inferences
- ASSESSMENT: Chinese labs buy two kinds of data. They pay a premium for coding/SWE RL environments from US vendors, and they buy expert data (law, medicine, finance, STEM) increasingly through **their own expert platforms** (Xpert, Siriser, Tencent ExpertHub) and domestic vendors (Humanlaya, UniPat). A foreign expert vendor therefore has to offer something Chinese platforms cannot source cheaply: **non-Chinese professional context** (EU/US law, Western clinical guidelines and licensing, European languages, Western finance and regulation).
- ASSESSMENT: Price sensitivity is high (the exclusivity-expiry tactic; domestic expert pay of USD 15–74 per task). PathWize should expect to sell **non-exclusive or semi-exclusive** datasets and per-project rubric/eval work, not exclusive premium datasets.

### Gaps
- The original Forbes text could not be read (403). Not independently verified from it: the claimed Tencent data request to suppliers on finance, cybersecurity and self-improving AI; the Tencent vendor list (Surge, Mercor, Turing, DeccanAI); and the Ant–AfterQuery relationship.
- The TechCrunch article (said to be 1 Sep 2026) stating AfterQuery gets half of USD 100M ARR from China was not found; it is known only via ChinaTalk.

---

## 2. ByteDance (Seed, Doubao, AI Data & Safety unit, Seed Global Data, Xpert)

### Takeaway
ByteDance has the largest and most **formalised buying machinery** of any Chinese lab. Since mid-2026 a new top-level "AI data and security" unit (about 1,000 people, led by Adam Wang) owns sourcing and procurement. Its Singapore "External Partnership Development" team is explicitly hired to **onboard data startups and suppliers**. Seed Global Data (Los Angeles, Singapore) produces international SFT/RLHF data. Xpert also takes **vendor partnerships** as an expert-sourcing channel. This is the clearest entry point for PathWize.

### Cited Findings
**(a) Documented data needs**
- New top-level AI data unit, at the same level as Seed, Flow and Douyin. It provides cross-modal data services for all ByteDance foundation models and covers "setting standards, sourcing and procurement, data synthesis and cleaning, and quality evaluation". Leader: Adam Wang (ex-TikTok). Integration started in early June 2026. About 1,000 people. Its precursor was a 2023 data team under Fu Yue that handled "data procurement and quality control for Seed's model training". KrASIA/36Kr article dated 12 Aug 2026. — [KrASIA](https://www.kr-asia.com/after-seed-and-flow-bytedance-builds-a-new-ai-unit-around-data)
- Seed Global Data team: "produces international data for LLMs". Its LA Specialist role is to "deliver high-quality annotation work to create SFT and RLHF data", with advanced English required and prior RLHF annotation experience at AI/LLM companies strongly preferred. — [TCV job board](https://portfoliojobs.tcv.com/companies/bytedance/jobs/64579890-llm-training-operation-specialist-seed-global-data)
- Supplier data types sought: "SFT, RM, Eval, and Multimodal". — [Lead Edge job board, posting A31935](https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production)
- Xpert, ByteDance's expert data platform, launched 2025, says it has more than 50,000 experts "from writers to therapists". — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/)
- XpertBench (ByteDance Seed, arXiv 2604.02368, submitted 27 Mar 2026):
  - Experts are sourced through the Xpert Data Platform via "direct registration, peer referrals, and **vendor partnerships**".
  - More than 200 experts come from **overseas institutions**.
  - The panel includes 183 legal qualifications, 163 medical practitioner licences, and CFA, CPA and CATTI (translator) holders.
  - Seven domains: Finance, Law, Education, STEM, Humanities and Social Sciences, Computer Science, Healthcare & Medicine.
  - 1,346 tasks, scored with rubrics of 15–40 weighted checkpoints.
  - Two-stage expert qualification: a domain exam plus a reviewed trial annotation.
  - — [arXiv XpertBench](https://arxiv.org/html/2604.02368v1)
- ChinaTalk: Eaglepoint sold **code and healthcare** data to ByteDance; Pareto did human data collection; Abundant did code. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- Domestic vendors: Haitian Ruisheng's Dec 2025 IR record calls ByteDance an "important customer" (speech, CV and NLP data). Fabon (法本信息) provides labeling and collection. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/). Humanlaya and UniPat also serve ByteDance. — [AI Proem](https://aiproem.substack.com/p/does-china-not-have-data-vendors)
- Seed in China is hiring data-resource roles: "数据资源运营（数理方向）-Seed" (Beijing; recruitment paused) and "大模型数据资源运营（多模态生成方向）-Seed" — [Liepin 1977380679](https://www.liepin.com/job/1977380679.shtml), [Liepin 1977380651](https://www.liepin.com/job/1977380651.shtml). Also "大模型数据产品/分析师-Seed" — [Liepin 1979571205](https://www.liepin.com/job/1979571205.shtml). Also "大语言模型数据管理专家（代码方向）—Seed" (Beijing Haidian, 20–30k × 15 months), shown as open on the Liepin page. — [Liepin](https://www.liepin.com/job/1977380679.shtml)

**(b) Job postings that signal procurement or vendor management**
| Title | Team | Location | ID / URL | Status / date | Signal |
|---|---|---|---|---|---|
| Partnership Development Analyst – AI Data and Safety | Global Operations; "AI Data & Safety – External Partnership Development Team" | Singapore | A226312B; [joinbytedance 7589640323472558341](https://joinbytedance.com/search/7589640323472558341); [Glassdoor SG](https://www.glassdoor.sg/job-listing/partnership-development-analyst-ai-data-and-safety-bytedance-JV_IC3235921_KO0,50_KE51,60.htm?jl=1010000563250) | Date not shown; listed in 2026 on Glassdoor. Status not verified. | "Continuously sourcing high-quality data suppliers"; "identify and onboard startups and leading data suppliers"; analytical reports for data-procurement decisions; contract negotiation and compliance review. Requires 2+ years in AI data services, sourcing or vendor management. |
| Partnership Development Specialist – LLM Data Acquisition and Production | LLM Global Data, Doubao (Seed) team ("LA Regular Operations – User ops") | Los Angeles | A31935; [Lead Edge](https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production) | Posted "6+ months ago"; closed | Build supplier base for SFT/RM/Eval/Multimodal; USD 104.5k–228k base |
| Partnership Development and Management, LLM Data Acquisition and Production | LLM data | Singapore | [LinkedIn 3765765011](https://sg.linkedin.com/jobs/view/partnership-development-and-management-llm-data-acquisition-and-production-at-bytedance-3765765011) | About 2 years old (OLDER, roughly late 2023/2024); closed | Partnerships with "labeling service providers and workforce platforms", BPOs, gig platforms; "data procurement contracts" |
| LLM Training Operation Analyst – Seed (LLM) Global Data | Seed Global Data | Los Angeles | [Glassdoor](https://www.glassdoor.com/job-listing/llm-training-operation-analyst-seed-global-data-bytedance-JV_IC1146821_KO0,47_KE48,57.htm?jl=1009887475651); [joinbytedance 7340531725603227931](https://joinbytedance.com/search/7340531725603227931) | Date not verified | Manages LLM training projects and data-production operations; USD 83.6k–143.6k (via search snippet) |
| LLM Training Operation Specialist – Seed Global Data | Seed Global Data | Los Angeles | [TCV](https://portfoliojobs.tcv.com/companies/bytedance/jobs/64579890-llm-training-operation-specialist-seed-global-data) | Closed; a Jan 2026 version was valid to Apr 2026 (search snippet) | SFT/RLHF annotation, guidelines/casebooks, mentoring "external partners"; USD 33.70–56.03 per hour |
| LLM Training Operation Language and Creative Analyst – Seed Global Data | Seed Global Data | Los Angeles | [Glassdoor](https://www.glassdoor.com/job-listing/llm-training-operation-language-and-creative-analyst-seed-global-data-bytedance-JV_IC1146821_KO0,69_KE70,79.htm?jl=1009887475651) | Not verified (403) | Language/creative data, by title only |
| Training Operation Coding Analyst – Seed Global Data | Seed Global Data | Singapore | [Jobstreet 90420061](https://sg.jobstreet.com/job/90420061); [Glassdoor SG](https://www.glassdoor.sg/job-listing/training-operation-coding-analyst-seed-global-data-bytedance-JV_IC3235921_KO0,50_KE51,60.htm?jl=1009969922323) | Not verified | Coding datasets |
| Model Safety Project Intern (Seed-Global Data), 2026 start | Global Data | n/a | [Lead Edge](https://jobs.leadedge.com/companies/bytedance/jobs/67245061-model-safety-project-intern-seed-global-data-2026-start-bs-ms) | Closed | Safety data |
- Bloomberg (19 Feb 2026): ByteDance is expanding US AI hiring with nearly 100 open roles. Seed has labs in the US, Singapore and China. — [Bloomberg](https://www.bloomberg.com/news/articles/2026-02-19/bytedance-building-out-artificial-intelligence-team-in-us) (search snippet only; paywalled)
- The same joinbytedance ID (7589640323472558341) appeared in one search snippet titled "Partnership Development Analyst – **Seed Global Data**". The live page now reads "– **AI Data and Safety**". — [joinbytedance](https://joinbytedance.com/search/7589640323472558341)

**(c) Procurement and contact channels**
- Singapore: AI Data & Safety, External Partnership Development team (Global Operations). Its explicit role is supplier sourcing, evaluation and onboarding. — [joinbytedance](https://joinbytedance.com/search/7589640323472558341)
- US: San Jose buying desk — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments). Los Angeles LLM Global Data operations — [Lead Edge](https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production).
- Xpert: takes vendor partnerships as one expert-sourcing route, and has overseas experts. — [arXiv](https://arxiv.org/html/2604.02368v1)
- ByteDance Seed careers page — [seed.bytedance.com/en/career](https://seed.bytedance.com/en/career)

**(d) US list status**
- 1260H: not listed (absent from the June 2026 list as reproduced by a trade site) — [ic-pcb.com](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html). Entity List: not found.

### Inferences
- The "Seed Global Data" to "AI Data and Safety" retitling of the Singapore posting fits the August 2026 reorganisation: procurement now sits in the new central data unit, not inside Seed. Supplier outreach should therefore target the **AI Data & Safety / External Partnership Development** team rather than Seed researchers.
- ASSESSMENT, fit **HIGH**: ByteDance has the most mature external-supplier process, explicit SFT/RM/Eval/Multimodal supplier categories, an "international data" team that needs non-Chinese languages and Western cultural context, and Xpert's documented vendor-partnership route for experts (law, medicine and finance are core Xpert domains). PathWize's EU languages and Western medical/legal/finance PhDs fill a gap that Xpert's mostly Chinese expert base (61% from 985/211 universities) cannot fill cheaply. ByteDance is **not** on 1260H or the Entity List, which lowers compliance and reputational risk relative to Tencent, Alibaba and Baidu.
- ASSESSMENT: Recommended entry is a Singapore-entity contract (ByteDance Pte. Ltd.) via the External Partnership Development team, positioned as a "European multilingual expert network / Xpert vendor partner". Lead with pilot evaluation and rubric sets in radiology and dermatology, and EU-law SFT/RLHF in DE/FR/IT/ES/PL.

### Gaps
- No public ByteDance **supplier registration portal** for AI data was found. Whether vendors register via a general procurement portal is not verified.
- Whether the Singapore A226312B posting is still open on 12 Nov 2026 is not verified.
- Detailed language requirements in Seed Global Data postings could not be read (Glassdoor 403). The only verified language requirement is "advanced English".
- Whether Xpert admits non-Chinese-speaking experts directly is not documented. The paper mentions only 200+ overseas-institution experts.

---

## 3. Alibaba (Qwen/Tongyi, Alibaba Cloud, AIData / 数据技术及产品部, Siriser 晓天睿士)

### Takeaway
Alibaba is **building a formal outsourced-data procurement function "from zero"**: a Hangzhou posting for an "LLM outsourced training procurement expert" seeks a builder of a supplier ecosystem. A central AIData department hires "大模型数据采购专家" (LLM data procurement expert) and "数据生态资源运营" (data ecosystem resource operations). Its expert platform Siriser/晓天睿士 (launched January 2026) recruits PhD-level finance and law experts and "global" experts. Alibaba has been on the Pentagon 1260H list since 8 June 2026.

### Cited Findings
**(a) Documented data needs**
- Mercor sold SWE RL environments to Alibaba; Turing sells to Alibaba. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- Humanlaya and UniPat (domestic) reportedly serve Alibaba. UniPat co-founder Li Kuan previously worked on RL infrastructure at Alibaba. — [AI Proem](https://aiproem.substack.com/p/does-china-not-have-data-vendors)
- Siriser is "Alibaba's AI training platform, launched in January". It recruits teachers, mechanical engineers and music composers, and rejected trainers can revise or appeal. — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/)
- Siriser = 晓天睿士 (siriser.com), operated by 阿里数据 (Alibaba Data). Blog posts by the official "siriser" CSDN account:
  - "阿里「晓天睿士」启动金融领域专家招募：邀博士级金融人才" (finance expert recruitment; requires a finance PhD plus research or industry experience; remote work designing finance questions and assessing AI output for professional accuracy and compliance).
  - "正式上线！阿里数据晓天睿士官网来了 诚邀**全球**顶级专家共建AI未来" (official site launch, inviting top experts worldwide).
  - Law-expert and complex-instruction expert campaigns are also reported, about 400 RMB per instruction (secondary, unverified).
  - — [CSDN siriser, finance](https://blog.csdn.net/siriser/article/details/157254884); [CSDN siriser, launch](https://blog.csdn.net/siriser/article/details/157943313) (both via search snippets; pages returned 521 on fetch); [siriser.com](https://www.siriser.com/siriser/home) (JS-only, title "晓天睿士")
- Alibaba's Qwen labeling platform (backend team within the speech-intelligence group) works with "专业标注供应商组织" (professional annotation supplier organisations). It covers "二十余个语种与方言" (20+ languages and dialects) and speech, text, image and video data. Posting "千问办公-研发工程师-数据标注方向", Hangzhou, posted 9 Nov 2026. — [freehire](https://freehire.me/jobs/qian-wen-ban-gong-yan-fa-gong-cheng-shi-shu-ju-biao-zhu-fang-xiang-alibaba-group-4lortry5)
- A Qwen foundation-model internship in the agent-data direction covers benchmark construction and data production "with domain experts and annotation teams" (search snippet only; not verified). — [Alibaba campus](https://campus-talent.alibaba.com/campus/position/199910000012)

**(b) Job postings that signal procurement or vendor management**
| Title | Team | Location | URL | Date | Signal |
|---|---|---|---|---|---|
| 阿里控股-大模型外包训练采购专家 (LLM Outsourced Training Procurement Expert) | Alibaba Holding (department not stated) | Hangzhou (Xixi campus), on-site | [talent-holding.alibaba.com 1170302](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=1170302); details via [watchjobs mirror](https://watchjobs.net/zh/explore/job/c256-1170302/%E9%98%BF%E9%87%8C%E6%8E%A7%E8%82%A1-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%96%E5%8C%85%E8%AE%AD%E7%BB%83%E9%87%87%E8%B4%AD%E4%B8%93%E5%AE%B6-%E6%9D%AD%E5%B7%9E-%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4) | Posted about 78–90 days before 12 Nov 2026, so about Aug 2026 | "Build from zero" an outsourced LLM-training supplier ecosystem. Supplier capability maps and price benchmarks. Shift from "买人力" (buying labour) to "买技术能力" (buying technical capability). "试点是新的招标" (pilots are the new tender). Negotiate exclusive partnerships. Covers vertical-domain corpus services, synthetic data, evaluation. |
| 大模型数据采购专家 (LLM Data Procurement Expert) | 阿里控股-平台技术 / 数据技术及产品部 (AIData) | Hangzhou / Beijing | listed on [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html) | Department listing dated 2 Mar 2026 | Title only; description not verified |
| 大模型数据生态资源运营 (LLM Data Ecosystem Resource Operations) | same | Hangzhou / Beijing | [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html) | 2026 | Title only; not verified |
| 大模型数据标注专家 / 大模型数据评测专家 / 大模型数据采集工程师 | same | Hangzhou / Beijing | [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html) | 2026 (new-grad) | Annotation, evaluation and collection |
- The AIData department "supplies acquisition, processing, synthesis, annotation, and evaluation services for Alibaba's large models". — [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html)

**(c) Procurement and contact channels**
- Siriser / 晓天睿士 (siriser.com): expert-side entry, which "invites global top experts". — [CSDN](https://blog.csdn.net/siriser/article/details/157943313) (snippet)
- AIData / 数据技术及产品部 (Alibaba Holding platform technology) is the likely vendor-side owner, given the procurement-expert and ecosystem-operations roles. — [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html)
- Not the same programme: Alibaba International's "人工智能训练师全国运营中心" (AIDC AITIC franchise training centre) is a different scheme. — [163.com](https://www.163.com/dy/article/JMHCG27N05399O2Y.html); [aidc-aitic.com](https://aidc-aitic.com/)

**(d) US list status**
- 1260H: **listed** as "Alibaba Group", added **8 June 2026** (Federal Register notice 10 June 2026). Basis: indirect affiliation with SASAC and military-civil-fusion work with MIIT. — [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h); [Cleary](https://www.clearytradewatch.com/2026/06/department-of-defense-adds-major-technology-automotive-and-biotechnology-firms-to-1260h-chinese-military-companies-list/)
- Legal effects in the US:
  - Section 1532 (FY2026 NDAA), effective 17 Jan 2026: Department of War contractors may not use AI products developed by listed entities without a waiver. Alibaba and Baidu are specifically flagged.
  - Section 805 (FY2024 NDAA): direct-procurement ban from 30 June 2026, expanding on 30 June 2027 to goods and services that contain items produced or developed by listed entities.
  - — [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h)
- Entity List: not found.
- Alibaba publicly denied the designation's legal basis. — [chinabizinsider](https://chinabizinsider.com/alibaba-nio-and-byd-respond-to-pentagon-military-list-expansion/)

### Inferences
- ASSESSMENT, fit **MEDIUM-HIGH on need, MEDIUM on risk**: Alibaba is actively institutionalising outsourced data procurement in 2026 and explicitly wants "technical capability" rather than labour, which suits PathWize's expert-led model. Qwen's 119-language push and a 20+-language labeling platform imply demand for European-language data. Siriser's PhD-level finance and law recruitment matches PathWize's Tier-1 profile. The 1260H listing (June 2026) is the main friction: it creates reputational and US-customer conflicts (see section 9).
- ASSESSMENT: Best route is a vendor relationship with AIData's procurement experts, positioned as a "European expert supplier with pilot capability", following their own "pilots are the new tender" logic. Direct Siriser enrolment of PathWize experts would cannibalise PathWize's margin and is not recommended.

### Gaps
- No Alibaba **supplier registration portal** for AI data was verified, and no overseas (Singapore, US, EU) Alibaba data-buying team was documented.
- Full texts of "大模型数据采购专家" and "数据生态资源运营" were not retrieved.
- The Siriser languages and domains list could not be read (site is JS-only; CSDN returned 521).

---

## 4. Tencent (Hunyuan, TEG AI Data department, ExpertHub 混元智囊团)

### Takeaway
Tencent formalised its AI Data department under Yao Shunyu (appointed Sept 2026). In Sept 2026 it launched an external expert platform, **ExpertHub / 混元智囊团** (expert.tlabel.tencent.com). It explicitly recruits **law (incl. English case law and contracts), healthcare (licensed), finance (CPA/CFA/ACCA), STEM (Master's+, PhD preferred) and translation in English, German, French, Spanish, Japanese and Korean**, and publishes a cooperation email. Tencent has been on the 1260H list since Jan 2025 and remains on it.

### Cited Findings
**(a) Documented data needs**
- ExpertHub / 智囊团 (Tencent), official page — [expert.tlabel.tencent.com](https://expert.tlabel.tencent.com/):
  - 12+ domains: STEM (math, physics, chemistry, biology, olympiads); agentic coding; finance and accounting (CPA/CFA/ACCA); law (legal qualification or **BAR admission**; mentions English case law and contracts); healthcare and medicine ("valid professional licence" required); multilingual translation (examples: English, Japanese, Korean, **German, French, Spanish**); film/TV; fiction; lifestyle creators; philosophy, geography and history; audio/voice; UI/UX design.
  - STEM requires a Master's or higher, PhD preferred.
  - 100% remote; pay tied to quality tier; resume plus qualification review before signing as a "Tencent-certified expert".
  - Cooperation email: **experthub@tencent.com**.
- Launch: woshipm article dated 21 Sep 2026. Tasks include "high-quality dataset production, professional content writing, knowledge review". Pay-per-task after multi-level review. No interviews. — [woshipm](https://www.woshipm.com/share/6467704.html); [ai-bot.cn](https://ai-bot.cn/hyexpert-tencent/)
- AI Data department: Yao Shunyu was formally appointed head in **September 2026**, reporting to TEG President Lu Shan (predecessor Liu Yuhong). This puts Hunyuan's model, infrastructure, data and evaluation functions under one leader. Hy4 Preview training data came from Tencent business teams (software engineering, gaming, finance, security). Article dated 10 Oct 2026. — [BigGo Finance](https://finance.biggo.com/news/0f07a702-8f1d-434f-8198-b5c80189a1ab)
- Hy4 Preview "participated for the first time in the automated optimization of training methods, data strategies, evaluation systems" — the self-improving-AI angle (search snippet). — [BigGo Finance Hy4](https://finance.biggo.com/news/439ad16c-57ce-4efc-bfd0-83f079cfdc9c)
- Tencent says it **filtered offensive cyber content** from Hy4 training data. — [AI Safety in China Brief #32](https://aisafetychina.substack.com/p/brief-32-tencent-deepseek-and-alibaba) (search snippet)
- Vendors: Forbes reviewed a Tencent executive's message saying Tencent relies on Surge. — [Forbes](https://www.forbes.com/sites/annatong/2026/08/05/silicon-valleys-other-china-problem-its-training-their-ai/) (snippet). Turing and DeccanAI sell to Tencent; Surge reportedly sells RL environments; CL-bench rubrics appear Western-expert-written. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments). Datatang supplied speech/CV data (2021–22, pre-LLM era, OLDER). — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)

**(b) Job postings**
- Hunyuan "青云计划" early batch (TEG; hiring entity Tencent Technology (Shanghai) Co., Ltd.; application deadline 5 Sep 2026):
  - Locations include **Seattle and Singapore**.
  - Data roles: "Model Data Strategy (模型数据策略)", covering data for coding, agents, long text, and "domain experts (physics, chemistry, biology)".
  - "AI Data system" roles: Eval & Insight ("third-party evaluation"), Foundational Data, Frontier Data.
  - — [WonderCV](https://www.wondercv.com/xiaozhao/tencent-hunyuan-qingyun-plan-2026-11495-220b8a/)
- "混元预训练数据工程负责人" (Hunyuan pre-training data engineering lead), Shenzhen, 3+ years. — [niuqizp](https://jobs.niuqizp.com/job-vl85N5LtN.html) (aggregator snippet)
- One careers.tencent.com posting (postId 2092894056538619904) reportedly lists "外部数据供应商或技术合作伙伴管理经验" (experience managing external data suppliers or technology partners) as a requirement. The page is JS-only, so the title and department are **not verified**. — [careers.tencent.com](https://careers.tencent.com/jobdesc.html?postId=2092894056538619904)
- ChinaTalk: Tencent Hunyuan job ads seek staff experienced with **overseas suppliers** (no URL given). — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- A 21jingji article (9 Nov 2026), "姚顺雨摇人，腾讯正在大举招聘" (Yao Shunyu is recruiting; Tencent hiring heavily), returned 503; content not verified. — [21jingji](https://m.21jingji.com/article/20261109/herald/620a5d0e4ff1f7c93917c3a4d45f34aa.html)

**(c) Procurement and contact channels**
- ExpertHub cooperation email **experthub@tencent.com**. The domain tlabel.tencent.com suggests Tencent's internal labeling platform ("tlabel"). — [expert.tlabel.tencent.com](https://expert.tlabel.tencent.com/)
- AI Data department (TEG, Shenzhen/Beijing/Shanghai). Overseas Hunyuan hiring is in Seattle and Singapore. — [WonderCV](https://www.wondercv.com/xiaozhao/tencent-hunyuan-qingyun-plan-2026-11495-220b8a/)

**(d) US list status**
- 1260H: **listed** since January 2025 and kept in the June 2026 update ("Tencent is indirectly affiliated with the PLA"). — [Sayari](https://sayari.com/resources/blog/1260h-list-update/); [WTTL](https://www.wttlonline.com/stories/pentagon-republishs-china-military-company-list-narrows-removals,15249); [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html)
- Entity List: not found.

### Inferences
- ASSESSMENT, fit **HIGH on need, LOW-MEDIUM on risk tolerance**: ExpertHub's domain and language list is almost exactly PathWize's profile: licensed physicians, BAR-admitted lawyers, CFA/CPA, STEM PhDs, German/French/Spanish translation. Tencent's own data request reportedly emphasised cybersecurity, which PathWize excludes, and Tencent has filtered offensive cyber content. PathWize would have to ring-fence scope to medicine, law, finance and languages. Tencent's 1260H status since 2025 is the highest compliance and reputational friction among the big three.
- ASSESSMENT: experthub@tencent.com is the only **published** cooperation email found for any Chinese big-tech expert-data programme. It is a low-cost first touch for a vendor-level (not individual-expert) proposal.

### Gaps
- The Forbes-reported Tencent data request (finance, cybersecurity, self-improving AI) could not be read in the original.
- No Tencent supplier registration portal for AI data was verified.
- Whether ExpertHub accepts non-China-resident experts or corporate vendors is not stated.

---

## 5. Ant Group (Bailing/Ling/Ring/Ming via inclusionAI; AQ / 蚂蚁阿福 medical AI)

### Takeaway
Ant has the clearest **medical** expert-data demand of any Chinese big tech. AQ (蚂蚁阿福) runs a 3-tier annotation system with "thousands" of medical annotators. In Oct 2026 it publicly recruited "**doctors and medical students worldwide**" for "模型训练医学专家" (medical experts for model training) roles. Ant is **not** on the 1260H list.

### Cited Findings
- AQ / 蚂蚁阿福 (21 Oct 2026): total sponsor of the show 《令人心动的offer8·医学生季》, "面向全球医生发offer" (offering jobs to doctors worldwide).
  - Role "模型训练医学专家": judge the accuracy of AI answers, build training data from clinical Q&A, case reasoning and treatment advice, and translate clinical needs into plans for algorithm, data and product teams.
  - Open to Master's/PhD students and doctors or medical students within 5 years of graduation.
  - "Several thousand" people work on knowledge annotation, answer evaluation and safety testing, in a 3-tier system: basic annotation, medical annotation, professional evaluation.
  - More than 100 doctors from top-tier (三甲) hospitals help build the product.
  - — [Beijing Daily / bjd.com.cn](https://news.bjd.com.cn/2026/10/21/12003286.shtml); [youth.cn](https://d.youth.cn/newtech/202610/t20261021_16925828.htm)
- Ant's medical LLM reportedly went through RL with "数百个专业医学团队、医生标注数据" (annotation data from hundreds of professional medical teams and doctors), per third-party reports. — summarised from [search results incl. cn-witmed](http://www.cn-witmed.com/list/31/18678.html) (snippet; not independently verified)
- Forbes names Ant Group among buyers from US data vendors; Ant did not respond. — [Forbes](https://www.forbes.com/sites/annatong/2026/08/05/silicon-valleys-other-china-problem-its-training-their-ai/) (snippet). An Ant–AfterQuery link was **not found** in any accessible source. AfterQuery itself says only that it serves "every leading AI lab". — [SiliconANGLE](https://siliconangle.com/2026/04/10/ai-training-data-startup-afterquery-nabs-30m-investment/); [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments) (could not verify AfterQuery sales)
- Bailing model lines: Ling (non-thinking MoE), Ring (thinking), Ming (omni-modal). Ling and Ring are at trillion-parameter scale. Ling-1T was trained on 20T tokens of curated text; data sources not disclosed. — [cls.cn search summary](https://www.cls.cn/detail/1981760); [lingyibyte Oct 2026 team map](https://www.lingyibyte.com/%E8%B0%83%E7%A0%94/ant-group-llm-teams.html)
- Supplier map: Ant's Ling is "self-built", with no suppliers named. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)
- US lists: 1260H not listed — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html). Entity List: not found.

### Inferences
- ASSESSMENT, fit **HIGH for medicine**: AQ's "global doctors" recruitment and three-tier medical annotation map directly onto PathWize's radiology and dermatology pilots and its "professional evaluation" tier (professors, consultants). Ant is not on 1260H, but its corporate ties to Alibaba (1260H since June 2026) may cause some reputational spillover; the ownership share was not re-verified here. Western clinical context (EU guidelines, EU-licensed physicians) would matter most if AQ expands internationally. The sources reviewed describe only China-based users and hospitals.
- ASSESSMENT: Approach Ant Health / AQ business development with a medical-evaluation pilot, for example "EU-licensed dermatologists grade AQ answers against ESC/EADV/ESR guidelines".

### Gaps
- No Ant Group data-procurement or vendor-management job posting was found (search budget exhausted before a deeper check). No Ant supplier portal was found.
- Whether AQ's "global" recruitment includes non-Chinese-speaking doctors is not stated.

---

## 6. Baidu (ERNIE / 文心, Baidu AI Cloud annotation bases)

### Takeaway
There is still **no documented external expert-data purchase** by Baidu. Its model is in-house plus outsourced Chinese annotation bases (Haikou, Tangshan) run with local government and third-party staffing firms. Baidu has been on 1260H since 8 June 2026.

### Cited Findings
- Baidu AI Cloud's Haikou base (2023, OLDER) handles SFT, RM and evaluation labeling for ERNIE. Recruits through government, universities and job stations; 100% of annotators hold a bachelor's degree. — [Tencent News / Zhidx 2023](https://news.qq.com/rain/a/20230824A08SCO00); [C114](https://m.c114.com.cn/w5339-1241137.html); [Leiphone](https://www.leiphone.com/category/ai/6uE4ufGso0vh4pTX.html)
- The Baidu Tangshan base's annotator jobs are recruited by a third party (易瑞科技). — [24365.smartedu.cn](https://24365.smartedu.cn/student/jobs/ATwEjczpgaBQ2ZvASFJ2rj/detail.html)
- A BOSS直聘 listing, "AI大模型数据训练师" (LLM data trainer), page updated Sept 2026: interfaces with 文心一言 (ERNIE Bot) labeling needs, labeling, QA and rules training; no remote work. Likely an outsourcer, not verified. — [zhipin.com](https://www.zhipin.com/job_detail/e6871c5ba5b7841e1HZz2t-5EVRW.html)
- Datatang sold about RMB 5.58M (2021) and RMB 6.51M (2022) to Baidu (OLDER, pre-LLM era). — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)
- US lists: 1260H **listed** 8 June 2026; Section 1532 AI-product ban flagged for Baidu. — [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h). Entity List: not found.

### Inferences
- ASSESSMENT, fit **LOW**: no external expert-data buying signal, a domestic low-cost annotation model, and a 1260H listing. Deprioritise.

### Gaps
- Baidu job postings for data procurement or overseas data were not searched in depth (search budget exhausted).

---

## 7. Second-tier companies (Kuaishou, Meituan, Xiaomi, JD, Huawei, iFlytek, SenseTime, NetEase, PDD/Temu, Shein, Trip.com)

### Takeaway
Little public evidence of external expert-data procurement was found for these companies. Partial signals exist for Xiaomi (licensed RL code data vendors), Meituan (multilingual pretraining, open-source LongCat 2.0 and 2.5) and Kuaishou (Kling capex and spin-off). Coverage is incomplete because the search budget ran out.

### Cited Findings
- **Xiaomi (MiMo)**: the MiMo-V2.6 report cites "licensed data vendors" (unnamed) for RL code-task data. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/). US lists: on the DoD CCMC list on 14 Jan 2021, removed by agreement in May 2021 after a court injunction (OLDER) — [Wikipedia](https://en.wikipedia.org/wiki/Xiaomi). 1260H 2026: not listed — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html).
- **Kuaishou (Kling, KwaiYii/KAT)**:
  - Plans to spin off Kling at a USD 20B valuation, raising USD 2B (LatePost, 11 May 2026).
  - 2026 capex about RMB 26B, up about RMB 11B, mainly for Kling and foundation-model compute and data centres.
  - — [21jingji](https://www.21jingji.com/article/20260513/025d7b0a2c65669ca526bc5bf4323ffd.html); [DoNews](https://www.donews.com/news/detail/4/6577371.html)
  - KAT used DeepSeek-V3/R1 as distillation teachers. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)
  - No data-procurement posting found. 1260H: not listed — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html).
- **Meituan (LongCat)**: LongCat-2.0 released 30 June 2026 with more than 30T pretraining tokens, including Chinese, English, **multilingual** and code; composition not disclosed. LongCat-2.5 open-sourced 10 Nov 2026 (MIT licence). — [Sohu](https://www.sohu.com/a/1043649467_122396381); [Sohu 2.5](https://www.sohu.com/a/1099638667_122066679); [Meituan](https://www.meituan.com/news/NN260630164005904). Data is "self-built"; no vendor named. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/). 1260H: not listed.
- **Huawei (Pangu)**: no suppliers found; only data-processing pipeline code is open-sourced. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/). 1260H: **listed** ("Huawei Investment & Holding and Huawei Technologies"); also on the OFAC NS-CMIC list. — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html); [Sayari](https://sayari.com/resources/blog/1260h-list-update/)
- **SenseTime (SenseNova)**: no LLM-level data or vendor disclosure. — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/). On the BIS **Entity List** since Oct 2019 (Xinjiang); OFAC NS-CMIC and investment ban since 10 Dec 2021. — [Wikipedia](https://en.wikipedia.org/wiki/SenseTime). 1260H: **listed** per a trade-site reproduction — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html). Wikipedia says DoD labelled it a "Chinese military company" in Dec 2024/Jan 2025.
- **iFlytek (Spark)**: "In October 2019, iFlytek was sanctioned by the United States" (Xinjiang surveillance; the Entity List action of Oct 2019). — [Wikipedia](https://en.wikipedia.org/wiki/IFlytek). 1260H: not listed per [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html). Haitian Ruisheng lists iFlytek as a customer (OLDER, pre-LLM era). — [jimmyresearch](https://jimmyresearch.com/AIdata/llm/model-recipes/)
- **JD (JoyAI), NetEase (Youdao), PDD/Temu, Shein, Trip.com**: no data-procurement or expert-annotation evidence found in this session. 1260H: none listed. — [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html). Entity List: not found.

### Inferences
- ASSESSMENT:
  - **Meituan** (multilingual pretraining, an agent focus, not listed) and **Xiaomi** (already licenses vendor data, not listed) are the most plausible second-tier buyers. PathWize would mainly offer agentic, finance and legal evaluation, not code.
  - **Kuaishou/Kling** mainly needs video and multimodal data, outside PathWize's core.
  - **Trip.com, Shein and PDD/Temu** could plausibly need European-language customer-service and commerce data, but no evidence was found.
  - **SenseTime, iFlytek and Huawei** carry Entity List or 1260H baggage and are not recommended.

### Gaps
- No job-board checks (BOSS直聘, Liepin, LinkedIn, MyCareersFuture) were possible for these companies after the search budget ran out.
- Huawei's BIS Entity List status (widely reported since May 2019) was not re-verified with a source in this session.

---

## 8. Cross-company: Singapore, US and EU buying entities, supplier portals, events

### Takeaway
Confirmed **non-China buying points**: ByteDance Singapore (External Partnership Development, Global Operations), ByteDance San Jose and Los Angeles (Seed/LLM Global Data), and Tencent Hunyuan recruitment in Seattle and Singapore. **No** public AI-data supplier registration portal was found for ByteDance, Alibaba or Tencent. The only published contact address is Tencent's experthub@tencent.com.

### Cited Findings
- ByteDance buying desks in Singapore and San Jose. — [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- ByteDance Singapore External Partnership Development team (job A226312B). — [joinbytedance](https://joinbytedance.com/search/7589640323472558341)
- ByteDance LA LLM Global Data supplier development (A31935, closed). — [Lead Edge](https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production)
- Tencent Hunyuan: Seattle and Singapore hiring locations. — [WonderCV](https://www.wondercv.com/xiaozhao/tencent-hunyuan-qingyun-plan-2026-11495-220b8a/)
- Tencent ExpertHub: experthub@tencent.com. — [expert.tlabel.tencent.com](https://expert.tlabel.tencent.com/)
- Expert platforms (direct-to-expert channels that PathWize experts could join individually): ByteDance Xpert, Alibaba Siriser/晓天睿士, Tencent ExpertHub/混元智囊团, Humanlaya TalentsAI. — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/); [AI Proem](https://aiproem.substack.com/p/does-china-not-have-data-vendors); [Tencent](https://expert.tlabel.tencent.com/)

### Inferences
- ASSESSMENT: Without supplier portals, the realistic channels are:
  - direct outreach to named teams (ByteDance External Partnership Development in Singapore; Alibaba AIData procurement experts; experthub@tencent.com);
  - subcontracting to vendors already inside (Humanlaya, UniPat, DeccanAI, Turing, Invisible, Eaglepoint), which also reduces direct exposure to 1260H-listed buyers;
  - LinkedIn targeting of current holders of the job titles listed above.

### Gaps
- No ByteDance, Alibaba or Tencent procurement portal URL was found.
- No EU-based data-buying team was found for any of these companies.
- No industry events where these teams buy data were identified.

---

## 9. US restriction status (summary) and overall PathWize fit ranking

### Takeaway
On 1260H: Tencent (since Jan 2025), Alibaba Group and Baidu (8 June 2026), Huawei, SenseTime, Inspur. Not on 1260H: ByteDance, Ant, Kuaishou, Meituan, Xiaomi, JD, NetEase, PDD, Shein, Trip.com, iFlytek. On the Entity List (verified here): SenseTime and iFlytek (Oct 2019).

### Cited Findings
| Company | 1260H (June 2026 list) | BIS Entity List | Source |
|---|---|---|---|
| ByteDance | Not listed | Not found | [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html) |
| Alibaba Group | **Listed, 8 Jun 2026** | Not found | [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h) |
| Tencent | **Listed** (Jan 2025, kept in 2026) | Not found | [Sayari](https://sayari.com/resources/blog/1260h-list-update/); [WTTL](https://www.wttlonline.com/stories/pentagon-republishs-china-military-company-list-narrows-removals,15249) |
| Baidu | **Listed, 8 Jun 2026** | Not found | [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h) |
| Ant Group | Not listed | Not found | [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html) |
| Kuaishou / Meituan / JD / NetEase / PDD / Shein / Trip.com | Not listed | Not found | [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html) |
| Xiaomi | Not listed (CCMC 2021, removed May 2021) | Not found | [Wikipedia](https://en.wikipedia.org/wiki/Xiaomi); [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html) |
| Huawei | **Listed** | Not re-verified this session | [ic-pcb](https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html) |
| SenseTime | **Listed** (trade-site reproduction) | **Yes, Oct 2019**; NS-CMIC 2021 | [Wikipedia](https://en.wikipedia.org/wiki/SenseTime) |
| iFlytek | Not listed | **Sanctioned Oct 2019** (Xinjiang) | [Wikipedia](https://en.wikipedia.org/wiki/IFlytek) |
- The June 2026 update brought the list to 188 entities (65 added, 10 removed); Federal Register notice 10 June 2026. — [Federal Register](https://www.federalregister.gov/documents/2026/06/10/2026-11571/notice-of-availability-of-designation-of-chinese-military-companies); [HSF Kramer](https://www.hsfkramer.com/notes/sanctions/2026-posts/us-department-of-war-expands-section-120h-list-to-188-chinese-military-companies)
- Effects: Section 805 direct-procurement ban from 30 June 2026, expanding 30 June 2027. Section 1532 bars Department of War contractors from using AI products developed by listed entities (effective 17 Jan 2026). — [Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h)
- Political scrutiny: Forbes and ChinaTalk coverage prompted criticism of US vendors serving both the Pentagon and Chinese labs. — [Townhall, 26 Oct 2026](https://townhall.com/news/tayte-christensen/2026/10/26/new-report-scrutinizes-us-ai-data-sales-to-china-n2685323); [RedState](https://redstate.com/rc-maxwell/2026/08/18/american-innovation-is-subsidizing-a-rivals-ai-capabilities-n2205773)

### Inferences
- ASSESSMENT: 1260H creates no direct legal prohibition for an EU company. But if PathWize also wants US frontier labs or US-government-adjacent customers, it will face the same "serves Chinese military companies" scrutiny now aimed at Surge, Mercor and others. Separating client portfolios (or using an intermediary) and refusing cyber/dual-use bio work, as PathWize already does, mitigates this. EU-side checks (EU sanctions and dual-use regulation) were outside this scope.
- ASSESSMENT, fit ranking for PathWize (need × reachability × risk):
  1. **ByteDance**: high need, explicit supplier-onboarding team in Singapore, Xpert vendor partnerships, not on 1260H.
  2. **Ant Group / AQ**: high medical need, global doctor recruitment, not on 1260H; no vendor channel verified.
  3. **Tencent**: ideal domain and language match via ExpertHub plus a published email; but on 1260H and cyber-heavy demand.
  4. **Alibaba**: building a supplier ecosystem, PhD-level Siriser demand, 119 languages; on 1260H since June 2026.
  5. **Meituan / Xiaomi**: plausible, unverified.
  6. Baidu, Huawei, SenseTime, iFlytek: low.
  7. Kuaishou, JD, NetEase, PDD, Shein, Trip.com: no evidence.

### Gaps
- Huawei's BIS Entity List status was not re-verified.
- iFlytek's absence from 1260H rests on a single secondary list reproduction (ic-pcb.com). It should be checked against the official DoD PDF ([defense.gov PDF](https://media.defense.gov/2026/Jun/08/2003945537/-1/-1/1/ENTITIES-IDENTIFIED-AS-CHINESE-MILITARY-COMPANIES-OPERATING-IN-THE-UNITED-STATES-IN-ACCORDANCE-WITH-SECTION-1260H.PDF)), which returned 403 here.
