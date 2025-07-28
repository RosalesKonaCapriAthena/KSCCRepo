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
export const sendContactEmail = async (data: { name: string; email: string; message: string }): Promise<boolean> => {
  return sendEmail(data, 'Contact Form');
};

export const sendTutorApplicationEmail = async (data: EmailData): Promise<boolean> => {
  return sendEmail(data, 'Tutor Application');
};

export const sendStudentRegistrationEmail = async (data: EmailData): Promise<boolean> => {
  return sendEmail(data, 'Student Registration');
};

export const sendDonationEmail = async (data: { name: string; email: string; message: string }): Promise<boolean> => {
  return sendEmail(data, 'Donation Inquiry');
}; 