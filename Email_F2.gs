//this is master

function emailOutForm2() {
     
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getSheetByName('VenResp');
  
   //Copy Down Formula
   var lastRow = sheet.getLastRow();
   var fillDown = sheet.getRange(lastRow,11,1);
   sheet.getRange("k2:s2").copyTo(fillDown);
   
   SpreadsheetApp.flush();
  
  //Send Email

  var resEmail = sheet.getRange(lastRow,13,1).getValue();
  var resPhone = sheet.getRange(lastRow,14,1).getValue()
  var techEmail = sheet.getRange(lastRow,15,1).getValue(); //providers email address
  var techPhone = sheet.getRange(lastRow,16,1).getValue(); //providers cell number for Twillio API address
  var timeWindow = sheet.getRange(lastRow,11,1).getValue(); //time window selected
  var techName = sheet.getRange(lastRow,3,1).getValue(); 
  var techPhone =sheet.getRange(lastRow,4,1).getValue(); 
  var serviceOrderNum= sheet.getRange(lastRow,2,1).getValue(); 
  var serviceType = sheet.getRange(lastRow,12,1).getValue(); 
  var serviceNotes = sheet.getRange(lastRow,9,1).getValue();
   
  var subject = "Your service order for " + serviceType + " has been accepted."; 
  
  var emailBody = "EMAILBODY 1"; 
  var htmlBody = 
      
    //email message; includes html formatting
  
    "<h4>Your service ticket for " + serviceType +" has accepted by " + techName +".</h4>"+

      "<p>Sevice Date: " + timeWindow + "<p>"
      "<br>Notes From Service Tech: <br> " + serviceNotes +
      "<p>" +
      "<p> Thank You"; 
    
   
  var optAdvancedArgs = {htmlBody: htmlBody};
 
  MailApp.sendEmail(resEmail, subject, emailBody, optAdvancedArgs); //include email address from var at top without quotes, or manually enter a unique email address with quotes
}





