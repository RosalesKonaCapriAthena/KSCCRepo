import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  message?: string;
  subjects?: string;
  educationLevel?: string;
  hoursAvailable?: string;
  gradeLevel?: string;
}

export const sendEmail = async (data: EmailData, formType: string): Promise<boolean> => {
  console.log('sendEmail called with:', { data, formType });
  console.log('EMAILJS_CONFIG:', EMAILJS_CONFIG);
  
  try {
    const templateParams = {
      form_type: formType,
      from_name: data.name,
      from_email: data.email,
      message: data.message || '',
      subjects: data.subjects || '',
      education_level: data.educationLevel || '',
      hours_available: data.hoursAvailable || '',
      grade_level: data.gradeLevel || '',
    };

    console.log('Template params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Specific email functions for different forms
export const sendContactEmail = async (data: { name: string; email: string; phone?: string; subject?: string; message: string }): Promise<boolean> => {
  console.log('sendContactEmail called with data:', data);
  console.log('EMAILJS_CONFIG:', EMAILJS_CONFIG);
  
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || '',
      subject: data.subject || '',
      message: data.message
    };

    console.log('Contact template params:', templateParams);
    console.log('About to call emailjs.send with:');
    console.log('- Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('- Template ID:', EMAILJS_CONFIG.CONTACT_TEMPLATE_ID);

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    console.error('Error details:', JSON.stringify(error));
    return false;
  }
};

export const sendTutorApplicationEmail = async (data: EmailData): Promise<boolean> => {
  return sendEmail(data, 'Tutor Application');
};

export const sendStudentRegistrationEmail = async (data: EmailData): Promise<boolean> => {
  return sendEmail(data, 'Student Registration');
};

export const sendDonationEmail = async (data: { name: string; email: string; message: string }): Promise<boolean> => {
  // Convert the donation form data to match EmailData interface
  const emailData: EmailData = {
    name: data.name,
    email: data.email,
    message: data.message
  };
  return sendEmail(emailData, 'Donation Inquiry');
}; 