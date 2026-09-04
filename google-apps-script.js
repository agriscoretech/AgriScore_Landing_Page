function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait for up to 10 seconds for other processes to finish
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var contents = (e && e.postData) ? e.postData.contents : "{}";
    var data = JSON.parse(contents);
    
    // Extract fields
    var name = data.name || "";
    var email = data.email || "";
    // Prefix phone number with "'" so Google Sheets treats "+91..." as plain text instead of a formula (#ERROR!)
    var whatsapp = data.whatsapp ? ("'" + data.whatsapp) : "";
    var product = data.product || "";
    var address = data.address || "";
    var state = data.state || "";
    var pincode = data.pincode ? ("'" + data.pincode) : "";
    var country = data.country || "India";
    var purpose = data.purpose || "";
    var date = new Date();

    // Append to sheet (Columns: Date, Name, Email, WhatsApp, Product, Address, State, Pincode, Country, Purpose)
    sheet.appendRow([
      date,
      name,
      email,
      whatsapp,
      product,
      address,
      state,
      pincode,
      country,
      purpose
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Inquiry saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}