function createCalService() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VenResp'); 
  var lastRow = sheet.getLastRow();
  var servIDRef = parseInt(sheet.getRange(lastRow,2).getValue());
  var returnRow = residentNotes(servIDRef);
  var schedNotes = ss.getSheetByName('MaintReq').getRange(returnRow,15).getValue();
  var workSummary = ss.getSheetByName('MaintReq').getRange(returnRow,8).getValue();
  var title = "Service Order: " + servIDRef + " " + sheet.getRange(lastRow, 12).getValue();
  var begin = sheet.getRange(lastRow, 17).getValue();
  var stop = sheet.getRange(lastRow, 18).getValue();
  var cal = CalendarApp.getCalendarById("rejv97enld2cfv55r9rpohooe4@group.calendar.google.com");

  var event = cal.createEvent(title, begin, stop,{
       location: sheet.getRange(lastRow, 19).getValue(),
       description: "Notes to Resident: " + sheet.getRange(lastRow, 9).getValue() + '\n' +
       "Notes to Contractor: " + workSummary + '\n' +
       "Scheduling Notes: " + schedNotes
  });
  
  event.addGuest(sheet.getRange(lastRow,13).getValue());
  event.addGuest(sheet.getRange(lastRow,15).getValue());
  event.addGuest('tlgmaintenance@gmail.com');
}
      
      
function residentNotes(servIDRef){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');    
  var maintServIds = sheet.getRange(2,17,sheet.getLastRow()).getValues();
  for(var i = 0; i<maintServIds.length; i++){
      if(maintServIds[i] == servIDRef)
      return i+2;
  }
  return -1;
}