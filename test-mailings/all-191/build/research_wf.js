export const meta = {
  name: 'mailing-research-191',
  description: 'Recherchiert echte Ausbildungs-Inhalte (Benefits/Fakten/Copy) je Firma für die Mailing-PDFs',
  phases: [{ title: 'Recherche', detail: '1 Agent pro Firma, Karriereseite + ausbildung.de' }],
}

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['n','style','tagline','headline','subline','intro','benefits','pay','salut','hook','signoff','facts_note'],
  properties: {
    n: { type: 'integer' },
    style: { type: 'string', enum: ['serif','sans'] },
    tagline: { type: 'string', description: 'Kicker, 2-6 Wörter, Markenton' },
    headline: { type: 'string', description: 'Kurze Hero-Headline mit GENAU EINEM <br>' },
    subline: { type: 'string', description: '1 Satz, mit echtem Detail zur Rolle/Firma' },
    intro: { type: 'string', description: '2-3 Sätze, echte Fakten: was die Firma macht, Größe/Tradition/Standorte' },
    benefits: { type: 'array', minItems: 5, maxItems: 6, items: { type: 'string' } },
    pay: { anyOf: [ { type: 'null' }, { type: 'array', minItems: 3, maxItems: 3, items: { type: 'string' } } ] },
    salut: { type: 'string', description: 'Deutscher Beispiel-Vorname für die Vorschau' },
    hook: { type: 'string', description: 'persönlicher Einstieg nach "Liebe/r {Name},", startet klein' },
    signoff: { type: 'string', description: 'Gruß, 2 Zeilen mit <br>, Zeile 2 <strong>Dein Ausbildungsteam ...</strong>' },
    facts_note: { type: 'string', description: 'Kurz: Quelle & was echt vs. generisch ist' },
  },
}

const A = (typeof args === 'string') ? JSON.parse(args) : args
const dir = A.dir
const ns = A.ns || Array.from({ length: A.end - A.start + 1 }, (_, i) => A.start + i)
const items = ns.map(n => ({ n, file: `${dir}/comp/comp_${n}.json` }))
log(`Recherche für ${items.length} Firmen startet`)

function prompt(it) {
  return `Du recherchierst Inhalte für ein Employer-Branding-MAILING (E-Mail als PDF), das die Firma an Ausbildungs-Interessent:innen (Schüler:innen) schicken würde. Alles auf Deutsch, "du"-Form.

SCHRITT 0: Lies zuerst mit dem Read-Tool die Datei ${it.file}. Sie enthält die Felder firma, firma_full, role, ort, karriere, ausbildung_de für Firma Nr. ${it.n}. Nutze diese Werte.

AUFGABE:
1. Besuche die STELLENANZEIGE (ausbildung.de) via WebFetch — dort stehen meist "Das bieten wir dir" (Benefits) und eine Firmenbeschreibung. Besuche zusätzlich die KARRIERESEITE. Wenn eine Seite 403/blockt, nutze WebSearch mit dem Firmennamen aus der Datei, z.B. "<firma> Ausbildung Benefits Vorteile" und "<firma> <role>".
2. Extrahiere NUR ECHTE Fakten. NICHTS erfinden. Keine erfundenen Zahlen. Wenn ein konkreter Vergütungsbetrag (monatlich, pro Lehrjahr) belegt ist, gib ihn in "pay" als ["1.100 €","1.200 €","1.300 €"] an — sonst pay=null. Benefits nur, wenn sie real belegt oder klar branchentypisch & unstrittig sind (z.B. "IHK-Abschluss", "erfahrene Ausbilder:innen") — bevorzugt die recherchierten.

LIEFERE (Schema):
- style: "serif" für Mode/Lifestyle/Schmuck/Traditions-/Familienunternehmen/Privatbanken/gehobenen Einzelhandel; sonst "sans".
- tagline: kurzer Kicker im Markenton (2-6 Wörter), z.B. "Deine Ausbildung mit Sinn".
- headline: knackige Hero-Zeile mit GENAU EINEM <br> (z.B. "Starte deine<br>Bio-Karriere."). Kein Fakt, sondern Einladung/Claim.
- subline: 1 Satz mit einem echten Detail (was man in der Ausbildung macht / was die Firma besonders macht).
- intro: 2-3 Sätze für den Absatz "Warum {firma}?" (Kurzname aus der Datei) — echte Firmenfakten (Branche, Größe, Tradition, Standorte) + warum dort ausbilden.
- benefits: 5-6 kurze Punkte (echte Vorteile: Vergütung/Urlaub/Rabatt/Übernahme/Weiterbildung/ÖPNV-Zuschuss/bAV etc.).
- pay: 3 Beträge oder null (siehe oben).
- salut: ein passender deutscher Beispiel-Vorname (VARIIERE, nicht immer derselbe).
- hook: persönlicher Einstieg direkt nach "Liebe/r {Name}," — beginnt KLEIN, im Stil "bist du gerade auf der Suche nach ...?" / "möchtest du ...?", 1-2 Sätze, führt zum Angebot hin, rollen-/branchenspezifisch.
- signoff: 2 Zeilen mit <br>; Zeile 1 warm ("Wir freuen uns auf deine Bewerbung." o.ä.), Zeile 2 exakt "<strong>Dein Ausbildungsteam von {firma}</strong>" (Kurzname aus der Datei; oder sinnvolle Variante wie "... der {firma}").
- facts_note: 1 Satz zur Quelle und ob Fakten echt oder generisch sind.

STILVORBILD (Ton/Länge, NICHT kopieren):
tagline "Deine Ausbildung mit Sinn"; headline "Starte deine<br>Bio-Karriere."; subline "Entdecke die bunte Bio-Berufswelt – mit einer Ausbildung, die richtig Sinn ergibt."; hook "bist du gerade auf der Suche nach einer Ausbildung, die wirklich Sinn ergibt? Dann sollten wir uns kennenlernen."

Gib NUR das JSON-Objekt zurück (mit n=${it.n}).`
}

const results = await parallel(items.map(it => () =>
  agent(prompt(it), { schema: SCHEMA, effort: 'medium', agentType: 'general-purpose',
                      label: `res:${it.n}` })
    .then(r => r ? { ...r, n: it.n } : { n: it.n, _failed: true })
))

const ok = results.filter(r => r && !r._failed)
const failed = results.filter(r => !r || r._failed).map(r => r && r.n)
log(`fertig: ${ok.length} ok, ${failed.length} fehlgeschlagen: ${failed.join(',')}`)
return results
