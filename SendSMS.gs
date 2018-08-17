//This sends out sms to phone number in row
function sendSMS(to, body) {
  var SID = "ACdfbd94cac9f215ffe040ff51df27c497"
  var token = "0cf2a7b535363b6539fcd9d2574384b3"

  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/" + SID + "/Messages.json"; 
  var payload = {
    "To": to, 
    "Body" : body,  
    "From" : "4124447757" 
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode(SID + ":" + token) 
  };

  UrlFetchApp.fetch(messages_url, options); //sends out SMS to number for the row
}
