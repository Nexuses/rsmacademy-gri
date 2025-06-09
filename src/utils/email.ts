// Utility for sending enrollment emails using backend API

interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
  organizationName?: string;
}

// API URL
const API_URL = 'https://gri-training.rsmacademy-sa.co/api/send-email';

export const sendEnrollmentEmail = async (data: EnrollmentData): Promise<boolean> => {
  try {
    console.log('Sending enrollment email to:', API_URL, data);
    
    // Call the backend API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin,
      },
      mode: 'cors', // Enable CORS mode
      credentials: 'same-origin', // Include credentials only for same origin
      body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);
    
    // Handle non-JSON responses gracefully
    let result;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      const text = await response.text();
      console.log('Non-JSON response:', text);
      result = { message: text };
    }
    
    if (!response.ok) {
      throw new Error(result.message || `Failed with status ${response.status}`);
    }
    
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    return false;
  }
}; 