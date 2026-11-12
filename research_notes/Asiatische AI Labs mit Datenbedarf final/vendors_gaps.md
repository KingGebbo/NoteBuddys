# Asian Data-Labeling / Human-Data / Expert-Data Vendors: Gap-Closing Round (as of 12 Nov 2026)

Scope note: These notes extend `research_notes/Asiatische AI Labs mit Datenbedarf/asian_data_vendors.md` and the report section "Asiatische Datenanbieter". Facts already established there (Dataocean 2025/H1 2026 financials, Appen China, Datatang, Flitto backlog, Crowdworks control change, Datumo funding, iMerit/EXL, Deccan, Shaip) are not repeated unless they are corrected or extended.

Method note: The search budget was 30 WebSearch calls, and all 30 were used. Most new facts come from fetching primary pages directly. The biggest find is Haitian Ruisheng's **full 2025 annual report** (285 pages, parsed locally), which settles the questions about its European entities. Some hosts could not be reached:
- baobab-trans.com and mag.jobhub.jp (Pasona) did not resolve and need to be allowed in the session's network settings.
- baobab-trees.com and the PR-Newswire mirror on pulse.bot returned 503.
- proz.com job pages returned 403.
- The Abaka AI About page returned 404.

Convention: "Fact" bullets carry a source. Partner, channel, client and competitor labels appear only under "Inferences" and are marked **[Assessment]**. Items marked "(snippet)" were seen only in a search-engine summary and could not be opened directly.

---

## Q1: Japan vendors (Human Science, Baobab, Annotation One, Rist, Pasona/Persol, FastLabel, plus transcosmos): services, LLM-lab clients, European-language capability, foreign-expert recruiting, foreign partnerships

### Takeaway
None of the Japanese vendors shows verified European-language capacity or verified recruitment of foreign-language or Western domain experts. Their LLM work is **Japanese-language** annotation, RAG structuring and evaluation:
- **Human Science** uses directly contracted specialists, says it trades directly with "GAFAM-type" companies and does doctor-supervised medical annotation.
- **FastLabel** has pivoted visibly toward physical-AI and robot data.
- **transcosmos** (Dec 2025) launched CJK annotation using a Japan+ASEAN talent pool.
- **Annotation One** and **Pasona JOB HUB** are small CV or BPO-style annotation offerings.
- **Baobab** could not be verified (site blocked).
- **Rist** was not researched.

