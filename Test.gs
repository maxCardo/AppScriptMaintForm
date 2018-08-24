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

 //test triggers

function trigTestFunc(){
  
   sendSMS('4124445181', 'testTrigger');
   MailApp.sendEmail('scottCarrolmba@gmail.com', 'test trigger', 'this is a progmatic email testing the scripted trigger on test page of dev ticket 1 branch');
   MailApp.sendEmail('adampoznanski@outlook.com', 'test trigger', 'this is a progmatic email testing the scripted trigger on test page of dev ticket 1 branch'); 
}

function trigTestTrig(){
  // Trigger every 6 hours.
  ScriptApp.newTrigger('trigTestFunc')
      .timeBased()
      .everyHours(1)
      .create();

  // Trigger every Monday at 09:00.
  ScriptApp.newTrigger('trigTestFunc')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.FRIDAY)
      .atHour(19)
      .create();
}
