import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name correctly in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the correct path
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === "production" || true; // Force production mode for now

// Serve static files in production
if (isProduction) {
  console.log(
    "Running in production mode - serving static files from dist directory"
  );
  // Serve static files from the 'dist' directory
  app.use(express.static(path.resolve(__dirname, "../dist")));
}

// Middleware
app.use(
  cors({
    origin: true, // This allows all origins, but maintains the Access-Control-Allow-Origin header
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
    ],
    credentials: true, // Changed to true to allow credentials if needed
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware to handle OPTIONS requests
app.options("*", cors());

// Handle preflight requests for the specific API endpoint
app.options("/api/send-email", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://gri-training.rsmacademy-sa.com"
  );
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(204).send();
});

// Email credentials
const EMAIL_USER = process.env.SMTP_USER;
const EMAIL_PASS = process.env.SMTP_PASS;
const SLACK_EMAIL = process.env.SLACK_EMAIL;

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// API endpoint for sending emails
app.post("/api/send-email", async (req, res) => {
  console.log("Received request to /api/send-email");
  console.log("Headers:", JSON.stringify(req.headers, null, 2));
  console.log("Body:", JSON.stringify(req.body, null, 2));

  // Set CORS headers explicitly for this endpoint
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Origin, X-Requested-With, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  try {
    const { fullName, email, phone, enrollmentType, organizationName } =
      req.body;

    if (!fullName || !email || !phone || !enrollmentType) {
      console.log("Missing required fields");
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Get server base URL for assets
    const protocol = req.protocol || "https";
    const host = req.get("host") || "gri-training.rsmacademy-sa.co";
    const baseUrl = `${protocol}://${host}`;

    // Prepare email options
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      cc: [EMAIL_USER, SLACK_EMAIL],
      subject: "GRI Certified Sustainability Professional Training",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header with blue background and RSM logo -->
          <div style="background: #00153D; color: white; padding: 30px 25px; text-align: center;">
            <!-- RSM Logo -->
            <div style="margin-bottom: 20px; display: inline-block;">
              <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-white_f20265ab-200f-4e37-90ad-5828d99fa8c6.png" alt="RSM Logo" style="width: 120px;">
            </div>
              <h1 style="margin: 15px 0 0; font-size: 24px; font-weight: bold;">GRI Certified Sustainability<br>Professional Training</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Registration Confirmation</p>
          </div>
          
          <!-- Main content -->
          <div style="background-color: white; padding: 30px 25px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${fullName},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Thank you for registering for the <strong>GRI Certified Sustainability Professional Training</strong>.</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">We're excited to have you join this globally recognized program designed to equip professionals with the knowledge and tools to lead in sustainability and ESG reporting.</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Our team will reach out to you shortly via email with additional details, including the session schedule, access instructions, and next steps to complete your enrollment.</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">If you have immediate questions or are registering on behalf of a group, please feel free to contact us at <a href="mailto:info@rsmacademy-sa.com" style="color: #0066cc; text-decoration: underline;">info@rsmacademy-sa.com</a>.</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">We look forward to supporting your journey toward GRI Certification.</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Warm regards,<br><strong>RSM Saudi Arabia Professional Academy Team</strong></p>
            
            <!-- Registration details card -->
            <div style="background-color: #f7f9fc; border-left: 4px solid #0066cc; padding: 20px; border-radius: 5px; margin: 25px 0;">
              <h3 style="color: #003366; margin-top: 0; font-size: 18px;">Registration Details</h3>
              <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Enrollment Type:</strong> ${
                enrollmentType === "individual" ? "Individual" : "Business"
              }</p>
              ${
                enrollmentType === "business" && organizationName
                  ? `
              <p style="margin: 10px 0; color: #333;"><strong>Organization:</strong> ${organizationName}</p>
              `
                  : ""
              }
            </div>
            
            <!-- Course information -->
            <h3 style="color: #003366; font-size: 18px; margin-bottom: 15px;">Course Information</h3>
            
            <!-- Message about upcoming contact -->
            <div style="background-color: #f0f7ff; padding: 20px; border-radius: 5px; margin: 25px 0; border-left: 4px solid #0066cc;">
              <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.5;">
                <strong>Note:</strong> Our team will provide you with detailed information about training dates, format, and all necessary preparation instructions in our follow-up communication.
              </p>
            </div>
          </div>
          
                <!-- Footer with RSM logo -->
      <div style="background-color: #f7f9fc; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
        <!-- RSM Logo -->
        <div style="margin-bottom: 10px; display: inline-block;">
          <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-dark_632bce48-1455-440f-880f-55d4c0cf2562.png" alt="RSM Logo" style="width: 80px; filter: opacity(0.7);">
        </div>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0;">© RSM Saudi Arabia Professional Academy. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Enrollment confirmation email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Detailed error logging
    if (error.response) {
      console.error("Nodemailer response error:", error.response.body);
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? null : error.stack,
    });
  }
});

