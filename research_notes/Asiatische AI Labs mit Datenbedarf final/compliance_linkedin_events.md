# Compliance-list status, LinkedIn job signals and buyer events for Asian AI buyers of expert human data (verification round, as of 12 Nov 2026)

Method note: primary sources were pulled directly where possible. These include the Federal Register API and full-text notices, the eCFR versioner API (Entity List as amended through 9 Nov 2026), the congress.gov API, the LinkedIn guest job API (49 keyword × location queries, 1,199 unique postings parsed on 12 Nov 2026), official conference sites, BAFA, and the front-end code of the supplier portals. OpenSanctions bulk mirrors were used for the EU FSF and OFAC non-SDN lists. Tags: **[primary]** = official source read in full; **[secondary]** = press or law-firm source read in full; **[snippet]** = seen only in a search-result summary. 15 web searches were used.

---

## Q1. Official Section 1260H ("Chinese military companies") list status

### Takeaway
The current 1260H list is the one signed on **5 June 2026** and published on **10 June 2026** (FR Doc. 2026-11571). It has 80 designated parent entities, most with subsidiaries, and **Tencent, Alibaba, Baidu, Huawei, SenseTime and Unitree are on it**. No other target company is listed: ByteDance, Ant Group, iFlytek, Moonshot, MiniMax, StepFun, DeepSeek, Zhipu, Baichuan, Kuaishou, Meituan, Xiaomi, JD, NetEase, Haitian Ruisheng, Datatang and Shengshu are absent. There was **no January 2026 list**. The previous list was signed on 2 Jan 2025 and published on 7 Jan 2025. The only change since June is the **delisting of WuXi AppTec on 10 Nov 2026**, made under a court order.

