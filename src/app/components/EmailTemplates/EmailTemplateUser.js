import { formatDateAndTime, formatDateOnly } from "../../lib/helpers";

const EmailTemplateUser = ({ userDetails }) => {
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
  } = userDetails;

  const title = isBookingEmail
    ? "Your Adventure Awaits!"
    : "Thank You for Contacting Us";

  const subtitle = isBookingEmail
    ? "We're excited to help you plan your next journey"
    : "We'll get back to you shortly to discuss your travel plans";

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
    <div style="margin: 0; padding: 0; background-color: #f0f9ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
      <!-- Preheader Text -->
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

              <!-- Hero Section with Icon -->
              <tr>
                <td style="background: linear-gradient(135deg, #0055B8, #0085FF); padding: 40px 20px; text-align: center;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; margin-bottom: 20px;">
                    ${
                      isBookingEmail
                        ? '<svg style="width: 40px; height: 40px; fill: white;" viewBox="0 0 576 512"><path d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"/></svg>'
                        : '<svg style="width: 40px; height: 40px; fill: white;" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>'
                    }
                  </div>
                  <h2 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">
                    ${
                      isBookingEmail
                        ? packageName
                        : "Personalized Travel Planning"
                    }
                  </h2>
                  ${
                    isBookingEmail
                      ? `
                  <div style="display: flex; justify-content: center; margin-top: 12px;">
                    ${Array(5)
                      .fill(0)
                      .map(
                        (_, i) => `
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="${
                        i < 4 ? "#FFD700" : "#CCCCCC"
                      }" style="margin: 0 2px;">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    `
                      )
                      .join("")}
                  </div>
                  `
                      : ""
                  }
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <!-- Contact Information Section -->
                  <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                    <svg style="width: 16px; height: 16px; fill: #0055B8; margin-right: 10px;" viewBox="0 0 448 512">
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                    </svg>
                    Contact Information
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                          </svg>
                          Name:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${name}</div>
                      </td>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 512 512">
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                          </svg>
                          Email:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${email}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 512 512">
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                          </svg>
                          Phone:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${phone}</div>
                      </td>
                    </tr>
                  </table>

                  ${
                    isBookingEmail
                      ? `
                  <!-- Booking Details -->
                  <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                    <svg style="width: 16px; height: 16px; fill: #0055B8; margin-right: 10px;" viewBox="0 0 576 512">
                      <path d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160h544zM304 416h144c8.8 0 16-7.2 16-16V192H32v208c0 8.8 7.2 16 16 16h144v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56zm-128-52v-52h128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56H128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8z"/>
                    </svg>
                    Booking Details
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 576 512">
                            <path d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160h544zM304 416h144c8.8 0 16-7.2 16-16V192H32v208c0 8.8 7.2 16 16 16h144v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56zm-128-52v-52h128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56H128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8z"/>
                          </svg>
                          Package:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${packageName}</div>
                      </td>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 640 512">
                            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                          </svg>
                          Passengers:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${passengersText}</div>
                        </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 448 512">
                            <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c6.6 0 12-5.4 12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c极6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-极12-12v-40zM400 64h-48V16c0-8.8-7.2极-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
                          </svg>
                          Start Date:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${formatDateAndTime(
                          travelStartDate
                        )}</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 288 512">
                            <path d="M209.2 233.4l极-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15极.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 极16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"/>
                          </svg>
                          Price:
                        </div>
                        <div style="font-size: 20px; color: #1a365d; margin-top: 4px; font-weight: bold; margin-left: 22px;">${price}</div>
                      </td>
                    </tr>
                  </table>
                  `
                      : `
                  <!-- Contact Details -->
                  <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                    <svg style="width: 16px; height: 16px; fill: #0055B8; margin-right: 10px;" viewBox="0 极 0 576 512">
                      <path d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160h544zM304 416h144c8.8 0 16-7.2 16-16V192H32v208c0 8.8 7.2 16 极16 16h144v52c0 5.2 2.6 10.2 6.8 13.2l80 56极c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56zm-128-52v-52h128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56H128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8z"/>
                    </svg>
                    Trip Details
                  </h3>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 576 512">
                            <path d="M560 160c10.4 0 极18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160极h544zM304 416h144c8.8 0 16-7.2 16-16V192H32v208c0 8.8 7.2 16 16 16h144v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.极5-4.8 7-11.2 7-17.8v-56zm-128-52v-52h128v52极c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8v-56H128v52c0 5.2 2.6 10.2 6.8 13.2l80 56c7.9 5.5 18.8 4.4 25.2-2.4 4.5-4.8 7-11.2 7-17.8z"/>
                          </svg>
                          Trip Type:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${tripTypeText}</div>
                      </td>
                      ${
                        tripType === "custom"
                          ? `
                      <td width="50%" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 384 512">
                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272极c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 极80 80z"/>
                          </svg>
                          Destination:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${to}</div>
                      </td>
                      `
                          : ""
                      }
                    </tr>
                    <tr>
                      <td colspan="2" style="padding: 8px 0; vertical-align: top;">
                        <div style="display: flex; align-items: center; font-size: 14px; color: #4a5568; font-weight: 600;">
                          <svg style="width: 14px; height: 14px; fill: #4a5568; margin-right: 8px;" viewBox="0 0 448 512">
                            <path d="M0 464c0 26.5 21.5 48 48 48极h352c26.5 0 48-极21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c6.6 0 12-5.4 12-12v-40zm0 128c极0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12极v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c极0 6.极6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
                          </svg>
                          Travel Dates:
                        </div>
                        <div style="font-size: 16px; color: #1a365d; margin-top: 4px; margin-left: 22px;">${formatDateAndTime(
                          travelStartDate
                        )} to ${formatDateOnly(travelEndDate)}</div>
                      </td>
                    </tr>
                  </table>
                  `
                  }

                  <!-- Message -->
                  <h3 style="font-size: 18px; color: #0055B8; margin-bottom: 16px; display: flex; align-items: center;">
                    <svg style="width: 16px; height: 16px; fill: #0055B8; margin-right: 10px;" viewBox="0 0 512 512">
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130极.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 极4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
                    </svg>
                    Message
                  </h3>
                  <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px; margin-bottom: 24px;">
                    <p style="margin: 0; color: #4a5568; line-height: 1.6;">${message}</p>
                  </div>
                </td>
              </tr>

              <!-- Additional Info -->
              <tr>
                <td style="padding: 0 30px 30px;">
                  <p style极="font-size: 14px; color: #718096; text-align: center; line-height: 1.6; margin: 0;">
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
                <td style="padding: 20px 30px; font-size: 极12px; text-align: center; color: #a0aec0; border-top: 1px solid #e2e8f0; background-color: #f7极fafc;">
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
  `;
};

export default EmailTemplateUser;
