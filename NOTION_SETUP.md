# Notion Integration Setup Guide

## Step 1: Create Notion Integration

1. **Go to [Notion Integrations](https://www.notion.so/my-integrations)**
2. **Click "New integration"**
3. **Fill in the details:**
   - Name: `KoreaTown Tutoring Workshops`
   - Associated workspace: Select your workspace
   - Capabilities: Read content, Update content
4. **Click "Submit"**
5. **Copy the Internal Integration Token** (you'll need this for the API key)

## Step 2: Create Workshops Database

1. **Create a new page in Notion**
2. **Add a database** (type `/database` and select "Table")
3. **Add the following properties:**

### Required Properties:
- **Title** (Title type) - Workshop name
- **Date** (Date type) - Workshop date
- **Time** (Text type) - e.g., "3:00 PM - 5:00 PM"
- **Location** (Text type) - e.g., "Koreatown Community Center"
- **Topic** (Select type) - Options: Computer Science, Mathematics, English, Science, Art, Music, Other
- **Capacity** (Number type) - Maximum participants
- **Registered** (Number type) - Current registrations
- **Description** (Text type) - Workshop description
- **Status** (Select type) - Options: upcoming, past
- **CalendlyLink** (URL type) - Calendly booking link

### Optional Properties (for past workshops):
- **Photos** (Number type) - Number of photos taken
- **Videos** (Number type) - Number of videos recorded
- **Participants** (Number type) - Actual participants

## Step 3: Share Database with Integration

1. **Open your database**
2. **Click "Share" in the top right**
3. **Click "Invite"**
4. **Search for your integration name**
5. **Select it and click "Invite"**

## Step 4: Get Database ID

1. **Open your database**
2. **Copy the URL**
3. **Extract the database ID** (the part between the last `/` and `?`)

Example URL: `https://www.notion.so/workspace/1234567890abcdef1234567890abcdef?v=...`
Database ID: `1234567890abcdef1234567890abcdef`

## Step 5: Set Environment Variables

Create a `.env` file in your project root:

```env
VITE_NOTION_API_KEY=your_integration_token_here
VITE_WORKSHOPS_DATABASE_ID=your_database_id_here
```

## Step 6: Add Sample Workshops

Add some sample workshops to your Notion database:

### Upcoming Workshop Example:
- **Title**: Introduction to Coding with Python
- **Date**: 2025-01-15
- **Time**: 3:00 PM - 5:00 PM
- **Location**: Koreatown Community Center
- **Topic**: Computer Science
- **Capacity**: 20
- **Registered**: 15
- **Description**: Learn the basics of Python programming in this hands-on workshop for beginners.
- **Status**: upcoming
- **CalendlyLink**: https://calendly.com/your-username/python-workshop

### Past Workshop Example:
- **Title**: Holiday Math Games
- **Date**: 2024-12-20
- **Time**: 3:00 PM - 5:00 PM
- **Location**: Koreatown Community Center
- **Topic**: Mathematics
- **Capacity**: 25
- **Registered**: 25
- **Description**: Students had a blast learning math through holiday-themed games and activities.
- **Status**: past
- **Photos**: 8
- **Videos**: 2
- **Participants**: 25

## Step 7: Test the Integration

1. **Start your development server**
2. **Navigate to the Workshops page**
3. **You should see your workshops loaded from Notion**

## Troubleshooting

### If workshops don't load:
1. **Check browser console** for API errors
2. **Verify your API key** is correct
3. **Verify your database ID** is correct
4. **Check that your integration** has access to the database
5. **Ensure all required properties** are present in your database

### Common Issues:
- **CORS errors**: Notion API doesn't support CORS for client-side requests. You'll need a backend proxy or use server-side rendering.
- **Property mapping errors**: Make sure property names in your database exactly match the expected names in the code.
- **Date format**: Use YYYY-MM-DD format for dates.

## Alternative: Use Notion as a CMS

If you prefer not to use the API, you can also:
1. **Export your Notion database** as JSON
2. **Save it as a static file** in your project
3. **Import it directly** in your component

This approach is simpler but requires manual updates when you add new workshops. 