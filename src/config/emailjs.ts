// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_cufkpyn', // Your EmailJS service ID
  PUBLIC_KEY: 'rJ-PGhsv4JJVgorAk', // Your EmailJS public key
  TEMPLATE_ID: 'template_li046qn', // Your universal template ID
  CONTACT_TEMPLATE_ID: 'template_msy784h' // Your new contact template ID
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create ONE universal Email Template with the format below
// 4. Replace the placeholder values above with your actual credentials
// 5. Update the emailService.ts file to use these config values

// Universal Template Format:
// Subject: New {{form_type}} Submission from {{from_name}}
//
// Name: {{from_name}}
// Email: {{from_email}}
// Message: {{message}}
// Education Level: {{education_level}}
// Subjects: {{subjects}}
// Hours Available: {{hours_available}}
// Grade Level: {{grade_level}} 