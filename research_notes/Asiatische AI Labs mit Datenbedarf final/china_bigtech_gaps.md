# Chinese big tech: closing the gaps on human/expert-data demand and verifying earlier findings (as of 12 Nov 2026)

Scope: second research round for PathWize, run on 12 Nov 2026. It covers only the gaps left by `research_notes/Asiatische AI Labs mit Datenbedarf/china_bigtech_labs.md` and the report section "Lücken / nicht verifiziert".

Method: the careers sites' own JSON endpoints were queried directly where they were reachable:
- Tencent: careers.tencent.com API and Tencent's Workday tenants
- Alibaba: talent-holding.alibaba.com position API
- Xiaomi: its Feishu-based careers API
- Meituan, JD and NetEase: their careers APIs
- Tencent ExpertHub, Alibaba Siriser and ByteDance Xpert: the public front-end JavaScript bundles

21 of the 30 allowed WebSearch calls were used.

Status of the main conclusions:
- "Live on 12 Nov 2026" means the posting was returned as active by the employer's own system on that date.
- Findings read from front-end code (registration-form validation rules, dropdown values) describe how the sites are built, not policy statements. They are marked as such.
- "ASSESSMENT" marks my own judgement.

Sites that could not be queried: jobs.bytedance.com and the joinbytedance.com API (blocked by Akamai or the connection was reset), Kuaishou's careers API (returned errors), Huawei, PDD/Temu and Trip.com's global job search (blocked or JS-only).

---

## Q1. Second-tier Chinese tech firms (Kuaishou, Meituan, JD, Xiaomi, NetEase, Huawei, PDD/Temu, Shein, Trip.com): documented 2025–2026 demand for external, expert or foreign-language training data

### Takeaway
- **Xiaomi** is the only second-tier firm with a documented, currently listed role that buys external LLM training data. "大模型技术商务" (LLM technical business/procurement) sources text corpora, books and multimodal data, and lists Chinese–English ability for dealing directly with overseas suppliers as a plus. Xiaomi also has a separate embodied-AI data procurement role.
- **Meituan, JD and NetEase** post only in-house data-operations or annotation roles (agent annotation, multilingual pretraining data engineering, annotation interns). None of them has a procurement or vendor role.
- **Kuaishou, Huawei, PDD/Temu, Shein and Trip.com** still have no documented external expert-data demand. Their careers systems could not be queried, and web searches found nothing.

### Cited Findings
**Xiaomi (MiMo)**
- "大模型技术商务" (code A199128), Beijing, published 26 Jun 2026, listed on Xiaomi's careers site on 12 Nov 2026 — [Xiaomi careers 7655555046909741354](https://xiaomi.jobs.f.mioffice.cn/index/position/7655555046909741354/detail):
  - **Duties:**
    - "独立挖掘并评估文本语料、书籍、多模态数据等上游供应渠道，建立动态供应商资源池，不依赖现成名单" (independently find and evaluate upstream sources of text corpora, books and multimodal data; build a dynamic supplier pool without relying on existing lists).
    - Grade suppliers A/B/C.
    - Lead training-data business deals end to end, including sampling-validation plans and evaluation standards.
    - Negotiate price, licence scope, SLAs and compliance terms.
    - Track the ROI of purchased data.
  - **Requirements:** 3+ years in data procurement, AI data services or technical BD/procurement; cold-outreach ability.
  - **Pluses:** "中英双语，可直接对接海外供应商（文本语料、多模态数据等）" (bilingual Chinese–English, able to deal directly with overseas suppliers of text corpora, multimodal data and similar); knowledge of copyright, privacy and cross-border data-transfer rules.
