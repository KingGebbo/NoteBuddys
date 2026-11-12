# Asiens KI-Labore bauen Einkaufsapparate für Expertendaten

*Stand: 12. November 2026. Synthese aus sechs Recherche-Notizen (China Big Tech, China Start-ups/Embodied AI, Korea/Japan/Taiwan, Südostasien/Indien/Golf, asiatische Datenanbieter, Jobportale/Einkaufskanäle). Belegte Fakten tragen eine nummerierte Quelle (Liste am Ende). Eigene Bewertungen sind ausdrücklich als **Einschätzung** markiert. Personen werden nach Rolle bezeichnet; Namen nur bei Führungskräften, die in der Presse namentlich berichtet wurden.*

## Kurzfazit

Chinas KI-Labore haben 2026 aus gelegentlichem Datenzukauf eigene Einkaufsorganisationen gemacht – der wichtigste neue Befund gegenüber dem internen Dokument. ByteDance hat Einkauf und Qualitätssicherung in einer neuen Abteilung erster Ebene, „AI 数据与安全“ (AI Data & Safety), mit **rund 1.000 Mitarbeitenden** gebündelt [1, 2]. Tencent hat seine AI-Data-Abteilung im September 2026 unter eine neue Leitung gestellt und mit ExpertHub eine Plattform gestartet, die ausdrücklich Juristen mit Anwaltszulassung, approbierte Mediziner, CFA/CPA-Inhaber und Übersetzer für Deutsch, Französisch und Spanisch sucht und eine Kooperationsadresse nennt [3, 4]. Alibaba baut laut Stellenanzeige ein Lieferanten-Ökosystem für ausgelagertes Modelltraining „von null“ auf und erklärt Piloten zur „neuen Ausschreibung“ [5]. Bei den Start-ups schreiben Moonshot (Kimi) und Shengshu (Vidu) Auslands- bzw. globale Datenlieferanten direkt in Stellenprofile, Shengshu sucht zusätzlich muttersprachliche Review-Pools für Deutsch, Italienisch und Spanisch [6, 7, 8], und MiniMax weist im Börsenprospekt **rund 65 Mio. HK$ pro Jahr** für Datenkauf, Annotation und Compliance aus [9]. **Einschätzung:** Die realistischsten Einstiege für PathWize sind das External-Partnership-Development-Team von ByteDance in Singapur, die Einkaufsrollen bei Shengshu und Moonshot, Ant Groups medizinische Plattform AQ sowie außerhalb Chinas das ausdrücklich für Auslandslieferanten offene Coupa-Portal von G42 [10] und das Institute of Foundation Models (IFM) des MBZUAI, das laut Stellenanzeige externe Datenanbieter und Fachexperten steuert [11]; als Kanalpartner kommen Haitian Ruisheng/Dataocean und Appen China infrage, die Chinas Labore bei der Internationalisierung beliefern – Dataocean baut dafür gerade einen Europa-Vertrieb ohne verifizierte EU-Gesellschaft auf [12, 13, 14]. Die Grenze setzt weniger der Bedarf als die Compliance: Tencent steht seit 2025 auf der US-Liste 1260H, Alibaba und Baidu seit dem 8. Juni 2026, Zhipu auf der Entity List [15, 16, 17] – **Einschätzung:** die Ansprache sollte deshalb mit ByteDance, Ant, Shengshu und den Golf-Akteuren beginnen. Preislich sind EU-Tier-1-Experten für chinesische Käufer erreichbar, denn chinesische Vertikal-Experten werden bereits mit **500–800 RMB pro Stunde** (rund 65–105 EUR) ausgeschrieben [18].

## Lead-Liste: siebzehn Adressen mit belegtem Bedarf

Die Reihenfolge gewichtet Bedarf, Erreichbarkeit und Risiko; Kanalpartner sind als „(Kanal)“ markiert. Die Spalten „Fit“ und „Nächster Schritt“ sind Einschätzungen. Alle anderen Spalten sind belegt.

| # | Player | Land | Belegter Bedarf | Konkreter Einstieg / Kontaktkanal | US-Listen-Status | Fit (Einschätzung) | Nächster Schritt (Einschätzung) |
|---|---|---|---|---|---|---|---|
| 1 | ByteDance – AI Data & Safety (vormals Seed Global Data), Xpert | CN / SG / US | Lieferantenkategorien SFT, RM, Eval, Multimodal, Agentic Workflow; Xpert rekrutiert Experten auch über „vendor partnerships“ und setzt >200 Experten aus Auslandsinstitutionen ein [19, 20] | External Partnership Development Team, Singapur (Stelle A226312B); PM-Rolle für „global data labeling vendors“ (A95047A); Einkaufsdesk San Jose, Datenteam Los Angeles [21, 22, 23] | nicht 1260H, nicht Entity List [24] | hoch | Lieferanten-One-Pager entlang der fünf Kategorien; Ansprache des Singapur-Teams mit Mandarin-fähigem BD |
| 2 | Shengshu Technology (Vidu) | CN | „数据供应链负责人“ (Leitung Daten-Lieferkette) baut ein globales multimodales Lieferantennetz auf; „数据策略专家（小语种）“ (Datenstratege, kleinere Sprachen) steuert muttersprachliche Review-Pools DE/IT/ES/RU/KO über Outsourcing [7, 8] | Leitung Daten-Lieferkette und „数据商务经理“ (Daten-Business-Manager), Beijing; Feishu-Karriereseite [25] | auf keiner Liste gefunden | hoch | Pilot: muttersprachliche Caption- und Video-Evaluation in DE/IT/ES |
| 3 | MBZUAI – Institute of Foundation Models (IFM) | VAE / Paris / Sunnyvale | Rolle „Agentic Data & Benchmarking“: externe Datenanbieter und Fachexperten steuern, Trajektorien beschaffen, RL-Umgebungen bauen [11] | Leads für Daten und Benchmarking; Labor in Paris; ifm.ai/collaborate [26, 27] | – | hoch | Termin im Pariser Labor; Angebot STEM- und Biochemie-Trajektorien |
| 4 | G42 / Inception42 / M42 | VAE | Inception–Scale AI: SFT/RLHF und branchenspezifische Evaluationsdatensätze, auch Gesundheit; M42 betreibt Klinik-LLM-Evaluation (MEDIC) [28, 29] | Coupa-Lieferantenportal, offen für Auslandslieferanten, gebührenfrei; supplierregistration@g42.ai; M42 ist ausgenommen und separat anzusprechen [10] | – | mittel–hoch (G42); hoch (M42, Medizin) | Coupa-Registrierung sofort; M42 direkt mit Radiologie- und Dermatologie-Evaluation |
| 5 | Ant Group – AQ (蚂蚁阿福) | CN | Rekrutiert „全球医生和医学生“ (Ärzte und Medizinstudierende weltweit) als „模型训练医学专家“ (medizinische Experten fürs Modelltraining); mehrere Tausend Personen in dreistufiger medizinischer Annotation [30, 31] | Geschäftsentwicklung AQ/Ant Health; kein Lieferantenkanal belegt | nicht 1260H [24]; Nähe zu Alibaba | hoch (Medizin) | Pilot: EU-Dermatologen und -Radiologen bewerten AQ-Antworten gegen europäische Leitlinien |
| 6 | Haitian Ruisheng / Dataocean AI (Kanal) | CN | Kunden u. a. Zhipu, Meta, Alibaba, Tencent, Moonshot, MiniMax; baut Vertrieb in Nordamerika, Europa und Japan/Korea aus; keine EU-Niederlassung gelistet [32, 12, 13] | Unternehmenskontakt, Partnerschaftsangebot | Firma nicht gelistet; Kunde Zhipu steht auf der Entity List | hoch (Kanal) | White-Label-Angebot „EU-Expertenpool, Lieferung aus der EU“ |
| 7 | Moonshot AI (Kimi) / Novascent Pte. Ltd. | CN / SG | „AI数据资源运营/采购经理“ (Datenressourcen-/Einkaufsmanager) sucht Auslandslieferanten für Pretraining, SFT, RL und Multimodal; verlangt Englisch und eigenständige Auslandsverhandlung [6] | Einkaufsteam Beijing (BOSS直聘/Moka); Vertragspartei Novascent Pte. Ltd., Singapur (UEN 202326494K) [33] | nicht gelistet; US-Kongress fragt US-Firmen nach Kimi-Nutzung [34] | mittel–hoch | Einkaufsteam direkt ansprechen; Vertrag über die Singapur-Gesellschaft |
| 8 | MiniMax (Subsup / NanoNoble Pte. Ltd.) | CN / SG / HK | Prospekt: Datenkaufverträge mit Herkunftszusicherungen, Annotation nach Volumen, Einsatz von Fachexperten; ca. 64,9 Mio. HK$ pro Jahr 2026–2030 für Daten [9]; 10x-Fellowship für Ökonomie, Finanzen, Life Sciences und Recht, Büros u. a. in London und San Francisco [35] | Singapur-Töchter; Leitung der Datenbasis Chengdu (inkl. Vendor-Management) [36] | nicht gelistet; Destillationsvorwurf (Feb. 2026) [37] | mittel–hoch | Fellowship-Pipeline und Lieferantenangebot über NanoNoble |
| 9 | Appen China (Kanal) | CN (ASX-Konzern) | Umsatz H1 FY26 76,2 Mio. USD (+80 %), Run-Rate >175 Mio. USD; Wachstum durch „international expansion for Chinese technology companies“ [14] | China-Segment gezielt ansprechen (Appen Global ist Konkurrent) | – | mittel–hoch (Kanal) | Subcontracting für EU-Sprach- und Domänenanteile |
| 10 | TII (Falcon) | VAE | Falcon-H1 nativ auf 18 Sprachen trainiert, davon 10 europäische; Post-Training mit SFT und DPO [38, 39] | Kaltakquise (kein Einkaufssignal belegt) | – | mittel–hoch | Musterdatensatz: Experten-SFT und Präferenzdaten auf DE/FR/IT/PL |
| 11 | Flitto (Kanal) | KR | Auftragsbestand ca. 31,4 Mrd. KRW mit „global big tech“; Fokus auf „expert knowledge datasets“; keine EU-Niederlassung [40, 41] | Unternehmenskontakt | – | mittel–hoch (Kanal) | Angebot europäischer Fach-Reviewer |
| 12 | Tencent – AI Data 部 / ExpertHub (混元智囊团) | CN / US | ExpertHub sucht Juristen mit BAR-Zulassung, approbierte Mediziner, CPA/CFA/ACCA, STEM ab Master sowie Übersetzung DE/FR/ES [4]; Stelle „Data Partnerships Lead“ im Bereich Procurement & Sourcing [42] | experthub@tencent.com; Data Partnerships Lead in Palo Alto/Los Angeles | **1260H seit Jan. 2025** [16] | Bedarf hoch, Risiko hoch, daher mittel | erst nach Compliance-Entscheid; Umfang strikt auf Medizin, Recht, Finanzen und Sprachen begrenzen |
| 13 | Alibaba – AIData (数据技术及产品部), Siriser, Qwen | CN | „大模型外包训练采购专家“ (Einkaufsexperte für ausgelagertes LLM-Training) baut ein Lieferanten-Ökosystem „von null“ auf; Siriser rekrutiert Finanz-PhDs und „globale“ Experten [5, 43] | AIData-Einkaufsexperten in Hangzhou und Beijing; Stelle 1170302 [44] | **1260H seit 8. Juni 2026** [15] | Bedarf hoch, Risiko hoch, daher mittel | Compliance-Entscheid; danach Pilotangebot an AIData |
| 14 | Korea: LG AI Research, SK Telecom, Upstage (독파모-Finalisten) | KR | Experten-Review zählt 35 % der Bewertung in Stufe 2; für 2027 vorgeschlagen: 750 Mrd. KRW für Trainingsdaten über die Staatsbank KDB [45, 46] | Direktvertrag mit den Labs oder als Subunternehmer von Flitto, Datumo oder Crowdworks | – | mittel | Partnergespräche vor der Ausschreibung (Dez. 2026 bis Feb. 2027) |
| 15 | StepFun | CN | „大模型数据生态运营/专家资源运营“ (Experten-Ressourcenbetrieb): Experten für Finanzen, Forschung, Cybersecurity und Code; Einkaufsrollen; Qualitätssicherung externer Annotationsanbieter [47, 48] | Beijing (BOSS直聘) | nicht gelistet; laut Wikipedia in einer Destillationswarnung von FBI/NSA/CISA genannt (Sep. 2026, Primärquelle nicht geprüft) [49] | mittel | nur Finanz- und Wissenschaftsanteile anbieten; Cyber ausgeschlossen |
| 16 | DeepSeek | CN | „专业领域数据产品经理“ (Daten-PM für Fachdomänen) für kleinere Sprachen, Medizin und Recht [50]; laut PingWest eigener Einkaufsposten [2] | kein Auslandskanal; Beijing/Hangzhou | Ausschluss bei US-Verteidigungsministerium und Nachrichtendiensten per NDAA FY2026 [51] | Bedarf mittel, Zugang niedrig | beobachten; ggf. über Kanalpartner |
| 17 | Baichuan | CN | Teilzeitrollen für Dermatologie-Bildevaluation, Radiologie (Röntgen/CT/MR) und Onkologie [52] | Beijing; chinesische Approbation verlangt | nicht gelistet | Domäne hoch, Zugang niedrig | beobachten (Börsengang nach Kapitel 18C in Vorbereitung) |

## Stellenanzeigen zeigen, wo Einkauf und Expertenbedarf sitzen

Die Anzeigen sind nach Region und Firma gruppiert, innerhalb der Firma nach Signalwert. „Geprüft“ heißt: Die Seite wurde in der Recherche geöffnet. „Aggregator“ heißt: Die Anzeige stammt aus einer Spiegel- oder Listenseite oder aus einem Suchsnippet, das Original wurde nicht geprüft. Viele Daten sind relativ („vor 6+ Monaten“), der Live-Status am 12. November 2026 ist meist offen.

### China: Einkauf, Lieferantenmanagement und Expertennetze

