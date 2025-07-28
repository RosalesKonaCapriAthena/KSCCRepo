import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for Notion API
app.post('/api/notion/query', async (req, res) => {
  try {
    const { databaseId } = req.body;
    const notionApiKey = process.env.VITE_NOTION_API_KEY;
    
    if (!notionApiKey || !databaseId) {
      return res.status(400).json({ error: 'Missing API key or database ID' });
    }

    // Format database ID to include hyphens
    const formattedDatabaseId = databaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

    const response = await fetch(`https://api.notion.com/v1/databases/${formattedDatabaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body.query || {}),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ error: 'Failed to fetch from Notion API' });
  }
});

// Proxy endpoint for adding pages to Notion
app.post('/api/notion/pages', async (req, res) => {
  try {
    const notionApiKey = process.env.VITE_NOTION_API_KEY;
    
    if (!notionApiKey) {
      return res.status(400).json({ error: 'Missing API key' });
    }

    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ error: 'Failed to add to Notion API' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
}); 