# Gap closure: Gulf, Singapore/SEA and India — demand for human/expert training data (as of 12 Nov 2026), seen from PathWize

Scope and method:
- This round fills gaps left by `research_notes/Asiatische AI Labs mit Datenbedarf/sea_india_gulf.md` and the "Golf, Singapur, Indien" section of the report. Facts already established there are not repeated (G42 Coupa portal, Inception–Scale, Falcon-H1's 18 languages, MEDIC, IFM's vendor-management role in Sunnyvale, Bayanat Labs, Etimad's basic rules, Bhashini/AIKosh).
- 24 WebSearch calls were used, under the 30-call cap. Most evidence comes from direct fetches:
  - **LinkedIn guest job API**: keyword × country queries, filtered to the past 90 days, fetched 12 Nov 2026. Dates are LinkedIn listing dates, which can reflect a re-post.
  - **MyCareersFuture public API** (Singapore).
  - **data.gov.sg GeBIZ dataset**: the full dataset, 18,464 records.
  - **Primary papers**: BiMediX2, ALLaM, Fanar, Falcon-H1 and Fathom-Vaidya PDFs, read in full text.
  - **Career sites**: TII (Phenom), M42 and HBKU.
  - **Vendor and IT-major pages.**
- Naukri (HTTP 406, "recaptcha required"), Bayt (403) and GulfTalent (403) were blocked, and so were HUMAIN's careers site (403 / proxy 502), ifm.ai (403) and inception42.ai/careers (403). These are listed under Gaps.
- Labels used below:
  - **[Assessment]**: my own inference.
  - **(search snippet)**: a source I saw only via search results, not opened.
  - **"verified on LinkedIn"**: the job text was fetched from LinkedIn's public job-posting endpoint, not from the employer's own site.

---

## Q1. MBZUAI BiMediX/BiMediX2 and MBZUAI medical AI; MBZUAI-IFM Paris

### Takeaway
MBZUAI's Arabic–English medical models were built mainly from machine-translated public data (GPT-4o) plus a small panel of doctors who verified samples. The BiMediX2 paper names 10 medical experts from three countries and clinical co-authors at Abu Dhabi hospitals. No external data vendor is named. Current MBZUAI and IFM job ads are for in-house data engineers and researchers, not clinician annotators. IFM Paris is a real hiring site, currently for speech/audio research, with human MOS evaluation as part of the work.

### Cited Findings

**BiMediX (v1)**
- *BiMediX: Bilingual Medical Mixture of Experts LLM* (arXiv Feb 2024; EMNLP Findings 2024 — older). It introduced BiMed1.3M: 1.3M Arabic–English instructions, 632M tokens, 250k synthesized doctor–patient chats, at a 1:2 Arabic:English ratio. The Arabic data came from a "semi-automated English-to-Arabic translation pipeline with human refinement". The abstract does not say who did the refinement. — [arXiv 2402.13253](https://arxiv.org/abs/2402.13253)

**BiMediX2 data**
- *BiMediX2* (arXiv Dec 2024, v2 Nov 2025; EMNLP Findings 2025). It is trained on BiMed-V (about 1.6M samples), built from PMC-OA, Rad-VQA, Path-VQA, SLAKE, LLaVA-Med 60K-IM and a custom portion. "English datasets were translated into Arabic using GPT-4o." The paper reports 163k Arabic samples. — [arXiv 2412.07769v2 (HTML)](https://arxiv.org/html/2412.07769v2)

**BiMediX2 clinician verification**
- Panel: "10 medical experts from three different countries". Specialties named are radiology (MD Radiology), endocrinology, neurosurgery, general practice, histopathology (MS Pathology) and general medicine. They checked a random subset as bilingual reviewers, with an adjudication protocol for disagreements. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)
- Error rates on BiMed-MBench: about 22% of samples needed minor corrections and about 5% needed major medical-term corrections. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)
- Blind clinician preference test (models anonymised as A/B/C; scored on clinical accuracy, relevance and clarity): BiMediX2 was preferred in 76.9% of cases. The number of cases and raters is not stated. The main benchmark scoring was done by GPT-4o, not by clinicians. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)
- The acknowledgements thank four doctors for verifying medical responses. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)

