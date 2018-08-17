function createCalService() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VenResp');
  var lastRow = sheet.getLastRow();
  
  var title = sheet.getRange(lastRow, 12).getValue() + " at " + sheet.getRange(lastRow, 19).getValue();
  var start = sheet.getRange(lastRow, 17).getValue();
  var end = sheet.getRange(lastRow, 18).getValue();
  //var options is an object that must be built
  
  //Create Calendar Event
  var cal = CalendarApp.getCalendarById("cmVqdjk3ZW5sZDJjZnY1NXI5cnBvaG9vZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
  cal.createEvent(title, start, end);
  //Add Guests
  appt.addGuest(sheet.getRange(lastRow,13).getValue());
                
}