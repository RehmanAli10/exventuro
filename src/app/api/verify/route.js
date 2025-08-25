import { sendEmailToAdmin, sendEmailToUser } from "@/app/lib/sendEmail";
import { NextResponse } from "next/server";
const accessKey = "67fd230786fc9f9ed9c97e76fbec1c26";

export async function POST(request) {
  const body = await request.json();

  // sending request to numverify
  const url = `http://apilayer.net/api/validate?access_key=${accessKey}&number=${body.phone}`;

  const response = await fetch(url);

  const data = await response.json();

  // sending email to user
  sendEmailToUser(body);

  // sending email to admin
  setTimeout(() => sendEmailToAdmin(body), 1200);

  if (data.valid) {
    return NextResponse.json({
      valid: true,
      country_code: data.country_code,
      location: data.location,
      carrier: data.carrier,
      line_type: data.line_type,
    });
  } else {
    return NextResponse.json({
      valid: false,
      message: "Invalid phone number. Kindly reach out to us directly.",
    });
  }
}
