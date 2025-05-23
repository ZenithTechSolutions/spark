function doPost(e) {
  if (!e || !e.parameter) {
    return ContentService.createTextOutput("Error: No form data received").setMimeType(ContentService.MimeType.TEXT);
  }
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  sheet.appendRow([
    e.parameter['email'], 
    e.parameter['subject'], 
    e.parameter['message'], 
    new Date()
  ]);

  // Email notification
  var subject = 'New Contact Us Submission from Spark';
  var body = 'Received a new contact form submission:\n\n' +
             'Email: ' + e.parameter['email'] + '\n' +
             'Subject: ' + e.parameter['subject'] + '\n' +
             'Message: ' + e.parameter['message'];
  var emailAddress = '______@gmail.com';
  MailApp.sendEmail(emailAddress, subject, body);

  // Enable CORS for React frontend
  return ContentService.createTextOutput(JSON.stringify({ status: 'Success' })).setMimeType(ContentService.MimeType.JSON);
}