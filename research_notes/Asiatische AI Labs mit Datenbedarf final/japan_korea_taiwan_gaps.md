# Japan, Korea and Taiwan: closing the gaps from round 1 (as of 12 Nov 2026)

How to read this note:
- **Scope.** This is round 2. It covers only what round 1 (`research_notes/Asiatische AI Labs mit Datenbedarf/korea_japan_taiwan.md`) left open. Facts already in round 1 are not repeated except where they are needed for context.
- **Budget used.** 30 of 30 web searches, plus about 40 direct fetches. The fetches covered NEDO and METI PDFs, Hugging Face model cards, HERP, Greenhouse, Upstage careers, and LinkedIn guest job APIs.
- **What did not work.** METI PDFs, wanted.co.kr and 104.com.tw were blocked (403 or JS challenge). Fujitsu returned 429, and the ai-ms.com and lpixel.net career pages returned 404.
- **Labels.**
  - "Snippet": the fact comes from a search-result summary and the original page was not opened.
  - "Assessment": my inference, not a sourced fact.
  - LinkedIn posting dates are shown relative to the fetch date of 12 Nov 2026. For example, "3 weeks ago" means about the second half of October 2026.

---

## Q1: Japanese companies not covered in round 1 (NTT, NEC, Fujitsu, ELYZA, Rakuten, LINE Yahoo, Kotoba, Ubitus, ABEJA, Stockmark, medical AI): data needs, vendors, multilingual needs, open roles

### Takeaway
None of these Japanese companies publicly documents buying expert annotation, using external annotation vendors, or needing European-language data in 2025–26. Their published model work is Japanese-first, mostly EN/JA bilingual, and built from data that is "owned or licensed" or synthetic.

The closest concrete data-labor signals are:
- ELYZA's paid on-site "data creation assistant" role for physical-AI motion data.
- Stockmark ML roles that build evaluation and training datasets.
- PFN's new Japanese finance model (SFT plus DPO).

The structural news is that NEC, Fujitsu, Rakuten, PFN, Sakana AI, KDDI Research and others are now shareholders or participants in Noetra (see Q2). Much of the large-scale Japanese foundation-model effort is therefore consolidating there.

Western annotation vendors are actively recruiting Japanese physicians and evaluators inside Japan. That points to demand for Japanese medical expertise from foreign labs, the reverse of PathWize's direction.

### Cited Findings

