function test(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');
  var lastRow = sheet.getLastRow();
  var techPhone = sheet.getRange(lastRow,19,1).getDisplayValue();//providers cell # for twillo text
  var link = sheet.getRange(lastRow,24,1).getValue();
  
   Logger.log(link);
}   
 
function calTest(){
   // Creates an event for the moon landing and logs the ID.
    var event = CalendarApp.getDefaultCalendar().createEvent('test calender event',
    new Date('August 17, 2018 20:00:00 UTC'),
    new Date('August 17, 2018 21:00:00 UTC')).addGuest('adampoznanski@outlook.com');
    Logger.log('Event ID: ' + event.getId());
}

function shortenUrl() {
    var url = UrlShortener.Url.insert({
      longUrl: 'http://www.example.com'});
    
    Logger.log('Shortened URL is "%s".', url.id);
  }

function testSetValue() {
  //Connect with backend 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');
  var log = ss.getSheetByName('ActivityLog');
  var logLastRow = log.getLastRow();
  var lastRow = sheet.getLastRow();
  var fillDown = sheet.getRange(lastRow,17,1);
  sheet.getRange("q2:x2").copyTo(fillDown);
  //SpreadsheetApp.flush();
  
  //Send Email
  var resEmail = sheet.getRange(lastRow,2,1).getValue();
  var techEmail = sheet.getRange(lastRow,18,1).getValue(); //providers email address
  var techPhone = sheet.getRange(lastRow,19,1).getDisplayValue(); //providers cell # for twillo text
  var serviceLocation = sheet.getRange(lastRow,5,1).getValue();
  var tenantName = sheet.getRange(lastRow,3,1).getValue();
  var serviceType = sheet.getRange(lastRow,7,1).getValue();
  var requestSum = sheet.getRange(lastRow,8,1).getValue();
  var daysAvailable1 = sheet.getRange(lastRow, 20,1).getValue()
  var daysAvailable2= sheet.getRange(lastRow,21,1).getValue();
  var daysAvailable3= sheet.getRange(lastRow,22,1).getValue();
  var link = sheet.getRange(lastRow,24,1).getValue();
  var serviceID = sheet.getRange(lastRow,17,1).getValue();
  
  var activity = [[resEmail,techEmail,serviceType]];
  
  //log.getRange('a3:c3').setValues(activity);
  log.getRange(logLastRow+1, 1, 1,3).setValues(activity);
  
 
  
  
}