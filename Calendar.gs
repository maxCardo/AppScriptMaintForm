function createCalService() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VenResp'); 
  var lastRow = sheet.getLastRow();
  var servIDRef = parseInt(sheet.getRange(lastRow,2).getValue());
  var returnRow = residentNotes(servIDRef);
  var schedNotes = ss.getSheetByName('MaintReq').getRange(returnRow,15).getValue();
  var workSummary = ss.getSheetByName('MaintReq').getRange(returnRow,8).getValue();
  
  //Create Calendar Event-------------------------THIS SECTION CAN BE DELETED ONCE API INSTALLED
  var title = sheet.getRange(lastRow, 12).getValue() + " at " + sheet.getRange(lastRow, 19).getValue();
  var begin = sheet.getRange(lastRow, 17).getValue();
  var stop = sheet.getRange(lastRow, 18).getValue();
  var calName = "Maintenance Schedule";
  var cal = CalendarApp.getCalendarById("rejv97enld2cfv55r9rpohooe4@group.calendar.google.com");
  var appt = cal.createEvent(title, begin, stop);
  //Add Guests
  appt.addGuest(sheet.getRange(lastRow,13).getValue());
  //----------------------------------------------- END DELETED SECTION
  
  
  //Superior method of Calendar Add
  var event = {
    summary: "Service ID: " + servIDRef + " " + sheet.getRange(lastRow, 12).getValue(),
    location: sheet.getRange(lastRow, 19).getValue(),
    description: [
    "Notes to Resident: " + sheet.getRange(lastRow, 9).getValue() +
    "Notes to Contractor: " + workSummary +
    "Scheduling Notes: " + schedNotes
    ],
    start: {dateTime: sheet.getRange(lastRow, 17).getValue().toISOString()},
      end: {dateTime: sheet.getRange(lastRow, 18).getValue().toISOString()},
    attendees: [
    {email: sheet.getRange(lastRow,13).getValue()},
    {email: sheet.getRange(lastRow,13).getValue()},
    {email: 'tlgmaintenance@gmail.com'},
    ],
  }
  event = Calendar.Events.insert(event, calName);
}
      
function residentNotes(servIDRef){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MaintReq');    
  var maintServIds = sheet.getRange(2,17,sheet.getLastRow()).getValues();
  for(var i = 0; i<maintServIds.length; i++){
      Logger.log(maintServIds[i]);
      if(maintServIds[i] == servIDRef)
      return i+2;
  retun = -1;
  }
}