// Add a simple test endpoint for CORS
app.get("/api/test-cors", (req, res) => {
  console.log("Received request to /api/test-cors");
  console.log("Origin:", req.headers.origin);

  // Set CORS headers explicitly
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.status(200).json({
    success: true,
    message: "CORS test successful",
    headers: req.headers,
    timestamp: new Date().toISOString(),
  });
});

// Add a diagnostic endpoint
app.get("/api/status", (req, res) => {
  // Set CORS headers explicitly for this endpoint
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");

  res.status(200).json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    cors: true,
    origin: req.headers.origin || "none",
    host: req.headers.host,
    referer: req.headers.referer || "none",
    userAgent: req.headers["user-agent"],
  });
});

// Email preview endpoint (for development purposes)
app.get("/api/preview-email", (req, res) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");

  // Get sample data from query parameters or use defaults
  const sampleData = {
    fullName: req.query.name || "John Doe",
    email: req.query.email || "john.doe@example.com",
    phone: req.query.phone || "+1234567890",
    enrollmentType: req.query.type || "individual",
    organizationName:
      req.query.org ||
      (req.query.type === "business" ? "Acme Corporation" : ""),
  };

  // Get base URL for assets
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  // Generate the email HTML template
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <!-- Header with blue background and RSM logo -->
      <div style="background: #00153D; color: white; padding: 30px 25px; text-align: center;">
          <!-- RSM Logo -->
          <div style="margin-bottom: 20px; display: inline-block;">
            <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-white_f20265ab-200f-4e37-90ad-5828d99fa8c6.png" alt="RSM Logo" style="width: 120px;">
          </div>
          <h1 style="margin: 15px 0 0; font-size: 24px; font-weight: bold;">GRI Certified Sustainability<br>Professional Training</h1>
          <p style="margin: 10px 0 0; font-size: 16px;">Registration Confirmation</p>
      </div>
      
      <!-- Main content -->
      <div style="background-color: white; padding: 30px 25px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${
          sampleData.fullName
        },</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Thank you for registering for the <strong>GRI Certified Sustainability Professional Training</strong>.</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">We're excited to have you join this globally recognized program designed to equip professionals with the knowledge and tools to lead in sustainability and ESG reporting.</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Our team will reach out to you shortly via email with additional details, including the session schedule, access instructions, and next steps to complete your enrollment.</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">If you have immediate questions or are registering on behalf of a group, please feel free to contact us at <a href="mailto:info@rsmacademy-sa.com" style="color: #0066cc; text-decoration: underline;">info@rsmacademy-sa.com</a>.</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">We look forward to supporting your journey toward GRI Certification.</p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Warm regards,<br><strong>RSM Saudi Arabia Professional Academy Team</strong></p>
        
        <!-- Registration details card -->
        <div style="background-color: #f7f9fc; border-left: 4px solid #0066cc; padding: 20px; border-radius: 5px; margin: 25px 0;">
          <h3 style="color: #003366; margin-top: 0; font-size: 18px;">Registration Details</h3>
          <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${
            sampleData.fullName
          }</p>
          <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${
            sampleData.email
          }</p>
          <p style="margin: 10px 0; color: #333;"><strong>Phone:</strong> ${
            sampleData.phone
          }</p>
          <p style="margin: 10px 0; color: #333;"><strong>Enrollment Type:</strong> ${
            sampleData.enrollmentType === "individual"
              ? "Individual"
              : "Business"
          }</p>
          ${
            sampleData.enrollmentType === "business" &&
            sampleData.organizationName
              ? `
          <p style="margin: 10px 0; color: #333;"><strong>Organization:</strong> ${sampleData.organizationName}</p>
          `
              : ""
          }
        </div>
        
        <!-- Course information -->
        <h3 style="color: #003366; font-size: 18px; margin-bottom: 15px;">Course Information</h3>
        
        <!-- Message about upcoming contact -->
        <div style="background-color: #f0f7ff; padding: 20px; border-radius: 5px; margin: 25px 0; border-left: 4px solid #0066cc;">
          <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.5;">
            <strong>Note:</strong> Our team will provide you with detailed information about training dates, format, and all necessary preparation instructions in our follow-up communication.
          </p>
        </div>
      </div>
      
                <!-- Footer with RSM logo -->
          <div style="background-color: #f7f9fc; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <!-- RSM Logo -->
            <div style="margin-bottom: 10px; display: inline-block;">
              <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-dark_632bce48-1455-440f-880f-55d4c0cf2562.png" alt="RSM Logo" style="width: 80px; filter: opacity(0.7);">
            </div>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0;">© RSM Saudi Arabia Professional Academy. All rights reserved.</p>
          </div>
    </div>
  `;

  // Set content type to HTML
  res.header("Content-Type", "text/html");

  // Send the HTML template
  res.send(emailHtml);
});

// Catch-all route to serve index.html for client-side routing in production
if (isProduction) {
  app.get("*", (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return next();
    }
    console.log("Serving index.html for route:", req.path);
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
