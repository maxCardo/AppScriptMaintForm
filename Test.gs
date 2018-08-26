function test(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');
  var lastRow = sheet.getLastRow();
  var techPhone = sheet.getRange(lastRow,19,1).getDisplayValue();//providers cell # for twillo text
  var link = sheet.getRange(lastRow,24,1).getValue();
  
   Logger.log(link);
}   

function shortenUrl() {
    var url = UrlShortener.Url.insert({
      longUrl: 'http://www.example.com'});
    
    Logger.log('Shortened URL is "%s".', url.id);
  }

 //test triggers

function dailyFollowupTrigger(){
  // Trigger every day at 6PM
  var days = [ScriptApp.WeekDay.MONDAY, ScriptApp.WeekDay.TUESDAY,
               ScriptApp.WeekDay.WEDNESDAY, ScriptApp.WeekDay.THURSDAY,                                            
               ScriptApp.WeekDay.FRIDAY];
  for (var i=0; i<days.length; i++) {
  ScriptApp.newTrigger('createCalService')
      .timeBased()
      .onWeekDay(days[i])
      .atHour(18)
      .create();
  }
}