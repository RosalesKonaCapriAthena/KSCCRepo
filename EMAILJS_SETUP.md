# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality on your website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Universal Email Template

You only need to create ONE template for all forms:

1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it "Universal Form Template"
4. Use this template:

**Subject:**
```
New {{form_type}} Submission from {{from_name}}
```

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
Education Level: {{education_level}}
Subjects: {{subjects}}
Hours Available: {{hours_available}}
Grade Level: {{grade_level}}
```

5. Note down the **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  TEMPLATE_ID: 'your_universal_template_id'
};
```

## Step 6: Test the Forms

1. Start your development server: `npm run dev`
2. Test each form:
   - Contact form on `/contact`
   - Tutor application on `/tutors`
   - Student registration on `/families`
   - Donation form on `/donate`

## Troubleshooting

- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template IDs
- **"Public key invalid"**: Check your Public Key
- **Emails not sending**: Check your email service authentication

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to expose in client-side code 