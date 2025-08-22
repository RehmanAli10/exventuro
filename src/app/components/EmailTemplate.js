import Image from "next/image";

function EmailTemplate({ type = "booking", data = {} }) {
  // Determine content based on email type
  const isBookingEmail = type === "booking";

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
  } = data;

  const title = isBookingEmail
    ? "Your Adventure Awaits!"
    : "Thank You for Contacting Us";

  const subtitle = isBookingEmail
    ? "We're excited to help you plan your next journey"
    : "We'll get back to you shortly to discuss your travel plans";

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#f0f9ff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
        WebkitTextSizeAdjust: "100%",
        msTextSizeAdjust: "100%",
      }}
    >
      {/* Preheader Text (hidden in most clients but shown in inbox) */}
      <div
        style={{
          display: "none",
          maxHeight: 0,
          overflow: "hidden",
        }}
      >
        {isBookingEmail
          ? `Booking confirmation for ${packageName}`
          : "Thank you for contacting Exventuro - we'll be in touch soon!"}
      </div>

      {/* Container */}
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ backgroundColor: "#f0f9ff", padding: "40px 20px" }}
      >
        <tr>
          <td align="center">
            {/* Main card */}
            <table
              role="presentation"
              width="100%"
              style={{
                maxWidth: "600px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,85,184,0.15)",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {/* Decorative top element */}
              <tr>
                <td
                  style={{
                    background: "linear-gradient(90deg, #0055B8, #0085FF)",
                    height: "8px",
                  }}
                ></td>
              </tr>

              {/* Header */}
              <tr>
                <td
                  style={{
                    padding: "30px 30px 20px",
                    textAlign: "center",
                    backgroundColor: "rgba(240, 249, 255, 0.5)",
                  }}
                >
                  <table
                    role="presentation"
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tr>
                      <td align="center">
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#0055B8",
                            color: "white",
                            fontSize: "12px",
                            fontWeight: "600",
                            padding: "6px 16px",
                            borderRadius: "20px",
                            marginBottom: "20px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          <span
                            style={{
                              height: "6px",
                              width: "6px",
                              backgroundColor: "white",
                              borderRadius: "50%",
                              marginRight: "8px",
                            }}
                          ></span>
                          PREMIUM EXPERIENCES
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <h1
                          style={{
                            margin: 0,
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#1a365d",
                            lineHeight: "1.2",
                          }}
                        >
                          {title}
                        </h1>
                        <p
                          style={{
                            margin: "12px 0 0",
                            fontSize: "16px",
                            color: "#4a5568",
                            lineHeight: "1.5",
                          }}
                        >
                          {subtitle}
                        </p>
                        <div
                          style={{
                            height: "4px",
                            width: "80px",
                            background:
                              "linear-gradient(90deg, #0055B8, #00aaff)",
                            margin: "16px auto",
                            borderRadius: "2px",
                          }}
                        ></div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Hero Image */}
              <tr>
                <td>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={
                        isBookingEmail
                          ? "/glacial-view.jpg"
                          : "/our-services-hero.png"
                      }
                      alt={
                        isBookingEmail
                          ? "Mountain adventure"
                          : "Travel consultation"
                      }
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "20px",
                        color: "white",
                      }}
                    >
                      <h2
                        style={{
                          margin: 0,
                          fontSize: "22px",
                          fontWeight: "bold",
                        }}
                      >
                        {isBookingEmail
                          ? packageName
                          : "Personalized Travel Planning"}
                      </h2>
                      {isBookingEmail && (
                        <div style={{ display: "flex", marginTop: "8px" }}>
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={i < 4 ? "#FFD700" : "#CCCCCC"}
                                style={{ marginRight: "2px" }}
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>

              {/* Content */}
              <tr>
                <td style={{ padding: "30px" }}>
                  {/* Contact Information Section */}
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#0055B8",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#0055B8",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    ></span>
                    Contact Information
                  </h3>
                  <table
                    role="presentation"
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ marginBottom: "24px" }}
                  >
                    <tr>
                      <td
                        width="50%"
                        style={{ padding: "8px 0", verticalAlign: "top" }}
                      >
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#4a5568",
                            fontWeight: "600",
                          }}
                        >
                          Name:
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            color: "#1a365d",
                            marginTop: "4px",
                          }}
                        >
                          {name}
                        </div>
                      </td>
                      <td
                        width="50%"
                        style={{ padding: "8px 0", verticalAlign: "top" }}
                      >
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#4a5568",
                            fontWeight: "600",
                          }}
                        >
                          Email:
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            color: "#1a365d",
                            marginTop: "4px",
                          }}
                        >
                          {email}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px 0", verticalAlign: "top" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#4a5568",
                            fontWeight: "600",
                          }}
                        >
                          Phone:
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            color: "#1a365d",
                            marginTop: "4px",
                          }}
                        >
                          {phone}
                        </div>
                      </td>
                    </tr>
                  </table>

                  {/* Booking Details or Contact Details */}
                  {isBookingEmail ? (
                    <>
                      <h3
                        style={{
                          fontSize: "18px",
                          color: "#0055B8",
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#0055B8",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        ></span>
                        Booking Details
                      </h3>
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ marginBottom: "24px" }}
                      >
                        <tr>
                          <td
                            width="50%"
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Package:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {packageName}
                            </div>
                          </td>
                          <td
                            width="50%"
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Passengers:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {passengers === "smallGroup"
                                ? "1-3 travelers"
                                : "4-6 travelers"}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Start Date:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {travelStartDate}
                            </div>
                          </td>
                          <td
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              End Date:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {travelEndDate}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="2"
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Price:
                            </div>
                            <div
                              style={{
                                fontSize: "20px",
                                color: "#1a365d",
                                marginTop: "4px",
                                fontWeight: "bold",
                              }}
                            >
                              {price}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </>
                  ) : (
                    <>
                      <h3
                        style={{
                          fontSize: "18px",
                          color: "#0055B8",
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#0055B8",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        ></span>
                        Trip Details
                      </h3>
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ marginBottom: "24px" }}
                      >
                        <tr>
                          <td
                            width="50%"
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Trip Type:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {tripType === "package"
                                ? "Planned Itinerary"
                                : "Custom Trip"}
                            </div>
                          </td>
                          {tripType === "custom" && (
                            <td
                              width="50%"
                              style={{ padding: "8px 0", verticalAlign: "top" }}
                            >
                              <div
                                style={{
                                  fontSize: "14px",
                                  color: "#4a5568",
                                  fontWeight: "600",
                                }}
                              >
                                Destination:
                              </div>
                              <div
                                style={{
                                  fontSize: "16px",
                                  color: "#1a365d",
                                  marginTop: "4px",
                                }}
                              >
                                {to}
                              </div>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td
                            colSpan="2"
                            style={{ padding: "8px 0", verticalAlign: "top" }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#4a5568",
                                fontWeight: "600",
                              }}
                            >
                              Travel Dates:
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                color: "#1a365d",
                                marginTop: "4px",
                              }}
                            >
                              {travelStartDate} to {travelEndDate}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </>
                  )}

                  {/* Message */}
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#0055B8",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#0055B8",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    ></span>
                    Message
                  </h3>
                  <div
                    style={{
                      padding: "16px",
                      backgroundColor: "#f7fafc",
                      borderRadius: "8px",
                      marginBottom: "24px",
                    }}
                  >
                    <p
                      style={{ margin: 0, color: "#4a5568", lineHeight: "1.6" }}
                    >
                      {message}
                    </p>
                  </div>
                </td>
              </tr>

              {/* CTA Button */}
              <tr>
                <td align="center" style={{ padding: "0 30px 30px" }}>
                  <table
                    role="presentation"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ margin: "0 auto" }}
                  >
                    <tr>
                      <td
                        align="center"
                        style={{
                          borderRadius: "10px",
                          background:
                            "linear-gradient(90deg, #0055B8, #0085FF)",
                          boxShadow: "0 4px 15px rgba(0,133,255,0.3)",
                        }}
                      >
                        <a
                          href={
                            isBookingEmail ? "#booking-link" : "#contact-link"
                          }
                          style={{
                            display: "inline-block",
                            padding: "16px 36px",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textDecoration: "none",
                            borderRadius: "10px",
                          }}
                        >
                          {isBookingEmail
                            ? "View Booking Details"
                            : "Schedule a Call"}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Additional Info */}
              <tr>
                <td style={{ padding: "0 30px 30px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#718096",
                      textAlign: "center",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isBookingEmail
                      ? "Have questions about your booking? Reply to this email or call us at 1-800-EXVENTURO"
                      : "Prefer to talk sooner? Call us now at 1-800-EXVENTURO (1-800-398-3688)"}
                  </p>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td
                  style={{
                    padding: "20px 30px",
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#a0aec0",
                    borderTop: "1px solid #e2e8f0",
                    backgroundColor: "#f7fafc",
                  }}
                >
                  <p style={{ margin: "0 0 8px 0" }}>
                    © 2025 Exventuro. All Rights Reserved.
                  </p>
                  <p style={{ margin: "0 0 12px 0" }}>
                    123 Adventure Lane, Mountain View, CA 94043
                  </p>
                  <p style={{ margin: 0 }}>
                    <a
                      href="#unsubscribe"
                      style={{
                        color: "#0085FF",
                        textDecoration: "none",
                        margin: "0 10px",
                      }}
                    >
                      Unsubscribe
                    </a>
                    <span style={{ color: "#e2e8f0" }}>|</span>
                    <a
                      href="#privacy"
                      style={{
                        color: "#0085FF",
                        textDecoration: "none",
                        margin: "0 10px",
                      }}
                    >
                      Privacy Policy
                    </a>
                    <span style={{ color: "#e2e8f0" }}>|</span>
                    <a
                      href="#terms"
                      style={{
                        color: "#0085FF",
                        textDecoration: "none",
                        margin: "0 10px",
                      }}
                    >
                      Terms of Service
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EmailTemplate;
