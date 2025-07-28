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

    // Format database ID with hyphens if needed
    const formattedDatabaseId = WORKSHOPS_DATABASE_ID.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

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