import { sendEmailToAdmin } from "./sendEmail";

export async function submitBookingForm(data) {
  console.log("data in submit booking form", data);
  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      const result = await response.json();
      return {
        valid: false,
        message: result.message || "Validation failed",
      };
    }

    // send details to adim
    sendEmailToAdmin(data);

    return {
      valid: result.valid,
      message: result.message,
      ...(result.valid
        ? {
            country_code: result.country_code,
            location: result.location,
            carrier: result.carrier,
            line_type: result.line_type,
          }
        : {}),
    };
  } catch (error) {
    return {
      valid: false,
      message: "Network error. Please try again.",
    };
  }
}
