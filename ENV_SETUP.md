# Environment Variables Setup

## Create Your .env File

Create a new file called `.env` in your project root directory (same level as `package.json`) with the following content:

```env
# Notion Integration Environment Variables
# Replace these placeholder values with your actual Notion integration credentials

# Your Notion Integration Token (from https://www.notion.so/my-integrations)
VITE_NOTION_API_KEY=your_notion_integration_token_here

# Your Notion Database ID (extract from your database URL)
VITE_WORKSHOPS_DATABASE_ID=your_notion_database_id_here
```

## How to Get Your Values

### 1. Get Your Notion API Key:
1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "KoreaTown Tutoring Workshops"
4. Click "Submit"
5. Copy the "Internal Integration Token"
6. Replace `your_notion_integration_token_here` with this token

### 2. Get Your Database ID:
1. Open your Notion database
2. Copy the URL from your browser
3. Extract the database ID (the part between the last `/` and `?`)

Example URL: `https://www.notion.so/workspace/1234567890abcdef1234567890abcdef?v=...`
Database ID: `1234567890abcdef1234567890abcdef`

## Example .env File

```env
VITE_NOTION_API_KEY=secret_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
VITE_WORKSHOPS_DATABASE_ID=1234567890abcdef1234567890abcdef
```

## Important Notes

- **Never commit your .env file** to version control
- **Restart your development server** after creating the .env file
- **The .env file should be in your project root** (same folder as package.json)
- **All Vite environment variables** must start with `VITE_`

## Testing Your Setup

After creating your .env file:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your browser console and check for any errors

3. Navigate to the Workshops page to see if data loads from Notion

## Troubleshooting

If workshops don't load:
1. Check that your .env file is in the correct location
2. Verify your API key is correct
3. Verify your database ID is correct
4. Make sure you've shared your database with your integration
5. Check the browser console for error messages 