- "具身智能数据采购专家" (embodied-AI data procurement expert; A107063A), Beijing, published 21 Sep 2026 — [Xiaomi careers 7687792699093584154](https://xiaomi.jobs.f.mioffice.cn/index/position/7687792699093584154/detail):
  - Survey the market for embodied data (teleoperation trajectories, egocentric video, motion capture, simulation assets) and its pricing.
  - Track what "头部科技大厂" (leading big-tech firms) buy and from which vendors.
  - Negotiate, compare prices, and review IP and commercial-licence compliance.
- "MiMo大模型数据采集工程师" (A127870), published 11 May 2026: large-scale scraping of public data sources, including anti-bot and web-security countermeasures. This is in-house acquisition, not purchasing. — [Xiaomi careers 7638532839486572819](https://xiaomi.jobs.f.mioffice.cn/index/position/7638532839486572819/detail)
- "大模型数据专家（全模态数据合成与数据治理）" (A248846), published 27 Oct 2026: OS-agent trajectories, full-duplex speech synthesis data, and SFT/GRPO/DPO data mixing. This is in-house synthesis. — [Xiaomi careers 7701184512960825663](https://xiaomi.jobs.f.mioffice.cn/index/position/7701184512960825663/detail)

**Meituan (LongCat)**
- "LongCat - 大模型数据运营" (jobUnionId 3285026405), 核心本地商业-基础研发平台, Beijing/Chengdu. First posted 24 Apr 2025, refreshed 28 May 2026. Duties: build evaluation and annotation systems for agents (multi-turn, planning, plugin calls); manage annotators; automated data synthesis. Requires 1+ year of LLM annotation/evaluation experience. No vendor or external-expert language. — Meituan careers API (`zhaopin.meituan.com/api/official/job/getJobDetail`, jobUnionId 3285026405), via [zhaopin.meituan.com](https://zhaopin.meituan.com/)
- "大模型数据平台运营专家" (4552924944), Meituan Platform, Shanghai/Beijing, posted 10 Jun 2026. Covers SFT/DPO/RLHF/eval-set schemas, rubric and quality systems, and multi-source collection (log backflow, active construction, LLM synthesis). — same API, via [zhaopin.meituan.com](https://zhaopin.meituan.com/)
- Searches of Meituan's API for "数据采购", "数据合作", "小语种" and "多语言" on 12 Nov 2026 returned **no AI-data procurement or multilingual annotation role**. Procurement hits were all grocery or hardware buying. The multilingual hit was "【北斗】广告大模型应用算法工程师-【多国多语言LLM-based 推搜广告】" (campus, algorithm role). — [zhaopin.meituan.com](https://zhaopin.meituan.com/)
- Z Finance (29 Oct 2026) on Meituan's two data lines (company data platform department; LongCat pretraining, agentic-environment and evaluation teams): "no external vendors or budget reported". — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html)

**JD (JoyAI)**
- Searches of JD's social-recruitment API on 12 Nov 2026 found no procurement, vendor or expert-annotation role for AI data. Data roles found:
  - "数据算法工程师（大模型预训练）" (positionId 220413, 探索研究院 / Explore Academy, 4 Sep 2026): "面向多语言、多模态大模型训练，开展数据清洗、去重、打标" (cleaning, deduplication and tagging for multilingual, multimodal LLM training).
  - "具身智能数据平台开发工程师(专家)" (227104, 27 Oct 2026).
  - "大模型算法工程师" at JD Health (225168, 20 Sep 2026; medical-AI inference).
  - — [JD careers listing](https://zhaopin.jd.com/web/job/job_info_list/3) (data via its `web/job/job_list` endpoint)
- JD runs an embodied-data collection centre and a compliant data-trading platform that *sells* datasets. This is seen in a search-result summary only and was not verified. — [chinanews](https://www.chinanews.com/cj/2026/03-25/10592357.shtml)

**NetEase (incl. Youdao)**
- NetEase careers API (12 Nov 2026): annotation roles are interns only:
  - "大模型标注实习生（文本标注）" (NetEase Cloud Music)
  - "语音大模型数据标注实习生" (Leihuo)
  - "多模态数据标注实习生"
  - Youdao: "产品运营实习生(英语语料方向)" (id 79791, Guangzhou, updated 9 Nov 2026): English corpus collection, quality evaluation, annotation and review for Youdao Dictionary AIGC content; English majors preferred; on-site.
  - Procurement roles are art, marketing and administrative buying only.
  - — [NetEase job 79791](https://hr.163.com/job-detail.html?id=79791&lang=zh); [hr.163.com](https://hr.163.com/)

**Kuaishou (Kling, KwaiYii)**
- Web searches (12 Nov 2026) found no Kuaishou posting for data procurement, data vendors, licensed/copyright data or expert resources. Coverage is about Kling's financing (Aug 2026 strategic investors, including the National AI Industry Investment Fund) and the spring 2026 campus drive, in which "大模型相关岗位需求数量翻倍" (the number of large-model roles doubled). — [cls.cn](https://www.cls.cn/detail/2472777); [36kr](https://36kr.com/p/3817645558694788) (search-result summary)
- Kuaishou's careers API returned "fail" or "系统错误" (system error) to direct queries, so its job board could not be checked. — [zhaopin.kuaishou.cn](https://zhaopin.kuaishou.cn/)

**Huawei (Pangu), PDD/Temu, Shein, Trip.com**
- Huawei: no Pangu data-procurement posting found. A 2025 report says Huawei Cloud dissolved the Pangu-related departments in the Cloud EI product line (single source, not verified). — [lanjinger](https://www.lanjinger.com/d/1756113185953679262) (search-result summary)
- PDD/Temu: PDD has a Shanghai LLM team of a few dozen people aimed at Temu customer service, search and recommendation (Sept 2025 report). A campus posting mentions "高质量多语言" (high-quality multilingual) content generation for algorithm roles. No annotation or AI-trainer roles were found. — [nbd.com.cn](https://www.nbd.com.cn/articles/2025-09-10/4056436.html) (OLDER, 2025); search-result summary
- Shein: Shenzhen LLM, multimodal and CV roles listed only via a third-party referral post; no data-annotation or AI-trainer roles found. — [CSDN referral post](https://aicoding.csdn.net/6a696d8e10ee7a33f293bf97.html) (search-result summary)
- Trip.com: autumn 2027 campus categories are R&D, product, design and general; no annotation or AI-trainer roles found. Its global job search (jobs.careers.trip.com) was not reachable from this environment. — search-result summary; [careers.trip.com](https://careers.trip.com/)
- Low-cost Chinese vendors do recruit for European-language LLM annotation on their own account. Example: a Guangzhou firm's "小语种大模型数据标注" (ES/FR/DE/PT, 8–10k RMB per month, 3 Aug 2026), which is not tied to any of these platforms. — [niuqizp](https://campus.niuqizp.com/job-vmU5zM5NC.html)

### Inferences
- ASSESSMENT: Xiaomi moves up to a **real but narrow lead**. Its LLM procurement desk (A199128) buys corpora, books and multimodal data, and explicitly wants staff who can deal with overseas suppliers. That suits licensed European-language corpora and curated expert datasets, but not hourly expert labour. Xiaomi is not on 1260H.
- ASSESSMENT: Meituan, JD and NetEase build data in-house with internal annotators. For them, PathWize would at best be a sub-supplier to the vendors they already use. Leave them at "watch".
- ASSESSMENT: The absence of evidence for Kuaishou, Huawei, PDD, Shein and Trip.com comes partly from blocked job boards. It is not proof of no demand. Kling's video/multimodal focus remains a weak fit for PathWize.

### Gaps
- Kuaishou, Huawei, PDD/Temu, Shein and Trip.com job boards could not be queried programmatically (API errors, blocks or JS-only pages). BOSS直聘 and Liepin were not checked directly.
- Meituan's earlier-reported intern role "大模型数据运营-小语种/方言方向实习生" did not appear in Meituan's API on 12 Nov 2026. It may be closed or may be campus-only; this is unresolved.
- No second-tier firm was found recruiting foreign or overseas experts directly.

---

## Q2. Live status and details of four key postings (checked 12 Nov 2026)

### Takeaway
| Posting | Live on 12 Nov 2026? | Key correction or new detail |
|---|---|---|
| ByteDance SG "Partnership Development Analyst – AI Data and Safety" (A226312B) | **Yes**: page shows "Apply" and no expiry | The live text no longer mentions SFT/RM/Eval/Multimodal/Agentic or a Chinese-language requirement. Those appear only in an older "Seed Global Data" copy |
| Tencent postId 2092894056538619904 | **Not retrievable**: API returns the same error as a made-up ID | Title and department still unverified; probably closed |
| Tencent "Data Partnerships Lead" (R107697) | **Yes** (TEG; Palo Alto / Los Angeles) | It has a sister role, "Data Partnerships Specialist" (R107698). Both sit on a separate Tencent Workday site, "OA_Huoshui_Platform" |
| Alibaba 1170302 "大模型外包训练采购专家" | **Yes**: republished 12 Nov 2026 with a "NEW" tag | Group-level procurement (阿里集团, 综合类-采购), 5+ years' experience. Now flanked by several new AIData procurement and vendor roles (see below) |

### Cited Findings
**ByteDance A226312B**
- joinbytedance.com (fetched 12 Nov 2026) — [joinbytedance 7589640323472558341](https://joinbytedance.com/search/7589640323472558341):
  - Title: "Partnership Development Analyst - AI Data and Safety"; code A226312B; team: Global Operations; Singapore; Regular.
  - Shows an "Apply to this job" button and no "no longer available" notice. No posting date is shown.
  - Team intro: "The AI Data and Safety team plays a critical role in advancing Seed foundational models across modalities… In close partnership with Seed researchers, industry experts, and leading data vendors".
  - Duties: AI training-data market research, supplier sourcing and onboarding ("Lead supplier onboarding, including evaluation, qualification review, and capability validation"), commercial negotiation, and delivery oversight.
  - Requirements: 2+ years in AI data services, data sourcing, vendor management or BD.
  - The live text does **not** mention SFT/RM/Eval, agentic work, or Chinese/Mandarin.
- An older aggregator copy on the TCV board ("Posted 6+ months ago", team "Seed Global Data Team") contains "Strengthen supplier development according business needs such as SFT, RM, Eval, Multimodal, Agentic Workflow etc." and "Chinese proficiency is also needed for cross team communication with Chinese operations and research teams". The earlier report merged this older text with the current title. — [TCV 65346076](https://portfoliojobs.tcv.com/companies/bytedance/jobs/65346076-partnership-development-analyst-ai-data-and-safety)

**Tencent 2092894056538619904**
- `careers.tencent.com/tencentcareer/api/post/ByPostId?postId=2092894056538619904` returns `{"Code":500,"Data":"E1005"}` in both zh-cn and en-us. A deliberately invalid ID (…619999) returns the identical E1005, while live posts return full JSON. — [careers.tencent.com jobdesc](https://careers.tencent.com/jobdesc.html?postId=2092894056538619904)
- Keyword searches of the same API on 12 Nov 2026 for "数据合作", "数据供应商", "外部数据", "数据资源" and "数据获取" return **0** posts. — [careers.tencent.com](https://careers.tencent.com/)

**Tencent Data Partnerships Lead and Specialist**
- Both posted 2 Jul 2026 and listed on Tencent's Workday site OA_Huoshui_Platform on 12 Nov 2026 ("Posted 30+ Days Ago"). The main "Tencent_Careers" Workday site does not list them.
- "Data Partnerships Lead" (R107697), TEG, Palo Alto + Los Angeles, USD 113,900–213,800 — [Workday R107697](https://tencent.wd1.myworkdayjobs.com/OA_Huoshui_Platform/job/US-California-Palo-Alto/Data-Partnerships-Lead_R107697):
  - Drive "data operations and strategies for our frontier AI research initiatives", design "end-to-end data acquisition strategies, manage key vendor relationships".
  - "Own the full lifecycle of high-value technical data acquisition across North American commercial vendors, research networks, and open-source communities—from initial sourcing and executive pitching to structured commercial negotiation".
  - Licensing, provenance and anonymisation under CCPA/CPRA.
  - "Build robust, long-term vendor and partner ecosystems, managing delivery SLAs".
- "Data Partnerships Specialist" (R107698), same locations, USD 82,700–155,800: "primary operational point of contact for external data vendors", onboarding and SLA tracking; exposure to "human-in-the-loop (RLHF) operations" desired. — [Workday R107698](https://tencent.wd1.myworkdayjobs.com/OA_Huoshui_Platform/job/US-California-Palo-Alto/Data-Partnerships-Specialist_R107698)
- The aggregator Simplify shows R107697 as active, start 4 Jul 2026, updated 23 Oct 2026, "validThrough" 22 Nov 2026. — [Simplify](https://simplify.jobs/p/c719c4f7-29ce-434c-806c-eb377d6c9bb8/Data-Partnerships-Lead)

**Other live Tencent data roles that touch suppliers or verticals (new)**
- "混元大模型数据策略产品经理-AI Agent / Coding方向" (TEG, 混元-公共支持; Beijing/Shenzhen; updated 5 Nov 2026) — [careers.tencent.com 2117591281952800768](https://careers.tencent.com/jobdesc.html?postId=2117591281952800768):
  - Post-training data strategy for agents and "多个高价值专业垂类（金融、医疗、法律、科研等多元方向皆可）" (several high-value professional verticals: finance, medicine, law, research and others).
  - Build benchmarks for hard-to-solve, easy-to-verify tasks; build "Sandbox / RL Environment".
  - "英语可作为工作及技术调研语言" (English usable as working and research language).
- "腾讯混元-混元多模态数据产品" (TEG, updated 21 Oct 2026): data sourcing from "公开数据集、授权内容、定向采集及合成数据" (public datasets, licensed content, targeted collection and synthetic data); "协同算法、研发、标注及供应商完成交付" (deliver jointly with algorithm, engineering, annotation and supplier teams). — [careers.tencent.com 2104523249634426880](https://careers.tencent.com/jobdesc.html?postId=2104523249634426880)
- "AI数据运营（北京/深圳）" (PCG, product 云雀, updated 28 Oct 2026): video-generation annotation/evaluation; manage "100-500人规模的标注或评测团队" (annotation/evaluation teams of 100–500 people); "有供应商管理经验优先" (supplier-management experience preferred). — [careers.tencent.com 2067158751374393344](https://careers.tencent.com/jobdesc.html?postId=2067158751374393344)

**Alibaba 1170302**
- Alibaba Holding position API (12 Nov 2026) — [talent-holding.alibaba.com 1170302](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=1170302):
  - Name "阿里控股-大模型外包训练采购专家-杭州"; department "阿里集团"; category "综合类-采购"; experience 5+ years; bachelor's degree.
  - Tag "NEW"; publishTime/modifyTime = 2026-11-12 02:09 UTC (republished on the check date).
  - Text: "这是一个新增的全职专岗" (a newly created full-time role); build the supplier ecosystem map for LLM training-data services ("如数据标注、垂直领域语料定制服务商"); "推动采购策略从'买人力'向'买技术能力'转型" (shift procurement from buying labour to buying technical capability); "坚信'试点是新的招标'" (believe that pilots are the new tender); "为了争取一个关键供应商的独家合作…据理力争" (argue hard for exclusive cooperation with a key supplier); works with "集团采购团队" (the group procurement team).

### Inferences
- Tencent now has **two parallel buying points**: a US desk (Palo Alto / Los Angeles) built around **North American** vendors, licensing and CCPA, and Hunyuan data-product roles in China that manage suppliers. A European expert vendor does not fit the US desk's stated "North American" scope. ASSESSMENT: a pitch could still go to the Data Partnerships Lead, framed as "research network / expert network" supply with GDPR-grade provenance.
- ASSESSMENT: ByteDance's live A226312B text is now generic (no category list, no Chinese requirement). Supplier categories and the language requirement should be treated as **historical** (from the Seed Global Data version), not current.

### Gaps
- Tencent 2092894056538619904: title and department remain unknown. E1005 is consistent with deletion but does not prove it.
- joinbytedance gives no posting date, so A226312B's age is unknown.

---

## Q3. ByteDance's new top-level "AI 数据与安全" (AI Data & Safety) department: what does it post?

### Takeaway
- In China, AI 数据与安全 posts **domain-expert data roles**, not procurement titles: finance (Excel/financial analysis), **medical LLM data delivery**, GUI agents, AI PPT, game-world models, **international speech data**, and synthetic/embodied data.
- In Singapore it posts supplier sourcing, safety-policy and data-operations roles.
- No Chinese-language "数据采购" (data procurement) or "供应商" (supplier) title could be verified, because jobs.bytedance.com was not reachable.
- The department merges several teams: Global Data (procurement and QC for Seed), DMC (the group data middle platform) and Flow's AIDP (AI data platform). ByteDance's Xpert expert site runs on AIDP's front-end infrastructure.

### Cited Findings
- Chinese job titles under "AI数据与安全", from ByteDance's social-recruitment site as of 5 Oct 2026, listed by a columnist — [woshipm (10 Oct 2026)](https://www.woshipm.com/it/6475761.html); same piece on [Huxiu](https://www.huxiu.com/article/4896231.html):
  - "AI Excel数据专家（金融分析方向）" (AI Excel data expert, financial analysis)
  - "AI数据/评测运营专家（AI PPT方向）" (AI data/evaluation operations expert, AI PPT)
  - "大模型数据专家（GUI Agent）" (LLM data expert, GUI agents)
  - "医疗大模型数据交付专家" (medical LLM data delivery expert)
  - "世界模型数据运营专家（游戏方向）" (world-model data operations expert, games)
  - "语音大模型数据专家（国际化数据）" (speech LLM data expert, international data)
  - "游戏引擎数据生成工程师（合成数据/具身智能方向）" (game-engine data generation engineer, synthetic data/embodied AI)
  - The article calls the team's postings "一份字节想让模型学神马的清单" (a list of what ByteDance wants its models to learn).
- Origins and scope — [36Kr (12 Aug 2026)](https://www.36kr.com/p/3935748520459653):
  - Predecessor "Global Data": founded 2023, about 100 people. It first served international products (Dola, TikTok), then took over "data procurement and quality control for Seed model training".
  - Merged in: the group data middle platform DMC, Flow's AI data platform AIDP, and data teams from Seed model directions.
  - Functions: data procurement, labeling, dataset construction, post-training evaluation and QC.
  - The Seedance data-evaluation team alone has more than 1,000 people. World-model and coding data budgets are "千万美元级" (tens of millions of USD).
  - Head: the former head of TikTok platform responsibility (reported as Wang Yinglei / Adam Wang).
- Singapore postings tagged "AI Data & Safety" (Global Operations):
  - A226312B Partnership Development Analyst (live; see Q2).
  - "Model Safety Policy Project Intern (AI Data & Safety) – 2026 Start" (A149271): the team works with "leading data vendors" and mentions "multilingual talent"; live, rolling review. — [joinbytedance 7673402880483346693](https://joinbytedance.com/search/7673402880483346693)
  - "Model Safety Analyst – AI Data & Safety" (title only on the fetched page). — [joinbytedance 7673402983289473285](https://joinbytedance.com/search/7673402983289473285)
  - "Data Operations Analyst (AI Data & Safety)", Singapore, 1–3 years, annotation and evaluation operations (aggregator, seen via search snippet). — [foundit](https://www.foundit.in/job/data-operations-analyst-ai-data-safety-bytedance-singapore-57511164)
- Z Finance (29 Oct 2026, unverified secondary) — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html):
  - ByteDance is the largest external data buyer: more than USD 10M for coding data including Turing; world-model data 3–4x peers; exclusivity clauses; licensed film masters for video.
  - Pays **domestic experts RMB 100–400 per hour and overseas experts USD 50–250 per hour**.
- PingWest (3 Nov 2026): ByteDance "已经把多处采购、质检团队整合为一级部门'AI 数据与安全'" (has merged several procurement and QC teams into the top-level AI Data & Safety department); "还愿意支付数倍价格，换取半年到一年的独家使用安排" (is also willing to pay several times the price for six to twelve months of exclusive use). — [PingWest](https://www.pingwest.com/a/319155)
- The Xpert expert site (xpert.bytedance.com redirects to corexpertdata.com) loads its code from ByteDance's CDN path `aidp-fe/toutiao/xigua-ai-data-platform`. This ties Xpert to the AIDP platform that 36Kr says was merged into AI 数据与安全. — [xpert.bytedance.com](https://xpert.bytedance.com/) → [corexpertdata.com](https://www.corexpertdata.com/) (page source inspected 12 Nov 2026)

### Inferences
- ASSESSMENT: "医疗大模型数据交付专家" and "语音大模型数据专家（国际化数据）" are the two China-side titles closest to PathWize (medicine; non-Chinese languages). They indicate internal owners of medical and international data delivery who would likely brief external suppliers.
- ASSESSMENT: the overseas expert rate of USD 50–250 per hour (if accurate) is a useful ceiling for PathWize pricing to ByteDance. It comes from one secondary source.

### Gaps
- jobs.bytedance.com (China) and the joinbytedance API reset or blocked all programmatic queries. No Chinese "数据采购 / 供应商管理 / 专家资源运营" title under AI 数据与安全 could be verified. BOSS直聘 was not checked.
- The posting dates of the seven China titles are as of 5 Oct 2026; their status on 12 Nov 2026 is unknown.

---

## Q4. Do ByteDance Xpert, Alibaba Siriser (晓天睿士) and Tencent ExpertHub accept foreign experts and/or vendor firms? Pay? Languages?

### Takeaway
- **Tencent ExpertHub/TLabel:** profiles list **28 foreign languages, including 17 European ones, with a "native speaker" option**. But the signing form validates a **mainland mobile number and an 18-digit PRC ID card**, and payout requires a bank card in the expert's own name tied to that phone. The underlying TLabel platform has a **supplier-company module**, and the ops back-office tracks "expert teams onboarding".
- **Alibaba Siriser:** offers a **company/institution subject type** ("高校/机构/独立公司", i.e. university, institution or independent company). It requires a **Chinese unified social credit code**, a business licence and a chop-stamped authorisation letter. Phone login is **+86 only**.
- **ByteDance Xpert:** now claims **more than 80,000 experts** "汇聚全球" (gathered worldwide). The XpertBench paper documents vendor partnerships. Front-end rules could not be read.
- Net assessment: all three are built for **PRC-resident individuals or PRC entities**. A foreign firm most plausibly enters as a contracted **vendor**, not through self-registration.

### Cited Findings
**Tencent ExpertHub (智囊团) / TLabel**
- Landing page (12 Nov 2026) — [expert.tlabel.tencent.com](https://expert.tlabel.tencent.com/):
  - 12+ domains; "100% 远程"; "Tencent 官方认证签约" (official Tencent-certified signed contract).
  - "任务透明：报名前即可看到任务类型、难度、计价与验收标准" (task type, difficulty, pricing and acceptance criteria visible before sign-up).
  - "等级越高，单价与优先级越高" (higher level means higher unit price and priority).
  - Languages: "各类语种翻译（英、日、韩、德、法、西等不限）" (translation in any language: English, Japanese, Korean, German, French, Spanish and more).
  - Law: "法律职业资格 / BAR"; "英文判例、成文法与合同解读" (English case law, statutes and contract interpretation).
  - Medicine: "执业资质必备" (practising licence required), including 影像 (imaging) and 病理 (pathology).
  - Contact "合作邮箱：experthub@tencent.com" (cooperation email). Chinese ICP licence 粤B2-20090059-1.
  - "立即加入" (join now) links to `experthub.tencent.com/login/expert` (page title "TLabel - 在线标注平台", with WeChat-scan login).
- Front-end bundle, inspected 12 Nov 2026 — [experthub.tencent.com bundle](https://experthub.tencent.com/assets/index-Dnj4_Bgz.js):
  - **Signing form** fields: real name; "$mobile" validated with `/^1[3-9]\d{9}$/` (mainland mobile format); "$id_card_no" validated as a 15- or 18-digit PRC ID with check digit ("请输入身份证号"); whether the applicant is a current or former Tencent employee or relative; handwritten signature and date.
  - **Bank section:** "请填写本人名下的银行卡，银行卡预留手机号须为上方手机号码" (bank card must be in your own name, with the reserved phone matching the number above).
  - **Profile language list (native option for each):** Japanese, Korean, French, German, Spanish, Portuguese, Russian, Italian, Arabic, Hindi, Thai, Vietnamese, Indonesian, Malay, Dutch, Polish, Turkish, Hebrew, Persian, Ukrainian, Swedish, Norwegian, Danish, Finnish, Greek, Czech, Hungarian, Romanian. Certificate levels are listed for each (for example 歌德C2 (Goethe C2) and DALF C2/C1).
  - **Education tiers** include "QS Top 50/100/200" alongside C9/985/211.
  - **Domain taxonomy** includes 法律与合规 → "国际法与跨境争议" (international law and cross-border disputes) and "数据合规与隐私" (data compliance and privacy); 医学与生命科学 → "影像与检验" (imaging and lab), "临床医学", "医学写作与循证" (medical writing and evidence-based medicine).
  - **Vendor features in the TLabel app:** a "公司管理" (company management) menu described as "供应商人员管理：成员邀请，编辑，考勤等信息；考培管理" (supplier staff management: member invites, editing, attendance; exams and training). Trial-labelling decline reasons include "供应商侧标注平台不支持" (supplier-side annotation platform not supported). The ops "专家管理" (expert management) menu covers "专家团队入驻情况" (status of expert teams being onboarded).

**Alibaba Siriser (晓天睿士)**
- Front-end bundle v0.0.137, inspected 12 Nov 2026 — [siriser.com](https://www.siriser.com/siriser/home); [bundle](https://g.alicdn.com/dt-ai-data/siriser/0.0.137/index.js):
  - **Subject types:** "自然人" (person) vs "高校/机构/独立公司" (company).
  - **Company fields:** 单位名称 (entity name), 统一社会信用代码 (unified social credit code), 单位电话 (phone), 法定代表人 (legal representative), 单位地址 (address), 单位营业执照 (business licence, upload), "单位授权书(有公司章)" (authorisation letter with company chop).
  - **Registrant:** "注册人身份证号" (registrant's ID number) validated as a 15- or 18-digit PRC ID.
  - **Phone:** country-code selector offers only "+86".
  - **Expert levels:** 专家 (expert) / 顾问 (advisor); 评审员 (reviewer) flag. Pay is shown per task as "回答报酬" (answer fee) and "评审报酬" (review fee).
  - **Finance domains:** include "跨境个人金融" (cross-border personal finance). **Law:** 诉讼律师, 非诉律师, 企业法务与合规, 法官, 检察官, 立法与政策研究 (litigators, transactional lawyers, in-house counsel and compliance, judges, prosecutors, legislation and policy research). **Medicine:** 患者服务, 科研与学术, 医疗质量管理 (patient services, research and academia, quality management) and others.
  - **Word-count rules** handle English, Spanish, French, Russian, Malay/Indonesian, Korean, German, Italian and Portuguese, which indicates multilingual tasks.
- Z Finance (29 Oct 2026, secondary): Alibaba's expert platform has "10,000 expert seats in medicine, advanced manufacturing, and finance compliance"; its evaluation product "SKYEVAL launched overseas". — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html)
- The Alibaba Holding API (12 Nov 2026) shows a separate Alibaba data unit, **晓天衡宇**, hiring in Chengdu/Hangzhou:
  - "AI数据标注与评测工程师-专业领域" (id 100027860001)
  - "AI数据标注专家-芯片设计（EDA）" (100025800003)
  - "资源管理专家-资源统筹" (100050820006), which handles AIData resourcing
  - AIData also hires "AI领域专家" (AI domain experts) in dance, art, martial arts, performance, photography, directing and dubbing (10–12 Nov 2026).
  - — [Alibaba 100027860001](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100027860001); [Alibaba 100050820006](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100050820006)

**ByteDance Xpert**
- xpert.bytedance.com 301-redirects to www.corexpertdata.com, titled "Xpert专家社区 | 专家智慧驱动AI进化" (Xpert expert community: expert intelligence drives AI evolution) — [corexpertdata.com](https://www.corexpertdata.com/):
  - "汇聚全球各领域顶尖专家" (gathers top experts from all fields worldwide); "目前已有超过 80,000 位专家加入 Xpert" (more than 80,000 experts have joined).
  - Recruiting areas: STEM, programming, finance.
  - Benchmarks cover "金融投研、专业翻译、科研" (financial research, professional translation, scientific research).
  - "完善档案 · 参与任务 · 赚取收益，三步加入全球专家网络" (complete profile, take tasks, earn; three steps to join the global expert network).
  - No pay figures, country rules or company/vendor sign-up shown.
- Earlier figure: more than 50,000 experts (Rest of World, Sep 2026). — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/)
- Pay:
  - Finance-track Xpert tasks "commonly 300–500 RMB per hour"; vertical tasks (finance, law, medicine) quoted at 500–800 RMB per hour on BOSS直聘. Entry test: design questions that at least two models answer wrongly. — [36Kr/智东西, 21 May 2026](https://36kr.com/p/3817645558694788)
  - Domestic RMB 100–400 per hour; overseas USD 50–250 per hour (secondary). — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html)
  - 100–500 RMB per task. — [Rest of World](https://restofworld.org/2026/china-expert-ai-trainers/)
- Vendor route: XpertBench says experts are sourced via "direct registration, peer referrals, and vendor partnerships", with more than 200 overseas-institution experts. — [arXiv 2604.02368](https://arxiv.org/html/2604.02368v1)

### Inferences
- From front-end code, not policy: a non-PRC individual (no PRC ID, mainland phone or Chinese bank card) apparently **cannot complete** ExpertHub's signing and payout flow, or Siriser's +86 login, without workarounds. ExpertHub's profile does list European languages with native options, so foreign-language expertise is wanted. It is probably expected from PRC residents or arrives via suppliers.
- ASSESSMENT: Siriser's company subject type and TLabel's supplier-staff module show that **firms are an accepted channel**. The Siriser fields assume a PRC-registered entity (unified social credit code, company chop). For PathWize this points to (a) a **framework vendor contract** with the platform owner, or (b) a **Chinese partner entity** (WFOE, or subcontracting through a domestic vendor such as Humanlaya or UniPat).
- ASSESSMENT: at a reported USD 50–250 per hour for overseas experts at ByteDance, PathWize Tier-1 (PhD/professor) pricing is at the top of the range. Rubric and eval work is easier to price per deliverable than per hour.

### Gaps
- No official statement from any of the three platforms on foreign-national eligibility or on contracting foreign companies.
- Xpert's registration rules could not be read; its business JS chunks did not load.
- The USD 50–250 per hour overseas rate is a single secondary claim.

---

## Q5. Ant Group AQ (蚂蚁阿福) global doctor recruitment (Oct 2026): pay, languages, channel, non-Chinese eligibility

### Takeaway
Nothing beyond the earlier round could be verified. All accessible coverage (21 Oct 2026) repeats "面向全球医生和医学生" (open to doctors and medical students worldwide) and the role "模型训练医学专家" (medical expert for model training). None gives pay, language requirements, an application channel, locations or explicit eligibility of non-Chinese doctors. One trade article that may contain more is about 70% paywalled.

### Cited Findings
- AQ, as total sponsor of 《令人心动的offer8·医学生季》 (a medical-students season of a job-offer reality show), "面向全球医生和医学生发起招聘" (recruits doctors and medical students worldwide) — [ifeng (21 Oct 2026)](https://tech.ifeng.com/c/8xPAQl3lrW9); [cn-healthcare (21 Oct 2026)](https://www.cn-healthcare.com/article/20261021/content-788637.html):
  - Roles across "大模型、评测、策略、产品、运营、服务" (LLM, evaluation, strategy, product, operations, service).
  - "模型训练医学专家": judge AI answers, build training data from clinical Q&A, case reasoning and treatment advice, and translate clinical needs for algorithm, data and product teams.
  - Open to Master's/PhD students and doctors or medical students within 5 years of graduation.
  - "数千人" (thousands of people) in a three-tier "基础标注—医学标注—专业评测" system (basic annotation, medical annotation, professional evaluation); more than 100 doctors from former 三甲 (top-tier) hospitals.
  - Pay, languages, channel and locations: not stated. cn-healthcare is about 70% behind a VIP paywall.
- Forbes (Spanish edition of the Aug 2026 Forbes US article): "an Ant Group executive acknowledged a close working relationship with AfterQuery" (see Q6). This is the only documented external-vendor link for Ant. — [Forbes México](https://forbes.com.mx/el-otro-problema-de-silicon-valley-con-china-esta-entrenando-a-su-ia/)

### Inferences
- ASSESSMENT: "全球" (global) in a Chinese-language TV tie-in mainly targets Chinese doctors and students, including those overseas. Without English-language materials or overseas locations, non-Chinese-speaking European doctors should not be assumed eligible. Approaching AQ as a **vendor** (medical evaluation in EU guideline context) remains more realistic than individual applications.

### Gaps
- Pay, languages, application URL, and eligibility of non-PRC doctors: not found. Ant's careers site (talent.antgroup.com) could not be queried programmatically, and BOSS直聘/Liepin had no matching AQ listing in search results.
- No Ant data-procurement or vendor-management posting was found (searched 12 Nov 2026).

---

## Q6. Verification of Forbes-reported Tencent data request and Ant–AfterQuery relationship

### Takeaway
**Both claims are now confirmed** via the Spanish-language Forbes México republication of the Forbes US article (Anna Tong, Aug 2026). The details:
- Tencent sent potential vendors "a detailed request for training data" on **finance, cybersecurity and self-improving AI**.
- An **Ant Group executive acknowledged a "close working relationship" with AfterQuery**, per messages Forbes reviewed.
The article does not list law or medicine as demand areas.

### Cited Findings
- Forbes México (translation of the Forbes US piece) — [Forbes México](https://forbes.com.mx/el-otro-problema-de-silicon-valley-con-china-esta-entrenando-a-su-ia/):
  - **Tencent:** "una solicitud detallada de datos de entrenamiento" (a detailed training-data request) to "posibles proveedores" (potential suppliers), covering finance, cybersecurity and AI systems capable of self-improvement. No date or named recipients. A Tencent data-acquisition executive said Tencent depends on Surge AI.
  - **Ant:** "una estrecha relación de trabajo con AfterQuery" (a close working relationship with AfterQuery), acknowledged by an Ant Group executive in messages Forbes reviewed.
  - **AfterQuery** also works with Alibaba (per audio transcripts), and "a considerable part" of its business comes from Chinese labs; at least USD 50M recurring revenue.
  - **Mercor** works with Tencent; audio transcripts point to purchase agreements with Alibaba; China was 2% of Q2 revenue.
  - **Turing:** internal project documents indicate work with ByteDance.
  - **Scale AI** explored a ByteDance deal but dropped it in 2024.
  - **micro1** says it does not sell outside the US.
  - About USD 500M per year across the six major Chinese labs.
  - ByteDance, Alibaba, Moonshot, Tencent and Ant did not respond.
- Secondary corroboration: Tencent "circulated extensive procurement requests for proprietary data targeting cybersecurity, financial modeling, and self-improving AI frameworks" (search-result summary of remio.ai). — [remio.ai](https://www.remio.ai/post/u-s-data-vendors-face-scrutiny-over-chinese-ai-and-pentagon-work)
- Other language editions exist (not read): [Forbes Italia](https://forbes.it/2026/08/07/silicon-valley-addestra-cina-business-dati-ia/); [Forbes Polska](https://www.forbes.pl/technologie/dolina-krzemowa-karmi-danymi-chinskie-modele-dostaja-to-samo-co-openai/fdm5mkj)
- Related market facts — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html):
  - Tencent's AI Data department was created in Dec 2025 and increased its **external data procurement budget in 2026**. Tencent co-invests in UniPat.
  - Zhipu has had an **overseas data procurement team since 2024** (outside this scope; noted for completeness).

### Inferences
- ASSESSMENT: the Tencent request matches what Tencent advertises itself. Finance is a PathWize domain. Cybersecurity is excluded. "Self-improving AI" matches Hy4 Preview's automated optimisation of data strategy. A PathWize offer to Tencent should cover finance (and law/medicine via ExpertHub's domain list) and state the exclusions explicitly.
- The Ant–AfterQuery link means Ant **does buy from foreign vendors**. That strengthens the case for a vendor-level medical-evaluation pitch to Ant/AQ.

### Gaps
- The English Forbes original is still unreadable (403). Exact wording, dates and the scope of the Tencent request are known only through the Spanish translation (summarised by a tool) and secondary summaries.

---

## Q7. DeepSeek: procurement / data-partnership posting

### Takeaway
PingWest (3 Nov 2026) states DeepSeek "已设专门的数据采购岗位" (has set up a dedicated data-procurement role). **No actual posting could be found**: Liepin's DeepSeek page showed no procurement title, and web search found none. Other reporting says DeepSeek keeps data work largely in-house.

### Cited Findings
- PingWest, 《深度 | AI 数据公司凶猛》 (3 Nov 2026) — [PingWest](https://www.pingwest.com/a/319155):
  - DeepSeek "已设专门的数据采购岗位"; "九成的研究员都在做数据相关工作" (90% of researchers do data-related work).
  - Prices: data with user-behaviour trajectories "一条报价可达1000至3000元" (RMB 1,000–3,000 per item); work-scenario data with full process "甚至可以卖到1万元左右" (up to about RMB 10,000 per item).
  - Some vertical domains need only "1万到10万条足够好的数据" (10,000–100,000 good-enough items).
- Liepin DeepSeek company page (12 Nov 2026) shows 6 of 34 positions, including "通用数据策略产品经理（创作/知识/情感）" (general data-strategy PM: creative writing, knowledge, emotional); no procurement or vendor title among the visible six. — [Liepin](https://www.liepin.com/company/21147967/)
- DeepSeek's June 2026 hiring round included "专业领域数据产品经理（小语种、医学法律等学科）" (domain data PM: less-common languages, medicine, law and similar). Seen via search-result summary of the Liepin page and an earlier Sina citation. — [Liepin](https://www.liepin.com/company/21147967/)
- Z Finance: DeepSeek data is "embedded in model, infra, and data teams"; "No external vendors reported"; about half of core researchers do cleaning, synthesis and labeling in-house. — [woshipm / Z Finance](https://www.woshipm.com/ai/6486016.html)

### Inferences
- ASSESSMENT: DeepSeek's procurement role, if it exists, is unadvertised or filled. The domain-data PM for less-common languages, medicine and law is the more relevant internal counterpart. DeepSeek stays low priority (no foreign entity, in-house bias, US restrictions as in the earlier report).

### Gaps
- DeepSeek's official job board was not queried programmatically. 28 of the 34 Liepin positions were not visible. The procurement post's title, date and status are unverified.

---

### Cross-cutting new findings for the report writer (all from Alibaba Holding's position API, 12 Nov 2026)
These sit under Q2 and Q4. They are listed here because they substantially update the Alibaba picture. Alibaba AIData (数据技术及产品部) now advertises a **full vendor-management stack, including an overseas desk in Sunnyvale**:

| Title | ID | Location | Published | Key text |
|---|---|---|---|---|
| 数据技术及产品部-**海外数据生态运营-北美地区** (overseas data-ecosystem operations, North America) | 100049540006 | **Sunnyvale** | 19 Oct 2026 | "持续拓展**国外优质供应商、垂直领域专业机构**，建立覆盖**多语言、多领域**、多交付模式的数据公司生态" (keep expanding quality foreign suppliers and vertical-domain professional institutions; build a data-company ecosystem covering many languages, domains and delivery models); full supplier lifecycle "寻源、准入、评估、分级、激励与退出" (sourcing, admission, evaluation, grading, incentives, exit); "试单评估" (trial-order evaluation); 5+ years |
| 数据技术及产品部-**供应商管理** (supplier management) | 100030440002 | Hangzhou/Beijing | 10 Oct 2026 | Supplier strategy for pretraining/SFT/RLHF/multimodal; "持续拓展**国内外**优质供应商、垂直领域专业机构及**专家资源**，建立覆盖**多语言**、多领域…资源地图" (expand quality domestic and foreign suppliers, vertical institutions and expert resources; build a multilingual, multi-domain resource map); HRO/BPO/universities/flexible labour |
| 阿里控股-**数据采购技术专家-大模型方向** (data-procurement technical expert, LLM) | 100014300005 | Hangzhou | 9 Nov 2026 | Map "全球大模型数据供应商" (global LLM data vendors: labeling, synthetic, real-device collection, pretraining); technical due diligence; "从'买数据'向'买能力'转型" (shift from buying data to buying capability); "能够与**国际供应商**进行深度的技术对齐与商务谈判" (able to do in-depth technical alignment and commercial negotiation with international suppliers); knows Scale AI and Appen |
| 数据技术及产品部-**数据采购-大模型数据** (data procurement, LLM data) | 100010240002 | Hangzhou | 9 Nov 2026 | External industry data incl. "行业垂直数据语料、多模态语料及定制化数据" (vertical-domain corpora, multimodal corpora, custom data); supplier knowledge base |
| 数据技术及产品部-**大模型数据生态资源运营** (LLM data-ecosystem resource operations) | 100016720005 | Hangzhou/Beijing | 27 Oct 2026 | External supplier lifecycle; "整合多种用工类型与**垂直领域专家资源**" (integrate several labour types and vertical-domain expert resources); speech/code/video/**finance/medical**/STEM background preferred; "海外数据公司" (overseas data companies) cooperation experience |
| 数据技术及产品部-BPO资源运营专家 (BPO resource operations) | 100036800003 | Hangzhou/Beijing | 10 Oct 2026 | BPO/ITO resource lifecycle |
| 数据技术及产品部-内部专家项目运营 (internal expert project operations) | 100022920001 | Hangzhou | 16 Oct 2026 | Recruiting, admitting, grading and settling an internal expert pool |
| 数据技术及产品部-高校运营专家 (university operations) | 100030280002 | Hangzhou/Beijing | 10 Oct 2026 | University and institution partners for hard data construction |

Sources: [100049540006](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100049540006); [100030440002](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100030440002); [100014300005](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100014300005); [100010240002](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100010240002); [100016720005](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100016720005); [100036800003](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100036800003); [100022920001](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100022920001); [100030280002](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100030280002)

ASSESSMENT: this corrects the earlier gap "no overseas Alibaba data-buying team documented". Alibaba now has a **Sunnyvale-based overseas data-ecosystem role** whose remit (foreign suppliers, vertical professional institutions, multilingual, multi-domain) matches PathWize's offer almost exactly. The role's stated focus is coding and "work" scenarios, so medicine, law and finance would need to be pitched as "work"-scenario expert data. Alibaba's 1260H listing (since June 2026) remains the main friction.
