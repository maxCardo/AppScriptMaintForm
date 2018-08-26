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
