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

    // Extract the correct database ID from the environment variable
    let formattedDatabaseId = WORKSHOPS_DATABASE_ID;
    
    // Remove any query parameters
    formattedDatabaseId = formattedDatabaseId.split('?')[0];
    
    // Remove any quotes
    formattedDatabaseId = formattedDatabaseId.replace(/"/g, '');
    
    // If the ID is duplicated, extract just the first UUID
    if (formattedDatabaseId.length > 36) {
      // Take only the first 32 characters (without hyphens)
      const firstPart = formattedDatabaseId.substring(0, 32);
      // Add hyphens to make it a proper UUID
      formattedDatabaseId = firstPart.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    } else if (formattedDatabaseId.length === 32 && !formattedDatabaseId.includes('-')) {
      // If it's exactly 32 characters without hyphens, add them
      formattedDatabaseId = formattedDatabaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    }
    
    console.log('Database ID processing:', {
      original: WORKSHOPS_DATABASE_ID,
      cleaned: formattedDatabaseId,
      length: formattedDatabaseId.length
    });

    console.log('Making Notion API call with database ID:', formattedDatabaseId);
    
    // Try a simple query without any filters first
    const response = await notion.databases.query({
      database_id: formattedDatabaseId,
      page_size: 10, // Limit to 10 results for testing
    });
    
    console.log('Notion API response received');

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