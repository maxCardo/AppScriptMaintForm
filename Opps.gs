function onFormSubmit(e) {
  Logger.log("onFormSubmitRun");
  var sheet = e.range.getSheet();
  var sheetId = sheet.getSheetId();
  
  //Tests
  Logger.log(sheetId);
   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var form1 = ss.getSheetByName("MaintReq");
  var form1Id = form1.getSheetId();
  var form2 = ss.getSheetByName("VenResp");
  var form2Id = form2.getSheetId();
  
  Logger.log(form1Id);
  Logger.log(form2Id);
  
  
    if (sheetId == form1Id){  
      emailOutForm1();
    }
    if (sheetId == form2Id){
      emailOutForm2();
      createCalService();
  } 
  
} 

function first(){
Logger.log("yo");
}

function second(){
Logger.log("YO YO")
}

function call(){
 first();
 second();
  third();
  emailOutForm1();
  emailOutForm2();
}

function testId(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var form1 = ss.getSheetByName("Form 1");
  var form1Id = form1.getSheetId();  
  
  Logger.log(form1Id);

}

function doGet(){
 return HtmlService.createHtmlOutputFromFile('Service-HTML');
}




