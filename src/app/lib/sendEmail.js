import { Resend } from "resend";

const resend = new Resend("re_h5iCwrxA_NPuvJVZNGy7LZkEksqo6i4Q8");

export async function sendEmailToUser(userDetails) {
  console.log("userDetails in sendEmailToUser", userDetails);

  // Determine if it's a booking email based on packageName
  const isBookingEmail =
    userDetails.packageName && userDetails.packageName !== "Adventure Package";

  // Extract data with fallbacks
  const {
    name = "Guest",
    email = "Not provided",
    phone = "Not provided",
    packageName = "Adventure Package",
    passengers = "Not specified",
    price = "$0",
    travelStartDate = "Not specified",
    travelEndDate = "Not specified",
    tripType = "Not specified",
    to = "Not specified",
    message = "No message provided",
  } = userDetails;

  const title = isBookingEmail
    ? "Your Adventure Awaits!"
    : "Thank You for Contacting Us";

  const subtitle = isBookingEmail
    ? "We're excited to help you plan your next journey"
    : "We'll get back to you shortly to discuss your travel plans";

  // Convert passengers value to readable text
  const passengersText =
    passengers === "smallGroup"
      ? "1-3 travelers"
      : passengers === "largeGroup"
      ? "4-6 travelers"
      : "Not specified";

  // Convert tripType to readable text
  const tripTypeText =
    tripType === "package"
      ? "Planned Itinerary"
      : tripType === "custom"
      ? "Custom Trip"
      : "Not specified";

  try {
    await resend.emails.send({
      from: "Exventuro <no-reply@exventuro.com>",
      to: email,
      subject: isBookingEmail
        ? `Booking Confirmation: ${packageName}`
        : "Thank You for Contacting Exventuro",
      html: `
      <div style="margin: 0; padding: 0; background-color: #f0f9ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
        <!-- Preheader Text (hidden in most clients but shown in inbox) -->
        <div style="display: none; max-height: 0; overflow: hidden;">
          ${
            isBookingEmail
              ? `Booking confirmation for ${packageName}`
              : "Thank you for contacting Exventuro - we'll be in touch soon!"
          }
        </div>

        <!-- Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
          <tr>
            <td align="center">
              <!-- Main card -->
              <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,85,184,0.15); overflow: hidden; margin: 0 auto;">
                <!-- Decorative top element -->
                <tr>
                  <td style="background: linear-gradient(90deg, #0055B8, #0085FF); height: 8px;"></td>
                </tr>

                <!-- Header -->
                <tr>
                  <td style="padding: 30px 30px 20px; text-align: center; background-color: rgba(240, 249, 255, 0.5);">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <div style="display: inline-flex; align-items: center; justify-content: center; background-color: #0055B8; color: white; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px; margin-bottom: 20px; letter-spacing: 0.5px;">
                            <span style="height: 6px; width: 6px; background-color: white; border-radius: 50%; margin-right: 8px;"></span>
                            PREMIUM EXPERIENCES
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #1a365d; line-height: 1.2;">
                            ${title}
                          </h1>
                          <p style="margin: 12px 0 0; font-size: 16px; color: #4a5568; line-height: 1.5;">
                            ${subtitle}
                          </p>
                          <div style="height: 4px; width: 80px; background: linear-gradient(90deg, #0055B8, #00aaff); margin: 16px auto; border-radius: 2px;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Hero Image -->
                <tr>
                  <td>
                    <div style="position: relative; width: 100%; height: 250px; overflow: hidden;">
                      <img src="${
                        isBookingEmail
                          ? "http://localhost:3000/glacial-view.jpg"
                          : "http://localhost:3000/our-services-hero.png"
                      }" alt="${
        isBookingEmail ? "Mountain adventure" : "Travel consultation"
      }" style="width: 100%; height: 250px; object-fit: cover;" />
                      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 20px; color: white;">
                        <h2 style="margin: 0; font-size: 22px; font-weight: bold;">
                          ${
                            isBookingEmail
                              ? packageName
                              : "Personalized Travel Planning"
                          }
                        </h2>
                        ${
                          isBookingEmail
                            ? `
                        <div style="display: flex; margin-top: 8px;">
                          ${Array(5)
                            .fill(0)
                            .map(
                              (_, i) => `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="${
                              i < 4 ? "#FFD700" : "#CCCCCC"
                            }" style="margin-right: 2px;">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          `
                            )
                            .join("")}
                        </div>
                        `
                            : ""
                        }
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <!-- Contact Information Section -->
                    <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #0055B8; border-radius: 50%; margin-right: 10px;"></span>
                      Contact Information
                    </h3>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                      <tr>
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Name:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${name}</div>
                        </td>
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Email:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${email}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Phone:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${phone}</div>
                        </td>
                      </tr>
                    </table>

                    ${
                      isBookingEmail
                        ? `
                    <!-- Booking Details -->
                    <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #0055B8; border-radius: 50%; margin-right: 10px;"></span>
                      Booking Details
                    </h3>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                      <tr>
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Package:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${packageName}</div>
                        </td>
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Passengers:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${passengersText}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Start Date:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${travelStartDate}</div>
                        </td>
                        <td style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">End Date:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${travelEndDate}</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Price:</div>
                          <div style="font-size: 20px; color: #1a365d; margin-top: 4px; font-weight: bold;">${price}</div>
                        </td>
                      </tr>
                    </table>
                    `
                        : `
                    <!-- Contact Details -->
                    <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #0055B8; border-radius: 50%; margin-right: 10px;"></span>
                      Trip Details
                    </h3>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                      <tr>
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Trip Type:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${tripTypeText}</div>
                        </td>
                        ${
                          tripType === "custom"
                            ? `
                        <td width="50%" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Destination:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${to}</div>
                        </td>
                        `
                            : ""
                        }
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                          <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Travel Dates:</div>
                          <div style="font-size: 16px; color: #1a365d; margin-top: 4px;">${travelStartDate} to ${travelEndDate}</div>
                        </td>
                      </tr>
                    </table>
                    `
                    }

                    <!-- Message -->
                    <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                      <span style="height: 10px; width: 10px; background-color: #0055B8; border-radius: 50%; margin-right: 10px;"></span>
                      Message
                    </h3>
                    <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px; margin-bottom: 24px;">
                      <p style="margin: 0; color: #4a5568; line-height: 1.6;">${message}</p>
                    </div>
                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding: 0 30px 30px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        <td align="center" style="border-radius: 10px; background: linear-gradient(90deg, #0055B8, #0085FF); box-shadow: 0 4px 15px rgba(0,133,255,0.3);">
                          <a href="${
                            isBookingEmail ? "#booking-link" : "#contact-link"
                          }" style="display: inline-block; padding: 16px 36px; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 10px;">
                            ${
                              isBookingEmail
                                ? "View Booking Details"
                                : "Schedule a Call"
                            }
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Additional Info -->
                <tr>
                  <td style="padding: 0 30px 30px;">
                    <p style="font-size: 14px; color: #718096; text-align: center; line-height: 1.6; margin: 0;">
                      ${
                        isBookingEmail
                          ? "Have questions about your booking? Reply to this email or call us at 1-800-EXVENTURO"
                          : "Prefer to talk sooner? Call us now at 1-800-EXVENTURO (1-800-398-3688)"
                      }
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 30px; font-size: 12px; text-align: center; color: #a0aec0; border-top: 1px solid #e2e8f0; background-color: #f7fafc;">
                    <p style="margin: 0 0 8px 0;">© 2025 Exventuro. All Rights Reserved.</p>
                    <p style="margin: 0 0 12px 0;">123 Adventure Lane, Mountain View, CA 94043</p>
                    <p style="margin: 0;">
                      <a href="#unsubscribe" style="color: #0085FF; text-decoration: none; margin: 0 10px;">Unsubscribe</a>
                      <span style="color: #e2e8f0;">|</span>
                      <a href="#privacy" style="color: #0085FF; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                      <span style="color: #e2e8f0;">|</span>
                      <a href="#terms" style="color: #0085FF; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      `,
    });

    console.log("Email sent successfully to:", email);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export async function sendEmailToAdmin() {}