| Titel | Firma / Team | Ort | Datum / Status | Link | Was es signalisiert |
|---|---|---|---|---|---|
| Partnership Development Analyst – AI Data and Safety | ByteDance, Global Operations, External Partnership Development (früher „Seed Global Data“) | Singapur | A226312B; „vor 6+ Monaten“; Live-Status offen (geprüft) | [joinbytedance](https://joinbytedance.com/search/7589640323472558341), [TCV](https://portfoliojobs.tcv.com/companies/bytedance/jobs/65346076-partnership-development-analyst-ai-data-and-safety) | Laufendes Sourcing und Onboarding von Datenlieferanten für SFT, RM, Eval, Multimodal und Agentic Workflow; Chinesisch erforderlich |
| AI Product Manager Project Intern (AI Data & Safety) – 2026 Start | ByteDance | Singapur | A95047A; Datum nicht angegeben (geprüft) | [joinbytedance](https://joinbytedance.com/search/7634521917428910341) | Qualitätssteuerung für „global data labeling vendors“; Brücke „CN-based research team and overseas vendors“ |
| Expert Community Analyst – Seed Global Data | ByteDance | Singapur | geschlossen (geprüft) | [TCV](https://portfoliojobs.tcv.com/companies/bytedance/jobs/65536229-expert-community-analyst-seed-global-data) | Aufbau eines „overseas expert ecosystem“ inklusive „task pricing“ (Konkurrenz durch Insourcing) |
| Partnership Development Specialist – LLM Data Acquisition and Production | ByteDance LLM Global Data | Los Angeles / San Francisco | A31935; geschlossen | [Lead Edge](https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production) | Lieferantenbasis für SFT/RM/Eval/Multimodal; 104.500–228.000 USD Grundgehalt |
| Product Manager, LLM Data Acquisition and Production | ByteDance LLM Global Data | San Jose / Seattle | Seattle „vor 9 Monaten“ (Aggregator) | [outscal](https://outscal.com/job/product-manager-llm-data-acquisition-and-production-at-bytedance-in-san-jose-california-united-states-1) | Methodik der Datenakquise; Grundgehalt in San Jose bis 414.000 USD |
| Partner Operation Manager, AI Data Service Operations | TikTok ADSO | Singapur | A258236 (geprüft) | [lifeattiktok](https://lifeattiktok.com/search/7673026572663933237) | Steuerung ausgelagerter Annotationsdienstleister, Budgets, Sprachmarkt-Recherche |
| Vendor Management Analyst – AI Data Service Operations | TikTok ADSO | Singapur | Datum offen (Aggregator) | [The Muse](https://www.themuse.com/jobs/tiktok/vendor-management-analyst-ai-data-service-operations) | Leistungsbewertung von Annotationsdienstleistern |
| Data Partnerships Lead | Tencent TEG, Procurement & Sourcing | Palo Alto / Los Angeles | im Nov. 2026 als live bestätigt; 113.900–213.800 USD (geprüft) | [simplify](https://simplify.jobs/p/c719c4f7-29ce-434c-806c-eb377d6c9bb8/Data-Partnerships-Lead) | Datenakquise von der Erstansprache bis zur Verhandlung; Vendor-SLAs; „targeted global sourcing“ |
| 青云计划: 模型数据策略 / AI Data Eval & Insight | Tencent Hunyuan | u. a. Seattle, Singapur | Bewerbungsschluss 5. Sep. 2026 | [WonderCV](https://www.wondercv.com/xiaozhao/tencent-hunyuan-qingyun-plan-2026-11495-220b8a/) | Fachexperten-Daten (Physik, Chemie, Biologie), „third-party evaluation“ |
| Stelle mit Anforderung „外部数据供应商或技术合作伙伴管理经验“ (Erfahrung mit externen Datenlieferanten) | Tencent | n/a | Titel nicht verifiziert (JS-Seite) | [careers.tencent.com](https://careers.tencent.com/jobdesc.html?postId=2092894056538619904) | Lieferantenmanagement auch auf der China-Seite |
| 阿里控股-大模型外包训练采购专家 (Einkaufsexperte ausgelagertes LLM-Training) | Alibaba Holding | Hangzhou (Xixi) | ca. Aug. 2026 (Spiegel geprüft) | [Alibaba](https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=1170302), [watchjobs](https://watchjobs.net/zh/explore/job/c256-1170302/%E9%98%BF%E9%87%8C%E6%8E%A7%E8%82%A1-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%96%E5%8C%85%E8%AE%AD%E7%BB%83%E9%87%87%E8%B4%AD%E4%B8%93%E5%AE%B6-%E6%9D%AD%E5%B7%9E-%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4) | Lieferanten-Ökosystem „von null“; „试点是新的招标“ (Pilot ist die neue Ausschreibung); Exklusivpartnerschaften |
| 大模型数据采购专家 / 大模型数据生态资源运营 (LLM-Datenkauf / Datenökosystem) | Alibaba AIData (数据技术及产品部) | Hangzhou / Beijing | 2026; nur Titel | [51mee](https://offers.51mee.com/offer-detail/60E11DJ8.html) | Zentrale Einkaufsfunktion für Alibabas Modelle |
| 千问办公-研发工程师-数据标注方向 (Qwen, Entwickler Annotation) | Alibaba Qwen | Hangzhou | 9. Nov. 2026 | [freehire](https://freehire.me/jobs/qian-wen-ban-gong-yan-fa-gong-cheng-shi-shu-ju-biao-zhu-fang-xiang-alibaba-group-4lortry5) | Zusammenarbeit mit „专业标注供应商组织“ (professionellen Annotationsanbietern); über 20 Sprachen und Dialekte |
| AI数据资源运营/采购经理 (Datenressourcen-/Einkaufsmanager) | Moonshot AI | Beijing | 22. Mai 2026; 45–75K × 16 (geprüft über DataHub) | [BOSS直聘](https://www.zhipin.com/job_detail/f790bec460d458c60nB739m_ElJS.html) | Auslandslieferanten für Pretraining/SFT/RL/Multimodal; Englisch; eigenständige Auslandsverhandlung |
| 数据标注资源运营经理 (Annotations-Ressourcenmanager) | Moonshot AI | Beijing | 19. Sep. 2026 | [Moka](https://app.mokahr.com/apply/moonshot/148506#/job/89640cd9-5a23-452b-ab32-23c4cc6d9475) | Ganzer Lieferanten-Lebenszyklus: „寻源、准入、考核、分级与退出“ (Sourcing, Zulassung, Bewertung, Einstufung, Ausstieg) |
| AI数据运营专家（高校生态方向）(Datenbetrieb, Hochschulnetz) | Moonshot AI | Beijing | 3. Mär. 2026; 31–51K | [BOSS直聘](https://www.zhipin.com/job_detail/08b000a61e2a9baf0nR73dW5EltU.html) | Eigenes Netz aus Bachelor-, Master- und PhD-Experten für KI-Bewertung |
| 数据供应链负责人 (Leitung Daten-Lieferkette) | Shengshu (Vidu) | Beijing | 15. Aug. 2026 | [Feishu](https://shengshu.jobs.feishu.cn/career/position/detail/7673954239215585578) | Globales Lieferanten-Ökosystem über mehrere Modalitäten; Onboarding, Bewertung, Stufung |
| 具身智能数据供应链经理 (Lieferkette Embodied-AI-Daten) | Shengshu (Vidu) | Beijing | 20. Jul. 2026 | [Feishu](https://shengshu.jobs.feishu.cn/career/position/detail/7659347314686970118) | Annotations-, Simulations-, Crowd- und Standortlieferanten für World-Action-Modelle und VLA |
| 数据商务经理 (Daten-Business-Manager) | Shengshu (Vidu) | Beijing | 31. Jul. 2026 (Aggregator) | [DataHub](https://datahub.ac.cn/ai-jobs/companies/company-dc21f90e51.html) | Datenanbieter suchen, bewerten, ersetzen; Ausschreibungen für Arbeitskräfte-Dienstleister |
| 大模型数据基地负责人 (Leitung LLM-Datenbasis) | MiniMax | Chengdu | Snapshot 3. Nov. 2026 | [BOSS直聘](https://www.zhipin.com/job_detail/f31935f87b09fa110nx43dS4E1RT.html) | Eigene Annotationsbasis plus Vendor-Management für SFT-, Präferenz- und Multimodaldaten |
| 大模型数据生态运营/专家资源运营 (Experten-Ressourcenbetrieb) | StepFun | Beijing | 3. Nov. 2026; 25–50K × 16 | [BOSS直聘](https://www.zhipin.com/job_detail/d5176111d4a9f5590nx829S4E1pY.html) | Experten für Finanzen und Forschung (Cyber ausgeschlossen) für Aufgabendesign, Annotation und Benchmarks; Englisch von Vorteil |
| 资源运营（模型采购方向）/ 采购开发（API、大模型方向）(Einkauf) | StepFun | Beijing | 16. Okt. 2026 (Aggregator) | [DataHub](https://datahub.ac.cn/ai-jobs/companies/company-8db085b6de.html) | Lieferantensuche und Verhandlung |
| 专家数据生态负责人 (Leitung Expertendaten-Ökosystem) | ModelBest | Beijing | 30. Okt. 2026 (Aggregator) | [DataHub](https://datahub.ac.cn/ai-jobs/companies/company-50d74f662d.html) | Eigene Fachexperten-Community |
| 大客户渠道经理(大模型数据合作方向) (Key-Account-Manager LLM-Daten) | ungenannter chinesischer Datenanbieter | Beijing | 30–60K × 15 (Aggregator) | [Liepin](https://www.liepin.com/a/79373525.shtml) | Anbieterseite will „进入大模型客户的技术决策圈“ (in den technischen Entscheidungskreis der Labore) |
| Data Procurement, LLM & AI | ungenannter Kunde (Personalberatung DSJ Global) | Beijing | Datum offen; Seite lieferte 429 | [DSJ Global](https://www.dsjglobal.com/en-ca/job/data-procurement-llm-ai-pr592398_1778673245) | Einkauf von Trainings-, Test- und Multimodaldatensätzen |

### Europäische Sprachen und westliche Fachdomänen

| Titel | Firma / Team | Ort | Datum / Status | Link | Was es signalisiert |
|---|---|---|---|---|---|
| 数据策略专家（小语种）(Datenstratege, kleinere Sprachen) | Shengshu (Vidu) | Beijing | 14. Aug. 2026 | [Feishu](https://shengshu.jobs.feishu.cn/career/position/detail/7673910436743465270) | Muttersprachliche Review-Pools für KO/DE/IT/ES/RU über Outsourcing-Anbieter; Doppelblind-Review; Benchmarks |
| 专业领域数据产品经理 (Daten-PM Fachdomänen: 小语种、医学、法律) | DeepSeek | Beijing / Hangzhou | Rekrutierungsrunde vom 25. Jun. 2026 | [Sina](https://finance.sina.com.cn/roll/2026-06-26/doc-iniesrah2111752.shtml) | Kleinere Sprachen, Medizin und Recht als eigene Datendomänen |
| 模型训练医学专家 (Medizinexperte Modelltraining) | Ant Group, AQ (蚂蚁阿福) | China | 21. Okt. 2026 | [Beijing Daily](https://news.bjd.com.cn/2026/10/21/12003286.shtml) | Ärzte und Medizinstudierende „weltweit“; Master/PhD |
| 10x Team研究员 / Fellowship | MiniMax | Shanghai, Beijing, Hongkong, San Francisco, London | Mai 2026 | [Yicai](https://www.yicai.com/news/103178255.html) | Senior-Experten für Ökonomie, Finanzen, Life Sciences, Chemie, Mathematik, Recht; mindestens 4 Monate vor Ort |
| ExpertHub / 混元智囊团 (Expertenprogramm) | Tencent | remote | Start Sep. 2026 | [Tencent](https://expert.tlabel.tencent.com/) | BAR-Zulassung, englisches Fallrecht, Approbation, CPA/CFA/ACCA, Übersetzung DE/FR/ES |
| 皮肤科疾病图片评测专家 / 医学影像诊断专家（兼职）(Dermatologie-Bildevaluation / Radiologie, Teilzeit) | Baichuan | Beijing | 29. Jan. bzw. 20. Jul. 2026 (Aggregator) | [DataHub](https://datahub.ac.cn/ai-jobs/companies/company-47ce5eabe1.html) | Dieselben Domänen wie die PathWize-Piloten, aber mit chinesischer Klinikerfahrung |
| 大模型数据运营-小语种/方言方向实习生 (LLM-Datenbetrieb, kleinere Sprachen) | Meituan | China | Datum offen (Aggregator) | [niuqizp](https://campus.niuqizp.com/job-vl85L555a.html) | Französisch, Japanisch, Russisch, Portugiesisch |
| TikTok LIVE – AI Data Operation Specialist (German Speaking) | TikTok | London | Aggregator; Schätzung 70–90k GBP | [aijobs.net](https://aijobs.net/job/JDDW74qETZOz9xP/apply/) | Deutschsprachige LLM-Trainingsdaten und Modelltests |
| Safety Model Data QA Analyst (German Speaking) – Third-party Associate | TikTok | n/a | nur Titel (Aggregator) | [The Muse](https://www.themuse.com/jobs/tiktok/safety-model-data-quality-assurance-analyst-german-speaking-thirdparty-associate) | Besetzung über Personaldienstleister, also ein Vendor-Einstieg |
| Community Operations Specialist, EU-CAI (DE/ES/IT/FR, Third-party Associate) | TikTok | London | Aggregator | [Fairygodboss](https://fairygodboss.com/jobs/tiktok/community-operations-specialist-eu-cai-german-spanish-italian-french-speaker-third-party-associate-71d64d9efd353a4986916364f525aa71) | Europäische Sprachkapazität über Dritte |
| TikTok LIVE – Content Quality Analyst (German Speaking) | TikTok | London | 15. Jul. 2025 (vor 2026) | [jobr.pro](https://jobr.pro/job/23921287/tiktok-live-content-quality-analyst-german-speaking) | RLHF-Erfahrung „strongly preferred“ |
| 小语种大模型数据标注 (LLM-Annotation, kleinere Sprachen) | 广州淇至科技 (kleiner Anbieter) | Guangzhou | 3. Aug. 2026; 8.000–10.000 RMB/Monat (geprüft) | [niuqizp](https://campus.niuqizp.com/job-vmU5zM5NC.html) | ES/FR/DE/PT-Annotation und LLM-Evaluation im Niedrigpreissegment |
| 小语种采标 德语采标 法语采标 (Datenerhebung DE/FR) | 中洲联创（厦门） | landesweit, teils Heimarbeit | 4. Sep. 2026; „2k–4k“ | [niuqizp](https://campus.niuqizp.com/job-vYm5anzLz.html) | Untere Preisgrenze für europäische Sprachen in China |
| Language Specialist: Slovenian / Slovak / Latvian / Catalan | iMerit Scholars (EXL) | Slowenien, Slowakei, Lettland, Andorra/Spanien | Abruf 12. Nov. 2026; IDs 899, 898, 896, 895 | [scholars.net](https://scholars.net/) | Ein asiatisch verwurzelter Konkurrent rekrutiert direkt in der EU |

### Außerhalb Chinas: Korea, Japan, Singapur, Golf, Indien

| Titel | Firma / Team | Ort | Datum / Status | Link | Was es signalisiert |
|---|---|---|---|---|---|
| Research Scientist, Agentic Data & Benchmarking | MBZUAI-IFM | Sunnyvale (Labor auch in Abu Dhabi und Paris) | 8. Jun. 2026 | [zapply](https://zapply.jobs/jobs/722c6f66-4a65-47e2-a13a-08e7df6ce4b8/) | „Manage technical relationships with external data vendors and domain experts“ |
| Technical Program Manager, LLM data | Rakuten Asia | Singapur | Datum offen (Aggregator) | [startup.jobs](https://startup.jobs/technical-program-manager-llm-data-rakuten-asia-pte-ltd-8484819) | Vendor-Management für SFT/RLHF-Programme |
| Principal ML Engineer, AI Platform (Foundation Model Post-Training) | Grab | Singapur | Dez. 2025 (Aggregator) | [grab.careers](https://www.grab.careers/en/jobs/744000147146029/principal-machine-learning-engineer/) | Steuerung menschlicher Annotations-Workflows fürs Post-Training |
| Vendor Management Lead | G42 | VAE | nicht verifiziert (403) | [GulfTalent](https://www.gulftalent.com/mobile/uae/jobs/vendor-management-lead-334936) | Mögliche Lieferantensteuerung im Konzern |
| LLM Research Engineer (Pre-training) | Kakao | Pangyo | 2./3. Okt. 2026 | [zighang](https://zighang.com/recruitment/502ca2e0-e77c-48be-8d14-8c76098572e3) | Datensammlung und -generierung, aber Forschungsrolle, kein Einkauf |
| Data Manager | Upstage | Gyeonggi | 30. Sep. 2025, geschlossen | [zighang](https://zighang.com/recruitment/abc8da74-f9a8-4459-b82b-9149640b1160) | Datensätze mit „external teams“ produzieren |
| Data Scientist – Evaluations, Chanakya | Sarvam AI | Bengaluru | 17. Apr. 2026 (Drittseite) | [Sarvam](https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e) | Annotation mit Fachexperten, aber Quellen „doctrine documents, field reports“: verteidigungsnah, **ausgeschlossen** |

Die Singapurer ByteDance-Käuferrollen verlangen Chinesisch und beschreiben ausdrücklich die Brücke zwischen chinesischem Forschungsteam und ausländischen Anbietern [19, 22]; laut Epoch AI entfallen 93 % der lokalisierten Stellen von sechs führenden chinesischen Labs auf Beijing, Hangzhou und Shanghai [53]. **Einschätzung:** Die Titel haben sich von „标注运营“ (Annotationsbetrieb) zu „数据资源采购“ (Datenressourcen-Einkauf) und „数据供应链“ (Daten-Lieferkette) mit formaler Zulassung, Einstufung und Ausstieg von Lieferanten verschoben. Spezifikation und Budget bleiben in China, weshalb Mandarin im Vertrieb faktisch Pflicht ist. Für LinkedIn-Recherchen eignen sich Titelsuchen wie „Partnership Development – LLM Data Acquisition“, „AI Data and Safety“, „Data Partnerships Lead“, „数据供应链“ und „数据资源采购“.

## China Big Tech: ByteDance und Tencent zentralisieren, Alibaba baut neu auf

### ByteDance: eine Abteilung mit tausend Leuten kauft für alle Modelle ein

Seit Juni 2026 integriert ByteDance seine Datenfunktionen in eine neue Top-Level-Einheit auf einer Ebene mit Seed, Flow und Douyin, die für alle Foundation-Modelle „setting standards, sourcing and procurement, data synthesis and cleaning, and quality evaluation“ verantwortet, **rund 1.000 Mitarbeitende** zählt und laut KrASIA vom früheren TikTok-Manager Adam Wang geleitet wird [1]. PingWest bestätigte am 3. November 2026, dass mehrere Einkaufs- und QA-Teams zur Abteilung erster Ebene „AI 数据与安全“ verschmolzen wurden, dass ByteDance und Tencent die Einkaufsbefugnis zentralisieren und ROI-Rechnungen verlangen und dass ByteDance für „heiße“ Daten **ein Mehrfaches zahlt, wenn es dafür 6–12 Monate Exklusivität erhält** [2]. Die operative Lieferantenschnittstelle sitzt in Singapur: Die Stelle „Partnership Development Analyst – AI Data and Safety“ (A226312B) soll laufend Datenlieferanten finden, Start-ups und führende Anbieter onboarden, Verträge verhandeln und Einkaufsentscheidungen analytisch vorbereiten; als Lieferantenkategorien nennt sie **SFT, RM, Eval, Multimodal und Agentic Workflow** und verlangt Chinesisch für die Abstimmung mit den Forschungsteams in China [21, 19]. Dieselbe Stellen-ID lief früher unter „Seed Global Data“ – der Umbau ist bis in die Titel sichtbar [21]. Eine Praktikumsstelle (A95047A) beschreibt die Aufgabe noch direkter: Qualität für „global data labeling vendors“ sichern und „the CN-based research team and overseas vendors“ auf Standards abstimmen [22]. In den USA unterhält ByteDance einen Einkaufsdesk in San Jose [23] sowie Product- und Partnership-Rollen für „LLM Data Acquisition and Production“ in San Jose, Seattle, Los Angeles und San Francisco [54, 55]. Als Lieferanten nennt ChinaTalk Abundant (Code), Pareto (Human-Data-Erhebung), Eaglepoint (Code und Gesundheit) und DeccanAI [23]; Eaglepoint gehört zu 51 % der Pekinger Global Mofy und produziert in Ostafrika [56].

Zugleich baut ByteDance eigene Expertenkapazität auf. Die Plattform Xpert meldet **über 50.000 Experten** [57], und das XpertBench-Paper (März 2026) dokumentiert, dass Xpert über „direct registration, peer referrals, and **vendor partnerships**“ rekrutiert, mehr als 200 Experten ausländischer Institutionen einsetzt und 183 juristische Qualifikationen, 163 ärztliche Approbationen sowie CFA-, CPA- und CATTI-Inhaber zählt; zugelassen wird nach Fachprüfung und begutachteter Probeannotation [20]. Die inzwischen geschlossene Stelle „Expert Community Analyst“ sollte in Singapur einen „overseas expert ecosystem“ inklusive „task pricing“ für internationale Experten aufbauen [58]. Unter supplier.bytedance.com liegt nur ein Lieferanten-Verhaltenskodex, kein Registrierungsportal [59]. Daneben steuert TikTok in Singapur mit „AI Data Service and Operations“ (ADSO) ausgelagerte Annotationsdienstleister [60] und besetzt in London, Dublin und Kuala Lumpur deutsch-, spanisch-, italienisch- und französischsprachige KI-Datenrollen, teils als „Third-party Associates“ über Personaldienstleister [61, 62, 63]. ByteDance steht weder auf der 1260H-Liste noch auf der Entity List [24].

**Einschätzung:** ByteDance ist der reifste und am besten erreichbare Käufer. Das Angebot sollte exakt auf die fünf Lieferantenkategorien gemappt werden – etwa radiologische und dermatologische Rubrics für Eval, EU-Recht und Finanzen auf DE/FR/IT/ES/PL für SFT und RM. Weil ByteDance parallel ein eigenes Auslandsexpertennetz aufbaut, liegt der dauerhafte Wert von PathWize dort, wo ByteDance europäische Experten nicht selbst rechtssicher anwerben, prüfen und bezahlen kann (DSGVO, EU-Arbeits- und Steuerrecht, Approbationsnachweise). Mandarin-fähiger Vertrieb oder ein Partner in Singapur ist praktisch Voraussetzung; TikTok ADSO bleibt ein zweiter, niedrigpreisiger Kanal für europäische Sprachkapazität.

### Tencent: neue Datenleitung, offene Expertenplattform und 1260H

Im September 2026 ernannte Tencent den in der Presse genannten Forscher **Yao Shunyu** formal zum Leiter der AI-Data-Abteilung; er berichtet an den Präsidenten der Technology Engineering Group (TEG), womit Modell, Infrastruktur, Daten und Evaluation von Hunyuan unter einer Leitung stehen [3]. Im selben Monat startete die Expertenplattform **ExpertHub (混元智囊团)** [64]. Sie sucht in über zwölf Domänen, darunter Recht mit „BAR admission“ und ausdrücklich englischem Fallrecht und Vertragsrecht, Medizin mit gültiger Berufszulassung, Finanzen (CPA/CFA/ACCA), STEM ab Master mit PhD-Präferenz sowie Übersetzung unter anderem aus und in Deutsch, Französisch und Spanisch; die Arbeit ist vollständig remote, die Vergütung hängt an Qualitätsstufen, und Kooperationsanfragen gehen an **experthub@tencent.com** [4]. In den USA ist die Stelle „Data Partnerships Lead“ (TEG, Kategorie Procurement & Sourcing, Palo Alto und Los Angeles) im November 2026 als live bestätigt; sie verantwortet Datenakquise „from initial outreach through commercial negotiation“, Lizenzfragen und Vendor-SLAs und bezieht Daten von „North American commercial vendors, research networks, and open-source communities“ [42]. Das Hunyuan-Nachwuchsprogramm „青云计划“ rekrutierte bis 5. September 2026 auch in Seattle und Singapur, unter anderem für Datenstrategie mit Fachexperten aus Physik, Chemie und Biologie und für „Eval & Insight“ mit Drittevaluation [65]. Laut Forbes stützt sich Tencent auf Surge, ChinaTalk nennt Turing und DeccanAI als Lieferanten [66, 23]; offensive Cyber-Inhalte filterte Tencent nach eigener Darstellung aus den Hy4-Trainingsdaten [67]. Tencent steht seit Januar 2025 auf der 1260H-Liste und blieb im Update vom Juni 2026 gelistet [16].

**Einschätzung:** Fachlich passt ExpertHub fast deckungsgleich zu PathWize, und experthub@tencent.com ist die einzige veröffentlichte Kooperationsadresse eines chinesischen Big-Tech-Expertenprogramms. Die 1260H-Listung macht Tencent jedoch zum riskantesten der großen drei Käufer. Eine Ansprache setzt eine Grundsatzentscheidung zur US-Kundenstrategie voraus und muss auf Medizin, Recht, Finanzen und Sprachen begrenzt bleiben; der berichtete Cyber-Schwerpunkt ist ausgeschlossen. Offen ist, ob ExpertHub Firmen statt Einzelexperten aufnimmt.

### Alibaba: Einkauf „von null“, Piloten ersetzen Ausschreibungen

Alibaba Holding sucht in Hangzhou einen „大模型外包训练采购专家“ (Einkaufsexperte für ausgelagertes LLM-Training; Stelle 1170302, ca. August 2026). Die Rolle soll ein Lieferanten-Ökosystem für ausgelagertes Training „von null“ aufbauen, Fähigkeitslandkarten und Preis-Benchmarks erstellen, den Einkauf von „买人力“ (Arbeitskraft kaufen) auf „买技术能力“ (technische Fähigkeit kaufen) umstellen, nach dem Grundsatz „试点是新的招标“ (Piloten sind die neue Ausschreibung) arbeiten und Exklusivpartnerschaften für vertikale Domänenkorpora, synthetische Daten und Evaluation verhandeln [44, 5]. Die zentrale Abteilung AIData (数据技术及产品部) liefert Akquise, Verarbeitung, Synthese, Annotation und Evaluation für Alibabas Modelle und listet Rollen wie „大模型数据采购专家“ (LLM-Datenkauf) und „大模型数据生态资源运营“ (Datenökosystem) [68]. Die Qwen-Labeling-Plattform arbeitet laut einer Anzeige vom 9. November 2026 mit professionellen Annotationsanbietern und deckt über 20 Sprachen und Dialekte ab [69]. Die im Januar 2026 gestartete Expertenplattform Siriser (晓天睿士) wirbt um Finanz-PhDs und lädt Top-Experten „weltweit“ ein [43, 70, 57]. Mercor verkaufte SWE-RL-Umgebungen an Alibaba, Turing beliefert den Konzern [23]. PingWest zufolge liegen Datenentscheidungen inzwischen dezentral bei führenden Forschern, und Alibaba finanziert den Expertendaten-Anbieter UniPat mit Rechenleistung im Wert von zig Millionen RMB pro Jahr [2]. Alibaba Group steht seit 8. Juni 2026 auf der 1260H-Liste [15, 71].

**Einschätzung:** Alibabas eigene Leitsätze – „Fähigkeit statt Arbeitskraft“, „Pilot statt Ausschreibung“ – passen zum Expertenmodell von PathWize, und die Mehrsprachigkeit von Qwen spricht für Bedarf an europäischen Sprachen. Zielfunktion ist der AIData-Einkauf, nicht Siriser: Würden sich PathWize-Experten dort einzeln registrieren, ginge die eigene Marge verloren. Die 1260H-Listung stellt Alibaba auf dieselbe Risikostufe wie Tencent.

### Ant Group: der klarste medizinische Bedarf, ohne 1260H

Ants medizinische KI-Plattform AQ (蚂蚁阿福) sucht seit 21. Oktober 2026 „全球医生和医学生“ (Ärzte und Medizinstudierende weltweit) für die Rolle „模型训练医学专家“: KI-Antworten auf Richtigkeit prüfen und Trainingsdaten aus klinischen Fragen, Fallbegründungen und Therapieempfehlungen bauen; angesprochen sind Master- und PhD-Studierende sowie Ärzte und Medizinstudierende bis fünf Jahre nach Abschluss [30, 31]. **Mehrere Tausend Personen** arbeiten in einem dreistufigen System aus Basisannotation, medizinischer Annotation und professioneller Evaluation, und über 100 Ärzte aus 三甲-Kliniken (höchste chinesische Klinikstufe) wirken mit [30]. Forbes nennt Ant als Käufer bei US-Datenanbietern [66]; eine Beziehung zwischen Ant und AfterQuery ließ sich nicht belegen. Ant steht nicht auf der 1260H-Liste [24].

**Einschätzung:** AQ passt sehr gut zu den Radiologie- und Dermatologie-Piloten, vor allem in der Stufe „professionelle Evaluation“; ein konkretes Pilotformat wäre, dass EU-Dermatologen AQ-Antworten gegen europäische Leitlinien bewerten. Ein Lieferantenkanal ist nicht belegt, der Zugang führt über die Geschäftsentwicklung von AQ bzw. Ant Health, und die Nähe zu Alibaba bleibt ein Reputationsfaktor.

### Baidu und die zweite Reihe: wenig Signal, viel Ausschlussrisiko

Für Baidu ist weiterhin kein externer Kauf von Expertendaten belegt; ERNIE wird über eigene, mit Kommunen und Personaldienstleistern betriebene Annotationsbasen in Haikou und Tangshan bedient [72], und Baidu steht seit 8. Juni 2026 auf der 1260H-Liste [15]. In der zweiten Reihe trainierte Meituan LongCat-2.0 auf über 30 Billionen Tokens einschließlich mehrsprachiger Daten [73] und sucht Praktikanten für LLM-Datenbetrieb in kleineren Sprachen mit Französisch, Japanisch, Russisch oder Portugiesisch [74]. Xiaomi nennt im MiMo-Bericht lizenzierte, nicht benannte Datenanbieter für RL-Code-Daten [75], während Kuaishou seine Investitionen 2026 auf rund 26 Mrd. RMB vor allem für Kling erhöht [76]. Huawei und SenseTime stehen auf 1260H, SenseTime seit 2019 zusätzlich auf der Entity List, und iFlytek ist seit Oktober 2019 US-sanktioniert [24, 77, 78].

**Einschätzung:** Meituan (mehrsprachig) und Xiaomi (kauft bereits Lizenzdaten) sind die plausibelsten Käufer der zweiten Reihe – beide ungelistet, aber ohne belegten Bedarf. Kuaishou braucht vor allem Videodaten; Huawei, SenseTime und iFlytek scheiden aus.

## Chinas Start-ups: Einkäufer mit Auslandsmandat, Embodied AI bleibt Inlandsmarkt

### Moonshot und Shengshu schreiben Auslandslieferanten in die Stellenprofile

Moonshot (Kimi) suchte am 22. Mai 2026 in drei Varianten einen „AI数据资源运营/采购经理“ (Datenressourcen-/Einkaufsmanager, bis 45–75K × 16 Monatsgehälter), der weltweit Datenressourcen für Pretraining, SFT, RL und Multimodal erschließen, **„high-quality overseas data suppliers“** finden, Screening, Onboarding und technische Tests neuer Auslandslieferanten leiten und Verträge entwerfen soll; verlangt sind Englisch als Arbeitssprache und eigenständige Auslandsverhandlung [6, 79]. Ein „数据标注资源运营经理“ (19. September 2026) verantwortet den ganzen Lieferanten-Lebenszyklus von Sourcing bis Ausstieg [80], ein „AI数据运营专家（高校生态方向）“ baut ein eigenes Hochschul-Expertennetz für KI-Bewertung auf [81]. Die Singapur-Gesellschaft Moonshot AI Pte. Ltd. heißt seit Juni 2026 Novascent Private Limited (UEN 202326494K, 8 Mitarbeitende) und schrieb im Oktober 2026 eine Vertriebsrolle aus, aber keine Datenrolle [33, 82]. Moonshot schloss am 30. Juli 2026 eine Runde bei 35 Mrd. USD Bewertung; K3.1 Pro zielt auf Finanzanalyse [34]. Gegen eine starke Kaufneigung sprechen zwei Quellen: PingWest schreibt, Kimi kaufe „selten extern“ [2], und Epoch AI fand bei Moonshot nur Einkaufsstellen für Rechenzentren und Cloud [53].

Shengshu (Vidu) ist der wichtigste neu identifizierte Lead, denn drei Feishu-Anzeigen von Juli und August 2026 beschreiben eine vollständige Lieferkettenfunktion. Der „数据供应链负责人“ baut ein **globales Lieferanten-Ökosystem über mehrere Datenmodalitäten** mit Onboarding, Bewertung und Einstufung auf und soll fünf Jahre Datenbeschaffung sowie bestehende Beziehungen zu KI-Datenanbietern mitbringen [7]. Der „数据策略专家（小语种）“ muss muttersprachlich Koreanisch, **Deutsch, Italienisch, Spanisch** oder Russisch sprechen, baut einen **ausgelagerten muttersprachlichen Review-Pool** auf (Rekrutierung, Prüfung, Training, Doppelblind-Review), gibt Regeln an Anbieter weiter, kalibriert Untertitel für Videodaten und erstellt Benchmarks [8]. Der „具身智能数据供应链经理“ koordiniert Annotations-, Simulations-, Crowd- und Standortlieferanten für World-Action-Modelle und VLA [83]. Hinzu kommen ein Datenstratege für Japanisch, ein „数据商务经理“, der Datenanbieter sucht und ersetzt, sowie Presales-Rollen für B2B-Kunden in Nordamerika, **Europa** und Japan [25]. Shengshu taucht auf keiner US-Liste auf.

**Einschätzung:** Shengshu ist der passendste chinesische Start-up-Lead, weil hier europäische Muttersprachler ausdrücklich über externe Pools gesucht werden; der Einstieg ist ein kleiner, messbarer Pilot (DE/IT/ES-Caption-Evaluation, Benchmark-Erstellung) beim Leiter der Lieferkette. Bei Moonshot ist der Bedarf belegt, die Kaufneigung aber umstritten; ein Pilot über Novascent hält die Vertragsseite in Singapur.

### MiniMax beziffert sein Datenbudget im Börsenprospekt

Der HKEX-Prospekt von MiniMax (Börsengang 9. Januar 2026) ist das expliziteste Dokument der Recherche. Für kommerziell beschaffte Datensätze schließt MiniMax „data procurement agreements“ mit Zusicherungen zu Rechtmäßigkeit und Herkunft (S. 285), lagert Annotation aus und rechnet sie „nach verarbeiteter Datenmenge“ ab (S. 301) und „engage[s] domain experts“ auf Basis gekaufter Daten (S. 317); die Mittelverwendung 2026–2030 sieht für „data procurement, data labeling, and compliance“ zusammen **rund 64,9 Mio. HK$ pro Jahr** vor (S. 467–468, summiert) [9]. Vertragsfähig sind die Singapur-Töchter **Subsup Pte. Ltd.** und **NanoNoble Pte. Ltd.** sowie MiniMax HongKong; eine US-Tochter existiert nicht, und 73,1 % des Umsatzes der ersten neun Monate 2025 entstanden außerhalb Festlandchinas [9]. Das „10x Team“ rekrutiert seit Mai 2026 Senior-Experten als Forscher oder Fellows mit Bürowahl Shanghai, Beijing, Hongkong, San Francisco oder **London**, priorisiert Ökonomie, Finanzen, Life Sciences, Materialchemie und Mathematik und nimmt auch Recht [35]. In Chengdu sucht MiniMax eine Leitung seiner Datenbasis mit Vendor-Management [36]; laut Epoch hatte MiniMax im Juni 2026 zudem Stellen in London, Berlin, Madrid und der Île-de-France [53]. Anthropic warf MiniMax im Februar 2026 Destillation vor [37].

**Einschätzung:** Gut 8 Mio. USD pro Jahr sind im Verhältnis zu Rechenkosten wenig, für einen Nischenanbieter aber relevant. Das Fellowship ist faktisch ein interner Expertenkanal; PathWize könnte seine Professoren und PhDs als Fellow-Pipeline anbieten und parallel Daten über NanoNoble liefern.

### StepFun und DeepSeek: Expertenpools mit Cyber-Schlagseite

StepFun sucht seit 3. November 2026 einen „大模型数据生态运营/专家资源运营“, der Experten aus Finanzen, Forschung, **Cybersecurity** und Code für Aufgabendesign, Annotation, Evaluation und Benchmarks rekrutiert; Englisch ist ein Plus [47]. Weitere Rollen betreffen den Einkauf („资源运营（模型采购方向）“), die Qualitätssicherung externer Annotationsanbieter und RL-Umgebungs-Ingenieure [48], und eine Einkäuferanzeige nennt als Lieferumfang „repo, docker, task, trajectory, reward, rubric, verification“ [23]. DeepSeek kündigte am 25. Juni 2026 seine größte Rekrutierungsrunde an, darunter einen „专业领域数据产品经理“ für kleinere Sprachen, Medizin und Recht [50]. Ein Snapshot vom 3. November 2026 zeigt 22 Datenrollen, die überwiegend Mechanik-, CAD-, Spiele- und Office-Aufgaben in verifizierbare RL-Umgebungen übersetzen, darunter mehrere ausdrücklich für Cybersecurity-RL wie „代码智能体数据工程师-网络安全方向“ [84]. PingWest berichtet von einem eigenen Einkaufsposten [2]; für DeepSeek gilt nach NDAA FY2026 ein Ausschluss bei US-Verteidigungsbehörden und deren Auftragnehmern [51].

**Einschätzung:** Bei beiden kommen für PathWize nur die Finanz-, Wissenschafts-, Medizin- und Rechtsanteile infrage; die Cyber-Anteile sind ausgeschlossen. DeepSeek hat weder eine Auslandsgesellschaft noch einen belegten externen Einkauf und ist eher ein Lead für den Kanalpartner als für Direktvertrieb.

### Baichuan und ModelBest: passende Domänen, chinesischer Kontext

Baichuan hat sich 2025 auf Medizin-KI ausgerichtet [85] und schreibt Teilzeitrollen aus, die die PathWize-Piloten fast spiegeln: Dermatologie-Bildevaluation mit fünf Jahren Erfahrung an einer öffentlichen Tertiärklinik (29. Januar 2026), Befundung von Röntgen-, CT- und MR-Bildern (20. Juli 2026) sowie Onkologie-Review und Modellevaluation; dazu kommt eine Investor-Relations-Stelle für einen Börsengang in Hongkong nach Kapitel 18C, während Auslandsbezug und Mehrsprachigkeit fehlen [52]. ModelBest sucht Evaluatoren für Rechts-Agenten, eine Leitung für ein Expertendaten-Ökosystem und „AI训练师“ für englische Daten in Xi'an zu 6.000–8.000 RMB pro Monat [86].

**Einschätzung:** Die Domänen passen, der Zugang nicht – beide arbeiten im chinesischen klinischen bzw. rechtlichen Kontext mit chinesischen Qualifikationen. Baichuan wird erst mit einem Auslandsprodukt relevant.

### Ausschlüsse und Sonderfälle

Zhipu und neun Tochtergesellschaften stehen seit 16. Januar 2025 auf der Entity List [17]; BAAI seit März 2025 [87]. Beide scheiden aus. Manus (Butterfly Effect) sitzt in Singapur. Die Übernahme durch Meta wurde rückabgewickelt, und im Oktober 2026 sammelte Manus über 500 Mio. USD ein, unter Beteiligung von Tencent [88]. Datenrollen wurden nicht verifiziert.

### Embodied AI: Trainingsdaten kosten 20 RMB pro Stunde

Chinesische Embodied-AI-Firmen erzeugen Daten überwiegend selbst oder in staatlich geförderten Trainingsfeldern; laut CAICT laufen **über 70 solcher Felder**, mehr als 40 weitere sind geplant [89]. Die Preise liegen entsprechend niedrig: JD zahlt für das Filmen von Haushaltstätigkeiten rund **20 RMB pro Stunde** [90], Rohdaten kosten rund 100 RMB und nutzbare Daten 500–700 RMB pro Stunde, und chinesische Aggregatoren verkaufen asiatisches Material sogar an US- und europäische Kunden [91]. Der Datenlieferant Genrobot liefert rund eine Million nutzbare Stunden pro Quartal [92]. Unitree steht seit Juni 2026 auf der 1260H-Liste [93]. Die einzige explizite Einkaufsrolle für Embodied-Daten fand sich bei Shengshu [83].

**Einschätzung:** Volumendaten aus Teleoperation oder Egoperspektive an chinesische Robotikfirmen zu verkaufen, lohnt sich für PathWize nicht. Denkbare Nischen – Experten-Annotation von Laborabläufen (Biochemie) oder klinischen Prozeduren, Egoperspektiv-Daten aus europäischen Umgebungen mit DSGVO-Einwilligung, muttersprachliche Evaluation von World-Model-Videos – sind Hypothesen ohne belegten Käufer.

## Korea, Japan, Taiwan: Staatsgeld mit Inländervorbehalt

### Korea: Experten-Review zählt 35 Prozent, 2027 winken 750 Mrd. KRW

Am 18. August 2026 rückten Upstage, SK Telecom und LG AI Research in Stufe 3 des nationalen Foundation-Model-Programms (독파모) vor, während Motif trotz Benchmark-Führung ausschied [45]. In Stufe 2 zählten Benchmarks 40 %, **Experten-Review 35 %** und Nutzerbewertung 25 %, und SKT wurde unter anderem für „multilingual performance“ gelobt [45]. Die Teams verbessern ihre Modelle bis Ende Januar 2027, um Mitte Februar 2027 werden zwei Teams ausgewählt [46], und diskutiert wird eine doppelblinde Nutzerbewertung [94]. Für 2027 schlägt die Regierung ein Frontier-AI-Paket von 4,625 Billionen KRW vor, darin **750 Mrd. KRW für Trainingsdaten**, die als Eigenkapital über die Staatsbank KDB fließen sollen; die Ausschreibung soll etwa von Dezember 2026 bis Februar 2027 laufen und die 독파모-Finalisten bevorzugen [46]. Die Opposition nennt die Mittelverwendung unklar, der Haushalt wird bis Anfang Dezember beraten [95]; ein separater Posten von 50 Mrd. KRW für Cybersecurity-KI ist für PathWize ausgeschlossen.

Die laufenden Datenausschreibungen von NIA und K-DATA haben harte Zugangshürden. Die Joint-Use-Ausschreibung 제2026-0877 umfasste 4,35 Mrd. KRW für Lerninhalte zu Berufszertifikaten und STEM, bewertete unter anderem „Kreuzprüfung durch Fachexperten“ und verlangte koreanische Gewerbe- und Steuerdokumente; beteiligtes Personal einschließlich Crowdworkern muss grundsätzlich **koreanischer Staatsbürger mit Wohnsitz in Korea** sein, nur Ausländer im Ausland mit fremder Muttersprache dürfen nach Vorabgenehmigung an Sprachdaten mitarbeiten [96]. Die Benchmark-Ausschreibung (1,2 Mrd. KRW) lief ausschließlich über das NIA-Portal DPMS mit koreanischem NPKI-Zertifikat [97]. Auf Laborebene zeigte LG auf der ICML 2026 die „EXAONE Data Foundry“, die im Pilot mit dem nationalen Rentenfonds über 10.000 Expertendatensätze pro Tag automatisch erzeugte – ein Insourcing-Signal [98]. KT bietet bereits Finanz- und Rechtsdienste in Koreanisch, Englisch, Japanisch und Chinesisch an [99]. Lunit beschäftigt über 15 fachärztlich zertifizierte Vollzeit-Ärzte, verfügt über mehr als 10 Mio. medizinische Datensätze und vertreibt über Lunit International (ex Volpara) auch in Europa, schreibt aber keine sichtbare Annotationsstelle aus [100]. In Korea, Japan und Taiwan fand sich keine verifizierte offene Stelle speziell für Dateneinkauf oder Vendor-Management.

**Einschätzung:** Ohne koreanische Gesellschaft kann PathWize keine staatliche Ausschreibung führen. Realistisch sind Direktverträge mit LG, SKT oder Upstage aus deren eigenen oder KDB-finanzierten Budgets (Vertragsbedingungen prüfen) oder die Rolle als Subunternehmer für europäische Sprach- und Fachreviewer über die Muttersprachler-Ausnahme. Lunit ist ein spekulativer Lead für EU-Radiologen-Validierung.

### Japan: GENIAC fördert Physical AI, die Labore annotieren selbst

GENIAC und NEDO haben 2026 auf Industrie- und Robotikdaten umgesteuert: Gefördert werden neun Projekte zu „AI-Ready“-Fertigungsdaten, unter anderem von Stockmark und FastLabel [101], neun Datenökosystem-Projekte einschließlich **„AI-OP (KI-Roboterchirurgie)“ der Universität Kobe** [102] und 13 Roboter-Foundation-Model-Projekte, darunter SB Intuitions, Preferred Networks, Highlanders, MW und FastLabel [103]. **Im November 2026 war keine NEDO-KI-Ausschreibung offen**, die letzte Frist endete am 24. August 2026 [104]. Das nationale Physical-AI-Modell „Noetra“ (SoftBank, Sony, NEC, Honda mit AIST) erhält in diesem Fiskaljahr 387,3 Mrd. Yen und über fünf Jahre rund 1 Billion Yen und sucht etwa 40 weitere Mitgliedsfirmen [105]. SB Intuitions betreibt eine große interne japanische Annotations- und Evaluationsorganisation [106] und entwickelt seit Juni 2026 mit der Juntendo-Universität das medizinische Modell Med-Sarashina [107]. Sakana AI listet 39 offene Stellen ohne Datenrolle, aber eine IP-Rolle zu „defense and intelligence AI R&D“ – für PathWize ausgeschlossen [108].

**Einschätzung:** In Japan führt der Zugang über GENIAC-Geförderte als Subunternehmer (Kobe AI-OP für Chirurgiedaten, SB Intuitions für Med-Sarashina) oder über ein Noetra-Mitglied. FastLabel und Stockmark sind eher Partner oder Konkurrenten als Kunden.

### Taiwan: Korpus aus Spenden statt Ausschreibungen

Das Digitalministerium MODA baut einen „Sovereign AI Training Corpus“ mit über 5.000 Datensätzen und 2,1 Mrd. Tokens auf, auch zu Recht und Gesundheit. Verlage und Autoren steuern Material per Einwilligung bzw. Widerspruchslösung bei [109]. TAIDE passt offene Modelle mit rund 22 Mrd. traditionell-chinesischen Tokens an [110]. Annotationsausschreibungen wurden nicht gefunden. **Einschätzung:** Taiwan hat niedrige Priorität.

## Golf, Singapur, Indien: Die offenste Tür steht in Abu Dhabi

### VAE: G42-Portal, IFM-Vendor-Management und europäische Sprachen bei Falcon

G42 betreibt mit Coupa das einzige gefundene Lieferantenportal, das sich **ausdrücklich an Auslandslieferanten** richtet („overseas suppliers can register through the same link“) und keine Gebühren erhebt. Verlangt sind Handelslizenz, NDA, Bankbestätigung und Steuerbescheinigung, IT-Lieferanten füllen zusätzlich einen InfoSec-Fragebogen aus, und die Due Diligence über Corestream dauert etwa 14 Tage; die Registrierung gilt konzernweit **außer für M42**, Presight, Khazna und Space42, Kontakt ist supplierregistration@g42.ai [10]. Inception (heute Inception42) bezieht seit Februar 2025 SFT und RLHF von Scale AI und baut mit Scale branchenspezifische Evaluationsdatensätze, auch für Gesundheit [28, 111]. M42 betreibt das Klinik-Evaluationsframework MEDIC samt öffentlichem Leaderboard [29, 112]. Das IFM des MBZUAI hat Labore in Abu Dhabi, Sunnyvale und **Paris** [26]; seine Stelle „Research Scientist, Agentic Data & Benchmarking“ (8. Juni 2026) verlangt wörtlich „Manage technical relationships with external data vendors and domain experts“ und „Partner with an external data vendor or domain expert to source high-quality trajectories“ [11]. TIIs Falcon-H1 ist nativ auf 18 Sprachen trainiert, darunter Deutsch, Französisch, Italienisch, Spanisch, Niederländisch, Polnisch, Portugiesisch, Rumänisch, Schwedisch und Tschechisch [38], und Falcon-H1-Arabic durchlief SFT und DPO [39].

**Einschätzung:** Die VAE sind der zweite Pfeiler neben China. Die Coupa-Registrierung kostet wenig und sollte sofort erfolgen; MBZUAI-IFM ist der einzige Akteur, der externe Anbieter und Fachexperten ausdrücklich ins Stellenprofil schreibt, und über Paris erreichbar; M42 muss wegen der Ausnahme von der Konzernregistrierung direkt angesprochen werden, wobei MEDIC-artige Radiologie- und Dermatologie-Evaluation genau passt. TII ist der einzige Akteur mit dokumentiertem Trainingsbedarf in europäischen Sprachen, zeigt aber kein Einkaufssignal. Bei Inception ist Scale AI etabliert, PathWize käme eher als spezialisierter Zweitlieferant infrage.

### Saudi-Arabien und Katar: arabisch, im Land, Scale als Platzhirsch

HUMAIN (PIF 51 %, Aramco 49 %) stellte am 3. September 2026 humain-m3 vor, ein 428-Mrd.-Parameter-MoE-Modell, „commissioned in partnership with“ dem chinesischen Lab **MiniMax**; offene Gewichte sollen erst nach „safety alignment and fine-tuning“ folgen [113]. ALLaM wird in Microsoft Foundry integriert [114]. Laut einem Wettbewerber führte aiXplain eine unabhängige menschliche Evaluation von ALLaM durch – unbestätigt [115]. Der in Riad ansässige Anbieter Bayanat Labs rekrutiert arabischsprachige Ärzte, Juristen und Finanzexperten und weist darauf hin, dass manche Projekte wegen des Datenschutzgesetzes PDPL im Land bleiben müssen [116]. Ein Drittanbieter-Organigramm nennt bei HUMAIN einen Chief Procurement Officer, eine Daten- und Modellleitung und ein „Data Annotation“-Team mit neun Personen, möglicherweise veraltet [117]. Für das staatliche Beschaffungsportal Etimad müssen Bieter seit 2024 eine regionale Zentrale in Saudi-Arabien mit 15 Vollzeitkräften (davon drei in der Geschäftsleitung) unterhalten; Ausländer brauchen eine temporäre Registrierung beim Handelsministerium oder einen Agenten, hinzu kommen Local-Content-Quoten und Schulungspflichten für saudische Staatsbürger [118]. In Katar trainiert QCRI Fanar 2.0 komplett im Haus [119], und Scale AI hat einen Fünfjahresvertrag mit dem Ministerium MCIT [120].

**Einschätzung:** Saudi-Arabien hat niedrige Priorität (arabische Modelle, Datenhaltung im Land, Etimad ohne saudische Präsenz verschlossen). Die Verbindung HUMAIN–MiniMax eröffnet aber eine Nische: Ein in China entwickeltes Modell braucht vor der Freigabe voraussichtlich unabhängige Evaluation, etwa auf Englisch, in europäischen Sprachen oder medizinisch – mit dem Nebeneffekt einer China-Verbindung.

### Singapur und Südostasien: unbezahlte Daten, aber eine Prüfer-Sandbox

Singapurs nationales LLM-Programm (NMLP) nutzte laut Regierung offene Behördendokumente und Partnerinhalte, „for which no remuneration was required“ [121]. Die **Global AI Assurance Sandbox** von IMDA und AI Verify Foundation nimmt dagegen spezialisierte Prüffirmen auf. Bewerbung läuft über „Submit Interest to Join“, Tests sind binnen drei Monaten abgeschlossen [122]. Im Pilot 2025 testete die Pariser Firma PRISM Eval den Assistenten des Flughafens Changi; ausländische Prüfer werden also zugelassen [123]. Sea gründete am 20. April 2026 ein KI-Exzellenzzentrum mit mindestens 100 F&E-Stellen über drei Jahre [124]. Grab steuert menschliche Annotation fürs Post-Training im Haus [125]. Die nationalen Modelle Indonesiens (Sahabat-AI), Thailands (ThaiLLM) und Malaysias (ILMU) zielen auf lokale Sprachen; ILMU annotiert und filtert mit einem eigenen Team [126, 127, 128].

**Einschätzung:** Südostasien ist ein schwacher Käufer europäischer Expertendaten. Die Sandbox lohnt sich als Referenz- und Kontaktkanal zu Anwendern, auch im Gesundheitswesen, bringt aber kaum direkten Umsatz.

### Indien: indische Sprachen und ein medizinischer Lichtblick

Fractal stellte Vaidya 2.0 im Februar 2026 vor und gibt an, auf OpenAIs HealthBench (hard) vor GPT-5 zu liegen; das ist eine Herstellerangabe [129]. Das zugehörige EMNLP-2026-Paper nutzt synthetische Daten und rubrikbasiertes RL für klinisches Schließen [130]. BharatGen erhielt 988,6 Crore Rupien [131]. Die staatlichen Kanäle Bhashini und AIKosh sind auf indische Sprachen ausgelegt; AIKosh nimmt Datensätze ohne Bezahlung entgegen [132, 133]. Krutrim baute 2025 Linguistikstellen ab [134]. Sarvams Evaluationsrolle „Chanakya“ arbeitet mit „doctrine documents“ und „field reports“ [135]; das ist verteidigungsnah und für PathWize **ausgeschlossen**.

**Einschätzung:** Von den indischen Akteuren passt nur Fractal (ärztliche Rubrics, HealthBench-artige Evaluation) zum medizinischen Kern von PathWize, und das bei hoher Preissensibilität.

## Asiatische Datenanbieter: Dataocean und Appen China als Kanal, iMerit und Deccan als Konkurrenz

Chinesische Anbieter wachsen, weil ihre Kunden ins Ausland expandieren. **Haitian Ruisheng/Dataocean** setzte 2025 377 Mio. RMB um (+59 %) bei 48 % Bruttomarge (Q1 2026: 56 %), verdoppelte den Auftragseingang in Q1 2026 und stärkt Vertriebsteams in Nordamerika, **Europa** und Japan/Korea [12]; im zweiten Quartal 2026 fiel der Gewinn allerdings um 60 %, und als Kunden werden Zhipu, Meta, Alibaba, Tencent, Moonshot und MiniMax genannt, deren Auslandsexpansion mehrsprachige Spracherkennungsaufträge treibt [32]. Eine europäische Niederlassung nennt die Website nicht [13]. **Appen China** wuchs im ersten Halbjahr FY26 um 80 % auf 76,2 Mio. USD mit einer Run-Rate über 175 Mio. USD, während Appen Global um 27 % schrumpfte [14]. **Datatang/Nexdata** erzielte 2025 Auslandsumsatz von 103 Mio. RMB bei **69 % Bruttomarge**, hat Töchter in Sunnyvale, Tokio, Hongkong, Singapur und Korea, aber keine in der EU, beschäftigt unter 319 Mitarbeitenden nur vier Promovierte und nennt Chinas Datenexportregeln als Risiko [136]. **Flitto** (Korea) hat einen Auftragsbestand von 31,4 Mrd. KRW mit „global big tech“, setzt auf „expert knowledge datasets“ und erzielt rund 95 % des Kerndatengeschäfts mit US-Kunden [40, 137].

Auf der Konkurrenzseite kaufte EXL iMerit für bis zu 310 Mio. USD (Abschluss 3. August 2026) [138, 139]; dessen Expertennetz Scholars zählt über 4.000 Experten [140] und schreibt Sprachstellen direkt in Slowenien, der Slowakei, Lettland und Katalonien aus [141]. Deccan AI (25 Mio. USD Series A) zahlt 10–700 USD pro Stunde, beliefert Google DeepMind und listet ein „Frontier AI Lab in Paris“ als Kunden [142, 143]; laut ChinaTalk verkauft es auch an Tencent und ByteDance [23]. Abaka AI (8 Mio. USD im Mai 2026) bietet RL-Umgebungen und „1M annotators across 50+ countries“ an [144, 145], und chinesische Expertendaten-Anbieter wie UniPat, Humanlaya/TalentsAI und Copula Lab bedienen dieselben Labs im Inland [2, 146]. Indische Expertendaten-Kapazität wird zudem von großen IT- und BPO-Gruppen aufgekauft – neben EXL–iMerit übernahm Ubiquity im Februar 2026 Shaip, und Uber AI Solutions kaufte 2025 den belgischen Labeling-Anbieter Segments.ai [147, 148]. **Einschätzung:** Diese Käufer bringen EMEA-Vertriebskanäle mit und dürften binnen 12–24 Monaten auch in Europa direkt konkurrieren; umgekehrt macht dieselbe Logik einen EU-Anbieter mit Medizinpiloten zu einem möglichen Übernahmeziel.

| Anbieter | Rolle für PathWize (Einschätzung) | Begründung (Einschätzung auf Basis der Fakten) |
|---|---|---|
| Haitian Ruisheng / Dataocean AI | Kanal und Subcontracting-Kunde (erste Wahl) | Direkter Lieferant von Moonshot, MiniMax, Alibaba, Tencent; Europa-Vertrieb ohne EU-Gesellschaft; Marge lässt Platz für Subunternehmer. Vorsicht: Kunde Zhipu steht auf der Entity List |
| Appen China | Subcontracting-Kunde | Ausdrücklich auf Internationalisierung chinesischer Firmen ausgerichtet; Appen Global ist Konkurrent, daher gezielt das China-Segment ansprechen |
| Datatang / Nexdata | Kanal und Subcontracting-Kunde | Margenstarkes Auslandsgeschäft ohne EU-Gesellschaft und mit wenig promovierten Fachkräften |
| Magic Data | Subcontracting-Kunde | Mehrsprachige Sprachdaten; zeigt MiniMax- und Tencent-Logos [149] |
| Flitto | Kanal (Korea) | US-Big-Tech-Aufträge, Expertendatensätze, keine EU-Präsenz |
| Datumo (ex SelectStar) | Partner (Evaluation) | Evaluationsplattform mit über 300 koreanischen Unternehmenskunden [150] |
| Crowdworks | Kanal mit Vorbehalt | Im Staatsprogramm vertreten, aber operativer Verlust (Q1 2026: 2,2 Mrd. KRW) und Kontrollwechsel [151, 152] |
| iMerit/EXL Scholars, Deccan AI, Abaka AI | Konkurrenten | Rekrutieren europäische Talente oder verkaufen an europäische Labs |
| UniPat, Humanlaya/TalentsAI, Xpert, Siriser, ExpertHub | Konkurrenten im chinesischen Expertenangebot | Günstige chinesische Experten; die Lücke bleibt bei EU-Kontext und EU-Sprachen |

**Einschätzung:** Ein White-Label-Modell über Dataocean ist der schnellste Weg in chinesische Labs ohne eigenen Vertrieb dort. Das Angebot – ein EU-Expertenpool, der in der EU nach DSGVO erhebt, annotiert und speichert – löst ein Compliance-Problem chinesischer Anbieter ohne EU-Gesellschaft. Distanz zu gelisteten Endkunden schafft der Kanal allerdings nicht; Verträge sollten Endkunden-Listen und Ausschlüsse festschreiben.

## Einkaufskanäle: Beziehungen statt Portale, Konferenzen als Türöffner

Für KI-Daten fand die Recherche bei ByteDance, Tencent und Alibaba **kein öffentliches Lieferantenportal**; der Einstieg läuft über Beziehungen zu den oben genannten Partnership-, Einkaufs- und PM-Rollen [59, 19]. Formal offen für ausländische Firmen sind nur das **G42-Coupa-Portal** [10] und Singapurs **AI Assurance Sandbox** [122]. Koreas Kanäle – das NIA-Portal DPMS, Einreichung per E-Mail an K-DATA und das Vergabeportal 나라장터 – setzen eine koreanische Gesellschaft voraus [97, 96], Saudi-Arabiens Etimad eine regionale Zentrale im Land [118], Abu Dhabis Behördenportal ADGPG eine lokale Lizenz oder einen Zulassungsantrag [153]. Chinesische Datenbörsen handeln Lizenzdatensätze, keine Annotationsdienste: An der Shanghai Data Exchange starteten am 31. Oktober 2026 elf internationale Anbieter wie Dun & Bradstreet, Dow Jones und EIU [154], und die Shenzhen-Börse schloss im Mai 2026 ein MoU mit der malaysischen Zetrix [155]. Praktischer Türöffner sind Konferenzen; laut Forbes umwarben US-Vertriebsteams chinesische Großkäufer gezielt auf der ICML 2026 in Seoul [156].

| Veranstaltung | Datum | Ort | Relevanz | Status |
|---|---|---|---|---|
| ICML 2026 | 6.–11. Jul. 2026 | COEX Seoul | US-Datenanbieter umwarben chinesische Käufer [157, 156] | vorbei |
| WAIC 2026 | 17.–20. Jul. 2026 | Shanghai | Chinas Leitmesse, über 1.100 Firmen [158] | vorbei |
| EMNLP 2026 | 24.–29. Okt. 2026 | Budapest | NLP-Konferenz in Europa mit asiatischen Forschenden [159] | vorbei |
| Global Data Merchants Conference | 31. Okt. 2026 | Shanghai | Datenbörsen, internationale Anbieter [154] | vorbei |
| WIC Wuzhen Summit | 2.–5. Nov. 2026 | Wuzhen | Regierung und Industrie, Fokus Open-Source-KI [160] | vorbei |
| AI EXPO TOKYO (Herbst) | 11.–13. Nov. 2026 | Tokio | japanische Käufer [161] | läuft |
| NeurIPS 2026 | 6.–12. Dez. 2026 | widersprüchlich: Atlanta (nips.cc-Snippet) vs. Sydney (Drittkalender) | größte ML-Konferenz [162] | Ort prüfen |
| AAAI-27 | 16.–23. Feb. 2027 | Montréal | ML-Forschung [163] | geplant |
| Korea AI EXPO 2027 | 14.–16. Apr. 2027 | COEX Seoul | koreanische Käufer und Anbieter [164] | geplant |
| AI EXPO TOKYO (Frühjahr) 2027 | 21.–23. Apr. 2027 | Tokyo Big Sight | japanische Käufer [161] | geplant |
| ICLR 2027 | ca. 26.–30. Apr. 2027 | offiziell offen | ML-Forschung [165] | unbestätigt |
| GITEX AI Asia 2027 | 29.–30. Apr. 2027 | Marina Bay Sands, Singapur | Drehscheibe Singapur [166] | eine Quelle: „TBD“ |
| WAIC 2027 | voraussichtlich Juli 2027 | Shanghai | Entscheider in China [167] | Termin offen |
| ACL 2027 | 17.–22. Aug. 2027 | Kyoto | NLP-Konferenz in Asien [168] | unbestätigt |

Geografisch ist **Singapur** die operative Drehscheibe (ByteDance AI Data & Safety, TikTok ADSO, Rakuten Asia, Novascent, MiniMax-Töchter), gefolgt von der **US-Westküste** (ByteDance in San Jose, Seattle, Los Angeles und San Francisco; Tencent in Palo Alto). **Spezifikation und Budget** liegen in Beijing, Hangzhou und Shanghai, während **London und Dublin** TikToks europäische Sprachkapazität bündeln.

## Preise: Chinas Top-Experten kosten bereits 65–105 Euro pro Stunde

| Quelle / Segment | Satz | Kontext |
|---|---|---|
| ByteDance Xpert | 100–500 RMB pro Stunde; Expertensätze stiegen von ca. 100 auf über 400 RMB | Ein Konzern bot 100.000 RMB pro Monat für Tertiärklinik-Ärzte [169] |
| BOSS直聘, Vertikalaufgaben Finanzen/Recht/Medizin | 500–800 RMB pro Stunde ausgeschrieben; Finanzen tatsächlich meist 300–500 RMB | Ausgelagerte Big-Tech-Annotation 8.000–10.000 RMB pro Monat; klassische Annotation 3.000–4.000 RMB pro Monat [18] |
| Xpert, Siriser, TalentsAI, MeetChances | 100–500 RMB (15–74 USD) pro Aufgabe von einigen Stunden | Abgelehnte Arbeit wird nicht bezahlt [57] |
| Trajektorien- und Szenariodaten | 1.000–3.000 RMB pro Trajektorie; ca. 10.000 RMB pro vollständigem Arbeitsszenario | Mehrfachpreis für 6–12 Monate Exklusivität [2] |
| Medizinische Annotation (Recruiting-App) | 10.000–50.000 RMB pro Monat | [170] |
| Europäische Sprachen in China | 2.000–4.000 RMB (Erhebung DE/FR); 8.000–10.000 RMB pro Monat (Annotation ES/FR/DE/PT) | Niedrigpreissegment [171, 172] |
| Englisch-Annotation in-house (ModelBest, Xi'an) | 6.000–8.000 RMB pro Monat | [86] |
| Embodied-Daten | 20 RMB/Std. (Haushaltsfilmen); 100 RMB/Std. roh; 500–700 RMB/Std. nutzbar | [90, 91] |
| Deccan AI (Indien) | 10–700 USD pro Stunde; Spitzenkräfte bis 7.000 USD pro Monat | [142] |
| ByteDance in-house, Los Angeles | 33,70–56,03 USD pro Stunde (LLM Training Operation Specialist) | [173] |
| Westliche Plattformen, deutschsprachige Medizin | Mercor 120 USD/Std. (14. Okt. 2026); Meridial 65 USD/Std.; JT AI Labs 20–200 EUR/Std. | [174, 175, 176] |
| Westliche Plattformen, deutsche Sprache | Invisible 6–25 USD/Std.; RWS 18 USD/Std. | [177, 178] |
| Budgets der Labs | Pilotaufträge von einigen hunderttausend bis ca. 1 Mio. USD; reife Projekte mehrere bis zig Mio. USD | [179] |
| Exklusivitätsaufschlag | US-Labs zahlen für Exklusivprodukte das 4- bis 5-Fache | [23] |

Chinesische Labs gelten als preissensibel. Manche warten laut AI Proem, bis die Exklusivität von US-Datensätzen abläuft, und kaufen dieselben Daten dann „at a fraction of the price“ [146]. **Einschätzung:** 500–800 RMB entsprechen grob 65–105 EUR (Kurs ca. 7,7 RMB/EUR, vor Verwendung prüfen). EU-Tier-1-Experten zu 80–150 EUR pro Stunde liegen damit für Aufgaben im europäischen Kontext im Rahmen, zumal über Kanalpartner mit 50–56 % Bruttomarge. Als Standard bieten sich nicht exklusive Datensätze und Rubric- bzw. Evaluationsprojekte an. Exklusivität sollte als bepreiste Option mit 6–12 Monaten Laufzeit angeboten werden, nach dem Muster von ByteDance.

## Compliance-Flaggen bestimmen die Reihenfolge der Ansprache

| Unternehmen | 1260H (Stand Juni 2026) | Entity List / sonstige Flaggen | Quelle |
|---|---|---|---|
| ByteDance | nicht gelistet | nicht gefunden | [24] |
| Tencent | **gelistet** (Jan. 2025, im Juni 2026 bestätigt) | nicht gefunden | [16] |
| Alibaba Group | **gelistet seit 8. Jun. 2026** | nicht gefunden; Alibaba bestreitet die Rechtsgrundlage | [15, 180] |
| Baidu | **gelistet seit 8. Jun. 2026** | nicht gefunden | [15] |
| Ant Group | nicht gelistet | Alibaba-Verbund | [24] |
| Huawei, SenseTime | **gelistet** | SenseTime: Entity List seit Okt. 2019 | [24, 77] |
| iFlytek | nicht gelistet (nur eine Sekundärquelle) | US-Sanktion seit Okt. 2019 | [24, 78] |
| Unitree | **gelistet** (Juni 2026) | FCC-Einfuhrbeschränkung (Jul. 2026) | [93, 92] |
| Zhipu, BAAI | – | **Entity List** (Jan. 2025 bzw. Mär. 2025) | [17, 87] |
| DeepSeek | nicht gefunden | NDAA-FY2026-Ausschluss; Destillationsvorwurf (Feb. 2026) | [51] |
| MiniMax | nicht gefunden | Destillationsvorwurf (Feb. 2026); Klagen von Filmstudios | [37] |
| StepFun | nicht gefunden | laut Wikipedia in FBI/NSA/CISA-Destillationswarnung (Sep. 2026); Primärquelle nicht geprüft | [49] |
| Moonshot | nicht gefunden | US-Kongressausschuss befragt US-Firmen zur Kimi-Nutzung | [34] |
| Meituan, Xiaomi, Kuaishou, JD u. a. | nicht gelistet | – | [24] |

Die 1260H-Liste umfasst nach der Erweiterung 188 Einträge (Federal Register vom 10. Juni 2026) [71]. Ihre US-Rechtsfolgen sind gestaffelt: Seit 17. Januar 2026 dürfen Auftragnehmer des US-Verteidigungsministeriums nach Section 1532 (NDAA FY2026) KI-Produkte gelisteter Firmen ohne Ausnahmegenehmigung nicht nutzen, wobei Alibaba und Baidu ausdrücklich genannt werden; seit 30. Juni 2026 gilt nach Section 805 (NDAA FY2024) ein direktes Beschaffungsverbot, das ab 30. Juni 2027 auf Waren und Dienste mit Erzeugnissen gelisteter Firmen ausgeweitet wird [15]. Hinzu kommt die Investorenverflechtung: Tencent und Alibaba sind wesentliche Anteilseigner von Moonshot, MiniMax, StepFun, Baichuan und Manus, bei MiniMax ist eine Alibaba-Gesellschaft zugleich Lieferant und bedeutender Aktionär [9, 88], und UniPats Runde führte Alibaba unter Beteiligung von Tencent an [2]. Das macht die Start-ups nicht selbst zu gelisteten Firmen, erhöht aber den Due-Diligence- und Reputationsaufwand. Politisch stehen US-Anbieter mit China-Geschäft seit dem Forbes-Bericht unter öffentlicher Kritik [181, 182], und Scale AI, micro1 und fleet erklären öffentlich, auf China-Geschäft zu verzichten [23]. Lokale Vorgaben verengen den Spielraum zusätzlich: Korea verlangt in Staatsprojekten koreanisches Personal mit Muttersprachler-Ausnahme für Sprachdaten [96], Saudi-Arabien eine regionale Zentrale und teils Datenhaltung im Land [118, 116], und Chinas Datenexportregeln betreffen alle Datenflüsse aus China [136].

| Ausgeschlossenes Signal (Cyber, Verteidigung, Dual-Use) | Quelle |
|---|---|
| DeepSeek: Cyber-RL-Rollen (z. B. „代码智能体数据工程师-网络安全方向“) | [84] |
| StepFun: Cybersecurity-Experten | [47] |
| Tencent: berichteter Datenwunsch Cybersecurity (Forbes, Original nicht lesbar) | [66] |
| Naver: Cybersecurity-Foundation-Model; LG: offensives EXAONE-Sicherheitsmodell; Korea 2027: 50 Mrd. KRW Cyber-KI | [183, 184, 95] |
| Sakana AI: IP-Rolle zu „defense and intelligence AI R&D“ | [108] |
| Sarvam: Evaluation mit „doctrine documents / field reports“ | [135] |

**Einschätzung:** 1260H verbietet einem EU-Unternehmen nichts unmittelbar. Wer aber auch US-Labs oder regierungsnahe US-Kunden bedienen will, gerät in dieselbe Kritik wie Surge oder Mercor. Daraus folgt eine dokumentierte Grundsatzentscheidung vor jeder Ansprache von Tencent oder Alibaba, getrennte Kundenportfolios, Vertragsabschluss über Singapur-Gesellschaften, Datenhaltung in der EU sowie vor jedem Auftrag ein Abgleich mit EU-Sanktionen, EU-Dual-Use-Regeln und der BIS Consolidated Screening List. Biochemische Aufgaben – etwa im MiniMax-Fellowship oder bei IFM-Trajektorien – sind einzeln auf Dual-Use-Risiken zu prüfen.

## Nächste Schritte: drei Spuren in zwölf Wochen

Alle Schritte sind Empfehlungen (**Einschätzung**). Sie laufen in drei parallelen Spuren: Compliance und Formalien (Prio 1, 2, 13), Direktansprache der Käufer mit Piloten (Prio 3–5 und 7–9) sowie Kanäle und Präsenz (Prio 6 und 10–12).

| Prio | Schritt | Adressat / Kanal | Zeitfenster | Voraussetzung |
|---|---|---|---|---|
| 1 | Grundsatzentscheidung zu 1260H und Entity List treffen, inkl. Folgen für US-Kunden; Screening-Prozess (BIS CSL, EU-Sanktionen, Dual-Use) aufsetzen | Geschäftsführung, Rechtsberatung | Wochen 1–2 | – |
| 2 | Bei G42 auf Coupa registrieren | supplierregistration@g42.ai | Wochen 1–4 | Handelslizenz, NDA, Bankbestätigung, Steuerbescheinigung, InfoSec-Fragebogen |
| 3 | ByteDance-Lieferanten-One-Pager entlang SFT/RM/Eval/Multimodal/Agentic erstellen; Ansprache über LinkedIn oder Intro | External Partnership Development, AI Data & Safety, Singapur | Wochen 2–6 | Mandarin-fähiger Vertrieb oder Partner in Singapur |
| 4 | Shengshu einen Pilot anbieten: DE/IT/ES-Caption-Evaluation und Benchmark | Leitung Daten-Lieferkette, Daten-Business-Manager (Beijing) | Wochen 2–6 | Musterdatensatz |
| 5 | MBZUAI-IFM ansprechen: Agentic- und STEM-Trajektorien, Biochemie-Expertise | IFM Data & Benchmarking; Termin in Paris | Wochen 2–6 | Dual-Use-Prüfung |
| 6 | White-Label-Gespräche mit Dataocean und Appen China führen | Business Development, China-Segment | Wochen 2–8 | Klausel zu Endkunden-Listen |
| 7 | M42 eine MEDIC-artige Radiologie- und Dermatologie-Evaluation anbieten | M42 direkt (nicht über Coupa) | Wochen 3–8 | Pilot-Rubrics |
| 8 | Moonshot einen Pilot anbieten, Vertrag über Novascent | Einkaufsteam Beijing | Wochen 3–8 | Compliance-Freigabe |
| 9 | Ant AQ einen Leitlinien-Pilot anbieten (EU-Dermatologen und -Radiologen) | AQ / Ant Health | Wochen 4–10 | Freigabe wegen Alibaba-Nähe |
| 10 | In Korea mit Flitto und Datumo sprechen, bevor die Frontier-AI-Ausschreibung (Dez. 2026 bis Feb. 2027) und die Auswahl in Stufe 3 (Mitte Feb. 2027) laufen | Flitto, Datumo; LG, SKT, Upstage | Wochen 4–12 | Antrag auf Muttersprachler-Ausnahme über den koreanischen Hauptauftragnehmer |
| 11 | Interesse an der AI Assurance Sandbox in Singapur einreichen | IMDA / AI Verify Foundation | Wochen 4–8 | Medizinisches Prüfkonzept |
| 12 | Konferenzplan festlegen: NeurIPS Dez. 2026 (Ort prüfen), Korea AI EXPO und AI EXPO Tokyo im April 2027, GITEX AI Asia 29.–30. Apr. 2027, WAIC Juli 2027 | – | laufend | – |
| 13 | Verifikationssprint: Live-Status der Stellen direkt auf LinkedIn und den Karriereseiten prüfen; offizielles 1260H-PDF lesen | intern | Wochen 1–3 | – |

## Abgleich mit dem internen Dokument: bestätigt, präzisiert, korrigiert

| Aussage im internen Dokument | Befund dieser Recherche | Status |
|---|---|---|
| Forbes: ca. 500 Mio. USD pro Jahr Ausgaben der sechs größten chinesischen Labs bei US-Anbietern | Über Sekundärquellen bestätigt (Original 403). Genannte Käufer: Tencent, Alibaba, Ant, ByteDance, Moonshot. China machte 2 % des Mercor-Umsatzes im Q2 2026 aus; AfterQuery hat ≥50 Mio. USD wiederkehrenden Umsatz mit chinesischen Labs [185, 186] | bestätigt, präzisiert |
| ChinaTalk: ByteDance kauft bei Abundant, Pareto, DeccanAI, Eaglepoint; Desks in Singapur und San Jose | Bestätigt. Zusätzlich: Mercor-SWE-RL-Umgebungen an Alibaba, Surge-RL-Umgebungen an Tencent, Z.ai und Moonshot; Eaglepoint gehört zu 51 % Global Mofy und produziert in Ostafrika, nicht in Indien [23, 56] | bestätigt, präzisiert |
| ByteDance-Team in Singapur onboardet Lieferanten | Bestätigt; jetzt Teil der Top-Level-Einheit AI Data & Safety (ca. 1.000 Personen); Stellentitel umbenannt [1, 21] | aktualisiert |
| Seed Global Data | Bestätigt; Produktion in Los Angeles und Singapur, Expert Community für Auslandsexperten [173, 58] | bestätigt |
| Tencent-Datenwunsch (Finanzen, Cyber, selbstverbessernde KI); Käufe bei Surge, Mercor, Turing, DeccanAI | Surge (Forbes-Snippet), Turing und DeccanAI (ChinaTalk) gestützt. **Mercor an Tencent nicht gefunden.** Der Datenwunsch ist nicht prüfbar (Forbes 403); passend dazu automatisierte Datenstrategien bei Hy4. Cyber ist für PathWize ausgeschlossen [66, 23, 67] | teilweise bestätigt |
| Alibaba kaufte bei Mercor und AfterQuery | Mercor bestätigt; AfterQuery-Verkäufe konnte ChinaTalk nicht verifizieren [23] | teilweise bestätigt |
| Qwen mit 119 Sprachen | Nicht erneut geprüft. Neu: Die Qwen-Labeling-Plattform deckt über 20 Sprachen und Dialekte mit professionellen Annotationsanbietern ab [69] | ergänzt |
| Siriser | Bestätigt (Start Januar 2026); neu: Finanz-PhD-Kampagne und Einladung an „globale“ Experten [43, 57] | präzisiert |
| ByteDance Xpert mit über 50.000 Experten | Bestätigt; neu: Rekrutierung über „vendor partnerships“, >200 Auslandsexperten [57, 20] | präzisiert |
| Expertensätze in China 100–500 RMB pro Aufgabe | Bestätigt; neu: Stundensätze 100–500 RMB (Xpert) bzw. ausgeschrieben 500–800 RMB (Vertikalaufgaben) [169, 18] | aktualisiert |
| DeepSeek sucht Daten-PMs für Fremdsprachen, Medizin, Recht | Bestätigt (25. Jun. 2026); ergänzt: 22 Datenrollen, überwiegend Agent/RL, teils Cyber [50, 84] | bestätigt |
| Moonshot-Gesellschaft Novascent in Singapur | Bestätigt (Umbenennung Juni 2026, 8 Mitarbeitende, Vertriebsrolle). Neu: Einkaufsrollen für Auslandslieferanten in Beijing. **Widerspruch:** PingWest sagt, Kimi kaufe selten extern [33, 6, 2] | bestätigt, Widerspruch offen |
| Hinweise zu MiniMax und StepFun | Konkretisiert: MiniMax-Prospekt mit Datenbudget; StepFun-Rollen für Expertenressourcen und Einkauf. Laut ChinaTalk verlangen MiniMax-Anzeigen Erfahrung mit Auslandslieferanten; die konkrete Anzeige wurde nicht wiedergefunden [9, 47, 23] | präzisiert |
| Zhipu auf der Entity List | Bestätigt (16. Jan. 2025) [17] | bestätigt |
| Tencent 1260H seit 2025; Alibaba und Baidu seit 8. Juni 2026 | Bestätigt; Federal Register vom 10. Jun. 2026; Folgen nach Section 1532 und 805 [15, 71, 16] | bestätigt |
| Korea-Programm (LG, SKT, Upstage; Crowdworks, SelectStar) | Aktualisiert: Motif schied am 18. Aug. 2026 aus; SelectStar heißt jetzt Datumo; Crowdworks mit Verlusten und Kontrollwechsel; für 2027 sind 750 Mrd. KRW für Daten vorgeschlagen [45, 150, 151, 46] | aktualisiert |
| Japan GENIAC | Aktualisiert: Schwerpunkt 2026 Physical AI und Fertigung; im Nov. 2026 keine offene Ausschreibung; Noetra [104, 105] | aktualisiert |
| AI Singapore | Präzisiert: Das NMLP nutzte unbezahlte Partnerdaten, ist also ein schwacher Käufer; Sandbox als Alternative [121, 122] | korrigiert (Priorität) |
| Sarvam / BharatGen | Bestätigt (indische Sprachen); Sarvam-Evaluationsrolle verteidigungsnah und daher ausgeschlossen [135] | präzisiert |
| Inception–Scale AI | Bestätigt (Feb. 2025); Inception heißt jetzt Inception42 [28, 111] | bestätigt |
| Haitian Ruisheng / Dataocean | Aktualisiert: Kunden auch Moonshot, MiniMax, Zhipu, Meta; Europa-Vertrieb im Aufbau. Hinweis: Eine Primärquellen-Analyse fand **keinen** ausländischen Datenanbieter chinesischer Modellfirmen in Pflichtveröffentlichungen. Käufe bei US-Anbietern sind nur journalistisch belegt [32, 75] | aktualisiert |
| Domestische Expertenanbieter | Widersprüchliche Bewertungen: UniPat ca. 1 Mrd. USD pre-money (AI Proem, Okt.) gegenüber ca. 2,5 Mrd. USD (PingWest, Nov.), möglicherweise eine neue Runde [146, 2] | Widerspruch offen |

## Lücken / nicht verifiziert

Das gemeinsame Websuche-Budget aller Recherchen (200 Suchen pro Durchlauf) war vor Abschluss erschöpft; danach konnten nur noch bekannte URLs direkt abgerufen werden. Dünn sind deshalb die zweite Reihe chinesischer Konzerne (Kuaishou, Meituan, JD, NetEase, PDD/Temu, Shein, Trip.com, Xiaomi), bei denen keine Stellenportale systematisch geprüft wurden, viele japanische (NTT, NEC, Fujitsu, ELYZA, Rakuten AI, LINE Yahoo, Kotoba, ABEJA, Medizin-KI-Firmen) und taiwanische Unternehmen (Foxconn FoxBrain, Academia Sinica, ASUS, Quanta, Pegatron, iKala, Appier), die Karriereseiten der Robotikhersteller (AgiBot, Galbot, Unitree, UBTech, Fourier, Galaxea, Leju, X Square) sowie chinesische Medizin- und Rechts-KI (Yidu, Medlinker, United Imaging Intelligence, Powerlaw). Shanghai AI Lab, KAUST und das bilinguale Medizinmodell BiMediX des MBZUAI – ein wahrscheinlich relevanter Lead – wurden nicht untersucht.

**Direkte LinkedIn-Prüfungen waren nicht möglich.** Alle LinkedIn-Signale stammen von Spiegelseiten (foundit, outscal, The Muse, TCV- und Coatue-Boards) mit oft nur relativen Daten; BOSS直聘, Liepin und Maimai sind JavaScript- oder Login-geschützt, und viele chinesische Startup-Stellen sind nur über den Aggregator DataHub belegt, dessen Originale nicht immer geöffnet wurden.

Nicht verifiziert sind zudem der Live-Status der Singapur-Stelle A226312B, Titel und Abteilung der Tencent-Stelle 2092894056538619904, die Frage, ob Xpert, Siriser und ExpertHub ausländische Experten oder Firmen aufnehmen, sowie Vergütung und Sprachen bei Ant AQ (Paywall). Der Forbes-Originaltext und das offizielle 1260H-PDF [187] ließen sich nicht lesen (403); die iFlytek-Einstufung stützt sich auf eine einzige Sekundärquelle, und die FBI/NSA/CISA-Destillationswarnung wurde nicht geöffnet, sodass die übrigen fünf genannten Firmen unbekannt sind. Offen bleiben ferner die Freigabe der humain-m3-Gewichte und der Alignment-Dienstleister, Lieferantenportale bei ByteDance, Tencent und Alibaba, die Zulassung ausländischer Firmen bei NEDO, die konkrete Verwendung der koreanischen 750 Mrd. KRW, europäische Rechtseinheiten von Dataocean, die Verbindung von Abaka AI zu MolarData samt Pariser Büro, die Konferenzorte bzw. -termine von NeurIPS 2026, WAIC 2027, ICLR 2027 und ACL 2027 sowie unbelegte Einzelangaben wie die Siriser-Vergütung von ca. 400 RMB pro Anweisung, die Identität von „Noetra“ und „Japan AI Foundation Model Development“ und Sarvams Finanzierung.

## Schlussfolgerung

**Einschätzung:** Der Markt hat sich in zwei Richtungen gleichzeitig bewegt, und genau daraus entsteht die Lücke für PathWize. Chinesische Labs professionalisieren den Einkauf mit Lieferantenzulassung, Exklusivitätspreisen und Piloten statt Ausschreibungen. Gleichzeitig holen sie die Expertenrekrutierung ins Haus (Xpert, ExpertHub, Siriser, Moonshots Hochschulnetz, ByteDances Auslandsexpertennetz). Für einen Anbieter, der nur „Experten“ verkauft, schrumpft damit der Markt. Für einen Anbieter, der approbierte bzw. zugelassene EU-Experten in europäischen Sprachen DSGVO-konform rekrutiert, liefert und abrechnet, wächst er. Gerade dieses Profil können die chinesischen Plattformen nicht günstig selbst aufbauen, und die politisch unter Druck geratenen US-Anbieter weniger frei bedienen.

Entscheidend ist deshalb weniger der Bedarf als die Reihenfolge. Die besten fachlichen Treffer (Tencent ExpertHub, Alibaba AIData) tragen die schwersten Flaggen. Die saubersten Käufer (ByteDance, Ant, Shengshu, G42/M42, MBZUAI-IFM) sind zugleich gut erreichbar und sollten den Anfang machen. Die Golfstaaten sind der bisher unterschätzte zweite Pfeiler: Dort gibt es ein offenes Lieferantenportal, ein Lab mit Pariser Standort und mit TII den einzigen Akteur, der dokumentiert auf zehn europäischen Sprachen trainiert. Der Kanal über Dataocean oder Appen China bringt Reichweite, aber keine Compliance-Distanz. Dieser Weg lohnt sich nur mit vertraglich festgelegten Endkunden.

## Quellen

[1] KrASIA/36Kr, neue ByteDance-Dateneinheit, 12. Aug. 2026. <https://www.kr-asia.com/after-seed-and-flow-bytedance-builds-a-new-ai-unit-around-data>  
[2] PingWest, Datenbeschaffung chinesischer Labs, 3. Nov. 2026. <https://www.pingwest.com/a/319155>  
[3] BigGo Finance, Neuordnung der Tencent AI-Data-Abteilung, 10. Okt. 2026. <https://finance.biggo.com/news/0f07a702-8f1d-434f-8198-b5c80189a1ab>  
[4] Tencent ExpertHub / 混元智囊团, offizielle Seite. <https://expert.tlabel.tencent.com/>  
[5] watchjobs-Spiegel der Stelle 1170302 (Volltext). <https://watchjobs.net/zh/explore/job/c256-1170302/%E9%98%BF%E9%87%8C%E6%8E%A7%E8%82%A1-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%96%E5%8C%85%E8%AE%AD%E7%BB%83%E9%87%87%E8%B4%AD%E4%B8%93%E5%AE%B6-%E6%9D%AD%E5%B7%9E-%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4>  
[6] BOSS直聘, Moonshot AI数据资源运营/采购经理 (22. Mai 2026). <https://www.zhipin.com/job_detail/f790bec460d458c60nB739m_ElJS.html>  
[7] Shengshu Feishu-Karriereseite, 数据供应链负责人 (15. Aug. 2026). <https://shengshu.jobs.feishu.cn/career/position/detail/7673954239215585578>  
[8] Shengshu Feishu-Karriereseite, 数据策略专家（小语种）(14. Aug. 2026). <https://shengshu.jobs.feishu.cn/career/position/detail/7673910436743465270>  
[9] MiniMax Global Offering Prospectus (HKEX), 31. Dez. 2025. <https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf>  
[10] G42, „Become a G42 Supplier“ (Coupa). <https://www.g42.ai/collaborations/become-g42-supplier>  
[11] zapply.jobs, MBZUAI-IFM Research Scientist, Agentic Data & Benchmarking (8. Jun. 2026). <https://zapply.jobs/jobs/722c6f66-4a65-47e2-a13a-08e7df6ce4b8/>  
[12] Soochow Securities, Analystennotiz Haitian Ruisheng, 24. Apr. 2026. <https://pdf.dfcfw.com/pdf/H3_AP202604241821560110_1.pdf>  
[13] Dataocean AI, Website. <https://dataoceanai.com>  
[14] Appen, H1 FY26 ASX-Mitteilung, 27. Aug. 2026. <https://announcements.asx.com.au/asxpdf/20260827/pdf/0739d4q7lyh3w2.pdf>  
[15] Holland & Knight, Department of War Updates Section 1260H, Jul. 2026. <https://www.hklaw.com/en/insights/publications/2026/07/department-of-war-updates-section-1260h>  
[16] Sayari, 1260H List Update. <https://sayari.com/resources/blog/1260h-list-update/>  
[17] Zhipu-Prospekt (inoffizieller Spiegel). <https://saranormous.github.io/filing-websites/zhipu/>  
[18] 36Kr/智东西, Direktrekrutierung von Experten durch chinesische Labs, 21. Mai 2026. <https://36kr.com/p/3817645558694788>  
[19] TCV-Jobboard, Partnership Development Analyst – AI Data and Safety. <https://portfoliojobs.tcv.com/companies/bytedance/jobs/65346076-partnership-development-analyst-ai-data-and-safety>  
[20] ByteDance Seed, XpertBench (arXiv 2604.02368), März 2026. <https://arxiv.org/html/2604.02368v1>  
[21] joinbytedance, Partnership Development Analyst – AI Data and Safety (A226312B). <https://joinbytedance.com/search/7589640323472558341>  
[22] joinbytedance, AI Product Manager Project Intern (AI Data & Safety), A95047A. <https://joinbytedance.com/search/7634521917428910341>  
[23] ChinaTalk, „Piggybacking to the Frontier“, 11. Nov. 2026. <https://www.chinatalk.media/p/the-us-is-selling-rl-environments>  
[24] ic-pcb.com, Wiedergabe der 1260H-Liste (188 Einträge). <https://www.ic-pcb.com/us-expands-1260h-list-to-188-chinese-entities-adding-major-tech-semiconductor-and-ev-companies.html>  
[25] DataHub, Shengshu-Stellenliste. <https://datahub.ac.cn/ai-jobs/companies/company-dc21f90e51.html>  
[26] MBZUAI, Gründung des Institute of Foundation Models (Mai 2025). <https://mbzuai.ac.ae/news/mbzuai-launches-institute-of-foundation-models-and-establishes-silicon-valley-ai-lab/>  
[27] IFM, Collaborate-Seite (Inhalt nicht geprüft). <https://ifm.ai/collaborate/>  
[28] Zawya, Partnerschaft Inception–Scale AI (Feb. 2025). <https://www.zawya.com/en/press-release/companies-news/inception-and-scale-ai-announce-strategic-partnership-to-drive-ai-innovation-globally-ho8awi0i>  
[29] M42, MEDIC-Evaluationsframework (arXiv 2409.07314). <https://arxiv.org/html/2409.07314v2>  
[30] Beijing Daily, AQ/蚂蚁阿福 rekrutiert Ärzte weltweit, 21. Okt. 2026. <https://news.bjd.com.cn/2026/10/21/12003286.shtml>  
[31] 健康界 (cn-healthcare), AQ-Rekrutierung „模型训练医学专家“, 21. Okt. 2026. <https://www.cn-healthcare.com/article/20261021/content-788637.html>  
[32] 21st Century Business Herald, Haitian Ruisheng H1 2026, 9. Okt. 2026. <https://m.sfccn.com/2026/10-9/yNMDE0MDdfMjI2NDEyNw.html>  
[33] RecordOwl, Moonshot Singapur / Novascent. <https://recordowl.com/news/moonshot-ai-singapore-sales-hire-novascent>  
[34] Wikipedia, Moonshot AI. <https://en.wikipedia.org/wiki/Moonshot_AI>  
[35] Yicai, MiniMax 10x Team / Fellowship, 12. Mai 2026. <https://www.yicai.com/news/103178255.html>  
[36] BOSS直聘, MiniMax 大模型数据基地负责人 (Chengdu). <https://www.zhipin.com/job_detail/f31935f87b09fa110nx43dS4E1RT.html>  
[37] Wikipedia, MiniMax Group. <https://en.wikipedia.org/wiki/MiniMax_Group>  
[38] TII, Falcon-H1 (GitHub). <https://github.com/tiiuae/Falcon-H1>  
[39] Hugging Face Blog, Falcon-H1-Arabic, Jan. 2026. <https://huggingface.co/blog/tiiuae/falcon-h1-arabic>  
[40] The Bell via Money Today, Flitto-Auftragsbestand, 30. Jun. 2026. <https://www.mt.co.kr/article/2026063008479648795>  
[41] Flitto DataLab, About. <https://datalab.flitto.com/en/company/about>  
[42] simplify.jobs, Tencent Data Partnerships Lead (TEG, Procurement & Sourcing). <https://simplify.jobs/p/c719c4f7-29ce-434c-806c-eb377d6c9bb8/Data-Partnerships-Lead>  
[43] CSDN (offizieller Siriser-Account), Rekrutierung Finanzexperten. <https://blog.csdn.net/siriser/article/details/157254884>  
[44] Alibaba Holding Karriereseite, 大模型外包训练采购专家 (positionId 1170302). <https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=1170302>  
[45] fnnews/Newsis, Ergebnis Stufe 2 독파모, 18. Aug. 2026. <https://www.fnnews.com/news/202608181111487214>  
[46] Ajunews, Frontier-AI-Budget 2027 und Stufe 3, 9. Nov. 2026. <https://www.ajunews.com/view/20261109142854617>  
[47] BOSS直聘, StepFun 大模型数据生态运营/专家资源运营 (3. Nov. 2026). <https://www.zhipin.com/job_detail/d5176111d4a9f5590nx829S4E1pY.html>  
[48] DataHub, StepFun-Stellenliste. <https://datahub.ac.cn/ai-jobs/companies/company-8db085b6de.html>  
[49] Wikipedia, StepFun. <https://en.wikipedia.org/wiki/StepFun>  
[50] Sina Finance, DeepSeek-Rekrutierungsrunde, 26. Jun. 2026. <https://finance.sina.com.cn/roll/2026-06-26/doc-iniesrah2111752.shtml>  
[51] Wikipedia, DeepSeek. <https://en.wikipedia.org/wiki/DeepSeek>  
[52] DataHub, Baichuan-Stellenliste. <https://datahub.ac.cn/ai-jobs/companies/company-47ce5eabe1.html>  
[53] Epoch AI, Analyse von 1.604 chinesischen KI-Stellenanzeigen, 24. Jun. 2026. <https://epoch.ai/gradient-updates/what-we-learned-from-1604-chinese-ai-job-postings>  
[54] outscal, Product Manager, LLM Data Acquisition and Production (San Jose). <https://outscal.com/job/product-manager-llm-data-acquisition-and-production-at-bytedance-in-san-jose-california-united-states-1>  
[55] Lead Edge-Jobboard, Partnership Development Specialist – LLM Data Acquisition and Production (A31935). <https://jobs.leadedge.com/companies/bytedance/jobs/44936466-partnership-development-specialist-llm-data-acquisition-and-production>  
[56] Global Mofy, Gründung Eaglepoint AI (Finviz), Jan. 2026. <https://finviz.com/news/267086/global-mofy-ai-limited-establishes-us-subsidiary-eaglepoint-ai-advancing-global-ai-training-and-data-engineering-capabilities>  
[57] Rest of World, Chinas Experten-KI-Trainer, 9. Sep. 2026. <https://restofworld.org/2026/china-expert-ai-trainers/>  
[58] TCV-Jobboard, Expert Community Analyst – Seed Global Data. <https://portfoliojobs.tcv.com/companies/bytedance/jobs/65536229-expert-community-analyst-seed-global-data>  
[59] ByteDance Business Partner Code of Conduct (supplier.bytedance.com). <https://supplier.bytedance.com/code.pdf>  
[60] lifeattiktok, Partner Operation Manager, AI Data Service Operations (A258236). <https://lifeattiktok.com/search/7673026572663933237>  
[61] aijobs.net, TikTok LIVE – AI Data Operation Specialist (German Speaking). <https://aijobs.net/job/JDDW74qETZOz9xP/apply/>  
[62] The Muse, TikTok Safety Model Data QA Analyst (German Speaking) – Third-party Associate. <https://www.themuse.com/jobs/tiktok/safety-model-data-quality-assurance-analyst-german-speaking-thirdparty-associate>  
[63] Fairygodboss, TikTok Community Operations Specialist, EU-CAI (DE/ES/IT/FR, Third-party Associate). <https://fairygodboss.com/jobs/tiktok/community-operations-specialist-eu-cai-german-spanish-italian-french-speaker-third-party-associate-71d64d9efd353a4986916364f525aa71>  
[64] woshipm, Start von ExpertHub, 21. Sep. 2026. <https://www.woshipm.com/share/6467704.html>  
[65] WonderCV, Tencent Hunyuan 青云计划 2026. <https://www.wondercv.com/xiaozhao/tencent-hunyuan-qingyun-plan-2026-11495-220b8a/>  
[66] Forbes, „Silicon Valley's Other China Problem: It's Training Their AI“, 5. Aug. 2026 (Original 403, über Sekundärquellen gelesen). <https://www.forbes.com/sites/annatong/2026/08/05/silicon-valleys-other-china-problem-its-training-their-ai/>  
[67] AI Safety in China, Brief #32. <https://aisafetychina.substack.com/p/brief-32-tencent-deepseek-and-alibaba>  
[68] 51mee, Alibaba AIData / 数据技术及产品部, Stellenliste 2026. <https://offers.51mee.com/offer-detail/60E11DJ8.html>  
[69] freehire, 千问办公-研发工程师-数据标注方向 (9. Nov. 2026). <https://freehire.me/jobs/qian-wen-ban-gong-yan-fa-gong-cheng-shi-shu-ju-biao-zhu-fang-xiang-alibaba-group-4lortry5>  
[70] CSDN (offizieller Siriser-Account), Start der Website 晓天睿士. <https://blog.csdn.net/siriser/article/details/157943313>  
[71] Federal Register, Notice of Availability (1260H), 10. Jun. 2026. <https://www.federalregister.gov/documents/2026/06/10/2026-11571/notice-of-availability-of-designation-of-chinese-military-companies>  
[72] Tencent News/Zhidx, Baidu-Annotationsbasis Haikou (2023). <https://news.qq.com/rain/a/20230824A08SCO00>  
[73] Meituan, LongCat-2.0, 30. Jun. 2026. <https://www.meituan.com/news/NN260630164005904>  
[74] niuqizp-Spiegel, Meituan 大模型数据运营-小语种/方言方向实习生. <https://campus.niuqizp.com/job-vl85L555a.html>  
[75] jimmyresearch, Lieferanten-Map chinesischer Modellfirmen, 15. Okt. 2026. <https://jimmyresearch.com/AIdata/llm/model-recipes/>  
[76] 21jingji, Kuaishou Capex/Kling, 13. Mai 2026. <https://www.21jingji.com/article/20260513/025d7b0a2c65669ca526bc5bf4323ffd.html>  
[77] Wikipedia, SenseTime. <https://en.wikipedia.org/wiki/SenseTime>  
[78] Wikipedia, iFlytek. <https://en.wikipedia.org/wiki/IFlytek>  
[79] DataHub, Moonshot-Stellenliste. <https://datahub.ac.cn/ai-jobs/companies/company-819fc19826.html>  
[80] Moka, Moonshot 数据标注资源运营经理 (19. Sep. 2026). <https://app.mokahr.com/apply/moonshot/148506#/job/89640cd9-5a23-452b-ab32-23c4cc6d9475>  
[81] BOSS直聘, Moonshot AI数据运营专家（高校生态方向）(3. Mär. 2026). <https://www.zhipin.com/job_detail/08b000a61e2a9baf0nR73dW5EltU.html>  
[82] The Standard (Reuters), Moonshot Singapur, 21. Okt. 2026. <https://www.thestandard.com.hk/innovation/article/346068/Chinas-Moonshot-AI-to-operate-in-Singapore-jobs-post-shows>  
[83] Shengshu Feishu-Karriereseite, 具身智能数据供应链经理 (20. Jul. 2026). <https://shengshu.jobs.feishu.cn/career/position/detail/7659347314686970118>  
[84] DataHub, DeepSeek-Stellen (Snapshot 3. Nov. 2026). <https://datahub.ac.cn/ai-jobs/topics/deepseek-jobs.html>  
[85] Wikipedia, Baichuan. <https://en.wikipedia.org/wiki/Baichuan>  
[86] DataHub, ModelBest-Stellenliste. <https://datahub.ac.cn/ai-jobs/companies/company-50d74f662d.html>  
[87] Wikipedia, Beijing Academy of Artificial Intelligence. <https://en.wikipedia.org/wiki/Beijing_Academy_of_Artificial_Intelligence>  
[88] TNGlobal, Manus-Finanzierung nach Meta-Exit, 8. Okt. 2026. <https://technode.global/2026/10/08/manus-parent-raises-more-than-500-million-after-meta-exit/>  
[89] Science and Technology Daily, CAICT-Bericht Trainingsfelder, 19. Aug. 2026. <https://www.stdaily.com/web/gdxw/2026-08/19/content_565996.html>  
[90] Rest of World, Robotik-Trainingsdaten in China, 3. Jun. 2026. <https://restofworld.org/2026/china-ai-robotics-training-data/>  
[91] ChinaTalk, „Take ten thousand egocentric data“, 22. Okt. 2026. <https://www.chinatalk.media/p/take-ten-thousand-egocentric-data>  
[92] humanoid.guide, Humanoid-Robotics-Konsolidierungskarte. <https://humanoid.guide/humanoid-robotics-consolidation-map/>  
[93] Wikipedia, 1260H list. <https://en.wikipedia.org/wiki/1260H_list>  
[94] ZDNet Korea, Doppelblind-Nutzerbewertung Stufe 3, 3. Nov. 2026. <https://zdnet.co.kr/view/?no=20261103163035>  
[95] Money Today, Haushaltsdebatte Frontier-AI-Daten, 4. Nov. 2026. <https://www.mt.co.kr/article/2026110423122682128>  
[96] MSIT/NIA/K-DATA, Ausschreibung 제2026-0877 Joint-Use-Daten Runde 2 (PDF, thevc-Spiegel). <https://grant-documents.thevc.kr/311710_%EB%B6%99%EC%9E%841_%EB%8F%85%EC%9E%90+AI%ED%8C%8C%EC%9A%B4%EB%8D%B0%EC%9D%B4%EC%85%98+%EB%AA%A8%EB%8D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B3%B5%EB%8F%99%ED%99%9C%EC%9A%A9+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85%282%EC%B0%A8%29+%EA%B3%B5%EA%B3%A0%EB%AC%B8.pdf>  
[97] AI Hub, NIA-Ausschreibung 2026-105 Benchmark-Datensätze. <https://www.aihub.or.kr/aihubnews/bsnspblanc/view.do?currMenu=133&topMenu=103&nttSn=10557>  
[98] ZDNet Korea, LG EXAONE Data Foundry auf der ICML, 8. Jul. 2026. <https://zdnet.co.kr/view/?no=20260708100002>  
[99] ZDNet Korea, KT Mi:dm K 2.5 Pro, 26. Feb. 2026. <https://zdnet.co.kr/view/?no=20260226085930>  
[100] Lunit IR-Deck Q1 2026. <https://www.lunit.io/wp-content/uploads/2026/05/Lunit_IR-Deck_EN_2026.1Q.pdf>  
[101] NEDO, Adoptionsliste GENIAC Fertigungsdaten (PDF). <https://www.nedo.go.jp/content/800054839.pdf>  
[102] NEDO, GENIAC Datenökosystem – Entscheidung. <https://www.nedo.go.jp/koubo/CD3_100430.html>  
[103] NEDO, GENIAC Roboter-Foundation-Models Runde 2. <https://www.nedo.go.jp/koubo/CD3_100434.html>  
[104] NEDO, Liste der KI-Ausschreibungen FY2026. <https://www.nedo.go.jp/koubo/2026_list_05_03.html>  
[105] Asia Times, Japans Physical-AI-Allianz, Jul. 2026. <https://asiatimes.com/2026/07/japan-rallies-tech-giant-alliance-to-build-sovereign-ai/>  
[106] SB Intuitions Blog, Sarashina3, 30. Jun. 2026. <https://www.sbintuitions.co.jp/blog/entry/2026/06/30/100000>  
[107] SB Intuitions, Med-Sarashina mit Juntendo, 10. Aug. 2026. <https://www.sbintuitions.co.jp/news/press/20260810_01/>  
[108] Sakana AI, Karriereseite. <https://sakana.ai/careers/>  
[109] Taipei Times, MODA-Korpus, 15. Sep. 2026. <https://www.taipeitimes.com/News/taiwan/archives/2026/09/15/2003864319>  
[110] Taipei Times, TAIDE-Feature, 24. Sep. 2026. <https://www.taipeitimes.com/News/feat/archives/2026/09/24/2003864793>  
[111] Middle East AI News, Inception42 / Seraj. <https://www.middleeastainews.com/p/inception42-advances-arabic-ai-for-enterprise>  
[112] Middle East AI News, M42 MEDIC-Leaderboard. <https://www.middleeastainews.com/p/g42-m42-releases-medic-llm-leaderboard>  
[113] Middle East AI News, humain-m3 mit MiniMax, Sep. 2026. <https://www.middleeastainews.com/p/humain-unveils-428b-parameter-arabic>  
[114] MENA Startup Digest, ALLaM in Microsoft Foundry. <https://menastartupdigest.com/?p=49384>  
[115] Bayanat Labs, Vergleich arabischer LLM-Evaluationsanbieter (Wettbewerberquelle). <https://www.bayanatlabs.com/insights/arabic-llm-evaluation-companies>  
[116] Bayanat Labs, Talent Network. <https://www.bayanatlabs.com/talent-network>  
[117] TheOrg, HUMAIN-Team „Data Annotation“ (Drittanbieter-Organigramm, ggf. veraltet). <https://theorg.com/org/humain/teams/data-annotation>  
[118] trade.gov, Country Commercial Guide Saudi-Arabien – Selling to the Public Sector, 19. Mai 2026. <https://www.trade.gov/country-commercial-guides/saudi-arabia-selling-public-sector>  
[119] QCRI, Fanar 2.0 (arXiv 2603.16397). <https://arxiv.org/abs/2603.16397>  
[120] Mobile World Live, Scale AI – Qatar MCIT (Feb. 2025). <https://www.mobileworldlive.com/ai-cloud/qatar-looks-for-ai-boost-with-5-year-deal/>  
[121] MDDI Singapur, Parlamentsantwort zur Vergütung von NMLP-Daten, 7. Mai 2024. <https://www.mddi.gov.sg/newsroom/pq-on-remuneration-for-national-multimodel-large-language-model-programme/>  
[122] AI Verify Foundation, Global AI Assurance Sandbox. <https://aiverifyfoundation.sg/ai-assurance/>  
[123] AI Verify Foundation, Fallstudie Changi Airport × PRISM Eval (Paris). <https://assurance.aiverifyfoundation.sg/wp-content/uploads/2025/05/CAG-x-Prism-Eval-x-Guardrails.pdf>  
[124] EDB Singapur, Sea AI Centre of Excellence, 20. Apr. 2026. <https://www.edb.gov.sg/en/about-edb/media-releases-publications/sea-establishes-ai-centre-in-singapore-for-innovation.html>  
[125] grab.careers, Principal ML Engineer, AI Platform (Foundation Model Post-Training). <https://www.grab.careers/en/jobs/744000147146029/principal-machine-learning-engineer/>  
[126] Selular, Sahabat-AI 70B, Jun. 2025. <https://selular.id/2025/06/indosat-dan-goto-luncurkan-layanan-chat-multibahasa-sahabat-ai-dengan-70-miliar-parameter/>  
[127] NSTDA, ThaiLLM, Apr. 2026. <https://www.nstda.or.th/en/news/news-years-2026/thaillm.html>  
[128] W.Media, ILMU (YTL AI Labs / Universiti Malaya). <https://w.media/ilmu-deep-dive-into-malaysias-first-homegrown-llm-with-prof-chan/>  
[129] TechNode Global/PR Newswire, Fractal Vaidya 2.0, Feb. 2026. <https://technode.global/prnasia/fractal-launches-vaidya-2-0-outperforming-leading-frontier-models-on-healthcare-ai-benchmarks/>  
[130] ACL Anthology, Fathom-Vaidya (EMNLP 2026). <https://aclanthology.org/2026.emnlp-main.1109/>  
[131] AIM, BharatGen/Tech Mahindra/Fractal in IndiaAI-Phase 2. <https://analyticsindiamag.com/ai-news-updates/bharatgen-tech-mahindra-and-fractal-selected-for-phase-2-of-indiaai-mission/>  
[132] SiliconIndia, Bhashini-RFE für Annotation, Aug. 2025. <https://www.siliconindia.com/news/technology/bhashini-invites-partners-to-annotate-indian-language-data-for-ai-training-nid-237365-cid-2.html>  
[133] IndiaAI, AIKosh-EOI. <https://indiaai.gov.in/article/now-open-expression-of-interest-eoi-to-contribute-datasets-and-ai-artefacts-to-aikosh>  
[134] Entrackr, Krutrim streicht Linguistik-Stellen, Sep. 2025. <https://entrackr.com/news/olas-krutrim-cuts-50-jobs-in-linguistics-team-report-9777156>  
[135] Sarvam AI, Data Scientist – Evaluations, Chanakya. <https://www.sarvam.ai/careers/jobs/7c42207a-bb56-413c-839f-9ad692df840e>  
[136] Datatang (数据堂), Geschäftsbericht 2025. <https://pdf.dfcfw.com/pdf/H2_AN202604291821753233_1.pdf>  
[137] The Star, Flitto als Big-Tech-Datenlieferant, 21. Jul. 2026. <https://www.thestar.com.my/business/business-news/2026/07/21/how-a-k-pop-app-became-big-techs-data-supplier>  
[138] EXL 8-K-Exhibit (SEC), iMerit-Übernahme, 24. Jun. 2026. <https://www.sec.gov/Archives/edgar/data/0001297989/000110465926077069/tm2618647d1_ex99-1.htm>  
[139] EXL, Abschluss der iMerit-Übernahme. <https://www.exlservice.com/about/newsroom/exl-completes-acquisition-of-imerit-accelerating-enterprise-ai-leadership>  
[140] SiliconANGLE, iMerit-Expertenplattform, 26. Okt. 2026. <https://siliconangle.com/2026/10/26/imerit-launches-platform-to-connect-ai-developers-with-specialized-domain-experts/>  
[141] iMerit Scholars, offene Rollen (Abruf 12. Nov. 2026). <https://scholars.net/>  
[142] TechCrunch, Deccan AI Series A, 25. Mär. 2026. <https://techcrunch.com/2026/03/25/deccan-ai-raises-25m-as-ai-training-push-relies-on-india-based-workforce>  
[143] Deccan Experts (ehem. Soul AI), Website. <https://deccanexperts.ai/>  
[144] WFTV, Abaka.AI-Finanzierung, 28. Mai 2026. <https://www.wftv.com/news/local/abakaai-secures-8m-expand-ai-data-infrastructure/F3SUWZR3NNHMTGPBVBE5QXUIQQ/>  
[145] Abaka AI, Website. <https://www.abaka.ai/>  
[146] AI Proem, „Does China not have data vendors?“, 9. Okt. 2026. <https://aiproem.substack.com/p/does-china-not-have-data-vendors>  
[147] Outsource Accelerator, Ubiquity übernimmt Shaip. <https://news.outsourceaccelerator.com/ubiquity-to-acquire-shaip/>  
[148] PYMNTS, Uber übernimmt Segments.ai, Okt. 2025. <https://www.pymnts.com/acquisitions/2025/uber-acquires-segments-ai-to-grow-data-labeling-business/>  
[149] Magic Data, Website. <https://www.magicdatatech.com/>  
[150] TechCrunch, Datumo (ex SelectStar), 11. Aug. 2025. <https://techcrunch.com/2025/08/11/seoul-based-datumo-raises-15-5m-to-expand-llm-evaluation-challenging-scale-ai>  
[151] Digital Daily, Crowdworks Q1 2026, 16. Mai 2026. <https://www.ddaily.co.kr/page/view/2026051600354775121>  
[152] Digital Daily, Crowdworks Kontrollwechsel, 17. Dez. 2025. <https://www.ddaily.co.kr/page/view/2025121722315688382>  
[153] Abu Dhabi Media Office, Lieferantenregistrierung ADGPG. <https://www.mediaoffice.abudhabi/en/supplier-registration-in-abu-dhabi-government/>  
[154] Xinhua Finance/cnfin, Global Data Merchants Conference, 31. Okt. 2026. <https://www.cnfin.com/gs-lb/detail/20261031/4489326_1.html>  
[155] Indoneo, Shenzhen Data Exchange – Zetrix-MoU, Mai 2026. <https://www.indoneo.com/tech-ai/china-malaysia-data-exchange-ai-rulebook/>  
[156] BizToc, Forbes-Auszug (US-Vertrieb auf der ICML Seoul). <https://biztoc.com/x/15b2c7d754d80ab6>  
[157] ICML 2026, Konferenzseite. <https://icml.cc/Conferences/2026>  
[158] Shanghai Government, WAIC 2026. <https://english.shanghai.gov.cn/en-Events/20260624/9cc202d708504b56ba32f70fbd61ef79.html>  
[159] LINGUIST List, EMNLP 2026 Budapest. <https://listserv.linguistlist.org/pipermail/linguist/2026-March/122870.html>  
[160] CGTN, WIC Wuzhen Summit 2026, 3. Nov. 2026. <https://news.cgtn.com/news/2026-11-03/2026-WIC-Wuzhen-Summit-opens-with-focus-on-open-source-AI-1RLpbtAJn0I/p.html>  
[161] NexTech Week / AI EXPO TOKYO. <https://www.nextech-week.jp/spring/en-gb.html>  
[162] NeurIPS 2026, Termine. <https://nips.cc/Conferences/2026/Dates>  
[163] OpenCurious, Konferenzkalender (AAAI-27). <https://www.opencurious.com/ai-conference-deadlines/iclr-2027>  
[164] showsbee, AI EXPO KOREA 2027. <https://www.showsbee.com/fairs/89037-AI-EXPO-KOREA-2027.html>  
[165] ICLR 2027, Termine. <https://www.iclr.cc/Conferences/2027/Dates>  
[166] luminik, GITEX AI Asia 2027. <https://www.luminik.io/events/gitex-ai-singapore/>  
[167] showsbee, WAIC 2027 (Termin offen). <https://www.showsbee.com/fairs/101568-World-Artificial-Intelligence-Conference-2027.html>  
[168] OpenCurious, ACL 2027. <https://www.opencurious.com/ai-conference-deadlines/acl-2027>  
[169] 蓝鲸财经 (Lanjinger), Expertenvergütung und Datenanbieter, 12. Dez. 2025. <https://www.lanjinger.com/d/1765548724031120377>  
[170] Huxiu, Vergütung medizinischer Annotation, Aug. 2026. <https://www.huxiu.com/article/4884422.html>  
[171] niuqizp, 中洲联创 小语种采标 (4. Sep. 2026). <https://campus.niuqizp.com/job-vYm5anzLz.html>  
[172] niuqizp, 广州淇至科技 小语种大模型数据标注 (3. Aug. 2026). <https://campus.niuqizp.com/job-vmU5zM5NC.html>  
[173] TCV-Jobboard, LLM Training Operation Specialist – Seed Global Data. <https://portfoliojobs.tcv.com/companies/bytedance/jobs/64579890-llm-training-operation-specialist-seed-global-data>  
[174] Annotation Academy, Mercor „Medical Expert, German (Germany)“, 14. Okt. 2026. <https://annotation.academy/jobs/cmv826gvg0012l906y0vbpjvc>  
[175] Annotation Academy, Meridial „Medicine specialist, fluent in German“. <https://annotation.academy/jobs/cmvulboji00weity1o5e4hbh3>  
[176] Jobteaser, JT AI Labs „Medicine AI Trainer“, 16. Apr. 2026. <https://www.jobteaser.com/en/job-offers/77559b50-16be-4e55-8d6c-0aa7ddf91d0e-jt-ai-labs-medicine-ai-trainer>  
[177] whynotremote, Invisible „German Language Specialist – AI Trainer“. <https://www.whynotremote.com/jobs/german-language-specialist-ai-trainer-0acdd219>  
[178] ZipRecruiter.de, RWS „AI Data Specialist (German)“, 25. Jun. 2026. <https://www.ziprecruiter.de/jobs/550818128-ai-data-specialist-german-bei-rws-gruppe>  
[179] QQ News, Branchenanalyse Datenbudgets, 4. Aug. 2026. <https://news.qq.com/rain/a/20260804A08FN500>  
[180] Cleary Trade Watch, 1260H-Erweiterung Juni 2026. <https://www.clearytradewatch.com/2026/06/department-of-defense-adds-major-technology-automotive-and-biotechnology-firms-to-1260h-chinese-military-companies-list/>  
[181] Townhall, Kritik an US-Datenverkäufen nach China, 26. Okt. 2026. <https://townhall.com/news/tayte-christensen/2026/10/26/new-report-scrutinizes-us-ai-data-sales-to-china-n2685323>  
[182] RedState, 18. Aug. 2026. <https://redstate.com/rc-maxwell/2026/08/18/american-innovation-is-subsidizing-a-rivals-ai-capabilities-n2205773>  
[183] ZDNet Korea, Naver-Cybersecurity-Foundation-Model, 22. Sep. 2026. <https://zdnet.co.kr/view/?no=20260922161236>  
[184] News1, EXAONE-basiertes Sicherheitsmodell. <https://www.news1.kr/it-science/cc-newmedia/6278791>  
[185] AI Weekly, Zusammenfassung des Forbes-Berichts, 8. Aug. 2026. <https://aiweekly.co/alerts/forbes-surge-ai-mercor-afterquery-and-turing-sold-500myear-of-training-data-to>  
[186] EdgeX/CryptoBriefing, Zusammenfassung Forbes (Mercor 2 %, AfterQuery). <https://pro.edgex.exchange/en-US/news/article/us-data-labeling-firms-china-ai-revenue>  
[187] U.S. Department of War, offizielle 1260H-Liste (PDF, beim Abruf 403). <https://media.defense.gov/2026/Jun/08/2003945537/-1/-1/1/ENTITIES-IDENTIFIED-AS-CHINESE-MILITARY-COMPANIES-OPERATING-IN-THE-UNITED-STATES-IN-ACCORDANCE-WITH-SECTION-1260H.PDF>  
