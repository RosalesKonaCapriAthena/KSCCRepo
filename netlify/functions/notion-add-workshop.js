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
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    if (!WORKSHOPS_DATABASE_ID) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Database ID not configured on server' }),
      };
    }

    const { properties } = JSON.parse(event.body);
    
    if (!properties) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Workshop properties are required' }),
      };
    }

    // Clean and format database ID
    let formattedDatabaseId = WORKSHOPS_DATABASE_ID;
    
    // Remove any query parameters or extra characters
    formattedDatabaseId = formattedDatabaseId.split('?')[0];
    
    // Remove any quotes that might be present
    formattedDatabaseId = formattedDatabaseId.replace(/"/g, '');
    
    // If it's longer than 36 characters (UUID length), truncate it
    if (formattedDatabaseId.length > 36) {
      formattedDatabaseId = formattedDatabaseId.substring(0, 36);
    }
    
    // Add hyphens if they don't exist
    if (!formattedDatabaseId.includes('-')) {
      formattedDatabaseId = formattedDatabaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    }
    
    console.log('Database ID processing:', {
      original: WORKSHOPS_DATABASE_ID,
      cleaned: formattedDatabaseId,
      length: formattedDatabaseId.length
    });

    const response = await notion.pages.create({
      parent: { database_id: formattedDatabaseId },
      properties: properties,
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