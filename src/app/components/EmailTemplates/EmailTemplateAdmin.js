import { formatDateAndTime, formatDateOnly } from "../../lib/helpers";

const EmailTemplateAdmin = ({ userDetails }) => {
  const isBookingEmail =
    userDetails.packageName && userDetails.packageName !== "Adventure Package";

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
    ipAddress = "Not available",
    submissionTime = new Date().toLocaleString(),
    userId = "Not provided",
  } = userDetails;

  const title = isBookingEmail
    ? "📋 New Booking Received"
    : "📧 New Contact Form Submission";

  const subtitle = isBookingEmail
    ? "A customer has booked a package. See details below."
    : "A potential customer has submitted an inquiry.";

  const passengersText =
    passengers === "smallGroup"
      ? "1-3 travelers"
      : passengers === "largeGroup"
      ? "4-6 travelers"
      : "Not specified";

  const tripTypeText =
    tripType === "package"
      ? "Planned Itinerary"
      : tripType === "custom"
      ? "Custom Trip"
      : "Not specified";

  return `
    <div style="margin: 0; padding: 0; background-color: #f5f7f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
      <!-- Container -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7f9; padding: 20px;">
        <tr>
          <td align="center">
            <!-- Main card -->
            <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; margin: 0 auto;">
              <!-- Header -->
              <tr>
                <td style="background-color: #4a5568; padding: 20px; text-align: center; color: white;">
                  <h1 style="margin: 0; font-size: 24px; font-weight: bold;">
                    ${title}
                  </h1>
                  <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">
                    ${subtitle}
                  </p>
                </td>
              </tr>

              <!-- Alert Bar -->
              <tr>
                <td style="background-color: #${
                  isBookingEmail ? "38a169" : "3182ce"
                }; padding: 10px; text-align: center; color: white; font-weight: bold;">
                  ${
                    isBookingEmail ? "BOOKING REQUEST" : "CONTACT INQUIRY"
                  } • ${submissionTime}
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 25px;">
                  <!-- Summary Card -->
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; border-radius: 8px; padding: 15px; margin-bottom: 20px; border-left: 4px solid #${
                    isBookingEmail ? "38a169" : "3182ce"
                  };">
                    <tr>
                      <td>
                        <h3 style="margin: 0; color: #2d3748; font-size: 18px; display: flex; align-items: center;">
                          <svg style="width: 18px; height: 18px; fill: #${
                            isBookingEmail ? "38a169" : "3182ce"
                          }; margin-right: 10px;" viewBox="0 0 512 512">
                            <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V32zm0 448c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32zm-128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32zm288-32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zM128 192c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32zm288-32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32zM64 384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32zm384-224c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32z"/>
                          </svg>
                          Quick Summary
                        </h3>
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                          <tr>
                            <td width="33%" style="padding: 8px 0; vertical-align: top;">
                              <div style="font-size: 14px; color: #4a5568;">Customer:</div>
                              <div style="font-size: 16px; color: #2d3748; font-weight: bold;">${name}</div>
                            </td>
                            <td width="33%" style="padding: 8px 0; vertical-align: top;">
                              <div style="font-size: 14px; color: #4a5568;">${
                                isBookingEmail ? "Package" : "Inquiry Type"
                              }:</div>
                              <div style="font-size: 16px; color: #2d3748; font-weight: bold;">${
                                isBookingEmail ? packageName : tripTypeText
                              }</div>
                            </td>
                            <td width="33%" style="padding: 8px 0; vertical-align: top;">
                              <div style="font-size: 14px; color: #4a5568;">${
                                isBookingEmail ? "Travel Dates" : "Submitted"
                              }:</div>
                              <div style="font-size: 16px; color: #2d3748; font-weight: bold;">${
                                isBookingEmail
                                  ? `${formatDateOnly(travelStartDate)}`
                                  : formatDateAndTime(submissionTime)
                              }</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Customer Information -->
                  <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">
                    👤 Customer Information
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                    <tr>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Full Name:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${name}</div>
                      </td>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Email:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${email}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Phone:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${phone}</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">IP Address:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${ipAddress}</div>
                      </td>
                    </tr>
                  </table>

                  ${
                    isBookingEmail
                      ? `
                  <!-- Booking Details -->
                  <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">
                    📅 Booking Details
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                    <tr>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Package:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${packageName}</div>
                      </td>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Group Size:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${passengersText}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Start Date:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${formatDateAndTime(
                          travelStartDate
                        )}</div>
                      </td>
                     
                    </tr>
                    <tr>
                      <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Estimated Value:</div>
                        <div style="font-size: 20px; color: #2d3748; margin-top: 4px; font-weight: bold; color: #38a169;">${price}</div>
                      </td>
                    </tr>
                  </table>
                  `
                      : `
                  <!-- Inquiry Details -->
                  <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">
                    📋 Inquiry Details
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                    <tr>
                      <td width="50%" style="padding: 8px 极0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Trip Type:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${tripTypeText}</div>
                      </td>
                      ${
                        tripType === "custom"
                          ? `
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Destination:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${to}</div>
                      </td>
                      `
                          : '<td width="50%" style="padding: 8px 0; vertical-align: top;"></td>'
                      }
                    </tr>
                    <tr>
                      <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                        <div style="font-size: 14px; color: #4a5568; font-weight: 600;">Travel Dates:</div>
                        <div style="font-size: 16px; color: #2d3748; margin-top: 4px;">${formatDateAndTime(
                          travelStartDate
                        )} to ${formatDateOnly(travelEndDate)}</div>
                      </td>
                    </tr>
                  </table>
                  `
                  }

                  <!-- Message -->
                  <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">
                    💬 Customer Message
                  </h3>
                  <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #4a5568; line-height: 1.6; font-style: italic;">${message}</p>
                  </div>

                  <!-- Admin Actions -->
                  <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">
                    ⚡ Admin Actions
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                    <tr>
                      <td align="center">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="33%" align="center" style="padding: 0 5px;">
                              <a href="mailto:${email}" style="display: block; background-color: #3182ce; color: white; text-decoration: none; padding: 12px; border-radius: 6px; font-weight: bold; text-align: center;">
                                Reply to Customer
                              </a>
                            </td>
                            <td width="33%" align="center" style="padding: 0 5px;">
                              <a href="tel:${phone}" style="display: block; background-color: #38a169; color: white; text-decoration: none; padding: 12px; border-radius: 6px; font-weight: bold; text-align: center;">
                                Call Customer
                              </a>
                            </td>
                            <td width="33%" align="center" style="padding: 0 5px;">
                              <a href="${
                                isBookingEmail
                                  ? "/admin/bookings"
                                  : "/admin/inquiries"
                              }" style="display: block; background-color: #6b46c1; color: white; text-decoration: none; padding: 12px; border-radius: 6px; font-weight: bold; text-align: center;">
                                View in Dashboard
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Priority Indicator -->
                  <div style="background-color: #fff5f5; border: 1px solid #fed7d7; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center;">
                      <svg style="width: 18px; height: 18px; fill: #e53e3e; margin-right: 10px;" viewBox="0 0 512 512">
                        <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 极0 1 0 64 0z"/>
                      </svg>
                      <div>
                        <div style="font-weight: bold; color: #e53e3e;">Action Required</div>
                        <div style="font-size: 14px; color: #718096;">Please respond to this ${
                          isBookingEmail ? "booking request" : "inquiry"
                        } within 24 hours.</div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px; background-color: #edf2f7; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
                  <p style="margin: 0 0 8px 0; text-align: center;">
                    This is an automated message from Exventuro Admin System. Please do not reply to this email.
                  </p>
                  <p style="margin: 0; text-align: center;">
                    © ${new Date().getFullYear()} Exventuro. All Rights Reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export default EmailTemplateAdmin;
