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
    // Check if we have the required environment variables
    if (!process.env.VITE_NOTION_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Notion API key not found' }),
      };
    }

    if (!process.env.VITE_WORKSHOPS_DATABASE_ID) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Database ID not found' }),
      };
    }

    // Create Notion client
    const notion = new Client({
      auth: process.env.VITE_NOTION_API_KEY,
    });

    // Clean and format database ID
    let databaseId = process.env.VITE_WORKSHOPS_DATABASE_ID;
    
    // Remove any query parameters or extra characters
    databaseId = databaseId.split('?')[0];
    
    // Remove any quotes that might be present
    databaseId = databaseId.replace(/"/g, '');
    
    // If it's longer than 36 characters (UUID length), truncate it
    if (databaseId.length > 36) {
      databaseId = databaseId.substring(0, 36);
    }
    
    // Add hyphens if they don't exist
    if (!databaseId.includes('-')) {
      databaseId = databaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    }
    
    console.log('Database ID processing:', {
      original: process.env.VITE_WORKSHOPS_DATABASE_ID,
      cleaned: databaseId,
      length: databaseId.length
    });

    console.log('Testing Notion API with database ID:', databaseId);

    // Try to retrieve the database (this will test the connection)
    const database = await notion.databases.retrieve({
      database_id: databaseId,
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
        message: 'Notion API connection successful'
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