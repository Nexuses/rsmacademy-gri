# RSM Academy GRI Training Registration

This project contains a registration form for GRI Certified Sustainability Professional Training.

## Email Functionality

This project uses EmailJS to send enrollment emails directly from the frontend without requiring a backend server.

### Setting up EmailJS

1. Create an account on [EmailJS](https://www.emailjs.com/) (they have a free tier)
2. Create an Email Service (e.g., Gmail, Outlook, etc.)
3. Create an Email Template with the following template parameters:
   - `to_name`: The name of the recipient
   - `from_name`: The name of the person enrolling
   - `from_email`: The email of the person enrolling
   - `phone`: The phone number of the person enrolling
   - `enrollment_type`: The type of enrollment (individual or business)
   - `reply_to`: The email to reply to

4. Update the following values in the code:
   - In `src/utils/email.ts`:
     - `EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
     - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   - In `src/components/RegistrationSection.tsx`:
     - Update the EmailJS initialization with your public key

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start the backend server in one terminal:
```bash
npm run server
```

3. Start the frontend development server in another terminal:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

## Building for Production

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

## Deploying to Production

1. Build the frontend:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The server will serve both the API and the static frontend files from the `dist` directory. 