### Cited Findings
**Human Science (株式会社ヒューマンサイエンス, Shinjuku, Tokyo)**
- Track record of "over 48 million pieces of labeled data". Work is done "without relying on crowdsourcing ... a system staffed by directly contracted specialists", in an ISMS-standard security room. Services cover Japanese LLM annotation and data preparation for generative AI, LLM and RAG. No annotation languages are listed beyond Japanese, and European languages are not mentioned. Page dated 30 Jun 2026. — [science.co.jp, 30 Jun 2026](https://science.co.jp/en/?p=45726)
- Company profile:
  - Founded March 1985; capital ¥30M.
  - Business lines: AI annotation, Japanese–English and multilingual translation, e-learning, system development.
  - Staffing: only contract workers who passed a test and signed an NDA.
  - Medical data review is doctor-supervised.
  - Clients described as "海外大手ITメーカー, 海外SIベンダー, 国内大手製造メーカー, 国内AI開発ベンダー" and "GAFAM系の企業と直接取引の実績" (direct business with GAFAM-type companies).
  - Pricing: no initial fee; monthly fee on request.
  - [ai-market.jp profile](https://ai-market.jp/service/humanscience_annotation/)
- Human Science evaluates LLM translation output and selects "the most suitable members from among translators for each field" as evaluators (snippet). — [science.co.jp](https://science.co.jp/en/?p=43736)

**Baobab (株式会社バオバブ, Tokyo)**
- Founded 2010. It specialises in "high-quality AI training data and annotation services", with mainly B2B revenue from research institutions and companies (snippet; Preqin is paywalled). — [Preqin](https://preqin.com/data/profile/asset/baobab-inc-/422829)
- It started with "learning data construction services and machine translation engines" (CEATEC 2018 exhibitor listing; older). — [CEATEC archive](https://archive.ceatec.com/2018/en/showfloor/detail.html?id=12392)
- It uses human annotators called "Baoparts". Its first external funding came from an angel investor in Nov 2020 (older). — [Google for Startups story](https://startup.google.com/stories/baobab/)
- baobab-trans.com (DNS not resolvable) and baobab-trees.com (HTTP 503) could not be opened, so language coverage, translator recruiting and LLM-lab clients are unverified.

**Annotation One (アノテーションワン)**
- Operated by Global Walkers Inc. (グローバルウォーカーズ株式会社), Nishi-Gotanda, Shinagawa, Tokyo; founded June 2016; capital ¥62.02M.
- Services: image annotation (bounding boxes, segmentation, keypoints), text transcription and HITL retraining. LLM, RLHF and evaluation services are not mentioned, and no languages, headcount, prices or clients are given.
- [ai-market.jp](https://ai-market.jp/service/annotation_one/)

**Pasona / Persol**
- Pasona JOB HUB lists an "AI（人工知能）アノテーションサービス" on ITreview (listed 29 Nov 2022, 0 reviews). No LLM, evaluation, workforce or language details are given, and the vendor site mag.jobhub.jp could not be reached. — [ITreview](https://www.itreview.jp/products/aiannotation/profile)
- Persol: the only 2026 item found was a white paper from Persol Innovation's Buildspi training unit on how to train staff to *review* AI output (29 Sep 2026). This is corporate training, not an annotation or expert-data service. — [PC Watch / @Press, 29 Sep 2026](https://pc.watch.impress.co.jp/docs/release/atpress/2144031.html)

**FastLabel (Tokyo)**
- Physical-AI/robotics business officially launched Oct 2025, with a robot training centre (semi-humanoid, quadruped and industrial robots). Claims support for "300社以上" (300+ companies). Joined the AI Robot Association (AIRoA) and visited Beijing robot makers, neither of which is a partnership. LLM data, RLHF, expert data, multilingual work and named clients are not mentioned. — [Nikkei BP special (URL path suggests 29 Oct 2026; date not confirmed)](https://special.nikkeibp.co.jp/atclh/NXT/26/fastlabel1029/)
- Released the open-source robot-data app "OpenLUTRA" (ROS 2, Apache 2.0) on 28 May 2026. — [MONOist, 10 Jun 2026](https://monoist.itmedia.co.jp/mn/spv/2606/10/news088.html)
- Japanese LLM dataset creation service since 29 Nov 2023 (older) plus six generative-AI data services, including instruction data and RAG data (snippet). — [ASCII](https://ascii.jp/elem/000/004/172/4172215/)
- With amana images' "Qlean", provided LINE Yahoo with 2 million rights-cleared AI training data items, including conversation corpora for LLM development (snippet; date unclear). — [ASCII](https://ascii.jp/elem/000/004/218/4218728/)
- GENIAC participation is already covered in the prior report (refs [101], [103]); nothing new was found.

**transcosmos (Tokyo; added because it surfaced as a relevant Japanese competitor)**
- 25 Dec 2025: launched "highly specialized AI training and data annotation services in Chinese, Japanese, and Korean", covering specialised fields (geography, history, finance, engineering), contract data extraction, dialogue scenario creation, and annotation "helping clients develop their own large language models (LLMs)".
- It is "leveraging its talent pool across Japan and ASEAN countries" (employees plus gig workers). About 40,000 people, mainly employees, are to be registered in a new skills and resource system. The company has 184 bases in 36 countries and regions. No clients are named, and RLHF and evaluation are not mentioned.
- [PR Newswire via Webull, 25 Dec 2025](https://www.webull.com/news/14085786277807104)

**Korean vendors entering Japan (relevant to Japan channel)**
- SelectStar/Datumo showcased Datumo Eval and Datumo Red at "2026 AI Frontier Korea in Japan" (27 May 2026; KOTRA; 42 Korean AI firms and about 100 Japan-based firms and VCs). It aims to "position itself as an AI reliability verification partner in the Japanese market". No languages or Europe are mentioned. — [Digital Today, 19 May 2026](https://www.digitaltoday.co.kr/en/view/56413/selectstar-debuts-datumo-ai-reliability-assessment-platform-in-japan)
- Superb AI has US and Japan entities, with Toyota and Nippon Steel named as Japanese customers (snippet). — [CIO Korea](https://www.cio.com/article/3521674/)

### Inferences
- **[Assessment]** Japanese vendors are Japanese-language specialists, and none showed EU-language or Western-domain capacity. This makes them **potential channels or subcontracting clients** when a Japanese LLM lab or a Japanese enterprise needs EU-language evaluation (e.g. medical or legal content in DE/FR for exports). Human Science is the best fit: it uses a direct-contract specialist model, does doctor-supervised medical annotation, translates as a core business, and serves foreign big tech, so it is used to quality-controlled, NDA-bound expert work like PathWize's.
- **[Assessment]** FastLabel is moving toward robotics and physical AI, so it is a low-priority partner for text expert data.
- **[Assessment]** transcosmos is a scale BPO competitor in CJK but has no visible European-expert offer. It could be a reseller for EU-language add-ons to Japanese enterprise clients.
- **[Assessment]** Japan pricing (Q7) sits far below EU Tier-1 rates. A Japanese channel would sell PathWize mainly where Japanese supply does not exist (EU languages, EU law, EU clinical context), not as a substitute.

### Gaps
- Baobab's language coverage, translator recruitment and LLM-lab clients: site blocked or unavailable.
- Rist was not researched. It is unclear whether Rist is a data-labeling vendor at all, so it should be clarified with the client.
- Persol: no AI data or annotation unit found. The Pasona JOB HUB service details are behind a blocked host.
- No named Japanese LLM lab (SB Intuitions, ELYZA, Sakana, LLM-jp, Stockmark) was verified as a client of any of these vendors.
- No partnership between a Japanese vendor and a foreign (EU) vendor was found.

---

## Q2: Korea (Testworks/AIWORKX, Datamaker, Superb AI, Datumo): LLM/expert data lines, foreign expansion, need for European-language or Western experts; Flitto ProZ CEE listing

### Takeaway
Korean vendors are tied to the national "independent AI foundation model" programme, and their foreign expansion goes to **Japan, the US and Southeast Asia, not Europe**:
- **AIWORKX** (ex-Testworks) supplies math and reasoning datasets and validation to the NC AI consortium.
- **Superb AI** does vision, video and physical-AI data for LG's K-EXAONE.
- **Datumo** sells evaluation and red-teaming tooling into Japan.

None shows a need for or recruitment of European-language or Western domain experts. **Flitto is the exception.** A search-engine summary shows a May 2026 ProZ listing for an English → Bulgarian, Czech, Hungarian, Polish, Romanian, Slovak and Ukrainian translation-acceptability evaluation project on Flitto's platform. The ProZ page itself returned 403, so the poster's identity is confirmed only via the snippet and Flitto's own description of the same task type.

### Cited Findings
**AIWORKX (formerly Testworks)**
- Renamed in April 2025 (another report says March 2025).
- Sales: KRW 9.9bn in 2024 (first decline); about KRW 18bn projected for 2025; 30–40% growth possible in 2026.
- Plans KRW 15bn of pre-IPO funding. The IPO timing is inconsistent: 2026 in the subtitle, "the year after next" (2027) in the body.
- A member of the **NC AI consortium** in the Ministry of Science and ICT (MSIT) independent foundation-model project, responsible for **math and reasoning datasets, model validation and QA**.
- Other footprint: Vietnam branch; Cambodia proposed a Khmer LLM collaboration; certified social enterprise with about 170 employees.
- Clients: SKT, KT, LG U+ (AI agent quality validation) and KB Card.
- Europe is not mentioned.
- [Asia Business Daily, 19 Oct 2025](https://www.asiae.co.kr/en/article/2025101517114107290)
- Launched a newsletter called "PAVE" and showed "blackolive TEXT" (automatic AI-agent training-data generation) at a Japanese exhibition (snippet). — [Venturesquare](https://www.venturesquare.net/1113007/)

**Superb AI**
- 19 Aug 2026: the LG AI Research consortium advanced to the third stage of the MSIT project. Superb AI is "the only non-LG affiliate" directly developing K-EXAONE and is responsible for **vision, video and physical AI**. Its data work is human-motion video data with natural-language action labels for VLA models. LLM text or expert data and Europe are not mentioned. — [Venturesquare, 19 Aug 2026](https://www.venturesquare.net/1106931/)
- US and Japan entities; Japanese customers Toyota and Nippon Steel; invited to NVIDIA GTC 2026 (snippet). — [CIO Korea](https://www.cio.com/article/3521674/); [ITWorld Korea](https://www.itworld.co.kr/article/3575625/)

**Datumo (SelectStar)**
- Datumo Eval (auto-generated test questions plus evaluation) and Datumo Red (red-teaming) were pitched in Japan in May 2026. No European expansion was found. — [Digital Today, 19 May 2026](https://www.digitaltoday.co.kr/en/view/56413/selectstar-debuts-datumo-ai-reliability-assessment-platform-in-japan)
- Customers include Korean financial institutions, public agencies, LG Electronics and the Bank of Korea (snippet). — [ai-market-watch](https://www.ai-market-watch.com/news/selectstar-brings-its-datumo-ai-evaluation-platform-to-tokyo-as-it-pursues-the-j-0buihv)

**Datamaker**
- No 2025–2026 information found (one Korean search returned nothing on it).

**Flitto: ProZ listing for a CEE evaluation project (verification attempt)**
- Search-engine summary (snippet):
  - A ProZ listing from **May 2026** recruits freelancers for an **English → Bulgarian, Czech, Hungarian, Polish, Romanian, Slovak and Ukrainian** project.
  - The task is scoring translations against the source on **Flitto's platform**, with no translation or editing required.
  - Recommended load is at least 6 tasks per week, each about 1–2 hours for experienced workers.
  - Selection is via a translation test, then review and project assignment.
  - Payment is monthly after QA, by PayPal, on 60-day terms.
  - Related ProZ job IDs surfaced: [2244316](https://www.proz.com/job/2244316), [2244325](https://ceb.proz.com/job/2244325), [2244334](https://ceb.proz.com/job/2244334), [2255818](https://fin.proz.com/job/2255818). All redirect to www.proz.com, which returned **403**, so the poster name, rate and exact date could not be read directly. The earlier ID 2277709 also returned 403.
- Flitto documents a "Short Text Acceptability Rating Task" with four grades for crowd contributors. — [Flitto support](https://support.flitto.com/hc/en-us/articles/17275920810265--Short-Text-Acceptability-Rating-Task)
- Flitto DataLab: native-speaking reviewers ("a group of carefully selected native-speaking reviewers of the targeted language set") run a "translation acceptability test" on Flitto's own platform. Data is handled by "bilingual contributors, professional translators, and in-house linguists". The page shows logos of Microsoft, Amazon, eBay, Baidu, Adobe, Samsung, Airbnb, Tencent, Alibaba, Oracle, LINE, DoCoMo, Hyundai and others (not explicitly labelled as clients). — [Flitto DataLab MT page](https://datalab.flitto.com/en/solutions/for-machine-translation)
- LinkedIn guest job search for "Flitto" (12 Nov 2026) returned no Flitto postings (fuzzy keyword matching only). — [LinkedIn guest search](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=Flitto&location=Worldwide)

**Korean demand context**
- Demand for professional contractors (lawyers, doctors, developers) for AI training and validation is rising, and "Korean-language expert data" demand is growing in finance, law, manufacturing and the public sector. Large SIs, cloud providers and professional platforms are expected to enter the market (forecast). — [ZDNet Korea via Daum, 14 Apr 2026](https://v.daum.net/v/20260414171825439)

### Inferences
- **[Assessment]** The Flitto CEE project fits Flitto's documented acceptability-rating workflow, so attribution to Flitto is **plausible but not verified on the ProZ page itself**. It shows that Flitto sources CEE-language evaluators as **freelance crowd** (test-based, PayPal, 60-day terms), not as Tier-1 domain experts. PathWize could offer Flitto a vetted CEE/EU language-expert bench for its big-tech evaluation contracts. Domain-heavy tasks (medical or legal MT evaluation) would be the differentiator.
- **[Assessment]** AIWORKX, Superb AI and Datumo are **not natural buyers** of European experts today, because their work is Korean-language or vision-focused and tied to sovereign-AI projects. Datumo is the most plausible *partner*: its evaluation platform could be paired with PathWize EU raters if a Korean or Japanese client needs EU-language evaluation.

### Gaps
- The ProZ poster identity, rate and date could not be read (403). It needs a manual check with a ProZ login.
- Datamaker: no information found.
- No Korean vendor job posting for European-language or Western domain experts was found.

---

## Q3: India (Cogito Tech, NextWealth, Karya; 2026 RL-environment shops subcontracting for US vendors): do they recruit European-language or Western medical/legal experts?

### Takeaway
No verified evidence was found that Cogito Tech, NextWealth or Karya recruit European-language or Western medical or legal experts:
- **NextWealth** markets SFT/RLHF/DPO with "linguists, domain experts" across "50+ languages and locales" from Bengaluru, with no overseas-expert recruiting stated.
- **Cogito Tech** shows radiologist-SME engagement only through one freelancer's self-description.
- **Karya** remains Indian-language focused (prior notes).

For RL environments, **Deccan AI** is the only clearly identified Indian-rooted shop (STARK containerised environments). Its customers are US labs, and it buys a few niche experts from the US (prior notes). No other 2026 Indian RL-environment subcontractor was identified.

### Cited Findings
- **NextWealth:**
  - Claims SFT, RLHF and DPO workflows run by "trained evaluators operating under rigorous annotation guidelines", with prompts written by "Our linguists, domain experts, and prompt engineers".
  - Legal, medical and financial are named application areas. Coverage is "50+ languages and locales", with no European languages named.
  - Offices: Bengaluru (Indiranagar) and Frisco, Texas. Scale: 5,000+ staff, 10+ Fortune 500 clients, 40+ live projects.
  - Recruitment of overseas experts is not mentioned.
  - [nextwealth.com/generative-ai](https://www.nextwealth.com/generative-ai)
- **Cogito Tech:** a single OpenTrain freelancer profile lists "2026–present" work as a radiologist subject-matter expert and labeler at CogitoTech. This is a self-description, not a company posting (snippet). — [OpenTrain profile](https://www.opentrain.ai/profile/himmank-g)
- **Deccan AI / RL environments:** its "STARK" product consists of code-based, containerised RL environments with five-step verifiers. Core clients are American labs, and many suppliers come from India (snippet). — [yespress](https://yespress.io/deccan-ai); [briter](https://www.briter.co/companies/deccan-ai)
- NPCI and NVIDIA launched an open RL environment for training and benchmarking agents on Indian banking tasks at Global Fintech Fest 2026 (snippet; domestic, not subcontracting). — [aiunderstanding.org](https://aiunderstanding.org/news/npci-and-nvidia-launch-open-ai-training-environment-for-banking-agents)
- Inc42 characterises Indian data-collection work for global robotics as high-volume, thin-margin services contracting (snippet). — [Inc42](https://inc42.com/features/india-trains-the-worlds-robots-but-at-what-cost/)

### Inferences
- **[Assessment]** Indian vendors (NextWealth, Cogito) sell India-delivered expert labour. Where a US client needs EU-language or EU-licensed medical or legal judgement, they would need to subcontract it, and **no evidence shows they currently do**. That makes them low-probability but possible subcontracting clients, approached with a "white-label EU expert bench" offer. Deccan (already sourcing niche US experts and serving a "Paris frontier lab", per prior notes) is the most likely Indian buyer of EU experts.

### Gaps
- Cogito Tech and NextWealth career pages and LinkedIn postings for EU languages were not checked (search budget used up).
- No list of 2026 Indian RL-environment subcontractors (other than Deccan) working for US vendors (Mercor, Surge, Turing, Scale) was found.
- Karya: no new 2026 information beyond the prior notes.

---

## Q4: China: Testin (云测数据), BasicFinder (倍赛科技), MolarData (整数智能), Magic Data: expert/multilingual lines, overseas offices; Abaka AI ownership, HQ, offices, MolarData and 2077AI links

### Takeaway
- **BasicFinder** is a domestic scale annotator: 2,000+ full-time annotators, 12 data-processing centres, Beijing plus a Chengdu "southwest HQ", an RLHF text suite, and a JV with Korea's DataMatica. It lists no overseas offices.
- **Testin**'s site gives no detail on its AI data line.
- **Magic Data** claims 100+ accents/dialects and 50+ top clients (Apple, Meta, MiniMax, Tencent logos) but lists no overseas office.
- **MolarData/整数智能** is a Zhejiang University spin-off (registered Sep 2021, Hangzhou) backed by 峰瑞资本 (A round, Aug 2024).
- **Abaka AI** is described by third-party profiles as "headquartered in Silicon Valley" with teams in **Paris, Singapore and Tokyo**. A link to MolarData is supported by product overlap (ACE service; MooreData/ABAVA platform) in directory and search summaries, but **no primary source states the ownership**.

### Cited Findings
**BasicFinder (倍赛科技, Beijing)**
- "全职数据标注师规模2000+" (2,000+ full-time annotators) and "下辖12家数据处理中心" (12 data-processing centres).
- Capacity is allocated via a "自营定额+团队联盟" model (own quota plus team alliance).
- New text annotation suite "支持RLHF助力大模型训练" (supports RLHF for large-model training).
- Chengdu southwest HQ signed; JV with Korea's **DataMatica** "携手共拓亚太新机遇" (to pursue Asia-Pacific opportunities together).
- Won a China Telecom annotation-platform bid; JD Group testimonial.
- No overseas office; SFT, expert data and languages are not mentioned.
- [basicfinder.com](https://www.basicfinder.com/)

**Testin (云测, 云测数据)**
- The homepage mentions only "AI data solutions" for "more than one million developers and enterprises worldwide" and "海外测试人员" (overseas testers, for app testing). LLM, expert, multilingual and office details are absent. — [testin.net](https://www.testin.net/)
- Listed by iiMedia among Chinese AI data-service firms (snippet). — [iiMedia tag page](https://report.iimedia.cn/tag/云测数据)

**Magic Data (爱数智慧)**
- Claims: "10+ Years of Expertise" in conversational-AI data; "100+ Global Accents & Dialects"; "50+" top clients ("to fuel their foundation models"), with logos of Apple, Bilibili, Cerence, Meta, MiniMax, Microsoft, Naver, NVIDIA, Qualcomm, SoundHound, Tencent and Zoom; "1M+" ready-to-use data (unit unclear).
- No HQ or overseas offices are listed, and expert, SFT or RLHF services are not mentioned.
- [Magic Data About](https://www.magicdatatech.com/index.php/about-us/)

**MolarData (整数智能, Hangzhou)**
- Registered 2021-09-18 at a Hangzhou Xiaoshan address. Origin: "整数智能发展于浙江大学计算机创新技术研究院" (grew out of Zhejiang University's computer innovation research institute). The founder and CEO is the legal representative and holds 48.48%.
- Products: ABAVA Platform (智能数据工程平台, intelligent data engineering platform) and ACE Service (数据集构建服务, dataset construction service). Clients: "数百家" (hundreds of) domestic and overseas tech firms and institutes (unnamed). A 2023 news item said RLHF data services were planned.
- Rounds:

  | Round | Date | Amount | Investors |
  |---|---|---|---|
  | Angel | Jun 2022 | Undisclosed | 上海博池, 藕舫天使 |
  | Pre-A | Jun 2023 | Tens of millions RMB | 翊宙资本, 藕舫天使, 安益 (the 安益 investor's name is inconsistent across items) |
  | A | Aug 2024 | Tens of millions RMB | Led by 峰瑞资本 |

- [36Kr PitchHub](https://pitchhub.36kr.com/project/1744026151951240)
- Dealroom calls 整数智能 "also known as MolarData" with Hangzhou HQ but gives 2019 as the founding year, which conflicts with the 2021 registration (snippet). — [Dealroom](https://app.dealroom.co/companies/integer_technology)
- A search summary states that the G2 and Latka pages for **Abaka AI** describe the same "ACE" service and "MooreData" platform, implying the same business (snippet; not confirmed on a primary page). — [G2](https://www.g2.com/products/abaka/discuss); [getlatka](https://getlatka.com/companies/abaka.ai)

**Abaka AI**
- Vaia talent profile: Abaka is "headquartered in Silicon Valley, with additional teams located in Paris, Singapore, and Tokyo"; "1000-5000" employees; "serving over 1,000 industry leaders in sectors such as Generative AI, Embodied AI, and Automotive AI". No open jobs are listed, and MolarData, Hangzhou and 2077AI are not mentioned. — [talents.vaia.com](https://talents.vaia.com/companies/abakaai/)
- Crunchbase: "offices in Singapore, Paris, and Silicon Valley"; another directory gives Palo Alto, CA (snippets). — [Crunchbase](https://www.crunchbase.com/organization/abaka-83c8); [village.ai](https://village.ai/company/abaka-ai)
- Official site: no addresses or legal entity; contact business@abaka.ai; "1M vertically specialized annotators across 50+ countries"; an "RL Environments" product page. The About page returned 404. — [abaka.ai](https://www.abaka.ai/); [abaka.ai/contact](https://www.abaka.ai/contact)
- 2077AI: Abaka co-founded the 2077AI Foundation (prior notes, WFTV, 28 May 2026); no new information.

**Chinese subcontracting pattern (new evidence)**
- Translation company 信实翻译 says it is "多家头部AI数据服务商的源头标注供应商" (a source annotation supplier to several leading AI data service firms). It names 数据堂 (Datatang) and "奥鹏" (very likely 澳鹏, Appen China) as clients for Uyghur annotation. This is self-promotional and unverified. — [NetEase, 3 Aug 2026](https://www.163.com/dy/article/L3E2P6KI0556CLW6.html)
- Guangzhou 淇至科技 posted "小语种大模型数据标注" (minority-language LLM data annotation) on 3 Aug 2026:
  - Languages: Portuguese, Indonesian, Spanish, **French**, Vietnamese, **German**, Japanese, Thai, Korean, Malay, Arabic.
  - Tasks: parallel corpora, cultural and safety review, ASR/TTS, prompt writing and evaluation.
  - Pay CNY 8,000–10,000/month; bachelor's to PhD.
  - The client is not named. This is likely the same posting as prior report ref [172].
  - [niuqizp](https://campus.niuqizp.com/job-vmU5zM5NC.html)

### Inferences
- **[Assessment]** BasicFinder, Testin and Magic Data have no visible European presence or expert line. They are domestic-scale annotators and speech-data sellers. Magic Data's client logos (Meta, Apple, MiniMax) make it a possible buyer of EU-language speech or conversational data, but not of Tier-1 domain expertise.
- **[Assessment]** Abaka AI is best treated as a **globally branded competitor with Chinese roots**: a US-registered front, Paris, Singapore and Tokyo teams per third-party profiles, and probable MolarData lineage. Its Paris team suggests it already sells to European labs. Moderate confidence on the MolarData link; low-to-moderate on the Paris office (third-party profiles only).
- **[Assessment]** The 信实翻译 claim and BasicFinder's "team alliance" model show that **Chinese data vendors routinely buy language capacity from outside suppliers**. This is the mechanism through which PathWize could enter as a subcontractor.

### Gaps
- No primary-source (registry, press release, official site) proof that Abaka AI is owned by or is the overseas brand of 整数智能/MolarData. No address or registration was found for a Paris entity, and French registry (Pappers/INPI) checks were not possible within budget.
- Testin's 2026 AI-data revenue, expert lines and overseas offices were not found.
- Magic Data's HQ and overseas entities were not stated on its site.

---

## Q5: Dataocean / Haitian Ruisheng: European legal entities, European sales hiring 2026, partner program

### Takeaway
Based on the **2025 annual report** (published 23 Apr 2026), Haitian Ruisheng has **no European legal entity**:
- Its overseas subsidiaries are Haitian Ruisheng (Hong Kong), **DATAOCEAN AI INC. (Washington State, USA; 100%)** and **DATAOCEAN AI PTE. LTD. (Singapore; 51%)**.
- For 2026 it states it will "积极推进日本、韩国及欧盟子公司落地" (actively push to establish **Japan, Korea and EU subsidiaries**).

Other key figures:
- Overseas revenue was CNY 157.6M (+38.7%) at a **53.5% gross margin**, which is **41.8% of revenue**; the US alone is 19.1%.
- It says it has competitive advantages in "中东欧小语种" (CEE minor languages).
- It plans to diversify suppliers and expand its **overseas resource pool**.

No formal partner or vendor programme exists. "Partnership" is only a dropdown option on the contact form, and no European sales job posting was found.

### Cited Findings
All items are from the [Haitian Ruisheng 2025 Annual Report (full text)](https://pdf.dfcfw.com/pdf/H2_AN202604231821510662_1.pdf) unless noted.

- **Subsidiaries (合并范围):**

  | Entity | Place | Registered capital | Stake |
  |---|---|---|---|
  | 杭州瑞天数智 | Hangzhou | — | 100% |
  | 安徽瑞天数智 | Anhui | — | 100% |
  | 辽宁海天数智 | Liaoning | — | 100% |
  | 北京中瑞智 | Beijing | — | 100% |
  | 海天瑞聲（香港）科技有限公司 | Hong Kong | USD 5M | 100% |
  | **DATAOCEAN AI INC.** | Washington State, USA | USD 1M | 100% |
  | **DATAOCEAN AI PTE. LTD.** | Singapore | USD 0.5M | 51% |
  | 内蒙古瑞天数据标注技术创新中心 | Inner Mongolia | — | 100%; founded Apr 2025 |
  | 成都瑞天数智 | Chongzhou/Chengdu | — | 75% interest |

  **No UK, German or other EU entity is listed.** In 2025 the company added USD 10M of capital to the Hong Kong subsidiary.
- **2026 strategy (verbatim):** "在已设立的中国香港、新加坡和美国区域子公司基础上，积极推进日本、韩国及欧盟子公司落地，提升客户触达效率和需求响应速度" (on the basis of the existing Hong Kong, Singapore and US subsidiaries, actively push to establish Japan, Korea and EU subsidiaries, to reach customers more efficiently and respond faster). It will also "考虑在东南亚其他地区拓展类似基地" (consider similar bases elsewhere in Southeast Asia) and "强化境外本土营销团队建设" (strengthen local marketing teams abroad).
- **Overseas business 2025:**
  - Overseas revenue CNY 157,607,062.93 (+38.68%) at a 53.50% gross margin (−26.16 pp). Domestic revenue was CNY 219.4M at a 44.20% margin.
  - "境外收入占比为 41.81%" (overseas revenue is 41.81% of the total); US exports are 19.12% of revenue.
  - Overseas assets of CNY 92.3M (10.72% of total assets).
  - Drivers: international clients "以全球头部消费电子、企业级 SaaS 应用软件公司等为代表" (led by top global consumer-electronics and enterprise SaaS companies) need multilingual speech and parallel corpora. It "进一步强化北美、欧洲及日韩销售团队" (further strengthened its North America, Europe and Japan/Korea sales teams).
- **Singapore unit:** DATAOCEAN AI PTE. LTD. had 2025 revenue of CNY 72.3M and net profit of CNY 2.17M.
- **Language capability:**
  - "超过 300 个语种/方言" (300+ languages/dialects), "包括英、法、德、意、西..." (including English, French, German, Italian, Spanish ...).
  - "尤其在亚洲小语种、中东欧小语种的服务上具备竞争优势" (competitive advantage especially in Asian and **Central/Eastern European** minor languages).
  - Almost 140 pronunciation dictionaries, including Bosnian and Serbian.
  - A partner linguist team "成员遍布世界各地的学校及研究机构" (spread across universities and research institutes worldwide).
- **Supply chain:**
  - "已覆盖 60 万终端资源，涉及 176 个国家和地区" (600,000 end resources in 176 countries and regions).
  - A professional resource pool in medicine, finance, education and similar fields, built "与行业权威机构合作" (with authoritative industry institutions).
  - 2026 plan: "持续推进供应商多元化战略，扩大供应商的地理分布和行业覆盖...加大海外资源池建设投入" (keep diversifying suppliers, widen their geography and industry coverage, invest more in the overseas resource pool).
  - The top 5 suppliers took 48.08% of purchases (largest: CNY 55.9M, 25.44%; all unnamed). The top 5 customers took 46.20% of revenue (largest 18.99%).
- **Staff:** 262 employees (86 with master's or higher). Outsourced labour: 54,340 hours for CNY 3,285,224, which is about **CNY 60/hour** on average (own calculation).
- **Expert demand narrative:** "医疗大模型要求标注人员具备医学知识，法律模型需理解法条与判例逻辑" (medical models need annotators with medical knowledge; legal models need people who understand statutes and case logic). Competition is moving to "专家资源网络" (expert resource networks).
- **Singapore JV origin:** DATAOCEAN AI PTE. LTD. was set up in Sep 2024 by the Hong Kong subsidiary "为开展境外数据业务" (to conduct overseas data business). Ownership: 51% Hong Kong subsidiary, 49% PRIDE AI HOLDING LIMITED. The parent guaranteed a bank loan of up to CNY 50M. — [Guarantee announcement 2025-030, 5 Sep 2025](https://pdf.dfcfw.com/pdf/H2_AN202509051739228810_1.pdf)
- **Customers and competitor benchmarks (AR summary):**
  - Customers include Alibaba, Tencent, Baidu, iFlytek, Hikvision, ByteDance, Microsoft, **Amazon, Samsung**, China Mobile, CAS and Tsinghua; 1,200+ cumulative customers.
  - Language coverage per its own competitor table: Haitian 300+, Appen 290+, Datatang 100+, DataBaker 40+.
  - [AR 2025 summary](https://pdf.dfcfw.com/pdf/H2_AN202604231821510652_1.pdf)
- **Website:**
  - Contact page lists only a "US Headquarters: 100 N Howard St STE-R Spokane, WA 99201" and contact@dataoceanai.com.
  - The inquiry dropdown includes "Partnership"; there is no vendor, linguist or partner sign-up.
  - Homepage claims "50,000+ Experts with Advanced Qualifications", "Finance/Medicine/Law/Other 30+ domains" and "200+ Global Languages". Client and dataset counts are internally inconsistent (1,100 vs 900 clients; 1,800 vs 1,600 datasets).
  - [dataoceanai.com/contact-us](https://dataoceanai.com/contact-us/); [dataoceanai.com](https://www.dataoceanai.com/)
- **European sales hiring 2026:** a LinkedIn guest keyword search for "DataOcean AI" (12 Nov 2026) surfaced no Dataocean postings (fuzzy matching; not conclusive). — [LinkedIn guest search](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=DataOcean%20AI&location=Worldwide)

### Inferences
- **[Assessment]** The prior report's statement "Europa-Vertrieb ohne EU-Gesellschaft" (Europe sales without an EU company) is **confirmed**. The new and important point is that an **EU subsidiary is an explicit 2026 goal**. PathWize can pitch itself as a delivery partner (EU expert bench, EU data residency) for Dataocean's EU build-out, or even as a JV or acquisition candidate, given the Singapore precedent of a 51/49 JV with a local holding company.
- **[Assessment]** Dataocean's supply model is heavily outsourced (top-5 suppliers about 48% of purchases; average outsourced labour about CNY 60/h). Its stated 2026 aim of diversifying suppliers geographically and by industry, plus expanding the overseas resource pool, makes a **supplier relationship** (rather than a formal partner programme) the realistic entry route. The approach would go through the "Partnership" contact channel or the US entity in Spokane.
- **[Assessment]** Its claimed strength in CEE minor languages overlaps with PathWize's language offer. PathWize should differentiate on **Tier-1 domain experts** (medicine, law, finance), not on language coverage.

### Gaps
- Whether the planned EU subsidiary was actually established by Nov 2026: the H1 2026 interim report was not parsed.
- The identity of PRIDE AI HOLDING LIMITED (the 49% partner in Singapore) is not known.
- No 2026 European sales job postings were verified (LinkedIn search is noisy; BOSS直聘 and Liepin are login-protected).
- No partner, reseller or vendor programme terms were found.

---

## Q6: China's national data-annotation bases: source for 119 PB / ~140,000 workers; do bases procure foreign-language expert work?

### Takeaway
The figures are verified and come from a **CCTV News report citing the National Data Administration (NDA)**: "截至今年 6 月底" (as of end-June 2026), the **7 data-annotation pilot cities** (Chengdu, Shenyang, Hefei, Changsha, Haikou, Baoding, Datong) had annotated **more than 119 PB**, with **140,000 annotation workers**. The NDA director separately told the WAIC 2026 corpus forum (18 Jul 2026) that the 7 cities serve **425 large models**.

These are "先行先试城市" (pilot cities), not "national bases", and the 119 PB is a **7-city total, not a national figure**. No evidence was found that the bases or pilot cities procure foreign-language or foreign expert work. The NDA describes an expert-crowdsourcing network ("语匠") for turning domestic experts' tacit knowledge into data.

### Cited Findings
- "截至今年 6 月底，四川成都、辽宁沈阳、安徽合肥、湖南长沙、海南海口、河北保定、山西大同七个数据标注先行先试城市标注规模超 119 PB，数据标注从业人员达 14 万人" (as of end-June this year, the seven pilot cities exceeded 119 PB of annotation and employed 140,000 annotation workers). Source line: "据央视新闻从国家数据局了解到" (CCTV News, from the NDA). Published 19 Jul 2026. — [IT之家, 19 Jul 2026](https://www.ithome.com/0/978/725.htm)
- "七个数据标注先行先试城市标注规模超119PB，服务425个大模型研发" (the seven pilot cities exceed 119 PB and serve the development of 425 large models), said by the NDA director at the WAIC 2026 corpus innovation forum on 18 Jul 2026. The article mentions converting industry experts' tacit knowledge into "usable, callable, evaluable" explicit knowledge, supported by a "语匠" expert crowdsourcing network. It does not mention foreign languages, multilingual work or overseas procurement, and the 140,000 figure does not appear in this article. — [The Paper, 19 Jul 2026](https://www.thepaper.cn/newsDetail_forward_33616684)
- Same period: 120,000 high-quality datasets built, totalling more than 1,565 PB (+60% vs end of Q1) (snippet). — [cnfin](https://www.cnfin.com/hg-lb/detail/20260719/4442624_1.html)
- The prior notes attributed the figures to Guangming Daily (approximate). The [Guangming link](https://m.gmw.cn/2026-07/18/content_1304534545.htm) is from the same news cycle; IT之家 is the clearer verbatim source.
- **Vendor link:** Haitian Ruisheng has subsidiaries in three pilot-city provinces (Liaoning, Anhui, and Chengdu/Chongzhou at 75%) plus an Inner Mongolia "data annotation technology innovation centre" (founded Apr 2025). — [Haitian Ruisheng AR 2025](https://pdf.dfcfw.com/pdf/H2_AN202604231821510662_1.pdf)
- A Chinese search for foreign-language or minority-language projects at annotation bases (数据标注基地 小语种 外语) returned no base-level foreign-language procurement.

### Inferences
- **[Assessment]** The pilot cities are a domestic employment and industrial-policy tool. Their buyers are Chinese model builders, and the "expert" push is aimed at Chinese professionals. They are **not a realistic customer** for PathWize. Their relevance is indirect: vendors such as Dataocean place delivery capacity there, so EU-language and EU-domain work would still have to be subcontracted outside.

### Gaps
- No pilot-city or base procurement notice involving foreign languages or foreign experts was found. Chinese government procurement portals were not searched in depth (budget).

---

## Q7: Pricing benchmarks for expert annotation in Korea and Japan; verify the Alibaba Siriser "~400 RMB per instruction" claim

### Takeaway
No public **Korean** expert-annotation rate in KRW was found. The only Korean signal is that high-difficulty LLM data projects are priced "20–30%+ above" general data (snippet). In **Japan**, evaluation gigs pay about **USD 30/h** (OpenTrain Japanese AI evaluation specialist, posted 5 Nov 2026). A blog cites ¥1,500–3,000/h as typical and ">¥7,000/h" for specialised work (low-quality source). Vendors (Human Science, Annotation One) publish no prices.

The **Siriser "~400 RMB per instruction" claim is not verified.** Rest of World (9 Sep 2026) gives no Siriser-specific pay, only a generic CNY 100–500 per multi-hour task across platforms. The 400 figure probably conflates the separately reported rise in expert *hourly* rates "from about CNY 100 to over CNY 400" (Lanjinger, Dec 2025).

### Cited Findings
- **Japan:**
  - OpenTrain "AI評価スペシャリスト（日本語）": remote, residents of the US or Japan, "最大で1時間あたり$30" (up to USD 30 per hour), bachelor's degree or higher, Japanese fluent plus English at CEFR B2, posted 2026年11月5日 (5 Nov 2026). The end client is not named. — [OpenTrain](https://www.opentrain.ai/ja/jobs/japanese-ai-evaluation-specialist-us-japan--cmw3tv2a800h108lgratacs7f/)
  - Blog (affiliate-style, low reliability): AI output evaluation pays about ¥1,500–3,000/h, with specialised cases above ¥7,000/h. — [atsoho.com](https://atsoho.com/blog/ai-output-evaluation-remote-side-hustle-2026)
  - Human Science: initial fee none, monthly "お問い合わせください" (on request). — [ai-market.jp](https://ai-market.jp/service/humanscience_annotation/)
  - Annotation One: fee fields blank. — [ai-market.jp](https://ai-market.jp/service/annotation_one/)
- **Korea:**
  - Crowdworks: high-difficulty LLM data projects carry unit prices "20~30% 이상" (20–30%+) above general data (Jul 2025, snippet). — [Digital Daily, Jul 2025](https://www.ddaily.co.kr/page/view/2025071811271902037)
  - Pebblous report: the Korean edition puts PhD-level domain experts at about USD 50–200/h; the English edition puts frontier experts at USD 85–200+. Both are global benchmarks, not Korean market data (snippet). — [Pebblous KR](https://blog.pebblous.ai/report/expert-data-labor-market-2026/ko/); [Pebblous EN](https://blog.pebblous.ai/report/expert-data-labor-market-2026/en/)
  - ZDNet Korea (14 Apr 2026): rising demand for Korean-language expert data; no KRW rates. — [Daum/ZDNet Korea](https://v.daum.net/v/20260414171825439)
- **Siriser:**
  - "Siriser, which launched in January, is recruiting teachers, mechanical engineers, and music composers as AI trainers". Trainers can revise or appeal rejected work.
  - Pay is only generic: "a few hours to complete a task, which earns them 100 to 500 yuan ($15 to $74)".
  - No foreign experts or languages are mentioned.
  - [Rest of World, 9 Sep 2026](https://restofworld.org/2026/china-expert-ai-trainers/)
  - The source for the "100 → 400+ RMB/hour" expert rate rise is [Lanjinger, 12 Dec 2025](https://www.lanjinger.com/d/1765548724031120377) (already in the prior notes).
- **China vendor-side cost reference:** Haitian Ruisheng paid CNY 3,285,224 for 54,340 outsourced labour hours in 2025, about **CNY 60/h** average (own calculation). — [AR 2025](https://pdf.dfcfw.com/pdf/H2_AN202604231821510662_1.pdf)

### Inferences
- **[Assessment]** Japanese generalist evaluation (about USD 30/h, or ¥1,500–3,000/h) and Chinese vendor outsourced labour (about CNY 60/h, roughly EUR 8) are far below PathWize Tier-1 rates. PathWize must therefore price as a **scarcity product**: EU languages combined with credentialed medicine, law or finance. Even then, the comparable anchors are the Chinese top-expert rates (CNY 500–800/h) and Western platform rates (USD 85–200+/h), not Asian generalist rates.
- **[Assessment]** The report should drop or correct "Siriser ~400 RMB pro Anweisung". It can say instead: "Expert gigs on Siriser/Xpert and similar platforms pay CNY 100–500 per multi-hour task (Rest of World); expert hourly rates on Xpert have risen to over CNY 400 (Lanjinger)."

### Gaps
- No Korean (Crowdworks, Flitto, Datumo) or Japanese (Human Science, Baobab, FastLabel) per-hour or per-task expert price was found in a primary source.
- No Siriser-specific pay schedule was found.

---

## Q8: Vendor partner/reseller programmes (Dataocean, Appen China, Flitto, Datumo, Crowdworks) a European expert provider could join

### Takeaway
**No public, formal partner or reseller programme with terms** was found for Dataocean, Appen China, Datumo or Crowdworks. The available entry points are:
- **Flitto DataLab** links to a "Partnership Program" in its site navigation, but the content could not be retrieved.
- **Dataocean** offers only a "Partnership" option in its contact form. Its annual report commits to supplier diversification and expanding the overseas resource pool in 2026.

The evidence suggests Asian vendors bring in outside capacity **through supplier or subcontracting relationships**, not formal programmes:
- 信实翻译 claims to be a source supplier to Datatang and Appen China.
- BasicFinder uses a "team alliance" model.
- Dataocean's top-5 suppliers account for 48% of purchases.

### Cited Findings
- **Dataocean:** contact form inquiry types are "Datasets Services Solutions Partnership News & Press Others", with contact@dataoceanai.com and a US HQ in Spokane, WA. There is no partner, vendor or linguist sign-up. — [dataoceanai.com/contact-us](https://dataoceanai.com/contact-us/)
- Dataocean's 2026 plan states: "持续推进供应商多元化战略，扩大供应商的地理分布和行业覆盖，深化与供应商的协同合作；加大海外资源池建设投入" (keep diversifying suppliers, widen their geography and industry coverage, deepen cooperation with suppliers, and invest more in the overseas resource pool). Top-5 suppliers accounted for 48.08% of 2025 purchases. — [AR 2025](https://pdf.dfcfw.com/pdf/H2_AN202604231821510662_1.pdf)
- **Flitto:** the DataLab site navigation includes a "Partnership Program" link (content not retrieved; a guessed URL returned 404). Flitto also runs crowd tasks (acceptability rating) and lists "bilingual contributors, professional translators, and in-house linguists". — [Flitto DataLab](https://datalab.flitto.com/en/solutions/for-machine-translation); [Flitto support](https://support.flitto.com/hc/en-us/articles/17275920810265--Short-Text-Acceptability-Rating-Task)
- **Appen China:** no partner or vendor programme found. A translation company claims to be a source annotation supplier to "奥鹏" (very likely Appen China) and Datatang for Uyghur annotation (self-reported). — [NetEase, 3 Aug 2026](https://www.163.com/dy/article/L3E2P6KI0556CLW6.html)
- **BasicFinder:** capacity is allocated via "自营定额+团队联盟" (own quota plus team alliance), i.e. external teams deliver part of the capacity. — [basicfinder.com](https://www.basicfinder.com/)
- **Datumo:** the English site could not be parsed (truncated), and no partner programme was found. Its Japan go-to-market goes through KOTRA events. — [Digital Today](https://www.digitaltoday.co.kr/en/view/56413/selectstar-debuts-datumo-ai-reliability-assessment-platform-in-japan)
- **Crowdworks:** no partner programme found. The company says it runs a certification system to recruit specialist workers quickly (snippet). — [Digital Daily, Jul 2025](https://www.ddaily.co.kr/page/view/2025071811271902037)

### Inferences
- **[Assessment]** PathWize should approach these vendors as a **specialist supplier or subcontractor**, not as a programme member. Proposed order:
  1. **Dataocean**: explicit 2026 supplier-diversification and EU-subsidiary plans; use the "Partnership" inquiry or the US entity.
  2. **Flitto**: ask about the "Partnership Program", using the CEE evaluation project as the hook.
  3. **Appen China**: buys language capacity from outside LSPs.
  4. **Datumo**: evaluation platform plus PathWize raters, for Japan and Korea clients needing EU languages.
- **[Assessment]** Since vendors publish no programme terms, PathWize should prepare its own **supplier pack**: rate card, NDA, GDPR/DPA terms, EU data residency, and expert-credential verification.

### Gaps
- Flitto "Partnership Program" content was not retrieved.
- Appen China, Crowdworks and Datumo partner or supplier onboarding procedures were not found.
- No public evidence was found that any of these vendors currently subcontracts to a European expert provider.
