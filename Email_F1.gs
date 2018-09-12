function emailOutForm1() {
  //Connect with backend 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');
  var lastRow = sheet.getLastRow();
  var fillDown = sheet.getRange(lastRow,17,1);
  sheet.getRange("q2:x2").copyTo(fillDown);
  //SpreadsheetApp.flush();
  
  //Send Email
  var resEmail = sheet.getRange(lastRow,2,1).getValue();
  var techEmail = sheet.getRange(lastRow,18,1).getValue(); //providers email address
  var techPhone = sheet.getRange(lastRow,19,1).getDisplayValue(); //providers cell # for twillo text
  var serviceLocation = sheet.getRange(lastRow,5,1).getValue();
  var unitNum = sheet.getRange(lastRow,6,1).getValue();
  var tenantName = sheet.getRange(lastRow,3,1).getValue();
  var serviceType = sheet.getRange(lastRow,7,1).getValue();
  var requestSum = sheet.getRange(lastRow,8,1).getValue();
  var daysAvailable1 = sheet.getRange(lastRow, 20,1).getValue()
  var daysAvailable2= sheet.getRange(lastRow,21,1).getValue();
  var daysAvailable3= sheet.getRange(lastRow,22,1).getValue();
  var link = sheet.getRange(lastRow,24,1).getValue();
  var serviceID = sheet.getRange(lastRow,17,1).getValue();
 
  
  var subject = "Service Request [" + serviceID + "] " + serviceType + " for " + serviceLocation; 
  
  var emailBody = subject + 
  
      "A copy of the request has been emailed to you at " +techEmail+ ". Please check your email to schedule this service call."
      //" Custmer Availability "
      //+ daysAvailable1 +
      //+ daysAvailable2 +
      //+ daysAvailable3 +
      //"click link below to accept service"
       //+ link; 
  
  //HTML body of the email
  var htmlBody = 
  
"<h3>A new service request has been added.</h3>" +

"<p><b>Property Location:</b> " + serviceLocation +
"<br/><b>Unit:</b> "+ unitNum +
"<br/><b>Tenant:</b> "+ tenantName +
"<br/><b>Type Of Service Requested:</b> " + serviceType +
"<br/><b>Service Request Summary:</b> " + requestSum + 
"</p>" +

"<p><b><big> Days & Times of Resident Availability: </big></b>"+ 
"<br/> " + daysAvailable1 +
"<br/> " + daysAvailable2 +
"<br/> " + daysAvailable3 +
"</p>" +
"<a href = " + link + "><BUTTON><b>Click Here To Accept Work Order & Schedule Service</b></BUTTON></a>"

   
  var optAdvancedArgs = {htmlBody: htmlBody};
 
  MailApp.sendEmail(techEmail, subject, emailBody, optAdvancedArgs); //include email address from var at top without quotes, or manually enter a unique email address with quotes
  Logger.log(techPhone);
  try{
    sendSMS(techPhone, emailBody);
    Logger.log("SMS Pass");
    }
  catch(err){
    Logger.log("SMS Fail")
    }
    //sendSMS('4124445181', 'Service request submited');
    MailApp.sendEmail("adampoznanski@outlook.com","Maitenence masterScript run", "new service request added");
 }
