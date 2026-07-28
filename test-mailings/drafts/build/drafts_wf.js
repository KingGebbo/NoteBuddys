export const meta = {
  name: 'create-gmail-drafts-191',
  description: 'Legt die personalisierten Gmail-Entwürfe an (verbatim aus den Batch-Dateien, nichts senden)',
  phases: [{ title: 'Drafts', detail: '1 Agent pro Batch, create_draft verbatim' }],
}

const A = (typeof args === 'string') ? JSON.parse(args) : args
const dir = A.dir
const batches = A.batches

const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['batch', 'created', 'failed'],
  properties: {
    batch: { type: 'integer' },
    created: { type: 'array', items: {
      type: 'object', additionalProperties: false,
      required: ['n', 'draftId'],
      properties: { n: { type: 'integer' }, draftId: { type: 'string' } } } },
    failed: { type: 'array', items: {
      type: 'object', additionalProperties: false,
      required: ['n', 'error'],
      properties: { n: { type: 'integer' }, error: { type: 'string' } } } },
  },
}

function prompt(b) {
  return `Du legst Gmail-ENTWÜRFE an. NICHTS SENDEN. Keine Nachrichten verschicken.

SCHRITT 1: Lade das Gmail-Tool: rufe ToolSearch mit query "select:mcp__Gmail__create_draft" auf.

SCHRITT 2: Lies mit dem Read-Tool die Datei ${dir}/draftbatches/batch_${b}.json.
Sie enthält ein JSON-Array mit Objekten: n, firma, to, subject, htmlBody.

SCHRITT 3: Für JEDES Objekt im Array rufe GENAU EINMAL mcp__Gmail__create_draft auf mit:
  - to: [ <Wert von "to"> ]        <- Array mit genau EINER Adresse, exakt wie in der Datei
  - subject: <Wert von "subject">  <- VERBATIM, Zeichen für Zeichen, inkl. der Anführungszeichen „ “
  - htmlBody: <Wert von "htmlBody"> <- VERBATIM, der komplette HTML-String 1:1

ABSOLUT VERBOTEN:
  - KEIN "body"-Feld (kein Plaintext), KEINE attachments, KEIN cc/bcc, KEIN replyToMessageId
  - Text NIEMALS umformulieren, kürzen, übersetzen oder "verbessern"
  - Adressen/Betreffe NIEMALS raten oder aus dem Gedächtnis rekonstruieren – immer aus der Datei
  - Keine Mail senden. Nur Entwürfe anlegen.

Arbeite die Einträge der Reihe nach ab. Wenn ein create_draft-Aufruf fehlschlägt, notiere n + Fehlermeldung
und mache mit dem nächsten Eintrag weiter (nicht abbrechen, nicht doppelt anlegen).

RÜCKGABE (JSON): { batch: ${b}, created: [{n, draftId}], failed: [{n, error}] }
draftId = der "id"-Wert aus der create_draft-Antwort.`
}

const results = await parallel(batches.map(b => () =>
  agent(prompt(b), { schema: SCHEMA, effort: 'low', agentType: 'general-purpose',
                     label: `drafts:batch${b}`, phase: 'Drafts' })
    .then(r => r || { batch: b, created: [], failed: [{ n: -1, error: 'agent returned null' }] })
))

const created = results.flatMap(r => r.created || [])
const failed = results.flatMap(r => r.failed || [])
log(`angelegt: ${created.length} Entwürfe, Fehler: ${failed.length}`)
return { created, failed }
