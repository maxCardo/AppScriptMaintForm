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

