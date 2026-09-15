/**
 * Webhook pentru formularele de lead. Scrie fiecare submitere în foaia
 * „Audituri", inclusiv pagina din care a venit lead-ul (`source`) și tot ce a
 * completat omul în formular.
 */

var SHEET_NAME = "Audituri";

/**
 * Ordinea coloanelor din foaie.
 *
 * Primele 7 păstrează ordinea folosită de versiunea anterioară a scriptului, ca
 * rândurile deja existente să rămână aliniate. Coloanele noi sunt adăugate la
 * final, deci nu se suprapun peste date vechi.
 */
var HEADERS = [
  "Data",
  "Nume",
  "Email",
  "Telefon",
  "Afacere / Cabinet",
  "Oraș",
  "Website / Profil actual",
  "Interval preferat",
  "Observații",
  "Sursă",
];

function doPost(e) {
  // Serializează scrierile: două lead-uri simultane nu trebuie să scrie
  // peste același rând.
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    var sheet = getOrCreateSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      toDate(data.submittedAt),
      text(data.fullName),
      text(data.email),
      text(data.phone),
      text(data.clinicOrName),
      text(data.city),
      text(data.currentWebsiteOrProfile),
      text(data.preferredTime),
      text(data.notes),
      text(data.source),
    ]);

    return json({ success: true });
  } catch (error) {
    return json({ success: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function getOrCreateSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  var currentHeaders = headerRange.getValues()[0];

  // Scrie antetul dacă lipsește sau diferă, ca foile create de versiunile
  // anterioare să primească automat coloanele noi.
  if (currentHeaders.join("|") !== HEADERS.join("|")) {
    headerRange.setValues([HEADERS]);
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/** Normalizează orice valoare primită în text sigur pentru foaie. */
function text(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

/** Momentul trimiterii, cu fallback pe ora serverului. */
function toDate(value) {
  if (!value) return new Date();

  var parsed = new Date(value);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
