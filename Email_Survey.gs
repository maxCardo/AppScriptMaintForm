// shared variables
var ss = SpreadsheetApp.getActiveSpreadsheet();
var today = new Date();

function captureEvents() {
  var sheet = ss.getSheetByName('VenResp');
  var lastRow = sheet.getLastRow();
  var events = sheet.getRange(1,18,lastRow).getDisplayValues();

  // remove after testing is compleated
  Logger.log('start script');
  Logger.log(today.setHours(0,0,0,0));
  Logger.log(new Date (events[3]).setHours(0,0,0,0));
  
   if(new Date(events[e]).setHours(0,0,0,0) == today.setHours(0,0,0,0)){
     Logger.log('true')
   }else{
     Logger.log('false')
   }
  
  
  for (var e = 0; e < events.length - 1; e++){
    if (new Date(events[e]).setHours(0,0,0,0) == today.setHours(0,0,0,0)){
       
       Logger.log(e+1);
       emailSurvey(e+1);
       
     //remove else after testing complete  
    }else {
      Logger.log('ran else')
      emailSurvey(3)
    }
  }
}

function emailSurvey(rowNum) {
  Logger.log('start emailSurvey')
  var sheet = ss.getSheetByName('VenResp');
  var indexV = parseInt(sheet.getRange(rowNum,2).getValue());
  var idRef = matchSheets(indexV);
  
  
  Logger.log('back to email survy id ref -->', idRef);
  
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
  Logger.log('start matchSheet')
  var sheet = ss.getSheetByName('MaintReq');    
  var maintServIds = sheet.getRange(2,17,sheet.getLastRow()).getValues();
  
  for(var i = 0; i<maintServIds.length; i++){
    Logger.log("MaintReq row: " + maintServIds[i] + " VenResp row: " + indexV);
    if(maintServIds[i] == indexV){
        Logger.log('found key match', i+2)
        return i+2;
    }else{Logger.log('no key match found')}
  }
  return -1;
}