 function mergeSheets() {

  /* Retrieve the desired folder */
  var myFolder = DriveApp.getFoldersByName("Enter Folder Name Here").next();

  /* Get all spreadsheets that resided on that folder */
  var spreadSheets = myFolder.getFilesByType("application/vnd.google-apps.spreadsheet");    
   
  /* Creates new spreadsheet to merge documents into */
  var newSpreadSheet = SpreadsheetApp.create("Enter Name For New Spreadsheet Here");

  /* Iterate over the spreadsheets over the folder */
  while(spreadSheets.hasNext()) {
    var sheet = spreadSheets.next();
    
      /* Grabs name of the document */    
    var ssName = sheet.getName();
    Logger.log(ssName)

    /* Open the spreadsheet */
    var spreadSheet = SpreadsheetApp.openById(sheet.getId());

    /* Get all its sheets */
    for(var y in spreadSheet.getSheets()) {

      /* Copy the sheet to the new merged Spread Sheet */
      spreadSheet.getSheets()[y].copyTo(newSpreadSheet).setName(ssName);
    }
     
  }      
 }  
