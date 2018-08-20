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

//not sure what this is (8/17/18ap)
function doGet(){
 return HtmlService.createHtmlOutputFromFile('Service-HTML');
}


//Master Roll Out

//copy sheet
//new linked forms?
//change url for sch form on maintReq to new master form
//set up triggers
//update iframe on website

