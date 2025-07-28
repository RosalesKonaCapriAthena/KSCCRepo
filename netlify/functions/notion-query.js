const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.VITE_NOTION_API_KEY,
});

// Get database ID from environment variable
const WORKSHOPS_DATABASE_ID = process.env.VITE_WORKSHOPS_DATABASE_ID;

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Debug: Log environment variables (without exposing values)
    console.log('Environment check:', {
      hasNotionKey: !!process.env.VITE_NOTION_API_KEY,
      notionKeyLength: process.env.VITE_NOTION_API_KEY ? process.env.VITE_NOTION_API_KEY.length : 0,
      hasDatabaseId: !!process.env.VITE_WORKSHOPS_DATABASE_ID,
      databaseIdLength: process.env.VITE_WORKSHOPS_DATABASE_ID ? process.env.VITE_WORKSHOPS_DATABASE_ID.length : 0,
    });

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    const body = JSON.parse(event.body);
    
    if (!WORKSHOPS_DATABASE_ID) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Database ID not configured on server',
          debug: 'WORKSHOPS_DATABASE_ID environment variable is missing'
        }),
      };
    }

    if (!process.env.VITE_NOTION_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Notion API key not configured on server',
          debug: 'VITE_NOTION_API_KEY environment variable is missing'
        }),
      };
    }

    // Format database ID with hyphens if needed
    const formattedDatabaseId = WORKSHOPS_DATABASE_ID.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

    const response = await notion.databases.query({
      database_id: formattedDatabaseId,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
    };
  }
}; 