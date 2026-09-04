import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const location = (formData.get("location") as string) || "";
    const position = (formData.get("position") as string) || "";
    const experience = (formData.get("experience") as string) || "";
    const linkedIn = (formData.get("linkedIn") as string) || "";
    const portfolio = (formData.get("portfolio") as string) || "";
    const hasResume = (formData.get("hasResume") as string) || "yes";
    const education = (formData.get("education") as string) || "";
    const workExperience = (formData.get("workExperience") as string) || "";
    const skills = (formData.get("skills") as string) || "";
    const certifications = (formData.get("certifications") as string) || "";
    const projects = (formData.get("projects") as string) || "";
    const coverLetter = (formData.get("coverLetter") as string) || "";

    const resumeFile = formData.get("resume") as File | null;
    let resumeBase64 = "";
    let resumeFileName = "";
    let resumeMimeType = "";

    if (resumeFile && typeof resumeFile === "object" && resumeFile.size > 0) {
      const bytes = await resumeFile.arrayBuffer();
      resumeBase64 = Buffer.from(bytes).toString("base64");
      resumeFileName = resumeFile.name;
      resumeMimeType = resumeFile.type;
    }

    const payload = {
      formType: "application",
      fullName,
      email,
      phone: phone ? `'${phone}` : "",
      location,
      position,
      experience,
      linkedIn,
      portfolio,
      hasResume,
      education,
      workExperience,
      skills,
      certifications,
      projects,
      coverLetter,
      resumeBase64,
      resumeFileName,
      resumeMimeType,
    };

    const webhookUrl =
      process.env.APPLICATION_WEBHOOK_URL || process.env.INQUIRY_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("APPLICATION_WEBHOOK_URL is not configured.");
      return NextResponse.json(
        { message: "Webhook not configured, development mode received data." },
        { status: 200 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Apps Script response error:", response.status, errorText);
      return NextResponse.json(
        { message: "Failed to submit application to Google Sheets" },
        { status: 500 }
      );
    }

    const result = await response.json().catch(() => ({ status: "success" }));

    return NextResponse.json(
      { message: "Application submitted successfully", result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
