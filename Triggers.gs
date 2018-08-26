function dailyFollowupTrigger(){
  // Trigger every day at 6PM
  var days = [ScriptApp.WeekDay.MONDAY, ScriptApp.WeekDay.TUESDAY,
               ScriptApp.WeekDay.WEDNESDAY, ScriptApp.WeekDay.THURSDAY,                                            
               ScriptApp.WeekDay.FRIDAY, ScriptApp.Weekday.SATURDAY, ScriptApp.WeekDay.SUNDAY];
  for (var i=0; i<days.length; i++) {
  ScriptApp.newTrigger('captureEvents')
      .timeBased()
      .onWeekDay(days[i])
      .atHour(18)
      .create();
  }
}