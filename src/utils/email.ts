// Utility for sending enrollment emails using EmailJS
import emailjs from '@emailjs/browser';

interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
}

// You need to create an EmailJS account and get these values from there
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export const sendEnrollmentEmail = async (data: EnrollmentData): Promise<boolean> => {
  try {
    // Prepare the template parameters
    const templateParams = {
      to_name: 'RSM Saudi Academy Team',
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      enrollment_type: data.enrollmentType,
      reply_to: data.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    if (response.status !== 200) {
      throw new Error('Failed to send enrollment email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    return false;
  }
}; 