/**
 * Google Apps Script for AgriScore Job Applications
 * 
 * Features:
 * 1. Automatically saves uploaded Resumes to Google Drive and gets a shareable link.
 * 2. Appends applicant details directly into your Google Sheet.
 * 3. Handles concurrent submissions safely using LockService.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // Use active sheet or a specific sheet tab named "Applications"
    var sheet = ss.getSheetByName("Applications") || ss.getActiveSheet();
    
    var contents = (e && e.postData) ? e.postData.contents : "{}";
    var data = JSON.parse(contents);

    var date = new Date();
    var fullName = data.fullName || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var location = data.location || "";
    var position = data.position || "";
    var experience = data.experience || "";
    var linkedIn = data.linkedIn || "";
    var portfolio = data.portfolio || "";
    var hasResume = data.hasResume || "yes";
    var education = data.education || "";
    var workExperience = data.workExperience || "";
    var skills = data.skills || "";
    var certifications = data.certifications || "";
    var projects = data.projects || "";
    var coverLetter = data.coverLetter || "";
    
    // Save Resume to Google Drive if provided
    var resumeLink = "No file uploaded";
    if (data.resumeBase64 && data.resumeFileName) {
      try {
        var decoded = Utilities.base64Decode(data.resumeBase64);
        var blob = Utilities.newBlob(
          decoded, 
          data.resumeMimeType || "application/pdf", 
          fullName ? (fullName.replace(/\s+/g, "_") + "_Resume_" + data.resumeFileName) : data.resumeFileName
        );
        var file = DriveApp.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        resumeLink = file.getUrl();
      } catch (uploadError) {
        resumeLink = "Upload error: " + uploadError.toString();
      }
    } else if (hasResume === "no") {
      resumeLink = "Manual profile entry";
    }

    // Append to Sheet
    sheet.appendRow([
      date,
      fullName,
      email,
      phone,
      location,
      position,
      experience,
      linkedIn,
      portfolio,
      resumeLink,
      education,
      workExperience,
      skills,
      certifications,
      projects,
      coverLetter
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Application saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
