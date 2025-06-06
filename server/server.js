import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name correctly in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the correct path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production' || true; // Force production mode for now

// Serve static files in production
if (isProduction) {
  console.log('Running in production mode - serving static files from dist directory');
  // Serve static files from the 'dist' directory
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

// Middleware
app.use(cors({
  origin: true, // This allows all origins, but maintains the Access-Control-Allow-Origin header
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true, // Changed to true to allow credentials if needed
  optionsSuccessStatus: 204
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware to handle OPTIONS requests
app.options('*', cors());

// Handle preflight requests for the specific API endpoint
app.options('/api/send-email', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://gri-training.rsmacademy-sa.com');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(204).send();
});

// Email credentials
const EMAIL_USER = process.env.SMTP_USER || 'alexander.b@skilloncall.com';
const EMAIL_PASS = process.env.SMTP_PASS || 'utuokepbhrogjyzg';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  console.log('Received request to /api/send-email');
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', JSON.stringify(req.body, null, 2));

  // Set CORS headers explicitly for this endpoint
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');

  try {
    const { fullName, email, phone, enrollmentType } = req.body;

    if (!fullName || !email || !phone || !enrollmentType) {
      console.log('Missing required fields');
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Prepare email options
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      cc: EMAIL_USER,
      subject: 'Confirmation: GRI Certified Sustainability Training Registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header with gradient background similar to the landing page -->
          <div style="background: linear-gradient(to right, #003366, #0066cc); color: white; padding: 30px 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">GRI Certified Sustainability Professional Training</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Registration Confirmation</p>
          </div>
          
          <!-- Main content -->
          <div style="background-color: white; padding: 30px 25px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear <strong>${fullName}</strong>,</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Thank you for registering for the <strong>GRI Certified Sustainability Professional Training</strong>. We're excited to have you join us for this transformative program designed to equip professionals with in-demand ESG skills and prepare them for official GRI certification.</p>
            
            <!-- Registration details card -->
            <div style="background-color: #f7f9fc; border-left: 4px solid #0066cc; padding: 20px; border-radius: 5px; margin: 25px 0;">
              <h3 style="color: #003366; margin-top: 0; font-size: 18px;">Registration Details</h3>
              <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Enrollment Type:</strong> ${enrollmentType === 'individual' ? 'Individual' : 'Business'}</p>
            </div>
            
            <!-- Course information -->
            <h3 style="color: #003366; font-size: 18px; margin-bottom: 15px;">Course Information</h3>
            
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <div style="min-width: 24px; margin-right: 10px;">📅</div>
              <div>
                <p style="margin: 0; color: #333; font-weight: bold;">29 Jun - 2 Jul 2025</p>
                <p style="margin: 0; color: #666; font-size: 14px;">9:00 AM - 5:00 PM (GMT+3)</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <div style="min-width: 24px; margin-right: 10px;">🎓</div>
              <div>
                <p style="margin: 0; color: #333; font-weight: bold;">Virtual Training</p>
                <p style="margin: 0; color: #666; font-size: 14px;">Live sessions delivered via Zoom</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 25px;">
              <div style="min-width: 24px; margin-right: 10px;">⏱️</div>
              <div>
                <p style="margin: 0; color: #333; font-weight: bold;">4-day intensive program</p>
                <p style="margin: 0; color: #666; font-size: 14px;">32 hours of comprehensive training</p>
              </div>
            </div>
            
            <!-- What you'll learn section -->
            <h3 style="color: #003366; font-size: 18px; margin-bottom: 15px;">What You'll Learn</h3>
            <ul style="padding-left: 15px; color: #333; margin-bottom: 25px;">
              <li style="margin-bottom: 8px;">Comprehensive understanding of GRI Standards structure</li>
              <li style="margin-bottom: 8px;">Application of GRI reporting principles</li>
              <li style="margin-bottom: 8px;">Human rights reporting in accordance with GRI</li>
              <li style="margin-bottom: 8px;">Aligning sustainability reporting with UN SDGs</li>
              <li style="margin-bottom: 8px;">Improving quality and credibility of reports</li>
            </ul>
          </div>
        </div>
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Enrollment confirmation email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Detailed error logging
    if (error.response) {
      console.error('Nodemailer response error:', error.response.body);
    }
    
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
  }
});

// Add a simple test endpoint for CORS
app.get('/api/test-cors', (req, res) => {
  console.log('Received request to /api/test-cors');
  console.log('Origin:', req.headers.origin);
  
  // Set CORS headers explicitly
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  res.status(200).json({ 
    success: true, 
    message: 'CORS test successful',
    headers: req.headers,
    timestamp: new Date().toISOString()
  });
});

// Add a diagnostic endpoint
app.get('/api/status', (req, res) => {
  // Set CORS headers explicitly for this endpoint
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  
  res.status(200).json({ 
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    cors: true,
    origin: req.headers.origin || 'none',
    host: req.headers.host,
    referer: req.headers.referer || 'none',
    userAgent: req.headers['user-agent']
  });
});

// Catch-all route to serve index.html for client-side routing in production
if (isProduction) {
  app.get('*', (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api')) {
      return next();
    }
    console.log('Serving index.html for route:', req.path);
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 