**NTT (tsuzumi 2)**
- NTT says tsuzumi 2 was built "from scratch using data that NTT owns or has the rights to use". The blog post (30 Mar 2026) names no external data vendors, annotators or partners. — [NTT blog, 30 Mar 2026](https://group.ntt/en/magazine/blog/tsuzumi2/)
- The **19 May 2026 update** adds two things:
  - Chart and table understanding: it processes business documents as images.
  - Stronger logical and numerical reasoning, prioritizing Japanese business documents. The examples given are credit-screening forms and technical flowcharts.
  - The release gives no training-data details and does not mention multilingual, medical or robotics plans.
  - Source: [NTT press release, 19 May 2026](https://group.ntt/en/newsrelease/2026/05/19/260519a.html)
- Snippet: tsuzumi 2 has 28.6B parameters and was trained on more than 10T tokens of a "carefully curated multilingual corpus" focused on Japanese. — [NeurIPS 2025 talk page](https://neurips.cc/virtual/2025/talk/127804) (2025, older)
- Snippet: NTT Data says tsuzumi 2 has broad knowledge of finance, municipal government and medicine. It has been offered on Microsoft Azure since 20 May 2026. — [NTT Data tsuzumi page](https://www.nttdata.com/jp/ja/lineup/tsuzumi); [NTT Data news, May 2026](https://www.nttdata.com/global/ja/news/topics/2026/052001)

**NEC (cotomi)**
- Snippet: NEC builds industry-specialized models using cotomi plus "独自のデータ加工・学習方法" (proprietary data processing and training methods). — [NEC cotomi page](https://jpn.nec.com/LLM/cotomi.html)
- Snippet: "cotomi Act" (announced Dec 2025, offered from Jan 2026) extracts business know-how automatically from daily operation logs, without manual teaching. This is an automation and insourcing signal, not a demand for human annotation. — [NEC press, 3 Dec 2025](https://jpn.nec.com/press/202512/20251203_01.html)
- Snippet: the "NEC cotomi Agent" went on sale on Microsoft Marketplace on 18 Aug 2026. — [NEC press, 18 Aug 2026](https://jpn.nec.com/press/202608/20260818_01.html)
- NEC is one of Noetra's four core members. It says it contributes end-to-end AI development and "high-quality physical data". — [Honda/Noetra release, 16 Jul 2026](https://global.honda/en/newsroom/news/2026/c260716eng.html)

**Fujitsu (Takane, with Cohere)**
- Snippet: Fujitsu announced a dedicated generative-AI platform built around Takane, developed jointly with Cohere. Features were to roll out from February, with official launch "anticipated in July 2026". The fetch returned 429, so the July launch and any retraining are unverified. — [Fujitsu PR, 26 Jan 2026](https://global.fujitsu/en-global/pr/news/2026/01/26-02)
- Takane is based on Cohere's Command R+ (2024 launch; older). — [Analytics India Mag](https://analyticsindiamag.com/ai-news-updates/fujitsu-and-cohere-partner-to-develop-japanese-ai-models-for-enterprises)
- Fujitsu is listed among Noetra's major participating companies. — [SoftBank press release, 16 Jul 2026](https://www.softbank.jp/en/corp/news/press/sbkk/2026/20260716_01)

**ELYZA (KDDI group)**
- ELYZA's HERP board lists 29 roles (fetched 12 Nov 2026; no posting dates shown). None asks for linguists, medical/legal/finance domain experts, multilingual work or data procurement. — [ELYZA HERP board](https://herp.careers/v1/elyza0)
- **"1F03.【インターンシップ】データ作成アシスタント / VLA・VLM開発"** (data creation assistant):
  - Duties: recording human body-motion data for physical AI, e.g. cutting food, stacking dice, placing everyday objects. "AIやプログラミングに関する専門知識は必要ありません" (no AI or programming expertise required).
  - Terms: ¥1,400/h (¥1,300/h during a 2-month trial), on-site in the Tokyo (Hongo) office, part-time, at least 3 days and 3+ h per day, native-level Japanese.
  - Source: [HERP posting](https://herp.careers/v1/elyza0/z0tSgE49jOim)
- Other data-adjacent ELYZA roles:
  - "1A06 リサーチエンジニア（LLM開発）": builds and operates evaluation systems. — [HERP](https://herp.careers/v1/elyza0/M3bWN79Ko60O)
  - "1F02 機械学習エンジニア（Embodied AI）" internship: dataset creation, preprocessing, and quality control for camera and sensor data. — [HERP](https://herp.careers/v1/elyza0/-isld9IiPn0p)
- KDDI's group links:
  - KDDI was a GENIAC robot-foundation-model adoptee (round 1 note).
  - "KDDI Research" is a Noetra participant. — [SoftBank press release](https://www.softbank.jp/en/corp/news/press/sbkk/2026/20260716_01)

**Rakuten (Rakuten AI 3.0 / 3.0.1)**
- Snippet: Rakuten AI 3.0 is a roughly 700B MoE developed under GENIAC with "Rakuten's high-quality, bilingual original data". It was released under Apache 2.0 on 17 Mar 2026. — [Rakuten press, 17 Mar 2026](https://global.rakuten.com/corp/news/press/2026/0317_01.html)
- **RakutenAI-3.0.1** (Hugging Face repo created 4 Nov 2026), from the model card:
  - Languages: ja and en.
  - Built by continual pre-training on DeepSeek-V3-0324.
  - Fine-tuning and evaluation used public safety datasets "among other annotated or synthetic data".
  - **"This model is NOT intended for, and is NOT made available to, users or entities residing within the European Union (EU) or the European Economic Area (EEA)."**
  - Source: [Hugging Face model card](https://huggingface.co/Rakuten/RakutenAI-3.0.1)
- Rakuten is a Noetra participant. — [SoftBank press release](https://www.softbank.jp/en/corp/news/press/sbkk/2026/20260716_01)
- LinkedIn (about 7 Nov 2026): "Senior Data Scientist – AI Agent Development Section (BSD)", Tokyo. This is an agent product role, not data procurement. — [LinkedIn](https://jp.linkedin.com/jobs/view/senior-data-scientist-ai-agent-development-section-business-support-development-department-bsd-at-rakuten-4453666893)

**LINE Yahoo**
- The only data-sourcing evidence is old: **30 Aug 2024**. About 2M rights-cleared images from amana images' "Qlean" were adopted for LINE Yahoo's in-house generative-AI training dataset. FastLabel is amana's partner for annotation, but the article does not say FastLabel labeled this dataset. — [ASCII.jp, 30 Aug 2024](https://ascii.jp/elem/000/004/218/4218728/)
- Snippet: the former generative-AI headquarters was merged into the corporate strategy division in October 2025. — [LY Corp story, 20 Feb 2026](https://www.lycorp.co.jp/ja/story/20260220/ai_policy.html)
- No 2026 annotation-outsourcing or data-buying evidence was found.

**Kotoba Technologies (speech)**
- Snippet: Kotoba raised a $10M seed round on 24 Jun 2026, led by Kindred Ventures, with Salesforce Ventures and Sony Innovation Fund participating. Its "Koto" speech models target Japanese, Korean and Chinese (speech-to-speech, speech-to-text, text-to-speech). — [Dealroom news, 24 Jun 2026](https://dealroom.co/news/135732-kotoba-technologies-raises-10m-seed-for-east-asian-voice-ai/); [Pulse 2.0](https://pulse2.com/kotoba-technologies-raises-10-million-seed-round-to-expand-real-time-voice-ai-platform/)
- Snippet: Koto was adopted for the Japanese version of Salesforce "Agentforce Voice" (Aug 2026). — [Renascence](https://www.renascence.io/news/21115/kotoba-koto-salesforce-agentforce-voice)
- No public data-procurement or annotation roles were found. The languages are East Asian, not European.

**Ubitus (Taiwanese company with a Japanese LLM)**
- Snippet: Ubitus built a 405B GENIAC model on Llama 3.1, optimized for Japanese, Traditional Chinese and English. Its academic partners are National Taiwan University and the University of Tokyo, and it deployed a tourism LLM in Maizuru (2025). — [Ubitus release (2025)](https://ubitus.ai/2025_meti-llm_en/)
- Snippet: in January 2026 Ubitus started an AI data center with Maizuru City and committed ¥17bn to an NVIDIA Blackwell GPU cloud. — [Business Wire, 28 Jan 2026](https://www.businesswire.com/news/home/20260128944842/en)
- The search found no information on its training corpus or data vendors.

**ABEJA**
- Snippet: ABEJA has taken part in GENIAC in four consecutive phases. Phase 4 covers a long-context small language model and AI agents. A June 2026 report says the phase-4 project is an AI agent for automotive maintenance. — [ABEJA news mirror, 4 Jun 2026](https://aeo.washinmura.jp/ai/abejainc-com/en/news/2026-06-04-abeja-%E7%B5%8C%E6%B8%88%E7%94%A3%E6%A5%AD%E7%9C%81%E3%81%A8nedo%E3%81%8C%E6%8E%A8%E9%80%B2%E3%81%99%E3%82%8B-%E3%83%9D%E3%82%B9%E3%83%885g%E6%83%85%E5%A0%B1%E9%80%9A%E4%BF%A1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%9F%BA%E7%9B%A4%E5%BC%B7%E5%8C%96%E7%A0%94); [GENIAC magazine](https://geniac.meti.go.jp/english/geniac_magazine/keyperson_6.html)
- No details on training data or vendors were found.

**Stockmark**
- Stockmark's HERP board lists 14 roles (fetched 12 Nov 2026). None is for annotation, multilingual work or chemistry/materials experts. — [Stockmark HERP](https://herp.careers/v1/stockmark)
- The main data-relevant role is "1200【Dev】機械学習エンジニア（Document AI・LLM/VLM）". It involves designing evaluation metrics, building evaluation and training datasets, and running a data flywheel from customer data. — [HERP posting](https://herp.careers/v1/stockmark/JoBJex6vB6Yn)

**Preferred Networks (added; not in brief)**
- **PLaMo-3-8B-Fin-Instruct** (Hugging Face repo created 8 Nov 2026) is a Japanese finance-domain model. It was built by continued pre-training on financial corpora, then SFT and DPO. — [Hugging Face](https://huggingface.co/pfnet/plamo-3-8b-fin-instruct)
- PFN also takes part in Noetra's R&D organization. — [Honda/Noetra release](https://global.honda/en/newsroom/news/2026/c260716eng.html)

**Medical AI (AI Medical Service, LPIXEL, Ubie)**
- Snippet (Ubie): Ubie led the healthcare sub-working group of Japan's AI Safety Institute (AISI). That group produced a "healthcare AI safety evaluation perspectives guide" (2026), which includes robustness to Japanese dialects, abbreviations and non-standard medical terms. — [Tokyo Foundation webinar deck, 16 Jun 2026](https://www.tkfd.or.jp/files/research/2026/%E8%97%A4%E7%94%B0PJ/0616%E3%82%A6%E3%82%A7%E3%83%93%E3%83%8A%E3%83%BC/20260616_AISI%E3%83%98%E3%83%AB%E3%82%B9%E3%82%B1%E3%82%A2SWG%E7%AD%96%E5%AE%9A%E3%80%8C%E3%83%98%E3%83%AB%E3%82%B9%E3%82%B1%E3%82%A2%E9%A0%98%E5%9F%9F%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8BAI%E3%82%BB%E3%83%BC%E3%83%95%E3%83%86%E3%82%A3%E8%A9%95%E4%BE%A1%E8%A6%B3%E7%82%B9%E3%82%AC%E3%82%A4%E3%83%89%E3%80%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%EF%BC%88Ubie%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%89_rev.pdf); [OECD Hiroshima AI reporting](https://oecd.ai/en/transparency/reports/118)
- Snippet (LPIXEL): its imaging AI "EIRL" had performed more than 12M clinical analyses as of June 2025. — [MedicalExpo profile](https://www.medicalexpo.it/soc/lpixel-inc-4591095.html)
- Snippet (AI Medical Service): its endoscopy AI "gastroAI-model G" was approved by Thailand's FDA on 26 Jun 2025 (older). — [Business Wire JA, 24 Jul 2025](https://www.businesswire.com/news/home/20250724666858/ja)
- No 2026 evidence was found of physician annotation outsourcing, external vendors or data-procurement roles at these three companies. Their career pages could not be read (404 at ai-ms.com/recruit and lpixel.net/recruit).

**Japan job-board scan (LinkedIn guest API, 12 Nov 2026)**

| Title | Company | Location | Posted (relative to 12 Nov 2026) | Relevance | URL |
|---|---|---|---|---|---|
| 【JAPAN AI】AI Evaluation Scientist / English | Geniee (JAPAN AI) | Tokyo | about 7 months ago (about Apr 2026) | benchmarks, eval sets (synthetic + real logs), human-eval agreement; Master's+ | [LinkedIn](https://jp.linkedin.com/jobs/view/%E3%80%90japan-ai%E3%80%91ai-evaluation-scientist-english-at-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B8%EF%BD%B0%E3%83%8B%E3%83%BC-4400384619) |
| Member of Technical Staff – ML Scientist, Japanese Multimodal | Liquid AI (US lab) | Tokyo | about 2 weeks ago | "Build and curate high-quality training data using human, synthetic, and model-generated signals" | [LinkedIn](https://jp.linkedin.com/jobs/view/member-of-technical-staff-ml-scientist-japanese-multimodal-at-liquid-ai-4446444386) |
| Japanese Voice AI Evaluator (Healthcare Conversations) | Alignerr (vendor) | Tokyo / Osaka | about 2 days ago | vendor sourcing Japanese healthcare evaluators | [LinkedIn](https://jp.linkedin.com/jobs/view/japanese-voice-ai-evaluator-healthcare-conversations-at-alignerr-4489199513) |
| Medical Doctor \| Remote | Crossing Hurdles (recruiter) | Japan | about 1 week ago | remote physician work (AI-training context likely, not verified) | [LinkedIn](https://jp.linkedin.com/jobs/view/medical-doctor-remote-at-crossing-hurdles-4478872199) |
| Annotator (AI Quality Specialist) | TELUS Digital (vendor) | Tokyo | about 3 weeks ago | vendor annotator | [LinkedIn](https://jp.linkedin.com/jobs/view/annotator-ai-quality-specialist-at-telus-digital-4482414253) |
| LLM Post-Training Engineer | Ericsson | Yokohama | about 6 days ago | post-training, not data procurement | [LinkedIn](https://jp.linkedin.com/jobs/view/llm-post-training-engineer-at-ericsson-4486980248) |

### Inferences
- **Assessment: fit by company.**
  - NTT, NEC, Fujitsu: low as direct buyers. They stress owned or licensed data, log-based automation and enterprise RAG. Their frontier-model effort is now pooled in Noetra (see Q2).
  - Rakuten: low for the EU. RakutenAI-3.0.1 explicitly excludes EU/EEA users, which signals EU-regulatory avoidance, not European-data demand.
  - PFN: medium for finance. PLaMo-3-Fin shows an active finance-domain post-training line (SFT/DPO), but it is Japanese-language.
  - ELYZA: medium-low, and only for physical AI. It hires low-skill motion-data workers on-site, which is not a Tier-1 expert profile.
  - Medical AI (Ubie, LPIXEL, AI Medical Service): low visibility. Ubie's AISI role on evaluation guidelines could make it an entry point for "Western clinical safety evaluation" pitches. This is speculative.
- **Assessment: market-structure signal.** Alignerr, TELUS, Crossing Hurdles and others are recruiting Japanese doctors and evaluators in Japan. The data flow is Japanese experts serving mainly foreign labs. PathWize would face these vendors if it tried to supply Japanese-language medical work, and should not.

### Gaps
- Fujitsu Takane: neither the 2026 training data nor the July 2026 launch status was verified (429 on fetch).
- No career pages were read for NTT, NEC, LINE Yahoo, Kotoba, ABEJA, Ubie, LPIXEL or AI Medical Service. Search-budget limits and 404s prevented it.
- No 2026 source on external annotation vendors used by any of these firms. This is not proof that none are used.
- KDDI's ownership of ELYZA was taken from the brief, not re-verified in this round.

---

## Q2: Identity of "Noetra" vs "Japan AI Foundation Model Development"; members, budget, data plans, procurement route, ~40 members, foreign participation

### Takeaway
They are the **same entity**. NEDO's official selection list names the awardee as "Noetra 株式会社（旧名：株式会社日本ＡＩ基盤モデル開発）", i.e. Noetra Inc., formerly Japan AI Foundation Model Development Co., Ltd.

Key facts:
- Noetra and AIST were selected on 30 Jun 2026 from 15 applications. The NEDO project runs FY2026–2030, with a FY2026 cap of ¥383.4bn per proposal.
- By 16 Jul 2026 it had **44 investing companies and organizations**, all Japanese apart from NVIDIA's role as infrastructure collaborator.
- Its data strategy centers on **Japanese industrial "field data"**, kept domestic. GENIAC data-ecosystem projects are required to supply their datasets to it.
- No open membership call or foreign-investor route was found.
- The only formal international door is the AIST-run "探究枠" (exploration track), which may involve overseas research institutions.

### Cited Findings
- **Name identity (primary).** NEDO's adoption list for "AIロボット・フィジカルAIを見据えたマルチモーダル基盤モデル開発事業" names "Noetra 株式会社（旧名：株式会社日本ＡＩ基盤モデル開発）" and "国立研究開発法人産業技術総合研究所" (AIST). — [NEDO 資料1 PDF](https://www.nedo.go.jp/content/800057515.pdf)
- **Selection.** Decided 30 Jun 2026 after reviewing 15 applications.
  - Project code P26013, period FY2026–2030.
  - Contracts cover FY2026–27 only, with annual stage-gate reviews after that.
  - Eligible applicants: "企業（団体等を含む）、大学等". Contact: AI・ロボット部.
  - Source: [NEDO decision page CD3_100431](https://www.nedo.go.jp/koubo/CD3_100431.html)
- **Call terms** (published 24 Mar 2026, deadline 22 Apr 2026 via J-Grants, briefing in Japanese only):
  - Per-proposal FY2026 budget "原則として 3,834 億円以下" (¥383.4bn).
  - The proposal had to combine a **development track (開発枠)**, which builds the domestic model, with an **exploration track (探究枠)**. The exploration track does "先進的な AI 技術の開発やグローバルな調査等を、国内外の学術研究機関を含めて実施", i.e. advanced AI R&D and global surveys, carried out with domestic and overseas academic institutions.
  - The call also stresses "グローバル動向調査や戦略的な国際連携" (global trend surveys and strategic international collaboration).
  - Source: [NEDO call page CD2_100431](https://www.nedo.go.jp/koubo/CD2_100431.html); [公募要領 PDF](https://www.nedo.go.jp/content/800051828.pdf)
- **Awarded proposal summary.**
  - Noetra develops and provides the model (development track). AIST leads the exploration track "国内外の研究機関等と連携".
  - Staged outputs: a base model for Japanese understanding, reasoning and instruction following; then image/video/audio multimodal; then a "world foundation model" that recognizes physical space.
  - Trained weights are to be released "国内に" (domestically) during the project.
  - Rationale: Japan must use "産業の現場データを守りながら" (industrial field data, kept protected).
  - Source: [NEDO 資料3 PDF](https://www.nedo.go.jp/content/800057655.pdf)
- **Members, 16 Jul 2026.**
  - Core members and investors: Sony, SoftBank Corp., NEC, Honda. Investments came from **44 companies and organizations**.
  - The 42 named "major participating companies" include, among others: Asahi Kasei, Daiichi Sankyo, Daikin, Daiwa House, DMG Mori, FANUC, Fujitsu, Hitachi, JERA, JFE Steel, Kajima, Kawasaki Heavy, KDDI Research, Kobe Steel, Matsuo Institute, Mitsubishi Electric, Mitsui Sumitomo Insurance, Mizuho, MUFG, Murata, Nippon Steel, Nippon Life, Okuma, Oki, OMRON, Preferred Networks, Rakuten, **Sakana AI**, SG Holdings, Sharp, Shimadzu, SMBC, Sumitomo Life, Tokyo Electron, TOPPAN, Toshiba, Yaskawa and Yamazaki Mazak.
  - The R&D organization is staffed by engineers seconded from members, AIST and PFN.
  - Source: [SoftBank press release, 16 Jul 2026](https://www.softbank.jp/en/corp/news/press/sbkk/2026/20260716_01); [Honda release, 16 Jul 2026](https://global.honda/en/newsroom/news/2026/c260716eng.html)
- **Roadmap and compute.**
  - From FY2026: a reasoning model for agents and NLP (Japanese understanding, reasoning, instruction following).
  - FY2028: an omni-modal model.
  - FY2030: "Real-world Native AI".
  - Its own cluster of about 27,500 NVIDIA Rubin GPUs is planned: construction from April 2027, operation from June 2028.
  - The releases give no details on data sources, collection methods or data partners, beyond Japanese industrial data and "high-quality physical data" (NEC).
  - Source: [SoftBank press release](https://www.softbank.jp/en/corp/news/press/sbkk/2026/20260716_01); [Honda release](https://global.honda/en/newsroom/news/2026/c260716eng.html)
- **Founding details (secondary).** These are not confirmed by primary documents.
  - Founded 12 Apr 2026 in Shibuya.
  - The four core firms each hold "roughly 10-plus percent"; the three megabanks, Nippon Steel and Kobe Steel are additional investors.
  - About 100 AI engineers; a trillion-parameter target; PFN as architecture partner.
  - Data strategy: non-public Japanese industrial data such as factory operation logs, inspection images and sensor time series, which are costly to anonymize and clean.
  - Source: [lilting channel, 12 Apr 2026](https://lilting.ch/articles/japan-ai-foundation-model-development-company)
- **Recruiting the "~40 members"** (snippet; originals not opened):
  - April–May reports said the company would seek investment from about 30 more companies, mainly manufacturers; Asahi Kasei, Fujitsu and Yaskawa were said to be considering it.
  - July reports said 40+ domestic companies across electronics, finance, construction and pharma would invest.
  - Toshiba announced it invested and seconds AI engineers.
  - Source: [Hokkaido Shimbun](https://www.hokkaido-np.co.jp/article/1338900/); [Kumamoto Nichinichi](https://kumanichi.com/articles/1979734); [OANDA lab](https://www.oanda.jp/lab-education/?p=117293)
  - Round 1 cited Asia Times (Jul 2026) for "about 40 further companies"; the 16 Jul release shows 44 investors. — [Asia Times](https://asiatimes.com/2026/07/japan-rallies-tech-giant-alliance-to-build-sovereign-ai/)
- **Data pipeline into Noetra.** The GENIAC data-ecosystem call makes adoptees supply their datasets to the multimodal-model project:
  - Requirement ⑧: "本事業で構築したデータセットについては、経済産業省・NEDO が今後実施する「ＡＩロボット・フィジカルＡＩを見据えたマルチモーダル基盤モデル開発事業」に対して提供すること" (datasets built must be provided to that project).
  - Data provision rules must bar entities "サイバーセキュリティの確保について外国の法的環境等により影響を受ける者" (whose cybersecurity is affected by a foreign legal environment).
  - Source: [NEDO GENIAC data-ecosystem 公募要領](https://www.nedo.go.jp/content/800052070.pdf)

### Inferences
- **Assessment: membership.** Noetra's equity is held by Japanese corporates and banks. No source mentions an open membership program or any foreign investor. A foreign data supplier is very unlikely to "join" Noetra. Realistic routes:
  - Commercial supply via Noetra's R&D organization once it starts buying data (no evidence yet).
  - Via a Japanese member, e.g. Sakana AI, PFN, Fujitsu or Rakuten.
  - Via AIST's exploration track, which explicitly allows overseas research institutions. This would mainly suit academic partners of PathWize experts.
- **Assessment: data fit.** The early workstream (FY2026–27) is a Japanese reasoning model. The data emphasis is domestic industrial field data under sovereignty rules. Fit for European-language or Western-expert data is low near-term. Possible exceptions are reasoning, evaluation or benchmark sets in STEM, law or finance where language-neutral expertise matters. That is speculative.

### Gaps
- No primary statement found of Noetra's data budget, data-procurement process or vendor policy.
- Equity percentages and capital were not confirmed by primary sources.
- No Noetra website or careers page was found.

---

## Q3: NEDO/GENIAC eligibility for foreign-registered companies and subcontractors; upcoming FY2027 calls

### Takeaway
The 2026 GENIAC calls (data ecosystem, robot foundation model) and the Noetra multimodal call all use the **same eligibility clause**. The lead applicant must be a **Japanese company or university with an R&D base in Japan**.

Foreign companies or universities **may participate** where their "special R&D capability, research facilities, or international standardization" makes collaboration necessary. Applications also require a **GビズID** (Japanese government business ID) via J-Grants.

Subsidy budgets allow **outsourcing (外注費)** and **commissioning or joint research (委託費・共同研究費)**. Commissioning plus joint research is capped below 50% of subsidized costs in the robot call.

No GENIAC call or call notice for October–November 2026 was found. The FY2027 budget request could not be read: METI pages are blocked.

### Cited Findings
- **Eligibility clause (identical in three calls):** "本邦の企業・大学等で日本国内に研究開発拠点を有していること。なお、国外の企業・大学等（研究機関を含む）の特別な研究開発能力、研究施設等の活用又は国際標準獲得の観点から国外の企業・大学等との連携が必要な場合は、国外の企業・大学等も参画する形で実施することができる。"
  - Translation: the applicant must be a Japanese company or university with an R&D base in Japan. Where collaboration with foreign companies or universities (including research institutes) is needed for their special R&D capability, research facilities, or international standardization, foreign entities may also take part.
  - Where it appears:
    - GENIAC data-ecosystem call (applications 25 Mar – 23 Apr 2026), requirement ⑤ — [NEDO PDF](https://www.nedo.go.jp/content/800052070.pdf)
    - GENIAC robot foundation model round 2 (18 May – 16 Jun 2026), requirement (6) — [NEDO PDF](https://www.nedo.go.jp/content/800055089.pdf)
    - Noetra multimodal call, requirement (7) — [NEDO PDF](https://www.nedo.go.jp/content/800051828.pdf)
- **Application channel.** J-Grants only. A "GビズID プライムアカウント／メンバーアカウント" is mandatory and "may take 2+ weeks" to obtain. — [NEDO data-ecosystem 公募要領](https://www.nedo.go.jp/content/800052070.pdf)
- **Subcontracting.**
  - Eligible cost categories include "その他経費（消耗品費、旅費、外注費、諸経費）" and "委託費・共同研究費".
  - Commissioning or joint research must be declared in the grant application and is "原則として補助対象費用の総額の50％未満" (in principle under 50% of total subsidized cost).
  - Source: [GENIAC robot call PDF](https://www.nedo.go.jp/content/800055089.pdf)
- **Data-sovereignty conditions.**
  - Robot call:
    - The data-collection base must be newly built **in Japan**, run for 3 years after the project, and shared fairly with other model developers.
    - Robots bought from overseas firms require security measures against data leakage.
    - Source: [GENIAC robot call PDF](https://www.nedo.go.jp/content/800055089.pdf)
  - Data-ecosystem call:
    - Datasets may not be provided to entities that fail to comply with Japanese law or international standards, or whose cybersecurity is affected by a foreign legal environment.
    - Datasets must be provided to the Noetra project.
    - Source: [NEDO PDF](https://www.nedo.go.jp/content/800052070.pdf)
- **Export control.** All calls include a section on 外為法 (Foreign Exchange and Foreign Trade Act) security export control for "海外への技術漏洩" (technology leakage abroad), including technology transfers to foreign researchers. — [NEDO PDF](https://www.nedo.go.jp/content/800052070.pdf)
- **Upcoming calls.**
  - Snippet: the January 2026 GENIAC call said the GX track for theme (g3) would be offered from "the next call (今秋以降, from this autumn onward)". — [METI GENIAC page, 27 Jan 2026](https://www.meti.go.jp/policy/mono_info_service/joho/post5g/20260127.html)
  - A search on 12 Nov 2026 found no NEDO GENIAC call or call notice for October or November 2026. The last robot round closed 16 Jun 2026, with a decision on 9 Sep 2026. — [NEDO CD3_100434](https://www.nedo.go.jp/koubo/CD3_100434.html); [NEDO robot call PDF](https://www.nedo.go.jp/content/800055089.pdf)
  - NEDO states call content may change with "予算案等の審議状況" (the state of budget deliberations). — [NEDO data-ecosystem PDF](https://www.nedo.go.jp/content/800052070.pdf)
  - Noetra's project is contracted only through FY2027, with stage gates each year. — [NEDO CD3_100431](https://www.nedo.go.jp/koubo/CD3_100431.html)

### Inferences
- **Assessment: eligibility.** A foreign-registered firm **cannot be the lead applicant**. It can enter in three ways:
  - (a) As a foreign participant in a consortium, justified by "special R&D capability". Expert medical, legal or multilingual evaluation could plausibly be argued as such, but NEDO's acceptance is untested.
  - (b) As a paid subcontractor under the lead's 外注費 or 委託費 lines.
  - (c) Through a Japanese subsidiary with a GビズID.
- **Assessment: sensitive data.** The sovereignty and export-control language means foreign annotators on sensitive Japanese industrial data (factory logs, robot data) face friction. Language-neutral expert tasks (STEM reasoning, evaluation rubrics, Western-domain benchmarks) are less exposed.
- **Assessment: timing.** Japan's fiscal year starts in April. If METI follows the 2026 pattern, FY2027 GENIAC calls would most likely appear from roughly January to May 2027. This is an extrapolation, not a sourced plan.

### Gaps
- METI's FY2027 budget request (概算要求) for GENIAC, post-5G and physical AI was not read (METI blocks fetches).
- No case was found of a foreign entity actually named in a GENIAC adoption list.
- No NEDO Q&A on foreign subcontractors was found.

---

## Q4: Korea not covered in round 1: Samsung, Konan, VUNO, NC AI, Lunit, LG/SKT/Upstage updates; status of the KRW 750bn 2027 data budget; job boards

### Takeaway
**2027 budget.** MSIT's 2027 request raises the "frontier-class AI data competitiveness" line from KRW 30bn (2026) to **KRW 800bn**:
- KRW 750bn for frontier-AI data and KRW 50bn for cybersecurity AI.
- The goal is to secure about **1 trillion tokens** of high-quality data.
- Delivery is by **equity ("출자") through KDB to "domestic AI companies"**. The operating model (SPC or not) is undecided, and MSIT promised a detailed plan later.

**Review status.** As of 12 Nov 2026 the Assembly's review was ongoing, with a 2 December statutory deadline and contested AI data lines. No committee outcome was found.

**Strongest new finding.** LG AI Research's K-EXAONE now **officially supports six European languages**: Spanish and German (Jan 2026), plus French, Italian, Polish and Portuguese in K-EXAONE 2.0 (July 2026). Samsung's Galaxy AI keeps adding European languages through its Poland R&D center.

**Others:**
- Upstage is hiring LLM evaluation and enterprise-data roles.
- SKT's A.X K2 data is about 73% English, about 15% Korean, and Spanish only about 1%.
- Konan has defense exposure.
- VUNO, Lunit and NC AI show no outsourcing signal.

### Cited Findings

**2027 frontier-AI data budget**
- 2027 request, as briefed by MSIT on 1 Sep 2026:
  - "프런티어급 AI 개발을 위한 데이터 경쟁력 강화 사업은 올해 300억원에서 내년 8000억원으로 대폭 확대된다", i.e. the frontier-class AI data competitiveness program grows sharply from KRW 30bn this year to KRW 800bn next year.
  - Goal: "약 1조 토큰 규모의 고품질 데이터를 확보" (secure about 1 trillion tokens of high-quality data).
  - Physical AI: a new data-collection and training center (KRW 40bn); core technology KRW 55bn (new); a logistics demonstration with Korea Post KRW 26bn.
  - MSIT will publish "세부 추진방안" (a detailed implementation plan) later.
  - Source: [Digital Daily, 2 Sep 2026](https://www.ddaily.co.kr/page/view/2026090214191699747)
- How the money would be delivered (snippet):
  - The 독파모 and frontier lines are merged into KRW 800bn: 750bn frontier data plus 50bn cyber-AI.
  - The 2026 grant of KRW 25bn becomes a 2027 equity contribution via KDB, which invests in domestic AI companies.
  - The program document lists the method as "출자" (equity contribution) and the implementers as "한국산업은행과 국내 AI기업" (KDB and domestic AI companies).
  - An opposition lawmaker called it a "KRW 750bn blank cheque".
  - Source: [fnnews, Oct 2026](https://www.fnnews.com/news/202610020951155119)
- MSIT's stance (29 Sep 2026):
  - "프런티어 AI 모델 개발을 추진하는 것은 맞지만, 세부적인 내용은 정해지지 않았다" (frontier AI model development is going ahead, but the details are not decided). An SPC was "여러 방안 중 하나" (one of several options).
  - 독파모 continues as scheduled. LG and Upstage were proceeding with stage-3 work.
  - Source: [Byline Network, 29 Sep 2026](https://byline.network/2026/09/0929-8/)
- Assembly status (snippet): the budget deadline is 2 Dec 2026. The main opposition party wants at least KRW 30tn in cuts, and the KRW 800bn AI-data support is a disputed item within the KRW 4.7tn frontier-AI program. — [Money Today, 4 Nov 2026](https://www.mt.co.kr/article/2026110423122682128)
- A search on 12 Nov 2026 for the science committee's preliminary-review outcome on this line found no report.

**LG AI Research (K-EXAONE)**
- **K-EXAONE** technical report (Jan 2026):
  - 236B MoE (23B active), covering Korean, English, **Spanish, German**, Japanese and Vietnamese.
  - New languages came from "high-quality web text" plus targeted cross-lingual **synthetic** corpora "to ensure a balanced knowledge distribution".
  - In-house **KGC-Safety** benchmark, multilingual including DE and ES.
  - For a coding benchmark, "human experts reviewed all queries and rubrics", with GPT-5 used as an LLM judge.
  - Source: [arXiv 2601.01739](https://arxiv.org/abs/2601.01739)
- **K-EXAONE 2.0** model card (repo created 29 Jul 2026): 750B-A37B. "We expanded multilingual coverage from six to ten languages: Korean, English, Spanish, German, Japanese, Vietnamese, **French, Italian, Polish, and Portuguese**". Apache 2.0 license. — [Hugging Face](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)
- LG also publishes pathology models ("EXAONE-Path-2.5"; "EXAONE-Path-2.0-rev-EGFR", updated 30 Oct 2026). — [Hugging Face LGAI-EXAONE org](https://huggingface.co/LGAI-EXAONE)

**SK Telecom (A.X K2)**
- Model card (repo created 28 Jul 2026):
  - 688B MoE, about **8.2T pre-training tokens**.
  - Stage-1 language mix: "English 72.7%, Korean 15.4%, code 8.3%, and Japanese, Spanish, and Chinese at roughly 1% each".
  - Korean web data comes from an in-house crawl (about 1.37T tokens) plus PDF parsing and synthetic data. Public sources are Nemotron-CC-v2.1 and FineWeb-2.
  - Listed languages: en, ko, zh, ja, es.
  - Source: [Hugging Face](https://huggingface.co/skt/A.X-K2)

**Upstage**
- Solar Open 2 (250B-A15B, repo created 22 Jul 2026): about 12T pre-training tokens; "Supported Languages: English, Korean, Japanese". — [Hugging Face](https://huggingface.co/upstage/Solar-Open2-250B)
- Careers page shows 48 open roles (fetched 12 Nov 2026; no posting dates). Data-relevant roles:
  - **"[독파모] AI Research Engineer – LLM Evaluation & Analysis"**: benchmarks for knowledge/reasoning, human-preference alignment and agents; "builds new evaluation data when needed"; analyzes language bias in **multilingual evaluation (Korean and Japanese)**; remote-friendly. — [Upstage careers](https://careers.upstage.ai/ko/o/217109)
  - **"AI Model Production – Enterprise Data"**: plans and oversees collection, cleaning and processing "including labeling"; writes processing guidelines and review criteria; owns data quality for enterprise customers. — [Upstage careers](https://careers.upstage.ai/ko/o/244225)
  - Index of all roles: [careers.upstage.ai](https://careers.upstage.ai/)

**Samsung**
- 14 Oct 2026: Galaxy AI features (Call Assist, Interpreter, Note Assist, Transcript Assist) added **Hungarian** and Malay, reaching 24 languages.
  - "Nudge" added Dutch, Filipino, Gujarati, Hungarian, Malay, **Romanian, Swedish**, Turkish.
  - Bixby added **Polish**, Thai and Vietnamese, reaching 12 languages.
  - Source: [9to5Google, 14 Oct 2026](https://9to5google.com/2026/10/14/galaxy-ai-language-expansion-2/)
- **Samsung R&D Institute Poland** (older: Jul 2024):
  - Works on ASR, machine translation and TTS; has worked on 30+ languages; contributed 10 languages to Galaxy AI.
  - Uses "a crowdsourcing platform"; data work described as "relentless data collection, annotation, and research".
  - Source: [Samsung Mobile Press, 4 Jul 2024](https://www.samsungmobilepress.com/feature-stories/the-learning-curve-part-8-collaboration-and-communication-across-european-borders-and-cultures)
- No 2026 information was found on Samsung Gauss training-data purchases.

**Konan Technology** (snippet)
- H1 2026: LLM revenue KRW 3.5bn (43.4% of sales). Backlog KRW 22.5bn, concentrated in public sector, law (Supreme Court, Ministry of Government Legislation), power utilities and **defense** (a "generative agentic AI" demonstration for a defense agency). — [Dealsite](https://dealsite.co.kr/articles/169083); [Digital Daily, 28 Mar 2026](https://www.ddaily.co.kr/page/view/2026032816212157440); [Konan IR page (Ministry of Government Legislation project)](https://m.irgo.co.kr/IR-COMP/402030/코난테크놀로지-IR-PAGE)
- No data-construction contracts or vendor use were found.

**VUNO** (snippet)
- Healthcare partner in Upstage's 독파모 consortium (Aug 2025; older). — [Medipharm Health](https://www.medipharmhealth.co.kr/mobile/article.html?no=109674)
- MOU with the Korean Academy of Tuberculosis and Respiratory Diseases (June 2026), including research with overseas data. — [Medifonews](https://medifonews.com/news/article.html?no=214329)
- No 2026 labeling-outsourcing information was found.

**Lunit**
- Snippet: Lunit passed stage 1 of a government "medical-science AI foundation model" program and entered nationwide stage-2 validation. The fetch returned 503. — [Dailypharm](https://dailypharm.com/user/news/337055)
- The careers page (fetched 12 Nov 2026) lists 5 roles: Seoul commercial ops, a senior PM and a senior SRE for cancer screening, a US professional-services role, and an NZ software engineer. **None** is annotation, clinical-data or data-partnership related. — [Lunit careers](https://www.lunit.io/en/company/careers)

**NC AI (VARCO)**
- VARCO Voice was named a good-practice case at ITU "AI for Good Global Summit 2026". Eight NC AI models were listed, including VARCO Translation. No data purchasing was mentioned. — [inews24, 8 Jul 2026](https://www.inews24.com/view/1983420)

**Korean job-board scan**
- wanted.co.kr search API returned 403. The scan used the LinkedIn guest API on 12 Nov 2026:

| Title | Company | Location | Posted (relative to 12 Nov 2026) | Relevance | URL |
|---|---|---|---|---|---|
| LLM Engineer (Data Generation) | 42dot (Hyundai Motor Group) | Seongnam | about 1 month ago | designs instruction/preference/reasoning/**domain-specific** data; synthetic pipelines; validation with LLM-judge, rules and **human feedback**; no vendors mentioned | [LinkedIn](https://kr.linkedin.com/jobs/view/llm-engineer-data-generation-at-42dot-4436476007) |
| Data Manager | Holiday Robotics | Seoul (Gangnam) | about 1 month ago | robot data collection; "manage the **vendors or annotators**"; in-house and external operators | [LinkedIn](https://kr.linkedin.com/jobs/view/data-manager-at-holiday-robotics-4470205809) |
| Robot Data & Evaluation Manager | Laplacian Robotics | Seoul | about 2 months ago | "외부 수집 파트너 및 수집 현장 오퍼레이션" (external collection partners and field operations); label QA; evaluation protocols | [LinkedIn](https://kr.linkedin.com/jobs/view/robot-data-evaluation-manager-at-laplacian-robotics-4461046593) |
| Data Operations AI Part Lead | MUSINSA | Seoul | about 1 week ago | e-commerce data ops | [LinkedIn](https://kr.linkedin.com/jobs/view/data-operations-ai-part-lead-at-musinsa-%EB%AC%B4%EC%8B%A0%EC%82%AC-4478369998) |
| AI Quality Evaluator – Korean (12-month contract) | Canva | Seoul | about 5 days ago | Korean evaluation, foreign buyer | [LinkedIn](https://kr.linkedin.com/jobs/view/ai-quality-evaluator-korean-12-month-contract-at-canva-4435044860) |
| Korean Linguistic Expert | TELUS Digital (vendor) | Seoul | 1–2 weeks ago | vendor-side | [LinkedIn](https://kr.linkedin.com/jobs/view/korean-linguistic-expert-at-telus-digital-4483796561) |

- Snippet: JobKorea's 2026 analysis puts the fastest-growing non-developer AI job categories as AI content creator (+405%) and AI planner (+363%). It gives no count for "AI trainer". — [Bizwatch, 16 Sep 2026](https://news.bizwatch.co.kr/special/2026/view/202609160006)

### Inferences
- **Assessment: the KRW 750bn line.** It is designed as **equity into domestic AI companies**, targeting about 1T tokens. That points to bulk corpus acquisition and licensing, and possibly equity in data-owning firms, rather than expert annotation.
  - Foreign firms are not the direct recipients ("국내 AI기업").
  - Whether recipients may then buy from foreign vendors is unknown. Equity-funded companies are probably not bound by the NIA call's Korean-nationality staffing rule from round 1, but this is unverified.
  - The earliest practical spending is H1–H2 2027, after the Assembly approves the budget (by 2 Dec 2026, unless delayed) and MSIT publishes its plan.
- **Assessment: LG AI Research is now the top Korean lead for PathWize's European-language offer.**
  - Six EU languages are supported officially.
  - Pre-training for the new languages relies on web text plus **synthetic** cross-lingual data, so native-expert evaluation, safety and SFT data in DE/FR/IT/PL/PT/ES is a plausible gap.
  - LG also has pathology models (EXAONE-Path), relevant to PathWize's medical experts.
- **Assessment: Samsung's European-language work runs largely through its R&D Institute Poland, an EU entity** that uses crowdsourcing for speech and translation data. A pitch for Tier-1 linguist or expert QA for Galaxy AI languages could go through Europe rather than Seoul. This is speculative; no 2026 buying evidence was found.
- **Assessment: Upstage** is hiring evaluation and data-quality staff in-house. Its supported languages are EN/KO/JA only, so fit is medium for evaluation and benchmarks and low for European languages.
- **Assessment: SKT** has a tiny Spanish share and no other European languages, so European-language fit is low.
- **Assessment: robotics** (PathWize's interest). Holiday Robotics and Laplacian explicitly manage external data vendors. Their data is on-site teleoperation in Seoul, which suits local operators, not remote European experts. Fit is low unless PathWize offers industrial-domain expert evaluation of task success.
- **Exclusion flags:** Konan Technology (defense projects); the KRW 50bn cyber-AI line (round 1).

### Gaps
- No outcome found of the National Assembly science committee's preliminary review, or of the budget committee's adjustment, for the KRW 750bn/800bn line as of 12 Nov 2026. No call timing beyond round 1's "December 2026 – February 2027" and no rules on foreign subcontractors were found.
- Samsung Gauss 2026 data sourcing: nothing found.
- NC AI: a search summary claimed that in 2026 NC AI won a physical-AI defense project with Hyundai Rotem for the Agency for Defense Development and a Hanwha Ocean welding-model contract. The fetched articles did not confirm this. It would be an exclusion flag if true.
- Lunit, VUNO: no outsourcing evidence. The Lunit foundation-model program article could not be fetched (503).
- Korean job boards Wanted, Saramin, JobKorea and Rocketpunch could not be searched directly (403 or no budget). The terms "데이터 구매", "데이터 파트너십", "LLM 데이터 소싱" and "외국어 데이터" were not checked on those boards.

---

## Q5: Taiwan: Foxconn FoxBrain, MediaTek Research Breeze, Academia Sinica, ASUS, Quanta, Pegatron, iKala, Appier

### Takeaway
Taiwanese AI work in 2026 remains **Traditional Chinese, Taiwanese Hokkien and Hakka-focused**, built heavily on synthetic and government or donated corpora. No vendor-sourced expert annotation, European-language need or data-procurement role was found at the named companies.

The visible data labor is:
- In-house automotive-AI annotators at Compal.
- Western vendors (TaskUs, DataAnnotation) recruiting Taiwanese AI trainers.

Appier's 65 openings include LLM roles but no annotation or procurement roles.

### Cited Findings
- **FoxBrain (Foxconn)**
  - 2025 (older), snippet: built on Llama 3.1 70B with about 98B Traditional Chinese pre-training tokens. — [R&D World](https://www.rdworldonline.com/foxconn-launches-foxbrain-ai-for-manufacturing-in-conventional-chinese/)
  - Jul 2025 (older), snippet: trained with RL "with data from experienced workers, machine parameters, and research findings". — [Digitimes, 21 Jul 2025](https://www.digitimes.com/news/a20250721PD203.html)
  - **Unverified**: a wiki page (updated 28 Oct 2026) says Foxconn started FoxBrain 2.0 on NVIDIA Nemotron in 2026 and is extending into multimodal and physical AI. — [aiwiki](https://aiwiki.ai/wiki/foxbrain/raw)
- **MediaTek Research ("MR Breeze 3", Feb/Mar 2026)** (snippet):
  - Breeze ASR 26: Whisper-based, trained on about 10,000 hours of **synthetic** Taiwanese Hokkien speech.
  - BreezyVoice 26: Taiwanese Hokkien TTS on CosyVoice2.
  - Breeze Guard 26: built on Breeze 2 8B with more than 12,000 Taiwan-risk-scenario training items (fraud, disinformation, discrimination, political manipulation).
  - Also released: Breeze Taigi Benchmark and TS-Bench.
  - Source: [CIO Taiwan](https://www.cio.com.tw/108084/); [Commercial Times, 4 Mar 2026](https://www.ctee.com.tw/news/20260304701327-430201); [GitHub MR-Models](https://github.com/mtkresearch/MR-Models)
  - The Hugging Face repo "Breeze-Guard-26" was created 17 Mar 2026. — [Hugging Face](https://huggingface.co/MediaTek-Research/Breeze-Guard-26)
- **MODA Sovereign AI corpus** (snippet; individual articles not opened):
  - About 20M tokens of Hakka added in July 2026.
  - Size: about 2.2bn tokens at end of August, about 3.3bn tokens by mid-October 2026.
  - First rights-holder consultation, by MODA, the Ministry of Culture and TIPO, held 16 Oct 2026.
  - No annotation-outsourcing tender was found.
  - Source: [iThome](https://www.ithome.com.tw/news/179931); [iThome](https://www.ithome.com.tw/news/178528); [CIO Taiwan](https://www.cio.com.tw/121677/)
- **Appier**
  - Greenhouse board, fetched 12 Nov 2026: 65 openings. LLM-related ones:
    - "(Senior) Machine Learning Scientist (LLM & Agents)", Taipei, updated 7 Oct 2026.
    - "(Senior) Machine Learning Scientist (Modeling & Evaluation)", Taipei, updated 7 Oct 2026: evaluation via "LLM-as-a-judge" and A/B tests; no annotation, human-eval vendors or language requirements.
    - "Research Scientist (Generative & Agentic AI)", Taipei and Tokyo.
  - EMEA sales roles are in Amsterdam, Berlin and London.
  - Source: [Appier Greenhouse – Modeling & Evaluation](https://job-boards.greenhouse.io/appier/jobs/8261020); [Appier LLM & Agents](https://job-boards.greenhouse.io/appier/jobs/6914984); [LinkedIn copy](https://tw.linkedin.com/jobs/view/senior-machine-learning-scientist-modeling-evaluation-at-appier-4476768398)
- **Taiwan job scan** (LinkedIn guest API, 12 Nov 2026):
  - "車電AI標記員(內湖) – TWPR01382" (automotive-electronics AI annotator), **Compal**, Taipei, about 1 week ago: in-house annotation. — [LinkedIn](https://tw.linkedin.com/jobs/view/%E8%BB%8A%E9%9B%BBai%E6%A8%99%E8%A8%98%E5%93%A1-%E5%85%A7%E6%B9%96-twpr01382-at-compal-4437375574)
  - "AI Data Annotator with Traditional Chinese (Taiwan)", **TaskUs**, about 1 month ago. — [LinkedIn](https://tw.linkedin.com/jobs/view/ai-data-annotator-with-traditional-chinese-taiwan-at-taskus-4452276130)
  - Multiple "AI Trainer" roles at **DataAnnotation** (translators, copyeditors, ESL tutors), 2–3 months ago. — [LinkedIn example](https://tw.linkedin.com/jobs/view/english-to-chinese-translator-ai-trainer-at-dataannotation-4449159163)
- 104.com.tw: the search API returned 403. CakeResume was not checked.
- **iKala, ASUS, Quanta, Pegatron, Academia Sinica:** no 2026 information found on data needs, annotation or vendors (search on 12 Nov 2026).

### Inferences
- **Assessment: Taiwan stays low priority for PathWize.** The language focus is local (zh-TW, Hokkien, Hakka). Data comes from synthetic generation, government open data and donated corpora. Appier evaluates by LLM-as-judge rather than human experts.
- **Assessment: one possible exception is FoxBrain/Foxconn's physical-AI push.** "Data from experienced workers" is analogous to Japan's tacit-knowledge projects. There is no evidence that it is sourced externally.

### Gaps
- FoxBrain 2.0 and its 2026 data sources are unverified; no Foxconn primary source was found.
- No information on Academia Sinica (CKIP and similar), ASUS, Quanta, Pegatron or iKala 2026 data activities.
- 104.com.tw and CakeResume were not scanned (403 or budget).

---

## Q6: Any Korean, Japanese or Taiwanese buyer explicitly seeking European-language or Western medical/legal/finance expert data

### Takeaway
No buyer **explicitly states** that it is seeking to purchase European-language or Western-expert data. The strongest documented **need signals** are:
1. **LG AI Research**: K-EXAONE 2.0 officially supports Spanish, German, French, Italian, Polish and Portuguese. The new languages were filled mainly with web text and synthetic cross-lingual data.
2. **Samsung**: Galaxy AI and Bixby keep adding European languages (Hungarian, Romanian, Swedish, Dutch, Polish in October 2026), with language work done at its Poland R&D institute using crowdsourcing.
3. **Noetra/AIST**: the NEDO call builds in overseas research collaboration through the exploration track.

The Japanese labs (Rakuten, Upstage Japan, Kotoba, NTT) remain EN/JA or East-Asian focused. Rakuten even geo-excludes the EU. No buyer asked for Western medical, legal or finance experts.

### Cited Findings
- LG K-EXAONE 2.0 supports "Korean, English, Spanish, German, Japanese, Vietnamese, French, Italian, Polish, and Portuguese" (repo created 29 Jul 2026). — [Hugging Face](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)
- K-EXAONE added German (and Japanese, Vietnamese) by incorporating "high-quality web text" plus "targeted data synthesis" to "propagate specialized knowledge and reasoning patterns across languages". It uses an in-house multilingual safety benchmark that includes DE and ES. — [arXiv 2601.01739](https://arxiv.org/abs/2601.01739)
- Samsung added Hungarian (Galaxy AI), Dutch, Romanian and Swedish (Nudge) and Polish (Bixby) on 14 Oct 2026. — [9to5Google](https://9to5google.com/2026/10/14/galaxy-ai-language-expansion-2/)
- Samsung R&D Institute Poland handled 10 Galaxy AI languages and uses a crowdsourcing platform (2024; older). — [Samsung Mobile Press](https://www.samsungmobilepress.com/feature-stories/the-learning-curve-part-8-collaboration-and-communication-across-european-borders-and-cultures)
- SKT A.X K2: Spanish about 1% of stage-1 data, no other European language. — [Hugging Face](https://huggingface.co/skt/A.X-K2)
- Upstage Solar Open 2: EN/KO/JA only. Its evaluation team studies KO/JA multilingual bias. — [Hugging Face](https://huggingface.co/upstage/Solar-Open2-250B); [Upstage careers](https://careers.upstage.ai/ko/o/217109)
- RakutenAI-3.0.1 is "NOT made available to users or entities residing within the EU/EEA". — [Hugging Face](https://huggingface.co/Rakuten/RakutenAI-3.0.1)
- Noetra/AIST's exploration track is to be run "国内外の学術研究機関を含めて" (including domestic and overseas academic research institutions). — [NEDO 公募要領](https://www.nedo.go.jp/content/800051828.pdf); [NEDO 資料3](https://www.nedo.go.jp/content/800057655.pdf)
- JAPAN AI (Geniee) advertised an "AI Evaluation Scientist / English" (about April 2026). This is English-language evaluation inside a Japanese firm, not European languages. — [LinkedIn](https://jp.linkedin.com/jobs/view/%E3%80%90japan-ai%E3%80%91ai-evaluation-scientist-english-at-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B8%EF%BD%B0%E3%83%8B%E3%83%BC-4400384619)
- Domain models are local: PFN's finance model is Japanese-only. — [Hugging Face](https://huggingface.co/pfnet/plamo-3-8b-fin-instruct)
- NTT tsuzumi 2's updates prioritize Japanese business documents. — [NTT, 19 May 2026](https://group.ntt/en/newsrelease/2026/05/19/260519a.html)

### Inferences
- **Assessment: European languages.** The clearest European-language opportunity in the region is LG AI Research. Each new EU language is backed by thin native data and synthetic fill. That creates a credible need for native-expert SFT, evaluation and safety data in DE/FR/IT/PL/PT/ES, and PathWize can supply this at Tier-1 level. Samsung (via Poland) is second.
- **Assessment: Western medical/legal/finance expertise.** Demand is **not documented** anywhere in Japan, Korea or Taiwan. It would need to be pitched as benchmark or evaluation work ("frontier-class" claims under Korea's 2027 program; LG EXAONE-Path for pathology) rather than answered as a stated need.

### Gaps
- No primary statement by LG, Samsung or any Japanese or Taiwanese lab that it buys European-language or Western-expert data from external vendors.
- No information on who supplied LG's European-language data or Samsung's 2026 language data.
