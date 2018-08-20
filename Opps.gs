function onFormSubmit(e) {
  Logger.log("onFormSubmitRun");
  var sheet = e.range.getSheet();
  var sheetId = sheet.getSheetId();
   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var form1 = ss.getSheetByName("MaintReq");
  var form1Id = form1.getSheetId();
  var form2 = ss.getSheetByName("VenResp");
  var form2Id = form2.getSheetId();
  
    if (sheetId == form1Id){  
      emailOutForm1();
    }
    if (sheetId == form2Id){
      emailOutForm2();
      createCalService();
  } 
  
} 


