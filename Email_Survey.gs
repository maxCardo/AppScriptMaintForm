function captureEvents() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VenResp');
  var lastRow = sheet.getLastRow();
  var events = sheet.getRange(1,18,lastRow).getDisplayValues();
  var today = new Date();
  
  for (var e = 0; e < events.length - 1; e++){
    if (new Date(events[e]).setHours(0,0,0,0) == today.setHours(0,0,0,0)){
       Logger.log(e+1);
       emailSurvey(e+1); 
    }
  }
}

function emailSurvey(rowNum) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VenResp');
  var indexV = parseInt(sheet.getRange(rowNum,2).getValue());
  var idRef = matchSheets(indexV);
  
  //Get Data Points
  var resEmail = sheet.getRange(rowNum,13).getValue();
  var tenName = ss.getSheetByName('MaintReq').getRange(idRef,3).getValue();
  var serviceType = sheet.getRange(rowNum,12).getValue();
  
  //Email Variables
  var subject = "How did we do on your " + serviceType + " Request";
  var emailBody = "We would like your feedback on the home service provided today."
  var htmlBody = "<h3>Satisfaction Survey</h3>"
  var optAdvancedArgs = {htmlBody: htmlBody};
 
  MailApp.sendEmail(resEmail, subject, emailBody, optAdvancedArgs);
 }
      
function matchSheets(indexV){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');    
  var maintServIds = sheet.getRange(2,17,sheet.getLastRow()).getValues();
  for(var i = 0; i<maintServIds.length; i++){
    Logger.log("MaintReq row: " + maintServIds[i] + " VenResp row: " + indexV);
      if(maintServIds[i] == indexV)
      return i+2;
  }
  return -1;
}