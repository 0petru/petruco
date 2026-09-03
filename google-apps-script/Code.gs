function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Audituri");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Audituri");
    sheet.appendRow([
      "Data",
      "Nume",
      "Email",
      "Telefon",
      "Cabinet / Specializare",
      "Oraș",
      "Website / Profil",
    ]);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.fullName || "",
    data.email || "",
    data.phone || "",
    data.clinicOrName || "",
    data.city || "",
    data.currentWebsiteOrProfile || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
