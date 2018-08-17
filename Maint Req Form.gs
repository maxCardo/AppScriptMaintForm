var toRange = 'RequestToDates'; //namedRange from Spreadsheet for 'To date' dropdown

function updateDates(e){
  // a way to get the items from the form
  var form = FormApp.openById('1FAIpQLSc0LgerNDq3da88Xy1tmnVZ4uIHDcwOkOSCO0chHpre23Vemg');
  var FromList = form.getItemById(1.403587334E9).asListItem();
  var ToList = form.getItemById(4.09925665E8).asListItem();

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var FormsTest = ss.getSheetByName("Reference Tables");

  // get the values in the first column accept header row 1
  var FromValues = FormsTest.getRange('RequestDates').getDisplayValues();
  var ToValues = FormsTest.getRange('RequestToDates').getDisplayValues(); 

  var FromNames = [];
  for(var i = 0; i < FromValues.length; i++) {  
    if(FromValues[i][0] != "") {
      FromNames[i] = FromValues[i][0];
    }
  }

  var ToNames = [];
  for(var y = 0; y < ToValues.length; y++) {  
    if(ToValues[y][0] != "") {
      ToNames[y] = ToValues[y][0];
    }
  }

  // populate the list
  FromList.setChoiceValues(FromNames);
  ToList.setChoiceValues(ToNames);
}

//basic function that builds the form using index.html as the template
function doGet(e) {
     return HtmlService
     .createTemplateFromFile('index')
     .evaluate()
     .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}
 
function writeForm(form) {
  try {  
    var distinguishedName = form.distinguishedName; //these match to the named fields in your form
    var moreDetails = form.moreDetails;
 
    var ss = SpreadsheetApp.openById('10DobbZAwD_4AJLJfPmQy5AwYis1PL_Ag-EzbtRRXfUc'); //the ID of the spreadsheet you want to write to
    var sheet = ss.getActiveSheet();
    var newRow = sheet.getLastRow()+1;//go to the first blank row           
     
    //writes the form data to the spreadsheet
    var range = sheet.getRange(newRow, 1);    
    range.setValue(distinguishedName);
    range = sheet.getRange(newRow, 2);
    range.setValue(moreDetails);
     
   //an array of confirmation messages that will display as HTML 
    var confirmationMessage = ['<img src="http://bionicteaching.com/wp-content/uploads/2010/12/powerogskull.gif"><h2>A statement!</h2>', 
                               '<img src="http://bionicteaching.com/wp-content/uploads/2011/01/beachsomethingsomething.gif"><br><a href="https://pinboard.in">A Link</a>',
                               '<img src="https://c2.staticflickr.com/8/7486/27750752903_08b9a7daaa_s.jpg">'
                              ];
    var len = confirmationMessage.length-1;
    Logger.log('len= ' + len);
    var i = Math.floor(Math.random() * len);//randomizes from the array
     
    return confirmationMessage[i]; //displays randomized message
  } catch (error) {
     
    return error.toString();
  }
}