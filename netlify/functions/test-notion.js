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

    // Debug: Log the raw environment variable
    console.log('Raw environment variable:', {
      value: process.env.VITE_WORKSHOPS_DATABASE_ID,
      length: process.env.VITE_WORKSHOPS_DATABASE_ID ? process.env.VITE_WORKSHOPS_DATABASE_ID.length : 0,
      type: typeof process.env.VITE_WORKSHOPS_DATABASE_ID
    });
    
    // Clean and format database ID
    let databaseId = process.env.VITE_WORKSHOPS_DATABASE_ID;
    
    // Remove any query parameters or extra characters
    databaseId = databaseId.split('?')[0];
    
    // Remove any quotes that might be present
    databaseId = databaseId.replace(/"/g, '');
    
    // Check if it looks like a duplicated UUID and extract the first part
    if (databaseId.length > 36) {
      // Look for the pattern of a UUID (8-4-4-4-12 characters)
      const uuidPattern = /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i;
      const match = databaseId.match(uuidPattern);
      if (match) {
        databaseId = match[1];
      } else {
        // If no UUID pattern found, just take the first 36 characters
        databaseId = databaseId.substring(0, 36);
      }
    }
    
    // Add hyphens if they don't exist and it's exactly 32 characters
    if (databaseId.length === 32 && !databaseId.includes('-')) {
      databaseId = databaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    }
    
    console.log('Database ID processing:', {
      original: process.env.VITE_WORKSHOPS_DATABASE_ID,
      cleaned: databaseId,
      length: databaseId.length,
      isValidUUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(databaseId)
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