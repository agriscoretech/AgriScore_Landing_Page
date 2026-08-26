function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  if(e.postData.type === "application/json") {
    // Parse the JSON sent from Next.js
    const data = JSON.parse(e.postData.contents);
    
    // Extract properties to push
    const name = data.name || "";
    const email = data.email || "";
    const whatsapp = data.whatsapp || "";
    const product = data.product || "";
    const address = data.address || "";
    const state = data.state || "";
    const pincode = data.pincode || "";
    const country = data.country || "";
    const purpose = data.purpose || "";
    const date = new Date();

    // Make sure your Google sheet columns match these rows exactly
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
    
    // Return a valid JSON response so that fetch API sees status 200
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}