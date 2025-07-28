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
    // Check environment variables (without exposing the actual values)
    const envCheck = {
      hasNotionKey: !!process.env.VITE_NOTION_API_KEY,
      notionKeyLength: process.env.VITE_NOTION_API_KEY ? process.env.VITE_NOTION_API_KEY.length : 0,
      hasDatabaseId: !!process.env.VITE_WORKSHOPS_DATABASE_ID,
      databaseIdLength: process.env.VITE_WORKSHOPS_DATABASE_ID ? process.env.VITE_WORKSHOPS_DATABASE_ID.length : 0,
      databaseIdPrefix: process.env.VITE_WORKSHOPS_DATABASE_ID ? process.env.VITE_WORKSHOPS_DATABASE_ID.substring(0, 8) : 'none',
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Environment check',
        env: envCheck,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Test function error',
        details: error.message 
      }),
    };
  }
}; 