function doPost(e) {
  var sheet = SpreadsheetApp.openById("16MNXX9n3lbABY1bIUnekS_cZ9mtbimdtcaGoEvpxyS8").getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  
  // เพิ่มข้อมูลลงใน Google Sheets
  sheet.appendRow([
    data.name,
    data.signature,
    data.fileUrl
  ]);
  
  return ContentService.createTextOutput("Success");
}