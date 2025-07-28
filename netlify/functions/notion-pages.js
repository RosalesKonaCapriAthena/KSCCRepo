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

    const { pageId } = JSON.parse(event.body);
    
    if (!pageId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Page ID is required' }),
      };
    }

    const response = await notion.pages.retrieve({
      page_id: pageId,
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