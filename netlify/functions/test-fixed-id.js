const { Client } = require('@notionhq/client');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    if (!process.env.VITE_NOTION_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Notion API key not found' }),
      };
    }

    // Create Notion client
    const notion = new Client({
      auth: process.env.VITE_NOTION_API_KEY,
    });

    // Use a hardcoded database ID to test
    const testDatabaseId = '23ecf2cc-4a79-8091-abea-c6c554802c6b';

    console.log('Testing with hardcoded database ID:', testDatabaseId);

    // Try to retrieve the database
    const database = await notion.databases.retrieve({
      database_id: testDatabaseId,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        database: {
          id: database.id,
          title: database.title,
          properties: Object.keys(database.properties),
        },
        message: 'Notion API connection successful with hardcoded ID'
      }),
    };

  } catch (error) {
    console.error('Notion API test error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Notion API test failed',
        details: error.message,
        code: error.code,
        status: error.status
      }),
    };
  }
}; 