### Cited Findings
- **Federal Register history of 1260H notices.** The API search for "1260H" (run 12 Nov 2026) returns these designation notices: **10 Nov 2026** removal notice (2026-22840), **10 Jun 2026** designation notice (2026-11571), **7 Jan 2025** designation notice (2025-00070), plus removal notices in 2024. There is no notice dated January 2026. **[primary]** [FR API query](https://www.federalregister.gov/api/v1/documents.json?conditions[term]=1260H&order=newest)
- **June 2026 notice (FR Doc. 2026-11571, Docket DOD-2026-OS-1288).** Signed 5 June 2026 and filed 8 June 2026. It designates 80 parent entities with subsidiaries and removes 10 entities from the January 2025 list. **[primary]** [Federal Register 2026-11571](https://www.federalregister.gov/documents/2026/06/10/2026-11571/notice-of-availability-of-designation-of-chinese-military-companies)
  - Exact listed names of the target companies:
    - "Tencent Holdings Limited (Tencent)"
    - "Alibaba Group Holding Limited (Alibaba)"
    - "Baidu, Inc. (Baidu)"
    - "Huawei Investment & Holding Co., Ltd. (Huawei Holding)", with subsidiary Huawei Technologies Co., Ltd.
    - "SenseTime Group, Inc. (SenseTime)"
    - "Hangzhou Yushu Technology Co., Ltd. (Unitree)"
  - Also listed and relevant as AI or data-adjacent context: Inspur Group, Dawning/Sugon, CloudWalk, Yitu, Hikvision, Dahua, GTCOM (Global Tone Communication Technology), Qihoo 360, Knownsec, BGI Group, MGI, Novogene, WuXi AppTec (since removed), BYD, CATL, Hesai, RoboSense, DJI, Quectel and NIO.
  - **Not on the list:** ByteDance, Ant Group, iFlytek, Moonshot, MiniMax, StepFun, DeepSeek, Zhipu, Baichuan, Kuaishou, Meituan, Xiaomi, JD.com, NetEase, Haitian Ruisheng, Datatang and Shengshu.
- **January 2025 notice (FR Doc. 2025-00070).** Signed 2 Jan 2025, with 133 main entries. Tencent, Huawei, SenseTime, Inspur, CloudWalk, Yitu, Hikvision, Dahua, Qihoo 360, GTCOM and others were already listed. **Alibaba, Baidu, Unitree, BYD and WuXi AppTec were not**, so they are June 2026 additions. Megvii appears only in that notice's removal list. **[primary]** [Federal Register 2025-00070](https://www.federalregister.gov/documents/2025/01/07/2025-00070/notice-of-availability-of-designation-of-chinese-military-companies)
- **10 November 2026 removal (FR Doc. 2026-22840).** WuXi AppTec was removed from the 10 June 2026 list, signed 5 Nov 2026. The removal complies with an **7 Aug 2026 preliminary injunction from the U.S. District Court for D.C.** It is "without prejudice to relisting." The notice is issued by the "Deputy Secretary of War." **[primary]** [Federal Register 2026-22840](https://www.federalregister.gov/documents/2026/11/10/2026-22840/notice-of-removal-of-designated-chinese-military-company)
- **Lobbying to add DeepSeek and Xiaomi.** Nine Republican lawmakers reportedly asked the Defense Secretary to add DeepSeek, Xiaomi and WuXi AppTec to 1260H. As of the 10 Nov 2026 Federal Register, neither DeepSeek nor Xiaomi has been added. **[snippet]** [NTD](https://www.ntd.com/pentagon-pressed-to-add-to-china-blacklist-as-ndaa-shifts-focus-to-private-capital_1125516.html)
- **The official PDF is still not fetchable.** The media.defense.gov PDF of the list returned 403 again. The Federal Register full text above substitutes for it. [defense.gov PDF](https://media.defense.gov/2026/Jun/08/2003945537/-1/-1/1/ENTITIES-IDENTIFIED-AS-CHINESE-MILITARY-COMPANIES-OPERATING-IN-THE-UNITED-STATES-IN-ACCORDANCE-WITH-SECTION-1260H.PDF)
- **Related US list: OFAC NS-CMIC (Treasury, EO 14032), via the OpenSanctions mirror of OFAC's non-SDN consolidated list (source updated 4 Nov 2026).** **[primary-mirror]** [OpenSanctions us_ofac_cons](https://www.opensanctions.org/datasets/us_ofac_cons/); [OFAC NS-CMIC list](https://ofac.treasury.gov/consolidated-sanctions-list-non-sdn-lists/ns-cmic-list)
  - Listed: SenseTime Group Limited, Huawei Investment & Holding / Huawei Technologies, Inspur Group, Megvii, CloudWalk, Yitu and Hikvision.
  - Not listed: ByteDance, Tencent, Alibaba, Baidu, Ant, iFlytek, Unitree, Moonshot, MiniMax, StepFun, DeepSeek, Zhipu, Baichuan, Kuaishou, Meituan, Xiaomi, JD, NetEase, Datatang, Haitian Ruisheng and Shengshu.

**Status table (1260H, Federal Register as of 10 Nov 2026):**

| Company | 1260H status | Since |
|---|---|---|
| Tencent | listed | Jan 2025, re-designated Jun 2026 |
| Alibaba Group | listed | Jun 2026 |
| Baidu | listed | Jun 2026 |
| Huawei (Holding + Technologies) | listed | before 2025, re-designated 2025 and 2026 |
| SenseTime | listed | before 2025, re-designated 2025 and 2026 |
| Unitree (Hangzhou Yushu) | listed | Jun 2026 |
| ByteDance, Ant Group, iFlytek, Moonshot, MiniMax, StepFun, DeepSeek, Zhipu, Baichuan, Kuaishou, Meituan, Xiaomi, JD, NetEase, Haitian Ruisheng, Datatang, Shengshu | not listed | n/a |

### Inferences
- Round 1 reported "Tencent listed Jan 2025; Alibaba and Baidu since Jun 2026; Unitree Jun 2026; iFlytek not listed." That is **confirmed by primary sources**. "iFlytek not on 1260H" no longer rests on a secondary source.
- The WuXi AppTec court-ordered delisting shows that 1260H designations can be challenged in court. Alibaba's dispute (round 1) is therefore not hopeless. This is an assessment; no Alibaba litigation was checked.
- 1260H itself prohibits nothing for an EU company. Its effects are on US DoD procurement and contractors (see Q4).

### Gaps
- The defense.gov list PDF and DoD press release were not readable (403).
- Whether Alibaba or Tencent has sued over 1260H status was not checked.
- The exact total count of entities including subsidiaries in the June 2026 notice was counted from the full text by a summarizer at about 187 names (80 parents plus about 107 subsidiaries). This is consistent with the commonly cited "188" but not independently re-counted.

---

## Q2. BIS Entity List status (eCFR, 15 CFR Part 744, Supplement No. 4)

### Takeaway
On the Entity List as amended through **9 Nov 2026**:
- **Listed:** Zhipu (7 entities, Jan 2025), BAAI (Mar 2025), iFlytek and SenseTime (both Oct 2019), Megvii, Yitu, CloudWalk, Inspur and Sugon, plus many Huawei entities.
- **Not listed:** ByteDance, Tencent, Alibaba, Baidu, Ant Group, Unitree, Moonshot, MiniMax, StepFun, DeepSeek, Baichuan, Kuaishou, Meituan, Xiaomi, JD, NetEase, Haitian Ruisheng, Datatang and Shengshu.

The 2025 "affiliates rule" extends Entity List restrictions to entities 50%-owned by listed parties. It remains **stayed until 10 Jan 2027**.

### Cited Findings
- **eCFR version history.** Supplement No. 4 to Part 744 was amended on 16 Jul 2026, 24 Aug 2026 and **9 Nov 2026** (latest). The text below is the version current on 9 Nov 2026. **[primary]** [eCFR versioner API](https://www.ecfr.gov/api/versioner/v1/versions/title-15.json?part=744); [eCFR Supplement No. 4 to Part 744](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Zhipu: 7 entities listed.** All carry presumption of denial and cite **90 FR 4619, 1/16/25**. **[primary]** [eCFR Entity List](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
  - Beijing Zhipu Huazhang Technology Co., Ltd. (a.k.a. "Zhipu AI"; "Beijing Knowledge Atlas Technology Co., Ltd.")
  - Beijing Zhipu Future
  - Beijing Zhipu Linghang
  - Beijing Zhipu Qingyan
  - Hangzhou Zhipu Huazhang
  - Shanghai Zhipu Huanyu
  - Shenzhen Zhipu Future
- **BAAI.** Listed as "Beijing Academy of Artificial Intelligence, a.k.a. BAAI; Zhiyuan Research Institute…". The entry covers all items subject to the EAR with presumption of denial, citing **90 FR 14048, 3/28/25**. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **iFlytek.** Listed as "IFLYTEK, … Hefei City, Anhui". The entry imposes a license requirement for all items subject to the EAR, with case-by-case review for certain ECCNs and presumption of denial for others. It cites **84 FR 54004, 10/9/19**, 85 FR 44159 and 87 FR 62202. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **SenseTime.** Listed as "Beijing Sensetime Technology Development Co., Ltd., a.k.a. Beijing Shangtang…; Sense Time", citing **84 FR 54004, 10/9/19** and later amendments. Megvii, Yitu (both Oct 2019 wave) and CloudWalk (85 FR 34497, 6/5/20) are also listed. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Inspur.** Inspur Group Co., Ltd. is listed (88 FR 13675, 3/6/23), along with Inspur (Beijing) Electronic Information Industry, Inspur (HK) Electronics (90 FR 14048, 3/28/25), Inspur Software and others. Sugon/Dawning is also listed. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Huawei.** The string "Huawei Technologies" occurs 49 times across Huawei entries in many countries, for example Huawei Technologies Co., Ltd. in Chengdu, citing 84 FR 22963, 5/21/19 and the foreign direct product rule in § 734.9(e). **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Not found by name in the current Entity List text:** ByteDance, Tencent, Alibaba, Baidu, Ant Group, Unitree/Yushu, Moonshot, MiniMax, StepFun, DeepSeek, Baichuan, Kuaishou, Meituan, Xiaomi, JD.com, NetEase, Haitian Ruisheng, Datatang and Shengshu. One string match on "Ant Group" was a false positive inside "Radiant Group". **[primary, own text search of the eCFR XML]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Affiliates (50%) rule stayed.** The editorial note in eCFR reads: "At 90 FR 50857, Nov. 12, 2025 … the introductory text was stayed, effective until Nov. 9, 2026. At **91 FR 70789, Nov. 9, 2026**, the introductory text was further stayed until **Jan. 10, 2027**." The stayed introductory text extends Entity List restrictions to foreign entities owned 50% or more by listed entities. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **2026 amendments touched no target company.** The only volume-91 (2026) citation visible in the China entries is an amendment to Arrow Electronics (Hong Kong), 91 FR 54659, 8/24/26. None of the target AI companies was added in 2026. **[primary]** [eCFR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-744/appendix-Supplement%20No.%204%20to%20Part%20744)
- **Practical reach for data services.** ChinaTalk (11 Nov 2026) says "RL environments are largely free from export controls aside from Entity-Listed buyers like Zhipu", and that an unlisted ex-China affiliate can sidestep this. This is an opinion piece. **[secondary]** [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- **EU sanctions cross-check.** None of the target companies (including Huawei, Inspur and SenseTime) appears on the **EU consolidated financial sanctions list (FSF)**. Search date: OpenSanctions export of 12 Nov 2026, source last changed 26 Oct 2026. Hits for "Alibaba", "Baidu" and "Ant Group" were false positives (e.g. "Ali BABAEI", "Combatant Group"). **[primary-mirror]** [OpenSanctions eu_fsf](https://www.opensanctions.org/datasets/eu_fsf/)

### Inferences
- The Entity List is a US export-control list for "items subject to the EAR". It does not prohibit an EU firm from contracting with Zhipu or BAAI as such. It becomes relevant if US-origin software, tools or technology (or US persons or entities) are part of the delivery. This is an assessment, not legal advice.
- Round 1 had iFlytek and SenseTime "US sanctions since Oct 2019" from Wikipedia. That is now **verified on eCFR**: both have been Entity-Listed since 9 Oct 2019 (84 FR 54004).
- The affiliates rule is stayed until 10 Jan 2027. Its possible entry into force after that date matters for subsidiaries of Zhipu, iFlytek, SenseTime and Inspur. Watch item.

### Gaps
- EU export-related entity lists outside the FSF were **not checked**, notably Annex IV of Council Regulation (EU) 833/2014, which lists Chinese firms supporting Russia's military.
- The BIS Consolidated Screening List (CSL) API was not queried. The Unverified List and MEU List were not checked separately.

---

## Q3. US distillation advisory (Sept 2026) and the Feb 2026 distillation allegations

### Takeaway
On **8 Sept 2026** the NSA, FBI and CISA released a joint Cybersecurity Advisory. It names **DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun and Z.AI (Zhipu)** as China-based AI companies conducting "industrial-scale" distillation of US frontier models (Claude, GPT, Gemini, Grok variants) since at least late 2024. The February 2026 allegations came from **OpenAI** (memo to the House China Select Committee, 12 Feb 2026, targeting DeepSeek) and **Anthropic** (blog post, 23 Feb 2026, targeting DeepSeek, Moonshot and MiniMax). As of Nov 2026 no sanctions or listings have followed. The only bill (H.R. 8283) is stuck after its committee vote, and China's MOFCOM rejects the claims.

### Cited Findings
- **The advisory.** A joint CSA by NSA, FBI and CISA dated 8 Sept 2026, with PDF filename "CSA_CHINA_BASED_AI_COMPANIES_MALICIOUS_DISTILLATION_AGAINST_US".
  - Named companies: **DeepSeek, Moonshot AI, Alibaba Group, MiniMax, StepFun, Z.AI**.
  - Targets: variants of Claude, GPT, Gemini and Grok, including GPT-5.5 and Claude Opus 4.8.
  - The agencies assess the activity likely occurred with the knowledge of the Chinese government.
  - Recommendations: identity verification, monitoring of anomalous enterprise-scale use, indicator sharing, output perturbation.
  - No sanctions or penalties are announced.
  - **[secondary, two outlets citing the PDF]** [Help Net Security, 9 Sep 2026](https://helpnetsecurity.com/2026/09/09/china-malicious-ai-knowledge-distillation-against-us-companies); [ExecutiveGov, 9 Sep 2026](https://www.executivegov.com/articles/nsa-fbi-cisa-warn-china-ai-distillation-attacks). The primary PDF and NSA release returned 403: [PDF](https://media.defense.gov/2026/Sep/08/2003992823/-1/-1/1/CSA_CHINA_BASED_AI_COMPANIES_MALICIOUS_DISTILLATION_AGAINST_US.PDF); [NSA press release](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4592113/nsa-and-others-warn-china-based-ai-companies-are-distilling-us-frontier-ai-mode/)
- **DeepSeek specifics.** CISA reportedly says DeepSeek's campaign ran since at least late 2024 and was used for R1 and V3. **[snippet]** [GovInfoSecurity](https://www.govinfosecurity.com/us-warns-chinese-ai-firms-are-illicitly-distilling-models-a-32773)
- **Feb 2026, OpenAI.** On **12 Feb 2026** OpenAI sent a memo to the House Select Committee on the CCP accusing DeepSeek of distilling US models. It says DeepSeek-linked accounts used obfuscated third-party routers and wrote code to pull outputs programmatically. DeepSeek did not respond. **[snippet]** [Bloomberg](https://www.bloomberg.com/news/articles/2026-02-12/openai-accuses-deepseek-of-distilling-us-models-to-gain-an-edge); [Rest of World](https://restofworld.org/2026/openai-deepseek-distillation-dispute-us-china/)
- **Feb 2026, Anthropic.** On **23 Feb 2026** Anthropic published "Detecting and preventing distillation attacks", naming **DeepSeek (>150,000 exchanges), Moonshot (>3.4 million) and MiniMax (>13 million)**. In total it reports more than 16 million exchanges through about 24,000 fraudulent accounts. Anthropic shares indicators with labs, cloud providers and "relevant authorities". A follow-up post, "Strengthening our defenses against distillation attacks", is dated 12 Oct 2026 (content not read). **[primary]** [Anthropic](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)
- **April 2026, White House.** OSTP head Michael Kratsios issued a memo vowing to identify and punish foreign, principally China-based, entities exploiting US models. It names no companies and specifies no penalties. **[secondary]** [AP via WTOP, 24 Apr 2026](https://wtop.com/business-finance/2026/04/trump-administration-vows-crackdown-on-chinese-companies-exploiting-ai-models-made-in-us/)
- **July 2026, Moonshot and Kimi K3.** Kratsios accused Moonshot on X of covert industrial distillation for Kimi K3 (released 16 Jul 2026). Treasury Secretary Bessent said "watermarks of our U.S. large language models" were found on Chinese models. No sanctions or listings were announced, and Moonshot did not answer TechCrunch. **[secondary]** [TechCrunch, 23 Jul 2026](https://techcrunch.com/2026/07/23/experts-say-exploiting-anthropics-fable-isnt-how-kimi-k3-got-so-good)
  - A Moonshot executive reportedly denied distilling and credited in-house architecture. This is a secondary account. **[snippet]** [Implicator](https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/)
  - No public MiniMax denial was found.
- **China's response.** On **27 Jul 2026** MOFCOM called the US claims lacking "any actual evidence … a double standard" and pledged "all measures necessary". No concrete countermeasure was named. **[secondary, translation]** [CSET translation](https://cset.georgetown.edu/publication/china-mofcom-statement-model-distillation/)
- **Legislation: H.R. 8283, "Deterring American AI Model Theft Act of 2026".** Introduced **15 Apr 2026**. The House Foreign Affairs Committee "Ordered to be Reported (Amended) by the Yeas and Nays: **43 - 0**" on **22 Apr 2026**. **No further action** appears in the congress.gov API as of 12 Nov 2026. **[primary]** [congress.gov](https://www.congress.gov/bill/119th-congress/house-bill/8283/all-actions)
  - Reported content: Commerce to assess model-extraction actors within 180 days, followed by Entity List or IEEPA sanctions decisions. **[snippet]** [Startup Fortune](https://startupfortune.com/congress-moves-to-make-ai-model-distillation-a-sanctionable-offense-as-chinese-labs-face-theft-accusations/)

### Inferences
- The six companies named by the US agencies are exactly the start-ups and Alibaba that round 1 identified as active data buyers. StepFun's inclusion, which round 1 had only from Wikipedia, is now confirmed by two independent trade-press reports of the advisory.
- These six are not on any US list for distillation yet. The reputational and "next listing" risk is concentrated on them, plus Alibaba, which is already on 1260H. This is an assessment.

### Gaps
- The advisory PDF itself could not be read (403), so the exact wording, the list of indicators, and any mention of data vendors or human-data supply are unverified.
- The content of Anthropic's 12 Oct 2026 follow-up post was not read.
- Whether the Treasury or Commerce sanctions threatened in July 2026 were ever operationalised: nothing was found in the Federal Register API query for 1260H, and no other search was run.

---

## Q4. NDAA FY2026/FY2027, 2026 bills on training-data sales, and the EU/German angle

### Takeaway
- **FY2026 NDAA (P.L. 119-60).**
  - Sec. 1532 bars DoD from covered AI of China and other covered nations, naming **DeepSeek and High Flyer**.
  - Sec. 6604 requires the intelligence community to remove **DeepSeek**.
  - No verified provision orders a review of US data companies' links to Moonshot, DeepSeek, MiniMax, Alibaba, Zhipu, ByteDance, Tencent and Baidu. That claim rests on a single secondary web article and conflicts with the CRS summary.
- **FY2027 NDAA (H.R. 8800).** Passed the House on 22 Jul 2026 (216–212). It is **not enacted**: the Senate bill failed cloture and there is no conference text as of 2 Nov 2026. Its China-AI provisions concern 1260H enforcement, procurement and humanoid robots, not training data.
- **No US law or bill restricting sales of training data or RL environments to Chinese labs was found.** Lawfare (Sept 2026) and ChinaTalk (Nov 2026) both say current law largely does not cover this, and propose new rules.
- **EU/Germany.** BAFA states that **China is not an arms-embargo country under Art. 4(1)(b) of Reg. (EU) 2021/821**, and no BAFA guidance specific to AI training data was found. SIPRI (Mar 2026) says applying dual-use "technology" controls to training data is "open to interpretation". None of the target companies is on the EU financial sanctions list.

### Cited Findings
**FY2026 NDAA (P.L. 119-60)**
- **Sec. 1532.** DoD may not use or acquire "covered AI systems", including those from **DeepSeek and High Flyer**, or from AI companies of covered nations (China, Russia, North Korea, Iran). Case-by-case waivers are possible for research and national-security uses. **[secondary, CRS]** [CRS IF13197 (updated 6 Jul 2026)](https://www.everycrsreport.com/reports/IF13197.html)
- **Sec. 6604.** The DNI must issue guidelines to remove "DeepSeek, or its successors" from IC systems. **[secondary, CRS]** [CRS IF13197](https://www.everycrsreport.com/reports/IF13197.html)
- **No training-data provision.** The CRS summary contains no provision on AI training data or data vendors, and no review of US companies' links to Chinese labs. Sec. 1512 on "data poisoning" is the closest match. **[secondary, CRS]** [CRS IF13197](https://www.everycrsreport.com/reports/IF13197.html)
- **Contrary single claim.** tech-insider.org says FY2026 NDAA language "opened a broader probe into corporate ties to a list of Chinese AI labs", namely Moonshot AI, DeepSeek, MiniMax, Alibaba, Zhipu AI, ByteDance, Tencent and Baidu, covering "partnerships, licensing arrangements, technical collaborations, and financial relationships". It gives no bill section, sponsor or deadline and cites a July 2026 Tech Times article. **Unverified and contradicted by the CRS summary.** **[secondary]** [tech-insider.org](https://tech-insider.org/us-data-companies-chinese-ai-pentagon-2026/)
- **Round-1 sourcing on Sec. 1532.** Round 1 (Holland & Knight) said Sec. 1532 applies to AI of 1260H-listed firms from 17 Jan 2026 and mentioned Alibaba and Baidu. CRS describes the scope via "covered nations" and names DeepSeek and High Flyer explicitly. **[secondary]** [Holland & Knight, Jul 2026](https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h)

**Congressional investigation (not NDAA)**
- On **29 Apr 2026** the House Homeland Security Committee and the Select Committee on China opened a joint investigation into US firms' use of PRC AI models.
  - Named Chinese companies: DeepSeek, Alibaba (Qwen), Moonshot AI, MiniMax.
  - Letters went to Airbnb and Anysphere (Cursor). A further letter to DoorDash on 31 Jul 2026 was seen via snippet only.
  - The investigation does not mention training-data vendors.
  - **[primary]** [House Homeland Security Committee](https://homeland.house.gov/2026/04/29/chairmen-garbarino-moolenaar-announce-joint-investigation-into-national-security-risks-posed-by-prc-ai-models/); [snippet: China Select Committee](https://chinaselectcommittee.house.gov/media/letters/chairmen-moolenaar-garbarino-announce-joint-investigation-into-airbnb-anysphere-and-the-national-security-risks-posed-by-chinese-ai-models)

**FY2027 NDAA (status 2 Nov 2026)**
- **Legislative status.** **[secondary, law firm]** [Reed Smith, 2 Nov 2026](https://www.reedsmith.com/our-insights/blogs/trade-compliance-resource-hub/5268/congress-returns-national-security-and-trade-provisions-to-watch-in-the-fy2027-ndaa/)
  - **H.R. 8800 passed the House on 22 Jul 2026 (216–212).** The Senate received it on 14 Sep 2026 but has not passed it.
  - The Senate bill **S. 4784 failed cloture on 14 Jul (50–46)**.
  - There is **no conference text**; a lame-duck deal is expected around the 11 Dec funding deadline.
- **Relevant provisions in the House text.**
  - Sec. 1522: guidance on "covered AI companies" and removing their AI from DoW systems.
  - Sec. 1526: IT contracts with firms operating in China require prior disclosure of vulnerabilities to DoW.
  - Sec. 813: insider-threat guidance for AI contractors.
  - Sec. 163: ban on adversary humanoid robots.
  - Sec. 240: CDAO to recommend export-control changes with BIS.
  - Sec. 1812: refer 1260H entities to the FASC for possible government-wide exclusion.
  - Secs. 1243/1244: extend 1260H to 2035.
- **What Reed Smith does not find.** No named Chinese AI labs, no training-data or data-vendor provision, no distillation provision.
- **Senate manager's amendment.** The AI Overwatch Act, the MATCH Act and the Chip Security Act would reportedly go into the Senate manager's amendment. These are chip and export-control bills, not data rules. **[snippet, Punchbowl via search]** [AI Weekly](https://aiweekly.co/alerts/beijing-rejects-us-ndaa-push-to-codify-three-chip-export-bills)

**Training data and RL environments sold to Chinese labs: current law and proposals**
- **Lawfare (8 Sep 2026).** Says "virtually no laws govern data providers' dealings with Chinese AI companies". The DOJ Data Security Program (28 CFR part 202, under EO 14117) excludes non-personal data.
  - Proposals, none enacted: extend the bulk-data rule to AI training data; a new IEEPA executive order on "covered AI development services".
  - It cites the Forbes estimate that the top six Chinese labs spend more than **USD 500M a year** with US data firms.
  - **[secondary]** [Lawfare](https://www.lawfaremedia.org/article/america-must-protect-its-training-data)
- **ChinaTalk (11 Nov 2026).** Says existing US rules mainly cover identifiable American data, medical data and bulk data.
  - Proposes BIS action on dual-use environments and DoW FAR/DFARS restrictions on contracted vendors. Neither is enacted.
  - Vendors that publicly refuse China business: Scale, micro1, fleet.
  - Vendors reported to sell to Chinese labs: Mercor, Surge, Turing, AfterQuery, Abundant, Pareto, DeccanAI, Eaglepoint and Invisible.
  - **[secondary]** [ChinaTalk](https://www.chinatalk.media/p/the-us-is-selling-rl-environments)
- **Remote Access Security Act.** Passed the House 369–22 on 12 Jan 2026. It extends export controls to cloud access, not to data. **[snippet]** [Introl](https://introl.com/blog/remote-access-security-act-cloud-loophole-export-controls-2026)

**EU and Germany**
- **BAFA China page.** "Die EU hat sich am 27.06.1989 für ein Waffenembargo gegen China ausgesprochen. Die Umsetzung erfolgt auf administrativer Ebene, d. h. es werden grundsätzlich keine Ausfuhrgenehmigungen für Güter des Teils I Abschnitt A der Ausfuhrliste erteilt. Zu beachten ist, dass China **kein Waffenembargoland im Sinne des Art. 4 Abs. 1b der Verordnung (EU) 2021/821** ist." **[primary]** [BAFA – Embargos – China](https://www.bafa.de/DE/Aussenwirtschaft/Ausfuhrkontrolle/Embargos/China/china_node.html)
- **No AI-specific BAFA guidance found.** No BAFA Merkblatt or guidance on AI training data was found. BAFA's general guidance includes the Merkblatt "Exportkontrolle und das BAFA" (10th ed., Nov 2024) and the ICP Merkblatt. **[snippet]** [IHK listing of BAFA Merkblätter](https://www.ihk.de/blueprint/servlet/resource/blob/4988564/d0b25b1212ce89f78d324369e57839fc/bafa-merkblatt-zur-exportkontrolle-data.pdf); [BAFA Ausfuhrkontrolle](https://www.bafa.de/DE/Aussenwirtschaft/Ausfuhrkontrolle/ausfuhrkontrolle_node.html)
- **SIPRI (25 Mar 2026).**
  - The Wassenaar definition of technical data "could thus conceivably include AI algorithms, training data and fully trained models", but applying it "is open to interpretation".
  - "Training data is not inherently enabling."
  - Technology controls apply only where "required" for controlled performance of a listed item.
  - Public-domain information and "basic scientific research" are generally exempt.
  - SIPRI proposes EU-level list additions for sensitive AI (e.g. facial recognition).
  - **[secondary, think tank]** [SIPRI](https://sipri.org/commentary/topical-backgrounder/2026/regulating-transfers-ai-algorithms-training-data-and-models-potential-and-limitations-export)
- **EU Dual-Use Regulation text.** Reg. (EU) 2021/821, Annex I, was amended with changes in force since Nov 2025. The regulation includes a catch-all for unlisted cyber-surveillance items. **[snippet]** [IHK Ulm](https://www.ihk.de/ulm/hauptnavigation/mitgliedsunternehmen/beraten-informieren/auslandsgeschaeft/export-und-importberatung/exportkontrolle/novelle-dual-use-vo-6689788). The primary text at [EUR-Lex 32021R0821](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021R0821) blocked automated access in this session.
- **EU financial sanctions.** None of the target companies is on the EU FSF (see Q2). **[primary-mirror]** [OpenSanctions eu_fsf](https://www.opensanctions.org/datasets/eu_fsf/)

### Inferences
These are facts plus assessment, not legal advice.
- For an EU supplier, no EU sanctions designation or 1260H-type list blocks contracts with the target labs.
- Export-control exposure under Reg. 2021/821 would arise only if a delivery qualifies as listed "technology" for a controlled item. Under BAFA's China statement, the Art. 4(1)(b) military catch-all does not apply automatically to China. Other catch-alls (Art. 4(1)(a)/(c), Art. 5) depend on end-use and notification.
- Expert medical, legal, finance and language data is far from typical Annex I items. The excluded cyber, defence and dual-use-bio work is where risk would concentrate. Assessment, consistent with SIPRI.
- The US policy direction is clear but not yet law: proposals by Lawfare and ChinaTalk, a stalled H.R. 8283, and an undecided FY2027 NDAA. The most likely near-term US instruments are a DOJ data-security extension, BIS "is-informed" letters, and DoW vendor clauses. Of these, only DoW vendor clauses would bite on an EU firm, and only if it has US defence contracts. Assessment.

### Gaps
- The enactment date of P.L. 119-60 and the exact text of Sec. 1532 were not re-read on congress.gov (API rate-limited).
- The final FY2027 NDAA text does not exist yet.
- The "NDAA review of ties to 8 Chinese labs" could not be traced to any bill section.
- The text of Reg. 2021/821 (Art. 2, 4, 5, 8) could not be fetched from EUR-Lex.
- No BAFA, EU Commission or German government guidance on AI training data or annotation services was found.
- Annex IV of Reg. 833/2014 was not checked.

---

## Q5. LinkedIn sweep (guest job API, run 12 Nov 2026)

### Takeaway
A direct sweep of LinkedIn's public guest job API covered 7 keywords × 7 locations: Singapore, Hong Kong, San Jose, Tokyo, Seoul, Dubai, Abu Dhabi. It returned **1,199 unique postings**. Only a handful are data-buying roles at Asian AI companies:
- The clearest is **ByteDance's "Partnership Development Analyst – AI Data and Safety" (Singapore, posted 31 Oct 2026, open)**. Its description says the team is "continuously sourcing high-quality data suppliers for foundation models" and handles supplier evaluation, negotiation and delivery.
- MBZUAI's **Institute of Foundation Models** is hiring a **Data & Eval Operations Program Manager** who owns "the full data budget" and is the "key interface between IFM and our data vendors".
- **No postings** were found from Moonshot, MiniMax, StepFun, DeepSeek, Zhipu, Baichuan, Baidu, Ant, Kuaishou, Meituan, Xiaomi, JD, NetEase, SenseTime or iFlytek in these locations.
- **"AI trainer German" returned no Asian-lab roles.**

### Cited Findings
All rows below were retrieved directly from LinkedIn's guest search API. The description and open status were checked via the guest jobPosting endpoint unless the row says "not fetched". Dates are LinkedIn's listed posting dates.

| Company | Title | Location | Posted | Status | Why relevant (from description) | URL |
|---|---|---|---|---|---|---|
| ByteDance (Seed) | Partnership Development Analyst – AI Data and Safety | Singapore | 2026-10-31 | open | "External Partnership Development Team is dedicated to continuously sourcing high-quality data suppliers for foundation models … from supplier sourcing and evaluation, commercial negotiations … to final delivery"; works with "leading data vendors" | [LinkedIn](https://sg.linkedin.com/jobs/view/partnership-development-analyst-ai-data-and-safety-at-bytedance-4485174465) |
| ByteDance (Procurement) | IT Software Category Procurement Manager | Singapore | 2026-11-02 | open | "search for, develop, and integrate IT industry supplier resources (software, hardware, **data service**, etc.)" | [LinkedIn](https://sg.linkedin.com/jobs/view/it-software-category-procurement-manager-at-bytedance-4485756724) |
| ByteDance (Procurement) | APAC Procurement Specialist | Tokyo | 2026-10-20 | open | PR-PO procurement for Japan/Korea, vendor onboarding (generic) | [LinkedIn](https://jp.linkedin.com/jobs/view/apac-procurement-specialist-at-bytedance-4480709465) |
| ByteDance | Senior Business Development Manager – Cloud Partnership | San Jose, CA | 2026-10-17 | not fetched | cloud partnership BD (title only; likely sell-side) | [LinkedIn](https://www.linkedin.com/jobs/view/senior-business-development-manager-cloud-partnership-at-bytedance-4479903075) |
| TikTok | TikTok LIVE – AI Data Operation Specialist (Arabic Speaking) | Singapore | 2026-10-22 | open | human labelling plus LLMs for moderation; "support the setup, onboarding, and training of new BPO teams" | [LinkedIn](https://sg.linkedin.com/jobs/view/tiktok-live-ai-data-operation-specialist-arabic-speaking-at-tiktok-4481611009) |
| TikTok | Training & Quality Specialist, DLO (SG) | Singapore | 2026-10-16 | open | quality audits for "annotation projects" | [LinkedIn](https://sg.linkedin.com/jobs/view/training-quality-specialist-dlo-sg-at-tiktok-4479625033) |
| TikTok | Machine Learning Engineer, Monetization Data Alignment | Singapore | 2026-10-26 | open | "demand for accurate, scalable, and efficient labeled data … is increasing rapidly" | [LinkedIn](https://sg.linkedin.com/jobs/view/machine-learning-engineer-monetization-data-alignment-at-tiktok-4483242486) |
| Tencent (Overseas Procurement Team) | Senior Procurement Manager | Singapore | 2026-10-15 | open | "procurement operation and commercial management of AI GPU / Cloud service / **AI model projects**" | [LinkedIn](https://sg.linkedin.com/jobs/view/senior-procurement-manager-at-tencent-4478844222) |
| Institute of Foundation Models (MBZUAI) | Data & Eval Operations Program Manager | Sunnyvale, CA (surfaced via San Jose query) | 2026-10-05 | open | "key interface between IFM and our data vendors"; "responsible for the full data budget"; works with Legal and Procurement on "new data partnerships and acquisitions" | [LinkedIn](https://www.linkedin.com/jobs/view/data-eval-operations-program-manager-at-institute-of-foundation-models-4476106232) |
| Institute of Foundation Models (MBZUAI) | AI Engineer – LLM Data | Abu Dhabi | 2026-09-28 | open | pre-, mid- and post-training data curation and synthesis (in-house) | [LinkedIn](https://ae.linkedin.com/jobs/view/ai-engineer-%E2%80%93-llm-data-at-institute-of-foundation-models-4472781196) |
| Core42 (G42) | Vendor Manager | Abu Dhabi | 2026-10-26 | open | owns supplier onboarding, "registration, qualification" and governance (generic, not AI-data-specific) | [LinkedIn](https://ae.linkedin.com/jobs/view/vendor-manager-at-core42-4483526733) |
| 42dot (Hyundai Motor Group) | LLM Engineer (Data Generation) | Seongnam, KR | 2026-09-22 | open | instruction, preference, reasoning and domain data; validation via "Human Feedback" | [LinkedIn](https://kr.linkedin.com/jobs/view/llm-engineer-data-generation-at-42dot-4436476007) |
| 42dot (Hyundai Motor Group) | Senior ML Engineer (AI Data) | Seongnam, KR | 2026-11-05 | not fetched | title only | [LinkedIn](https://kr.linkedin.com/jobs/view/senior-ml-engineer-ai-data-at-42dot-4442716945) |
| Fano Labs | AI Data Project Specialist (one-year contract) | Hong Kong | 2026-10-23 | open | delivers "data labelling and collection projects" and helps manage "part-time teams and vendors" | [LinkedIn](https://hk.linkedin.com/jobs/view/ai-data-project-specialist-one-year-contract-at-fano-fano-labs-4482850763) |
| CNTXT AI | Senior AI Engineer (Annotation and VLA) | Abu Dhabi | 2026-11-10 | open | teleoperation and egocentric robot data, annotation (robotics, embodied) | [LinkedIn](https://ae.linkedin.com/jobs/view/senior-ai-engineer-annotation-and-vla-at-cntxt-ai-4489463958) |
| Shopee (Sea) | LLM Algorithm Engineer (Post Training) | Singapore | 2026-10-19 | not fetched | post-training (indirect demand) | [LinkedIn](https://sg.linkedin.com/jobs/view/llm-algorithm-engineer-post-training-at-shopee-4479993974) |
| *Competitor:* Abaka AI | Data Acquisition | Mountain View, CA | 2026-10-19 | open | data vendor ("teams in Paris, Singapore, and Tokyo") expanding its raw-data supplier network; a competitor, not a buyer | [LinkedIn](https://www.linkedin.com/jobs/view/data-acquisition-at-abaka-ai-4478623881) |

- **Matched but not data-buying.** These Asian-company hits are sell-side or unrelated: Alibaba Cloud and Huawei Cloud "Partner Development Manager" (Hong Kong channel sales); Tencent Cloud Network Procurement Manager (Singapore, network); Rakuten procurement and "zh-HK Language Lead" (content, not AI); 42dot "Senior Business Development Manager (Data Business)" (sells vehicle data). Retrieved via [LinkedIn guest API](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=data%20partnership&location=Hong%20Kong).
- **German-language hits.** The only German-language hits were non-AI roles, such as sales representatives in Dubai and a game "German LQA Specialist" at Keywords Studios in Tokyo ([LinkedIn](https://jp.linkedin.com/jobs/view/german-lqa-specialist-at-keywords-studios-4468896775)). Western vendors (TELUS Digital, TaskUs, Centific, Welocalize) post annotator and linguist roles in these cities, which confirms vendor-mediated supply.
- **Corroboration of round 1.** The ByteDance Singapore partnership role found via the TCV mirror in round 1 is **live on LinkedIn**, with a new posting ID (4485174465) dated 31 Oct 2026. [LinkedIn](https://sg.linkedin.com/jobs/view/partnership-development-analyst-ai-data-and-safety-at-bytedance-4485174465); round 1: [TCV](https://portfoliojobs.tcv.com/companies/bytedance/jobs/65346076-partnership-development-analyst-ai-data-and-safety)

### Inferences
- **Singapore** remains the only location where a Chinese lab publicly advertises an **AI-data supplier-sourcing** role (ByteDance Seed). Tencent's Singapore "Overseas Procurement Team" buys "AI model projects", a plausible but unconfirmed channel for data services.
- **Abu Dhabi/IFM** is the clearest non-Chinese Asian buyer with a named data-vendor interface and budget owner. It fits round 1's view that Abu Dhabi is the "most open door".
- The Chinese start-ups (Moonshot, MiniMax, StepFun, DeepSeek, Zhipu) do not use LinkedIn for data-buying roles in these hubs. Their buying runs through Chinese portals and personal networks, as round 1 found.

### Gaps
- This sweep fetched at most 30 results (three pages of 10) per keyword × location query, ranked by LinkedIn relevance. Postings beyond that, or titled differently ("AI data BD", "数据商务"), may be missed.
- Beijing, Shanghai, Hangzhou and Shenzhen were not in scope.
- "Posted" dates are LinkedIn's listing dates; reposts can reset them.

---

## Q6. Conferences and fairs 2026–2027 where Asian data buyers meet vendors

### Takeaway
Official sites now resolve round 1's open points:
- **NeurIPS 2026:** main site **Sydney, 6–12 Dec 2026**, with satellites in **Atlanta and Paris (9–13 Dec)**. Paris is reachable for a European vendor.
- **ICLR 2027:** California, 26–30 Apr 2027, venue to be posted.
- **ICML 2027:** Riocentro, Rio de Janeiro, 31 Jul–6 Aug 2027.
- **CVPR 2027:** Seattle, 20–25 Jun 2027.
- **ACL 2027:** Kyoto, 17–22 Aug 2027.
- **GITEX AI Asia 2027:** Marina Bay Sands, 29–30 Apr 2027.
- **AI EXPO KOREA 2027:** COEX Hall A, 14–16 Apr 2027.
- **AI EXPO TOKYO spring:** Tokyo Big Sight, 21–23 Apr 2027.
- **WAIC 2027:** dates not yet announced.
- **Chinese data-annotation events:** no foreign-facing industry conference was found. Government-run pilot meetings (Oct 2026) and regional base events dominate.

### Cited Findings
| Event | Date | Venue | Source and status |
|---|---|---|---|
| NeurIPS 2026 | Main: 6–12 Dec 2026; satellites 9–13 Dec 2026 | **Sydney (main)**, **Atlanta (satellite)**, **Paris (satellite)** | **[primary]** [neurips.cc](https://neurips.cc/Conferences/2026), which says "This year NeurIPS will be held in Sydney, Atlanta, and Paris." Resolves round 1's Atlanta/Sydney conflict. |
| ICLR 2027 | 26–30 Apr 2027 | "California"; "Venue information will be posted here"; exhibitor portal opened 5 Nov 2026 | **[primary]** [iclr.cc](https://iclr.cc/Conferences/2027) |
| ICML 2027 | 31 Jul–6 Aug 2027 (31 Jul = Expo Day) | Riocentro, Rio de Janeiro, Brazil | **[primary]** [icml.cc](https://icml.cc/Conferences/2027) |
| CVPR 2027 | 20–25 Jun 2027 | Seattle, WA | **[primary]** [cvpr.thecvf.com](https://cvpr.thecvf.com/Conferences/2027) |
| ACL 2027 (65th) | 17–22 Aug 2027 | Kyoto, Japan; first call for papers published 29 Sep 2026 | **[primary]** [2027.aclweb.org](https://2027.aclweb.org/). Confirms round 1. |
| GITEX AI Asia 2027 | 29–30 Apr 2027 | Marina Bay Sands, Singapore | **[primary]** [gitexasia.com](https://gitexasia.com/) |
| AI EXPO KOREA 2027 (10th) | 14 (Wed)–16 (Fri) Apr 2027 | COEX Hall A, Seoul; organiser SeoulMESSE. The 2026 edition had 330 exhibitors from 18 countries and 48,678 visitors | **[primary]** [aiexpo.co.kr](https://www.aiexpo.co.kr/) |
| AI EXPO TOKYO (part of NexTech Week), spring 2027 | 21–23 Apr 2027 | Tokyo Big Sight | **[primary]** [nextech-week.jp](https://www.nextech-week.jp/spring/en-gb.html) |
| AI EXPO TOKYO (NexTech Week), autumn 2026 | 11–13 Nov 2026 (running now) | **Makuhari Messe**, not Tokyo Big Sight | **[primary]** [nextech-week.jp](https://www.nextech-week.jp/spring/en-gb.html). Corrects the venue implied in round 1. |
| WAIC 2027 | not announced. Official site still shows the 2026 dates (07.17–07.20); aggregators say "next date being updated". WAIC has been held in July (2025: 26–29 Jul; 2026: 17–20 Jul) | Shanghai | **[primary]** [worldaic.com.cn](https://www.worldaic.com.cn/); **[snippet]** [jufair](https://www.jufair.com/wiki/8865-8190-1-23524.html) |
| 2026 Yunqi (Apsara) Conference, Alibaba Cloud ecosystem | 22–24 Sep 2026 (past) | Hangzhou | **[secondary]** [Sina](https://news.sina.cn/sx/2026-09-29/detail-initnsef6083528.d.html) |
| 数据标注先行先试工作座谈会 (NDA data-annotation pilot symposium) | 27 Oct 2026 (past) | Beijing; organised by the National Data Administration | **[secondary]** [Xinhua Finance/cnfin](https://www.cnfin.com/hg-lb/detail/20261031/4489285_1.html). Next steps: a dataset "demand map", registration of annotated datasets in a national system, and a **sector-specific annotation expert network (行业标注专家网络)**. Verifies a round-1 snippet. |
| 2026物理AI与世界模型大会 and the founding of the 国家数据标注先行先试**苏皖**城市联盟 (Jiangsu–Anhui city alliance, 10 Yangtze-Delta cities incl. Nanjing and Wuhu) | 20 Oct 2026 (past) | Nanjing | **[secondary]** [Jiemian](https://m.jiemian.com/article/15211328.html). Verifies a round-1 snippet. |
| Chengdu National Data Annotation Base industry release conference | 9 Apr 2026 (past), about 200 attendees | Chengdu (Xinjin) | **[snippet]** [S&T Daily](https://www.stdaily.com/web/gdxw/2026-04/10/content_499898.html) |
| Shenyang data-annotation industry training conference (with CAICT), which released the 《全国数据标注产业图谱2026年》 | 6 Feb 2026 (past) | Shenyang | **[snippet]** [China.com](https://m.tech.china.com/digi/articles/20260211/202602111811801.html) |

- **Other 2027 China AI fairs (aggregator only).** AI Hangzhou 2027 is listed for 27–29 Apr 2027 and a Beijing AI fair for 26–28 Jun 2027. These are aggregator listings of uncertain reliability. **[snippet]** [jufair](https://www.jufair.com/i-ai/n-cn/m-2/)

### Inferences
- **NeurIPS Paris (9–13 Dec 2026)** is a low-cost first in-person touchpoint with Asian lab researchers for a European vendor. Sydney is the main site, where Chinese labs are likely to concentrate. Assessment.
- The April 2027 cluster is the main Asian trade-fair window: Korea AI EXPO (14–16 Apr), AI EXPO Tokyo (21–23 Apr), ICLR (26–30 Apr) and GITEX AI Asia Singapore (29–30 Apr). After that come CVPR Seattle (June), WAIC (July, TBC), ICML Rio (July/August) and ACL Kyoto (August).
- China's annotation-industry events are state-driven, domestic and aimed at building a domestic "sector annotation expert network". They are not sales venues for foreign suppliers. The expert-network plan signals that China intends to grow domestic expert supply. Assessment.

### Gaps
- WAIC 2027 dates are not announced.
- The ICLR 2027 exact venue is not announced.
- No 2027 national data-annotation industry conference with a confirmed date was found.
- Whether Chinese labs exhibit at GITEX AI Asia or Korea AI EXPO was not checked: the 2026 exhibitor lists were not parsed.

---

## Q7. Supplier and vendor registration portals (ByteDance, Tencent, Alibaba, and peers)

### Takeaway
This **corrects round 1**, which found no public portal:
- **ByteDance** runs a **Supplier Portal at supplier.bytedance.com**. It supports overseas companies, shows **invitation-email registration**, and has a "DATA 供应链 / Data supply chain" section.
- **Tencent** runs **"腾讯供应商门户" at supplier.tencent.com**. It offers both **自主注册 (self-registration) and 邀请注册 (invitation registration)**, handles foreign suppliers (IBAN, SWIFT, foreign registration numbers), and routes **overseas OU suppliers to a separate "海外SMS系统"**.
- **Ant Group** has supplier.antgroup.com.
- **No Alibaba Group procurement portal could be verified**: supplier.alibaba.com is the Alibaba.com seller site, and alibaba-inc.com hosts were unreachable.
- **No portal shows an explicit "data annotation" category.** Data services would plausibly fall under generic service or outsourcing categories. This is an assessment.

### Cited Findings
- **ByteDance Supplier Portal.** https://supplier.bytedance.com redirects to /supplier/home-page/, a JavaScript app built as "p2p-supplier-portal-fe". **[portal front-end inspected 12 Nov 2026]** [supplier.bytedance.com](https://supplier.bytedance.com/supplier/home-page/)
  - The UI strings include:
    - "Welcome to ByteDance Supplier Portal"
    - "ByteDance Supplier Portal User Guide – Registration.pdf"
    - "**You will receive an invitation email for registration.**"
    - "OVERSEAS_COMPANIES_INVOICE / Proforma invoice for overseas companies"
    - country selection, "Qualification Certificates" and "Supplier Performance Evaluation"
    - a portal section "**DATA 供应链 / Data supply chain**"
    - contact mailboxes gp-supplier@bytedance.com and scm-public@bytedance.com
  - The Business Partner Code of Conduct is hosted on the same domain. [code.pdf](https://supplier.bytedance.com/code.pdf)
- **ByteDance procurement hiring for data services.** ByteDance Procurement's Singapore job ad confirms it sources "data service" suppliers (see Q5). [LinkedIn](https://sg.linkedin.com/jobs/view/it-software-category-procurement-manager-at-bytedance-4485756724)
- **Tencent Supplier Portal ("腾讯供应商门户").** https://supplier.tencent.com is a JavaScript app. **[portal front-end inspected 12 Nov 2026]** [supplier.tencent.com](https://supplier.tencent.com/)
  - **Registration:** "请选择注册方式: 自主注册 / 邀请注册" (choose self-registration or invitation registration). Invited users enter an "邀请码" (invitation code) from an invitation email.
  - **Foreign suppliers:** fields for "境外唯一号", IBAN, BIC/SWIFT and "境外资质证明附件" (foreign qualification documents).
  - **Overseas route:** "**海外OU供应商准入请到海外SMS系统操作**" ("Use the overseas SMS system for overseas OU supplier admission").
  - **Cross-border data:** a privacy consent covers transfer of supplier data to overseas affiliates "如：Tencent America LLC".
  - **Categories:** the quotation template "其他服务类自定义报价模版" is used for "人力外包、认证等其他非营销类别" (labour outsourcing, certification and other non-marketing categories).
  - **Integrity:** a complaint and whistle-blowing function exists, and the 腾讯阳光行为准则 (Tencent Sunshine Code of Conduct) is referenced. The "阳光" term refers to this anti-corruption code, not to a separate "阳光采购" portal.
  - Tencent publishes a supplier privacy policy. [Tencent supplier privacy policy](https://www.tencent.com/en-us/supplier-privacy-policy.html)
- **Alibaba.** supplier.alibaba.com is the Alibaba.com international B2B **seller** site (阿里巴巴国际站), not Alibaba Group procurement. Probes of supplier.alibaba-inc.com and srm.alibaba-inc.com failed through the proxy (502), and sourcing.alibaba-inc.com reset the connection. A Chinese web search returned no Alibaba Group supplier portal. **[own probe + snippet]** [supplier.alibaba.com](https://supplier.alibaba.com/)
- **Ant Group.** supplier.antgroup.com is live. Strings include "廉政举报" (integrity reporting), "信息公告" (notices), "新手上路" (getting started). Registration mode and categories were not extracted. **[portal front-end inspected]** [supplier.antgroup.com](https://supplier.antgroup.com/)
- **Peers.** **[own probe]**
  - Kuaishou: supplier.kuaishou.com, titled "供应商管理系统" (supplier management system). [link](https://supplier.kuaishou.com/)
  - Meituan: supplier.meituan.com is "美团收银供应商云平台", a POS-hardware supplier cloud and not a general portal. [link](https://supplier.meituan.com/)
  - Baidu: supplier.baidu.com redirects to 百度爱采购, a B2B marketplace and not procurement. [link](https://supplier.baidu.com/)
  - JD and Xiaomi supplier hosts were unreachable (502).

### Inferences
- Both ByteDance and Tencent have formal supplier-onboarding infrastructure that **technically accommodates foreign entities**. ByteDance's front end points to **invitation-only** registration, so a sponsor is needed first, such as the Seed "AI Data and Safety" partnership team. Tencent allows **self-registration** in principle, but overseas suppliers go through a separate overseas system. These are assessments from front-end code, not documented procedures.
- Round 1's conclusion that entry is relationship-led still holds. The portal is the second step after a business owner invites or approves the supplier. Assessment.

### Gaps
- The registration PDFs (ByteDance "User Guide – Registration.pdf") and the URL of Tencent's "海外SMS系统" were not retrieved.
- No portal states its category taxonomy publicly, so whether "data annotation / AI training data" is a category is unknown.
- The Alibaba Group (including Qwen / Alibaba Cloud) procurement portal remains unverified.
- Eligibility rules for EU entities (required documents, local entity requirement) are not documented in any source found.
