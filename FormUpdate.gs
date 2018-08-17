function updateDates() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Reference Tables');
  var form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/16zQYqOXZD1pSu0jphX0JJ5zAXv8ml4IkCtCxNL6hAgc/edit'
    );
  
  var values= sheet.getRange(2, 5, sheet.getLastRow()-1)
    .getValues()
    .map(function(element){
      return element.toString();
    })
  ;
  
  Logger.log(values);
  
  var testItem = form.addGridItem();
  
  var item = form.getItems(FormApp.ItemType.GRID)
    .filter(function(item){
      return item.getTitle() === 'testmultigrid';
    })
  
  testItem.setTitle('test1')
    .setRows(values);
  
  Logger.log(testItem.getId);
  
  
  
  
  
  
}
