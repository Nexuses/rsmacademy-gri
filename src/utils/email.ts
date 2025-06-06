// Utility for sending enrollment emails using backend API

interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
}

// API URL
const API_URL = 'http://localhost:3001/api/send-email';

export const sendEnrollmentEmail = async (data: EnrollmentData): Promise<boolean> => {
  try {
    // Call the backend API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send enrollment email');
    }
    
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    return false;
  }
}; 