**BiMediX2 authors, vendors and funding**
- Clinical co-authors come from Sheikh Shakhbout Medical City (SSMC), Shaikh Tahnoon bin Mohammed Medical City / Tawam Hospital, and Govt Medical College Kozhikode (India). Everyone else is at MBZUAI. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)
- No annotation company or vendor is named. The acknowledged compute and funding come from LUMI, Berzelius, Meta, Google, NVIDIA and MBZUAI-WIS. — [arXiv 2412.07769v2](https://arxiv.org/html/2412.07769v2)

**MBZUAI medical AI in 2026**
- An April 2026 WAM/MBZUAI article describes an "AI Arabic Doctor" built on the BiMediX family from the team of the MBZUAI faculty lead behind BiMediX. It says BiMediX has more than 140,000 Hugging Face downloads (search snippet; the WAM page did not render when fetched). — [WAM](https://www.wam.ae/en/article/bzkwb8o-researchers-abu-dhabi-rewrite-rules-medicine); [MBZUAI](https://mbzuai.ac.ae/?p=31588)

**MBZUAI open roles, Abu Dhabi (verified on LinkedIn, 12 Nov 2026)**
- No clinician annotator or evaluator role was found at MBZUAI or IFM.
- **"AI Engineer – LLM Data"**, IFM, Abu Dhabi, listed 2026-09-28. The job is in-house curation and LLM-based data synthesis for pre-, mid- and post-training. — [LinkedIn](https://ae.linkedin.com/jobs/view/ai-engineer-%E2%80%93-llm-data-at-institute-of-foundation-models-4472781196)
  - Duties: "Design and implement LLM-based data synthesis and augmentation pipelines…".
  - The ad does not mention external vendors.
- **"Research Scientist"** (data-centric LLMs), IFM, Abu Dhabi, listed 2026-09-28. — [LinkedIn](https://ae.linkedin.com/jobs/view/research-scientist-at-institute-of-foundation-models-4472776549)
  - Duties: "collect, curate, and structure open-source and web-scale data relevant to reasoning tasks".
  - Requires at least a Master's; a PhD is preferred.
- Other IFM Abu Dhabi listings, all dated 2026-09-28, are not data-related: Machine Learning Engineer, Senior MLOps, Senior QA Engineer, Project Manager, HPC Software Engineer and Community Development Manager. — [LinkedIn search export (e.g., MLE)](https://ae.linkedin.com/jobs/view/machine-learning-engineer-at-institute-of-foundation-models-4472768751)
- **"Biological and Life Sciences Division – Research Appointment Positions"**, MBZUAI, listed 2026-08-30. The work covers the Human Phenotype Project (a longitudinal cohort and biobank with multi-omics) and Emirati Genome Project data. These are research appointments, not annotation jobs. — [LinkedIn](https://ae.linkedin.com/jobs/view/biological-and-life-sciences-division-%E2%80%93-research-appointment-positions-at-mbzuai-mohamed-bin-zayed-university-of-artificial-intelligence-4460843885)

**MBZUAI-IFM Paris**
- IFM runs three sites (Abu Dhabi, Paris and Sunnyvale). The Paris lab built Atlas-Chat, a family of LLMs for Moroccan Darija (search snippet). — [MBZUAI IFM launch](https://mbzuai.ac.ae/news/mbzuai-launches-institute-of-foundation-models-and-establishes-silicon-valley-ai-lab/); [Middle East AI News](https://www.middleeastainews.com/p/mbzuai-forges-french-research-alliance)
- The IFM site lists the Paris address as 42 Rue Notre Dame des Victoires, Paris (search snippet; ifm.ai returned 403 on fetch). — [IFM site](https://ifm.mbzuai.ac.ae)
- MBZUAI has expanded its partnership with École Polytechnique to cover LLMs, reasoning foundation models, and AI in biology, health and AI safety. It co-funds PhDs and programmes at the planned MGX-backed Paris AI Hub (search snippet). — [MBZUAI](https://mbzuai.ac.ae/news/mbzuai-strengthens-research-ties-with-frances-ecole-polytechnique/)
- **Paris job ad (verified on LinkedIn): "Research Engineer/Scientist – Speech/Audio Machine Learning"**, IFM, Paris, listed 2026-09-28. — [LinkedIn](https://fr.linkedin.com/jobs/view/research-engineer-scientist-speech-audio-machine-learning-at-institute-of-foundation-models-4472785036)
  - The work is native speech-to-speech translation and generation.
  - Duties include "subjective human-in-the-loop (MOS) testing".
- Contact routes:
  - The [ifm.ai/collaborate](https://ifm.ai/collaborate/) page returned 403, so its content was not reviewed.
  - The IFM Paris job ads and IFM's LinkedIn presence are the visible channels.

### Inferences
- **[Assessment]** In BiMediX2, clinicians appear as verifiers of translated or synthetic data and as blind preference raters. Ten experts from three countries, plus Abu Dhabi hospital co-authors, is a small academic panel. A natural pitch is a larger, auditable, multi-specialty review panel covering radiology, dermatology and pathology for Arabic–English and EU-language medical VQA. The reported 22% minor and 5% major correction rates for GPT-4o translation are a concrete quality argument.
- **[Assessment]** IFM's 2026 data roles favour in-house synthesis and curation. The vendor-facing role is the Sunnyvale "Agentic Data & Benchmarking" scientist from the prior round. The Paris speech role suggests a possible need for European-language (French) MOS raters for speech-to-speech translation. This is plausible but not stated.

### Gaps
- I found no MBZUAI or IFM posting for clinician annotators or evaluators, and no named external medical data vendor.
- I could not open ifm.ai, so IFM's formal collaboration and procurement route is not documented.
- I could not confirm whether the AI Arabic Doctor (2026) used new clinician-labelled data.

---

## Q2. M42 (Med42, MEDIC): approach route, clinician-evaluation needs, open roles

### Takeaway
M42 says it is "running research studies with clinicians" on Med42. Its model cards say the models are not clinically validated and that extensive human evaluation is ongoing. There is no public sign that M42 buys clinician evaluation from outside, and no open clinical-AI annotator or evaluator role. M42's current job ads are clinical, genomics and corporate roles. A supplier route exists through the Oracle supplier portal of M42-group hospital CCAD, which accepts overseas suppliers. Otherwise the route is the general contact address info@m42.ae.

### Cited Findings

**Med42 and clinician evaluation**
- Med42-v2 (May 2024 — older) is a 70B model fine-tuned from Llama-3. It scored 85.1% zero-shot on USMLE sample questions, up to 87.3% with specialized prompting. M42 says it is "running research studies with clinicians", without numbers, hospitals or design. — [M42 news](https://m42.ae/media-center/news/m42-unveils-its-next-gen-clinical-llm-at-abu-dhabi-global-healthcare-week/)
- The Med42-v2 documentation says the suite "is not ready for real clinical use" and that "Extensive human evaluation is undergoing". MEDIC-evaluated models are "not clinically validated" (search snippet). — [arXiv 2409.07314](https://arxiv.org/html/2409.07314v2); [M42 Med42 page](https://m42.ae/med42)
- I found no 2026 clinician-evaluation study of Med42 (search returned nothing newer).

**Careers**
- [m42.ae/careers](https://m42.ae/careers/) lists no specific roles. It links to a job search at careers.m42.ae, which runs on an iCIMS tenant, careers-mubadalahealth.icims.com. It also offers a talent-pool sign-up at m42.career.page. — [M42 careers](https://m42.ae/careers/); [careers.m42.ae](https://careers.m42.ae/jobs)
- M42 Health roles on LinkedIn (verified listing data, 12 Nov 2026):
  - Senior Bioinformatician (2026-11-05). — [LinkedIn](https://ae.linkedin.com/jobs/view/senior-bioinformatician-at-m42-health-4471430319)
  - Variant Scientist (2026-11-04). — [LinkedIn](https://ae.linkedin.com/jobs/view/variant-scientist-at-m42-health-4451631515)
  - R&D Senior Scientist – Chemistry (2026-11-04). — [LinkedIn](https://ae.linkedin.com/jobs/view/r-d-senior-scientist-chemistry-at-m42-health-4459760940)
  - Consultant, Pediatric Neurology (2026-10-28). — [LinkedIn](https://ae.linkedin.com/jobs/view/consultant-pediatric-neurology-at-m42-health-4457454430)
  - General Practitioner – Family Medicine (2026-10-26). — [LinkedIn](https://ae.linkedin.com/jobs/view/general-practitioner-family-medicine-at-m42-health-4474257264)
  - Enterprise Architect, Senior Analyst Information Security and Senior Finance Analyst. — [LinkedIn (Enterprise Architect)](https://ae.linkedin.com/jobs/view/enterprise-architect-at-m42-health-4452359574)
  - None of these is a clinical-AI annotation or evaluation role.

**Contact and procurement**
- M42's contact page shows a single general email, info@m42.ae. I found no partnership or procurement contact. — [M42 contact](https://m42.ae/contact-us/)
- M42 is excluded from G42's central Coupa registration (prior round). — [G42 Become a Supplier](https://www.g42.ai/collaborations/become-g42-supplier)
- Cleveland Clinic Abu Dhabi (CCAD), part of the M42 group, publishes a supplier-registration manual (V1.0, Oracle Fusion supplier portal). — [CCAD Supplier Registration Manual (PDF)](https://www.clevelandclinicabudhabi.ae/-/media/project/ccad/websites/shared/resources/ccad-supplier-registration-user-manual-new.pdf)
  - Applicants agree to the "M42 Code of conduct".
  - Overseas suppliers submit a Certificate of Incorporation or tax registration certificate, and the ICV certificate is "ICV_NOT_APPLICABLE – For Overseas Suppliers".
  - The portal login is an Oracle Cloud URL.
  - CCAD's supply-chain page hosts the registration link. — [CCAD supply chain](https://www.clevelandclinicabudhabi.ae/en/generic-pages/supply-chain-management)

### Inferences
- **[Assessment]** M42's need for clinician evaluation is real. Its own card says human evaluation is ongoing and the model is not clinically validated. But that work appears to be done through internal and hospital research studies, not procurement.
- **[Assessment]** Best approach, in this order:
  1. A research-collaboration pitch: an independent multi-specialty EU clinician panel for MEDIC-style safety and clinical-reasoning evaluation, sent via info@m42.ae and M42's AI leadership on LinkedIn.
  2. Supplier registration through the CCAD/M42 Oracle portal (overseas suppliers are allowed) to be procurement-ready.
- **[Assessment]** M42 has no AI-annotation job ads. That fits either in-house physician time or no current buying.

### Gaps
- I found no M42 group-level supplier portal URL, only CCAD's. Whether M42 HQ (Med42 team) uses the same Oracle tenant is not verified.
- The careers.m42.ae job list renders in JavaScript and could not be enumerated. It may hold roles that LinkedIn does not show.

---

## Q3. KAUST; HUMAIN careers; humain-m3 safety alignment; ALLaM human evaluation (aiXplain claim)

### Takeaway
- **aiXplain claim: now confirmed by a primary source.** aiXplain's own blog (15 Oct 2026) says it ran "an independent human evaluation of ALLaM for HUMAIN" with bilingual pairwise reviewers.
- **humain-m3 weights.** I found no evidence they had been released by 12 Nov 2026 (target was Oct 2026). Who does safety alignment and fine-tuning is unstated (HUMAIN, MiniMax or a third party).
- **HUMAIN hiring.** Its visible job ads are corporate. No data, annotation or vendor roles were found.
- **KAUST.** It has a GenAI Centre of Excellence with an ongoing open-weights Arabic/English LLM project. I found no data-procurement signal or annotation roles.

### Cited Findings

**ALLaM human evaluation (aiXplain)**
- aiXplain blog, "What it takes to benchmark Arabic AI fairly" (15 Oct 2026): aiXplain ran "an independent human evaluation of ALLaM for" HUMAIN. — [aiXplain blog](https://aixplain.com/blog/arabic-ai-benchmarking)
  - Method described for "our human evaluations": "bilingual reviewers compare anonymized answers in pairs". Reviewers give a rubric score, tag failures (hallucination, inconsistency, verbosity, formatting), and state a preference with its strength.
  - The blog links to a separate HUMAIN case study, which I did not open.
- Bayanat Labs' comparison page (Oct 2026, updated Nov 2026) cites that aiXplain blog as its source. — [Bayanat Labs](https://www.bayanatlabs.com/insights/arabic-llm-evaluation-companies)
- aiXplain is a founding member of BALSAM, alongside SDAIA. I found no separate aiXplain–SDAIA ALLaM evaluation contract (search). — [aiXplain BALSAM](https://aixplain.com/blog/aixplain-joins-balsam)

**ALLaM's own paper (SDAIA, Jul 2024 — older)**
- Human evaluation: an Arabic multi-turn set across 7 domains (Arabic linguistics, history, health, politics, coding, entertainment, ethics), 10 questions each. "Each pair of responses was inspected by three evaluators", with a fourth as tie-breaker, then Elo. — [arXiv 2407.15390](https://arxiv.org/pdf/2407.15390)
- SFT data sourcing used "domain experts, prompt librarians, local institutes specializing in areas such as Arabic language, history, and politics", plus licensed LLMs and machine translation. The collection is "not human generated, but rather, human driven". — [arXiv 2407.15390](https://arxiv.org/pdf/2407.15390)

**humain-m3 status**
- Announced 3 Sep 2026 at LEAP. Weights "expected under the MiniMax Community License once safety training and alignment are complete", targeted "next month" (October 2026). — [Origami blog, 5 Sep 2026](https://origami.sa/en/blog/arabic-frontier-model-open-weights/)
  - Origami does not say who performs alignment.
  - Benchmarks are self-reported: an 89.37% average across seven Arabic benchmarks.
- Access is tiered (search snippet). — [Unite.ai](https://www.unite.ai/?p=461213)
  - The limited preview applies a "Saudi alignment guardrail".
  - The research preview gives the full checkpoint.
- No search result (12 Nov 2026) confirmed that the weights have been released. — [GDN Online](https://www.gdnonline.com/Details/1405346/HUMAIN-unveils-frontier-Arabic-language-model-developed-by-MiniMax)

**HUMAIN partnerships and careers**
- HUMAIN–Turing partnership (27 Mar 2026, FII PRIORITY Miami): they will co-build an enterprise "AI Agent Marketplace" on HUMAIN ONE. — [Intelligent CIO](https://www.intelligentcio.com/north-america/2026/03/27/humain-and-turing-announce-strategic-partnership-to-build-the-worlds-first-ai-agent-marketplace-for-enterprise-on-humain-one/)
  - Turing is credited with "expertise in advanced model evaluation, fine tuning, reasoning systems".
  - The article mentions no data or human-expert contract and does not mention ALLaM or humain-m3.
- HUMAIN careers:
  - humain.com/careers returned 403 and careers.humain.ai failed via the proxy (fetch, 12 Nov 2026).
  - Sabbar lists 4 HUMAIN Riyadh roles: Senior Expert Insurance Risk Management; Advisor JV & Subsidiary Governance; Manager Portfolio Management & Integration; Director Financial Accounting Operations. None is data, annotation, AI trainer, procurement or vendor management. — [Sabbar HUMAIN](https://sabbar.com/en/jobs/companies/humain)
  - LinkedIn guest searches for HUMAIN in Riyadh returned no HUMAIN-company postings (12 Nov 2026).
- Riyadh annotation demand sits with vendors. Example: a Welo Data-attributed remote "AI Data Annotation Specialist – Arabic (Najdi dialect) & Arabizi" listing, SAR 150–200k (aggregator; not verified). — [JobLeads](https://jobleads.com/sa/job/ai-data-annotation-specialist-arabic-najdi-dialect-arabizi--riyadh--ea633ae3911210ab91424d848998749c5)

**KAUST**
- The KAUST Center of Excellence for Generative AI launched 1 Jul 2024. Its projects include Arabic language model development and an ongoing "Open Weights Arabic/English LLM" (search snippet). — [KAUST GenAI](https://www.kaust.edu.sa/research/generative-ai); [Arab News](https://www.arabnews.pk/node/2548216)
  - The centre's chair has publicly called for more open-sourcing of data by Saudi organisations (search snippet). — [Arab News](https://www.arabnews.pk/node/2548216)
- KAUST medical AI: MiniGPT-Med, with SDAIA, is a radiology report-generation model on Llama 2 (2024, older; still covered by Arab News in Jan 2026; search snippet). I found no KAUST Arabic medical LLM for 2026. — [Middle East AI News](https://www.middleeastainews.com/p/new-saudi-ai-model-radiology-kaust)
- KAUST LinkedIn roles (Nov 2026) are HPC, research computing and cloud security, plus a "Research Partnership Specialist" (listed 2026-11-10, PhD in STEM). That role is the contact for faculty and centres "interested in initiating new partnerships". — [LinkedIn](https://sa.linkedin.com/jobs/view/research-partnership-specialist-at-kaust-king-abdullah-university-of-science-and-technology-4489435128)

### Inferences
- **[Assessment]** HUMAIN does buy outsourced human evaluation: aiXplain's ALLaM study is now primary-sourced. The supplier is Gulf-based and Arabic-bilingual, so HUMAIN's evaluation buying is real but taken by regional vendors.
- **[Assessment]** humain-m3's delayed weights and unnamed alignment provider leave an opening for independent pre-release evaluation. This would mostly be Arabic; English, European-language and medical/legal/finance safety slices are a niche. MiniMax/China involvement remains a compliance flag for PathWize.
- **[Assessment]** KAUST is an academic partner, not a buyer. The research-partnerships office is the realistic door, for a co-funded evaluation study for example.

### Gaps
- humain-m3 weight-release status after October 2026 is not confirmed either way.
- No source names the safety-alignment or fine-tuning party for humain-m3.
- aiXplain's HUMAIN case study (scope, size, date) was not opened.
- HUMAIN's own careers site was unreachable.

---

## Q4. TII (Falcon) and QCRI (Fanar): careers, annotation/evaluation roles, vendor use, European-language evaluation needs

### Takeaway
- **TII.** Its career site lists only 12 roles, none for annotation or evaluation. Its LinkedIn roles are engineering, robotics and HPC. The Falcon-H1 report mentions proprietary "human-annotated examples targeting specific skills" but names no vendor.
- **QCRI.** Its Fanar report (Jan 2025) explicitly used "expert- and vendor-created data", including a "vendor-generated dataset for dialectic dialogues", and a team of 40–250 annotators who were mostly Arabic speakers. This confirms Qatari vendor use, but for Arabic.
- **European-language evaluation.** No evidence of a need at either organisation beyond Falcon-H1's language coverage.

### Cited Findings

**TII**
- careers.tii.ae (Phenom) on 12 Nov 2026 returned:
  - 12 total listings, most posted Oct–Nov 2025 (Senior Robotics RL Engineer, RL Robotics Engineer, Researcher Fixed Wings, Senior AI Engineer, AI Engineer, VLM Engineer, Integration Engineer, Senior Software Engineer, Senior Hardware Security Researcher, Engineer, …).
  - "annotation" → 0 hits; "data" → 2 (Lead Researcher, VLM Engineer); "language" → 7 (engineering roles).
  - Source: [TII careers search](https://careers.tii.ae/us/en/search-results?keywords=annotation)
- TII LinkedIn listings (Oct–Nov 2026):
  - Senior AI Engineer (Robotics Research Center; LLM/VLM/agentic), listed 2026-11-10. — [LinkedIn](https://ae.linkedin.com/jobs/view/senior-ai-engineer-at-technology-innovation-institute-4312713080)
  - Principal Researcher, Full-stack Engineer AI Applications, Software/HPC/SRE/DevOps, Innovation Program Manager. — [LinkedIn (Principal Researcher)](https://ae.linkedin.com/jobs/view/principal-researcher-at-technology-innovation-institute-4477071567)
  - No data, annotation or evaluator roles.
- Falcon-H1 technical report (Jul 2025): "Proprietary data includes high-quality extracted, refined, and synthetic sample pairs … along with human-annotated examples targeting specific skills". The report names no vendor. Multilingual data covers 17 non-English languages, 10 of them European. — [arXiv 2507.22448](https://arxiv.org/pdf/2507.22448)

**QCRI / HBKU**
- HBKU careers (12 Nov 2026) shows 14 results. None is tagged QCRI or relates to NLP, LLMs, Fanar, annotation or evaluation; the nearest is an Arabic grammar instructor. ATS: hbkuqa.elluciancrmrecruit.com. — [HBKU careers](https://www.hbku.edu.qa/en/careers)
- Fanar technical report (Jan 2025):
  - SFT data came from "filtering and annotation of publicly available SFT data, synthetic data generation, and a small yet critical amount of expert- and vendor-created data", including "A vendor-generated dataset for dialectic dialogues". — [arXiv 2501.13944](https://arxiv.org/pdf/2501.13944v1)
  - "Our system engaged a team of 40–250 annotators at different stages, primarily Arabic speakers from various locations, who, at peak capacity, contributed up to 10K prompts … each day". The core user base was 130 people, with 60–90 active daily, and over 90% of prompts were in Arabic. — [arXiv 2501.13944](https://arxiv.org/pdf/2501.13944v1)
- The Fanar 2.0 paper (Mar 2026) uses open-weight LLMs as annotators for filtering (e.g., Qwen-3-32B). Full-text search found no external-vendor mention. — [arXiv 2603.16397](https://arxiv.org/pdf/2603.16397)

### Inferences
- **[Assessment]** QCRI is proven to pay vendors for Arabic dialect data and to run large annotator pools. The vendor is unnamed, and Scale AI's Qatar MCIT deal (prior round) is the likely incumbent context. Fit for PathWize is low unless English or European evaluation of Fanar's English capability, which improved +7.6 MMLU in 2.0, becomes a goal.
- **[Assessment]** TII uses human-annotated SFT data but shows no hiring or vendor signal. The European-language angle (Falcon-H1) is still a cold-outreach hypothesis.

### Gaps
- Neither TII nor QCRI names the human-annotation supplier.
- QCRI-specific job listings could not be isolated, because the HBKU page shows 10 of 14 results.
- I found no TII or QCRI supplier portal.

---

## Q5. Microsoft–G42 and OpenAI Stargate UAE: data/evaluation vendor programmes

### Takeaway
I found no data- or evaluation-vendor programme tied to Microsoft–G42 or Stargate UAE. The relevant structures are:
- the Responsible AI Foundation (G42 + Microsoft, with MBZUAI as research partner and Inception as programme lead);
- Microsoft's AI for Good Lab hub in Abu Dhabi;
- a planned UAE-localised ChatGPT "fluent in the local Arabic dialect".

All are possible indirect demand signals. None is a procurement channel.

### Cited Findings
- Microsoft invested $1.5B in G42 for a minority stake and a board seat (Apr 2024 — older). The deal includes making Jais available on Azure (search snippet). — [Microsoft blog](https://blogs.microsoft.com/blog/2024/04/15/microsoft-and-g42-partner-to-accelerate-ai-innovation-in-uae-and-beyond/)
- Responsible AI Foundation (Feb 2025, launched at the Paris AI Action Summit; search snippet). — [WAM](https://www.wam.ae/en/article/bi46khx-g42-microsoft-launch-responsible-foundation)
  - Partners: G42 and Microsoft, with MBZUAI as research partner and Inception as programme lead.
  - Focus: safety, bias mitigation, explainability, risk-assessment models and technical audits, for the Middle East and Global South.
  - Microsoft's AI for Good Lab is opening an Abu Dhabi hub.
- Stargate UAE: a 1 GW cluster, with 200 MW expected live in 2026. G42 leads, with Oracle, NVIDIA, Cisco and SoftBank (search snippet). — [OpenAI](https://openai.com/index/introducing-stargate-uae)
- A Feb 2026 report says a customised ChatGPT for the UAE would be "fluent in the local Arabic dialect" with content restrictions aligned with Emirati law (search snippet). — [eWeek](https://www.eweek.com/de/news/openai-uae-localized-chatgpt/)
- Prior round, for context: Inception42's "Seraj" was built with Microsoft. — [Middle East AI News](https://www.middleeastainews.com/p/inception42-advances-arabic-ai-for-enterprise)

### Inferences
- **[Assessment]** UAE ChatGPT localisation implies Emirati-Arabic evaluation and alignment data. That work would go through OpenAI's own vendor stack (Scale, Surge, Mercor and others), not a UAE procurement route, and would not be EU-expert work.
- **[Assessment]** The Responsible AI Foundation may commission bias and safety audits, possibly including medical. It is reached via Inception42 and MBZUAI, not via an open call. No such call was found.

### Gaps
- I found no 2026 update on the Responsible AI Foundation's programmes or calls.
- The localised ChatGPT's launch status was not confirmed.
- I found no Microsoft-side vendor programme in the UAE.

---

## Q6. Indian IT majors as buyers of expert data; Fractal Vaidya; Sarvam 2026 funding

### Takeaway
- **IT majors are sellers.** Wipro, HCLTech and Infosys (BPM) sell annotation, RLHF and evaluation services themselves; they are competitors more than buyers. HCLTech's newest case study (9 Nov 2026) describes a 500+ person "AI Data Factory" in the Philippines and India.
- **No subcontracting found.** I found no public evidence that TCS, Infosys, Wipro, HCLTech, Tech Mahindra or LTIMindtree subcontract expert annotation for European clients or languages. A LinkedIn check found no European-language AI-data roles at these six. European-language AI-labelling roles in Europe are posted instead by Concentrix, Cognizant, Genpact and TELUS Digital.
- **Fractal Vaidya.** It used a panel of 8 clinicians (at least 3 years' practice each) to validate synthetic rubric data. I found no open clinician roles.
- **Sarvam funding, resolved.** Sarvam raised a $300M Series B at $1.5B post-money: a $234M first close on 15 Jun 2026, completed by $74M in Aug 2026. The "$3B valuation" claim is unsupported.

### Cited Findings

**Indian IT majors as suppliers**
- **Wipro** was named a Leader in Everest Group's Trust & Safety Services PEAK Matrix 2026. The analyst quote lists "data annotation and labeling", "RLHF and RLAIF", "model quality evaluation" and red teaming. Named tools are AutoLab, Calibrate and Sentinel. No languages, delivery sites or AI-lab clients are named. — [Wipro](https://www.wipro.com/analyst-speak/wipro-named-a-leader-in-everest-groups-trust-and-safety-services-peak-matrix-assessment-2026-for-the-second-consecutive-year/)
- **HCLTech** case study "8M+ annotations advancing AI readiness at scale" (published 9 Nov 2026): "HCLTech deployed 500+ specialists across LLM, multimodal, Physical AI, robotics and GenAI workflows, operating a scalable AI Data Factory from capability centers in the Philippines and India." — [HCLTech](https://www.hcltech.com/case-study/8m-annotations-advancing-ai-readiness-scale)
  - Services include RLHF, preference scoring and instruction tuning.
  - The client is described only as "a global leader in AI computing".
  - It reports a 95% quality score.
- **Infosys BPM** markets "annotation services for AI/ML" with human-in-the-loop delivery (search snippet; the page returned 403). — [Infosys BPM](https://www.infosysbpm.com/services/annotation-services-for-ai-ml.html)
- **Firstsource** (India, RP-Sanjiv Goenka Group) markets GenAI data services for AI labs. — [Firstsource](https://www.firstsource.com/capabilities/genai-data-services/ai-labs-and-foundational-models)
  - Services: SFT/CoT, expert RLHF, red teaming.
  - It claims "Domain PhDs, not crowd workers" and 280+ STEM-trained bilingual annotators.
  - Languages listed include German, Spanish, French, Italian and Portuguese.
  - Factuality domains include legal, finance and health.
- **TCS and LTIMindtree**: I found no annotation, RLHF or expert-data offering or buying evidence in this round (search).
- **Tech Mahindra / Project Indus**: an 8B Hindi-first education LLM launched at the India AI Impact Summit (Feb 2026). It uses 500M synthetic tokens generated with NVIDIA NeMo Data Designer (search snippet). — [AIM](https://analyticsindiamag.com/ai-news/tech-mahindra-launches-8-billion-parameter-hindi-first-education-llm); [Tech Mahindra](https://www.techmahindra.com/insights/news/techm-teams-nvidia-launch-cutting-edge-education-llm-under-project-indus/)

**LinkedIn check for European-language AI-data roles (DE/PL/FR/ES/PT/RO, 12 Nov 2026)**
- No such roles at TCS, Infosys, Wipro, HCLTech, Tech Mahindra or LTIMindtree.
- Roles found at other firms:
  - Concentrix: "AI Labeling & Evaluation Agent (German-Speaking)" (Lisbon, 2026-11-01). — [LinkedIn](https://pt.linkedin.com/jobs/view/ai-labeling-evaluation-agent-german-speaking-at-concentrix-4438724868)
  - Concentrix: "AI Labeling & Evaluation Agent (French-Speaking)" (Lisbon, 2026-11-02). — [LinkedIn](https://pt.linkedin.com/jobs/view/ai-labeling-evaluation-agent-french-speaking-at-concentrix-4439225082)
  - Concentrix: "Quality Evaluator German C1 (Trust and Safety)" (Bucharest, 2026-11-06). — [LinkedIn](https://ro.linkedin.com/jobs/view/quality-evaluator-german-c1-trust-and-safety-at-concentrix-4488408259)
  - Cognizant: "Maps Country and Language Editor – Flemish" (Lisbon). — [LinkedIn](https://pt.linkedin.com/jobs/view/maps-country-and-language-editor-flemish-at-cognizant-4469908350)
  - Genpact: "Content Moderator with German" (Bucharest). — [LinkedIn](https://ro.linkedin.com/jobs/view/content-moderator-with-german-at-genpact-4485835459)
  - TELUS Digital AI Community: "Polish Language Engineer" (Barcelona). — [LinkedIn](https://es.linkedin.com/jobs/view/polish-language-engineer-at-telus-digital-ai-community-4482485603)

**Indian vendors recruiting for European languages**
- **Zyka AI** posted "German Language Team Lead – Data Annotation" and "French Language Team Lead – Data Annotation" (India, listed 2026-11-06). — [LinkedIn DE](https://in.linkedin.com/jobs/view/german-language-team-lead-%E2%80%93-data-annotation-at-zyka-ai-4486975630); [LinkedIn FR](https://in.linkedin.com/jobs/view/french-language-team-lead-%E2%80%93-data-annotation-at-zyka-ai-4486954975)
  - The work is word alignment, rating and annotation, leading up to 50 people.
  - Both ads require HSK 6 / HSK 7–9 Chinese, which points to European-language ↔ Chinese alignment work.
- **India medical annotation (vendor side)**: iMerit "Medical Data Annotation Specialist (MBBS)" (Kolkata, 1-year contract, night shift, ICD-10/SNOMED/LOINC mapping; listed 2026-10-27). — [LinkedIn](https://in.linkedin.com/jobs/view/medical-data-annotation-specialist-mbbs-at-imerit-4483299678)

**Fractal Vaidya**
- *Fathom-Vaidya* (EMNLP 2026), authors at Fractal AI Research. — [ACL Anthology PDF](https://aclanthology.org/2026.emnlp-main.1109.pdf)
  - Data: 5,351 synthetic multi-turn conversations with multi-dimensional rubrics, plus MedBullets-derived questions for rubric-guided RL.
  - Clinician validation: "we collaborated with a panel of 8 expert clinicians, each having atleast 3 years of clinical practice". They reviewed 500 random samples, three clinicians per sample, with consensus scoring. 99.4% of conversations were valid and 97.7% of 5,570 rubrics relevant.
  - A further 50 diagnostic Q/A with 257 error rubrics were reviewed by three doctors, with 92.2% agreement with GPT-5 (thinking).
  - The paper does not state clinician nationality, compensation or recruitment channel.
- Fractal's LinkedIn listings (Oct–Nov 2026) are data scientist, NLP/GenAI and engineering roles. I found no clinician, medical annotator or evaluator role. — [LinkedIn (Fractal NLP GenAI DS)](https://in.linkedin.com/jobs/view/data-scientist-senior-data-scientist-nlp-genai-at-fractal-4466851220)

**Sarvam 2026 funding**
- Sarvam's own announcement (15 Jun 2026): "$234 million in the first close of its $300 million Series B at a post-money valuation of $1.5 billion". — [Sarvam](https://www.sarvam.ai/announcing-series-b)
  - HCLTech is "lead strategic investor" with $150M.
  - New investor: Bessemer. Existing: Khosla and Peak XV.
  - Stated uses: research toward a frontier model for "agentic, coding, and cybersecurity use-cases", and compute. Data and annotation are not mentioned.
- Entrepreneur India (6 Aug 2026): an additional $74M from Nvidia, Activate, Glade Brook Capital and Gaja Capital "completes" the $300M round at $1.5B. — [Entrepreneur India](https://india.entrepreneur.com/business-news/nvidia-leads-usd-74-million-investment-in-sarvam-ai)
  - Note: $234M + $74M = $308M, which does not exactly reconcile with $300M.
  - Free Press Journal headlines a "$75 Million Series B Extension" with Nvidia (search snippet). — [FPJ](https://www.freepressjournal.in/amp/tech/sarvam-ai-onboards-nvidia-as-strategic-investor-in-75-million-series-b-extension-first-indian-firm-to-do-so)
- A 10.46% HCLTech stake is reported via search snippet only, not verified. — [AIM](https://analyticsindiamag.com/ai-news/sarvam-becomes-unicorn-after-234-mn-funding-round-led-by-hcltech)
- Earlier reports of a "$250M at $1.5B" round led by Nvidia and Accel (Mar–Apr 2026) were pre-deal (search snippet). — [Outlook Business](https://www.outlookbusiness.com/corporate/sarvam-ai-to-raise-250mn-from-nvidia-accel-hcltech-at-15bn-valuation)
- The prior round's "$3B valuation" (CareerIndia) is contradicted by every primary or near-primary source above.

### Inferences
- **[Assessment]** Indian IT majors are competitors in the expert-data market (HCLTech AI Data Factory, Wipro RLHF/T&S, Infosys BPM). Their visible delivery footprint is India and the Philippines, with no European-language expert pools. That gap could make PathWize a subcontracting partner for EU-language or EU-credentialed experts (medicine, law, finance) on their AI-lab accounts. This is a hypothesis; no such subcontracting was found.
- **[Assessment]** HCLTech's $150M stake in Sarvam makes HCLTech a likely channel for Sarvam's enterprise data needs. Sarvam's stated priorities (agentic, coding, cybersecurity) partly fall in PathWize's cyber exclusion.
- **[Assessment]** Fractal shows the typical Indian pattern: synthetic-first, with a small in-house or contracted clinician panel (8) for validation. The upsell is larger multi-specialty and EU/Western clinician panels for HealthBench-style rubric authoring. Price sensitivity is likely high.

### Gaps
- I found no evidence for or against Indian IT majors subcontracting expert annotation to European providers. Their partner and vendor lists are not public.
- The identity of Zyka AI's end client is unknown.
- The recruitment channel of Fractal's 8-clinician panel is unknown.
- TCS and LTIMindtree annotation offerings were not found.

---

## Q7. Live job-board checks (LinkedIn guest pages, MyCareersFuture; Bayt/GulfTalent/Naukri blocked)

### Takeaway
On the buyer side, the clearest new vendor-management signal is **XG Tech Pte. Ltd. (Singapore)**. Its "Senior Member of Technical Staff (AI Data)" ad, posted 12 Nov 2026, asks the hire to manage data vendors for SFT, preference and agent-trajectory data. Lab-side postings at the Gulf labs (IFM, TII, Inception42, M42, HUMAIN, KAUST, QCRI) show no AI-trainer, annotator or "data partnerships" roles. Expert-evaluation demand is posted by vendors: CNTXT AI, Joblet-AI, Ethos, LILT, OneForma, DataAnnotation, Scale, iMerit, Innodata, DesiCrew, Hirely and Outlier. Several of these explicitly recruit European-language or medical evaluators via Gulf or India location tags.

### Cited Findings

#### UAE / Saudi / Qatar (LinkedIn, verified listing data 12 Nov 2026; date = LinkedIn listing date)

| Employer | Title | Location | Date | Note | URL |
|---|---|---|---|---|---|
| Institute of Foundation Models (MBZUAI) | AI Engineer – LLM Data | Abu Dhabi | 2026-09-28 | In-house curation + LLM synthesis (JD fetched) | [link](https://ae.linkedin.com/jobs/view/ai-engineer-%E2%80%93-llm-data-at-institute-of-foundation-models-4472781196) |
| Institute of Foundation Models | Research Engineer/Scientist – Speech/Audio ML | Paris | 2026-09-28 | Human MOS testing (JD fetched) | [link](https://fr.linkedin.com/jobs/view/research-engineer-scientist-speech-audio-machine-learning-at-institute-of-foundation-models-4472785036) |
| Inception42 (G42) | Principal Applied Scientist | Abu Dhabi | 2026-10-22 | Healthcare named among use cases; no data-vendor duties (JD fetched) | [link](https://ae.linkedin.com/jobs/view/principal-applied-scientist-at-inception42-4461974610) |
| Inception42 | Senior Applied Scientist | Abu Dhabi | 2026-11-04 | As above | [link](https://ae.linkedin.com/jobs/view/senior-applied-scientist-at-inception42-4459597582) |
| Inception42 | Director – Research and Development | Abu Dhabi | 2026-11-08 | Senior R&D buyer-level role (JD not fetched) | [link](https://ae.linkedin.com/jobs/view/director-research-and-development-at-inception42-4461993512) |
| CNTXT AI | Arabic/English Bilingual AI Data Annotator & Evaluator (Remote, Hourly Contractor) | Riyadh | 2026-11-06 | LLM evaluation, content generation, localisation QA. Prior round flagged this ad as expired; it is live again (JD fetched) | [link](https://sa.linkedin.com/jobs/view/arabic-english-bilingual-ai-data-annotator-evaluator-remote-hourly-contractor-at-cntxt-ai-4487307665) |
| CNTXT AI | Senior AI Engineer (Annotation and VLA) | Abu Dhabi | 2026-11-10 | Robot-data annotation and VLA (embodied; JD fetched) | [link](https://ae.linkedin.com/jobs/view/senior-ai-engineer-annotation-and-vla-at-cntxt-ai-4489463958) |
| Scale AI | Senior Software Engineer, AI Operations, GPS | Doha | 2026-10-29 | Public-sector AI ops (consistent with Qatar MCIT deal) | [link](https://qa.linkedin.com/jobs/view/senior-software-engineer-ai-operations-gps-at-scale-4457035224) |
| Joblet-AI | Dutch AI Evaluator (Remote) | UAE tag | 2026-11-12 | Evaluates a Gemini personalisation feature (JD fetched) | [link](https://ae.linkedin.com/jobs/view/dutch-ai-evaluator-remote-at-joblet-ai-4489068533) |
| Joblet-AI | Pharmacy AI Reviewer (Remote, contractor) | UAE tag | 2026-11-12 | Pharmacists write scoring rubrics for medical-AI benchmarks (JD fetched) | [link](https://ae.linkedin.com/jobs/view/pharmacy-ai-reviewer-remote-at-joblet-ai-4489074496) |
| Joblet-AI | Financial AI Researcher (Remote) | UAE tag | 2026-11-12 | Finance expert | [link](https://ae.linkedin.com/jobs/view/financial-ai-researcher-remote-at-joblet-ai-4489074417) |
| Ethos | Expert Opportunity – Senior Curator ($70/hr) | Dubai tag | 2026-11-10 | For "a leading foundational AI lab"; expert network (JD fetched) | [link](https://ae.linkedin.com/jobs/view/expert-opportunity-senior-curator-%2470-hr-up-to-%241-400-week-at-ethos-4455146491) |
| LILT AI | AI Training Contributor – Arabic (UAE / KSA) | Remote | 2026-08-20 | Vendor crowd | [link](https://ae.linkedin.com/jobs/view/ai-training-contributor-arabic-united-arab-emirates-remote-at-lilt-ai-4454137894) |
| DataAnnotation | English to Arabic Translator – AI Trainer | KSA | 2026-09-29 | Vendor crowd | [link](https://sa.linkedin.com/jobs/view/english-to-arabic-translator-ai-trainer-at-dataannotation-4473566343) |
| OneForma | MT Post-Editor for Regional Language Variants (Arabic) | UAE | 2026-10-27 | Vendor | [link](https://ae.linkedin.com/jobs/view/machine-translation-post-editor-for-regional-language-variants-arabic-at-oneforma-4483631280) |
| Arabic.AI | Senior QA Engineer – AI Products (6-month contract) | Doha | 2026-10-27 | Regional AI firm | [link](https://qa.linkedin.com/jobs/view/senior-qa-engineer-ai-products-6-months-contract-at-arabic-ai-4484021755) |
| TELUS Digital | Selfies Data Collection Project | Qatar | 2026-10-29 | Vendor | [link](https://qa.linkedin.com/jobs/view/selfies-data-collection-project-at-telus-digital-4484936723) |
| CrowdGen (Appen) | Speech Data Collection Contributor (Arabic-Qatar) | Qatar | 2026-08-18 | Vendor | [link](https://qa.linkedin.com/jobs/view/speech-data-collection-contributor-arabic-qatarexternal-recruitment-at-crowdgen-4452848086) |
| KAUST | Research Partnership Specialist | Thuwal | 2026-11-10 | Partnerships intake (JD fetched) | [link](https://sa.linkedin.com/jobs/view/research-partnership-specialist-at-kaust-king-abdullah-university-of-science-and-technology-4489435128) |

- Searches covered the UAE, Saudi Arabia and Qatar with these keywords: AI trainer, LLM evaluator, medical annotator, data annotation, RLHF, human data, Arabic linguist, AI tutor, AI data specialist, model evaluation, benchmark, post-training, data partnerships, vendor management AI, German/French speaker AI. Employer-name queries were also run for HUMAIN, M42, QCRI, Fanar, TII, MBZUAI and Core42.
- None returned an AI-trainer, annotator, "data partnerships" or vendor-management role at HUMAIN, TII, QCRI, M42, Core42 or KAUST. — LinkedIn guest API (e.g., [search endpoint](https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=AI%20trainer&location=United%20Arab%20Emirates))

#### Singapore (LinkedIn + MyCareersFuture API, 12 Nov 2026)

| Employer | Title | Date | Note | URL |
|---|---|---|---|---|
| XG Tech Pte. Ltd. (UEN 202405307E; intelligent-vehicle / on-device AI) | Senior Member of Technical Staff (AI Data) | 2026-11-12 (MCF; S$8–16k/mo) | "Manage vendor relationships: scope the work, define quality bars, run trials, audit deliveries… Renegotiate or replace" for SFT, preference and agent-trajectory data (JD fetched) | [MCF](https://www.mycareersfuture.gov.sg/job/engineering/senior-member-technical-staff-xg-tech-3bf6e1896092de33609465e2e3a9d036) |
| XG Tech | Senior MTS (Post-Training) | 2026-11-12 (MCF) | SFT/RL/OPD, preference-data construction | [MCF](https://www.mycareersfuture.gov.sg/job/engineering/senior-member-technical-staff-xg-tech-76af36697e80d8c29acfc65174d1b4b6) |
| Resaro Singapore | AI Data Programme Manager (Contract) | 2026-10-20 (MCF; S$5.9–8.6k) | On-site at a client; oversees "third-party data annotation vendors". Resaro's clients include government and defence (possible exclusion flag) | [MCF](https://www.mycareersfuture.gov.sg/job/information-technology/ai-data-programme-manager-resaro-singapore-4284bdf3f77565f824e0a7641e2353e7) |
| Kuailu Software (Singapore) | LLM Evaluation Engineer | 2026-11-06 (MCF; S$6–12k) | Automated benchmark pipelines (MMLU, C-Eval, BFCL, τ-bench); in-house | [MCF](https://www.mycareersfuture.gov.sg/job/engineering/large-language-model-evaluation-engineer-kuailu-software-2694fd5b5ed0bb74bb71ad5cc0d3024c) |
| Cygnus Med (R&D arm of Furui Medical Science) | Freelance Data Annotator (Contract/Part-time) | 2026-10-16 (MCF; S$1.2–2.5k) | Clinical research video annotation | [MCF](https://www.mycareersfuture.gov.sg/job/general-work/freelance-data-annotator-cygnus-med-7844e5051e63716bfd383526b53254fd) |
| SAIL Technology Pte. Ltd. | Senior Research Scientist — Video Generation Post-Training | 2026-11-11 (MCF; S$15–25k) | Possibly Sea AI Lab (not verified) | [MCF](https://www.mycareersfuture.gov.sg/job/information-technology/senior-research-scientist-%E2%80%94-video-generation-post-training-sail-technology-5ab231551184b8b0c106f5a1dd6161d5) |
| TikTok | LLM & AI Operations Specialist (Risk Operations) – TikTok LIVE | 2026-11-02 (MCF) | ByteDance | [MCF](https://www.mycareersfuture.gov.sg/job/information-technology/llm-ai-operations-specialist-tiktok-live-tiktok-bfce10eb0bfdc45dc78a6893dc1eb491) |
| TikTok | AI Data Operation Specialist (Thai / Malay / Arabic speaking) | 2026-10-22 to 2026-11-04 | SEA and Arabic languages, not European | [LinkedIn (Arabic)](https://sg.linkedin.com/jobs/view/tiktok-live-ai-data-operation-specialist-arabic-speaking-at-tiktok-4481611009) |
| Shopee | LLM Algorithm Engineer (Post Training) | 2026-10-19 | Confirms prior-round snippet | [LinkedIn](https://sg.linkedin.com/jobs/view/llm-algorithm-engineer-post-training-at-shopee-4479993974) |
| Manus AI (Meta) | Agent Evaluation Engineer | 2026-10-18 | | [LinkedIn](https://sg.linkedin.com/jobs/view/agent-evaluation-engineer-at-manus-ai-4480898815) |
| GovTech Singapore | Senior / Data Scientist (Model Training and Evaluation), Giant Robots Labs | 2026-10-28 | | [LinkedIn](https://sg.linkedin.com/jobs/view/senior-data-scientist-model-training-and-evaluation-giant-robots-labs-at-govtech-singapore-4483851671) |
| NTU | Research Engineer I (AI Evaluation, Trust Technologies) | 2026-10-07 | | [LinkedIn](https://sg.linkedin.com/jobs/view/research-engineer-i-ai-evaluation-trust-technologies-at-nanyang-technological-university-singapore-4475562287) |
| Resaro | Senior AI Engineer – Agentic AI Evaluation | 2026-10-30 | | [LinkedIn](https://sg.linkedin.com/jobs/view/senior-ai-engineer-agentic-ai-evaluation-at-resaro-4457368124) |

- I found no Singapore posting for German, French or other European-language evaluators at a lab or buyer.
- "AI trainer" results on MCF were dominated by corporate training-delivery roles, which are false positives. — [MCF API](https://api.mycareersfuture.gov.sg/v2/jobs?search=AI%20trainer&limit=5)

#### India (LinkedIn, 12 Nov 2026)

| Employer | Title | Date | Note | URL |
|---|---|---|---|---|
| Zyka AI | German Language Team Lead – Data Annotation | 2026-11-06 | Requires HSK 6 Chinese; leads up to 50 | [link](https://in.linkedin.com/jobs/view/german-language-team-lead-%E2%80%93-data-annotation-at-zyka-ai-4486975630) |
| Zyka AI | French Language Team Lead – Data Annotation | 2026-11-06 | Same structure | [link](https://in.linkedin.com/jobs/view/french-language-team-lead-%E2%80%93-data-annotation-at-zyka-ai-4486954975) |
| iMerit | Medical Data Annotation Specialist (MBBS) | 2026-10-27 | Kolkata; clinical NLP and ontologies | [link](https://in.linkedin.com/jobs/view/medical-data-annotation-specialist-mbbs-at-imerit-4483299678) |
| Innodata | Subject Matter Experts | 2026-10-19 | Noida | [link](https://in.linkedin.com/jobs/view/subject-matter-experts-at-innodata-inc-4478243710) |
| DesiCrew Solutions | RLHF Quality Analyst | 2026-10-09 | Chennai | [link](https://in.linkedin.com/jobs/view/rlhf-quality-analyst-at-desicrew-solutions-private-limited-4477654657) |
| Hirely | Bilingual Hindi AI Safety Specialist ($18–22/hr, remote) | 2026-11-11 | | [link](https://in.linkedin.com/jobs/view/bilingual-hindi-ai-safety-specialist-%2418-%2422-hour-remote-at-hirely-4487858688) |
| Outlier (Scale) | AI Trainer – Bengali | 2026-11-11 | | [link](https://in.linkedin.com/jobs/view/ai-trainer-bengali-at-outlier-4488664520) |
| Rempact | Clinical AI Data Specialist | 2026-08-18 | Bengaluru | [link](https://in.linkedin.com/jobs/view/clinical-ai-data-specialist-at-rempact-4454748726) |
| Skild AI | Senior Master Annotator | 2026-10-29 | Robotics | [link](https://in.linkedin.com/jobs/view/senior-master-annotator-at-skild-ai-4484988603) |
| Gnani.ai | QA Consultant (Hindi/Bengali/Marathi) | 2026-10-27 | IndiaAI grantee; Indic languages | [link](https://in.linkedin.com/jobs/view/qa-consultant-hindi-bengali-marathi-at-gnani-ai-4483622202) |
| Sarvam | ML Engineer (Training Infra), Foundational Models | 2026-10-07 | No data, annotation or evaluation roles among visible Sarvam listings | [link](https://in.linkedin.com/jobs/view/ml-engineer-training-infra-foundational-models-at-sarvam-4475457018) |

- False positive: Accenture India's "Specialist – AI Trainer" (Hyderabad, 2026-09-25) is a classroom trainer role, not data work. — [LinkedIn](https://in.linkedin.com/jobs/view/specialist-ai-trainer-at-accenture-in-india-4448328722)

### Inferences
- **[Assessment]** Across all three regions, lab-side ads ask for data engineers and evaluation engineers who build pipelines in-house. Expert human work is posted by vendors, and several vendors recruit European-language and medical experts for Western labs (Joblet-AI Dutch and pharmacy, Ethos, Concentrix DE/FR). PathWize therefore competes for Western-lab demand routed through Gulf and India talent channels, not for Gulf-lab demand.
- **[Assessment]** XG Tech (Singapore) is a concrete new buyer-side lead. It explicitly runs data vendors with trials and audits for SFT, preference and agentic data, though its domains are coding and video, outside PathWize's core. Resaro's client engagement may be defence and needs screening.

### Gaps
- **Blocked boards**: Naukri (HTTP 406, recaptcha), Bayt (403) and GulfTalent (403) could not be checked. Indeed and Instahyre were not attempted.
- LinkedIn guest results are capped per query, sampled at about the first 25 per keyword × location, so absence is not proof.
- I did not fetch the full JD for every listed posting.

---

## Q8. GeBIZ (Singapore) and Etimad (Saudi): 2026 AI training-data / annotation / LLM-evaluation tenders; foreign eligibility

### Takeaway
**GeBIZ.** I checked all 18,464 GeBIZ tender records, FY2021 to 31 Mar 2026. The dataset contains no tender for LLM training data, expert annotation or LLM evaluation. The only annotation tender ever was a 2022 HTX audio-annotation contract (security agency, likely excluded). AI-safety spending goes to events and consultancy (IMDA's red-teaming challenge, an AI-safety consultancy study). Overseas suppliers can register on GeBIZ through a Corppass Foreign Entity account, with immediate approval.

**Etimad.** I found no data-annotation tender in 2026 via mirror sites. AI tenders are about infrastructure and tools (SDAIA AI infrastructure and HPC Phase Two, NCEL AI tools). The regional-HQ bar gained a formal exemption route via Etimad in Feb 2026.

### Cited Findings

**GeBIZ dataset coverage and annotation tenders**
- The MOF "Government Procurement via GeBIZ" dataset covers 1 Apr 2021 – 31 Mar 2026 and was last updated 26 Apr 2026. I downloaded all 18,464 records via the data.gov.sg API on 12 Nov 2026. — [data.gov.sg metadata](https://api-production.data.gov.sg/v2/public/api/datasets/d_acde1106003906a75c3fa052592f2fcb/metadata); [dataset](https://data.gov.sg/datasets/d_acde1106003906a75c3fa052592f2fcb/view)
- The keyword "annotation" matches one tender: HTX000ETT21000011, Home Team Science & Technology Agency, "2-year contract for provision of services for audio annotation". It was awarded 18 Feb 2022 to RMA Contracts Pte Ltd for S$391,824 (older; security sector). — [data.gov.sg](https://data.gov.sg/datasets/d_acde1106003906a75c3fa052592f2fcb/view)

**AI-related GeBIZ awards, 2025–Mar 2026 (my regex filter on tender descriptions)** — all from [data.gov.sg](https://data.gov.sg/datasets/d_acde1106003906a75c3fa052592f2fcb/view)
- IMD000ETT25000023, IMDA, "Singapore Artificial Intelligence (AI) Safety Red Teaming Challenge 2026": Terra Systems Pte Ltd, S$175,000, 14 Nov 2025.
- IMD000ETT25000009, IMDA, "Consultancy Study for AI Safety and Trust Technologies": Analysys Mason, S$410,430, 25 Aug 2025.
- GVT000ETT25000014, GovTech, "SG AI CTF 2025": Terra Systems, S$115,000. This is cyber, which PathWize excludes.
- NST000ETT25000051, A*STAR, on-premise AI cluster: PTC System, S$3.98M.
- TRAHQ0ETT25000008, MTI, AI-powered media sentiment analysis: Mosaic Insights, S$762,641.
- None covers training data, expert annotation or LLM evaluation by domain experts.

**GeBIZ eligibility for foreign suppliers**
- GeBIZ FAQ: "Overseas suppliers can register as a GeBIZ Trading Partner (GTP) if they have a valid Corppass Account for Foreign Entities". — [GeBIZ FAQ](https://www.gebiz.gov.sg/faq.html)
  - Steps: register with Corppass as a Foreign Entity (corppass.gov.sg > Register for Corppass > Foreign Entity) and be granted GeBIZ e-services access.
  - "Applications will be approved immediately upon successful submission."
  - An Authorised Representative aged 18 or over is required.
- GeBIZ also offers a "GeBIZ ID" login for foreign companies without a UEN. — [GeBIZ procurement regime](https://www.gebiz.gov.sg/singapore-government-procurement-regime.html)

**Etimad 2026 AI tenders (BidsFactory mirror, search snippets)**
- National Center for E-Learning, "Employment and Operation of Artificial Intelligence Tools", published 17 Aug 2026, with proposals due before 3 Sep 2026. — [BidsFactory](https://bidsfactory.com/en/tenders/-saudi_etimad-2b560a3d401d696a)
- SDAIA, "Development and operation of artificial intelligence infrastructure – Phase Two". — [BidsFactory](https://bidsfactory.com/es/tenders/-saudi_etimad-748d8819cb779750)
- SDAIA, "high-performance computing capabilities for artificial intelligence – Phase Two". — [BidsFactory](https://bidsfactory.com/jp/tenders/-saudi_etimad-ceed97d442b31d02)
- No tender mentioning annotation, labelling (توسيم) or LLM evaluation was found in English or Arabic searches.

**Etimad eligibility: regional-HQ exemptions (Feb 2026, search snippets)**
- The Local Content and Government Procurement Authority told government bodies they can apply through Etimad for exemptions to contract foreign firms without a Saudi regional HQ, under defined conditions. — [Arab News](https://www.arabnews.com/node/2633989/amp); [Zawya](https://www.zawya.com/en/economy/policy/saudi-permits-exemptions-to-enable-government-contracting-with-international-companies-lacking-regional-headquarters-qrsapcbm); [Lexis Middle East](https://www.lexis.ae/2026/02/27/ksa-government-allowed-exemptions-for-contracting-with-firms-lacking-regional-hq/)
- Earlier 2024 carve-outs reportedly covered:
  - contracts executed outside the Kingdom;
  - sole providers;
  - emergencies;
  - technically superior bids that are 25% cheaper than the next best;
  - tenders with no competing offers.
  - Source (search snippet): [Sharikat Mubasher](https://sharikatmubasher.com/news/article/21393439/saudi-rhq-program-goes-into-effect-with-exceptions)
- Prior round, still valid: temporary MoC registration or a Saudi agent; local-content rules; PDPL in-Kingdom data constraints. — [trade.gov](https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector)

### Inferences
- **[Assessment]** Neither Singapore nor Saudi government procurement currently buys expert AI training data or evaluation through open tenders. Singapore buys AI-safety events and consultancy. Saudi buys infrastructure, and model and evaluation work goes to SDAIA, HUMAIN and partners (BALSAM/aiXplain).
- **[Assessment]** GeBIZ registration is quick and cheap for an EU firm, worth doing for alerts. The relevant future buyers would be IMDA and the AI Verify Foundation (red-teaming or assurance with domain experts) and Synapxe or MOH for healthcare.
- **[Assessment]** In Saudi Arabia, the new RHQ exemption route marginally lowers the barrier. "Contracts executed outside the Kingdom" could in principle cover remote EU expert evaluation, but PDPL and local-content rules still make direct Etimad bidding unrealistic without a Saudi partner.

### Gaps
- GeBIZ open and awarded tenders from 1 Apr to 12 Nov 2026 are not in the dataset. The live GeBIZ opportunity search is JavaScript-only and was not queried.
- I did not query Etimad directly (login or JavaScript). The findings rely on the BidsFactory mirror and search.
- The official text of the Feb 2026 Saudi RHQ exemption criteria was not found. The details come from secondary outlets.
