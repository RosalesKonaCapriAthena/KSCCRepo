// Notion API service for workshops
// You'll need to set up a Notion integration and get your API key and database ID

const NOTION_API_KEY = import.meta.env.VITE_NOTION_API_KEY || '';
// Format database ID to include hyphens for Notion API
const rawDatabaseId = (import.meta.env.VITE_WORKSHOPS_DATABASE_ID || '').split('?')[0];
const WORKSHOPS_DATABASE_ID = rawDatabaseId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

// Use API server for development and production
const API_BASE_URL = '/.netlify/functions';

interface NotionWorkshop {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  topic: string;
  capacity: number;
  registered: number;
  description: string;
  status: 'upcoming' | 'past';
  calendlyLink?: string;
  photos?: number;
  videos?: number;
  participants?: number;
}

// Fallback data when Notion API is not configured
const fallbackWorkshops: NotionWorkshop[] = [
  {
    id: '1',
    title: 'Introduction to Python Programming',
    date: '2025-01-15',
    time: '3:00 PM - 5:00 PM',
    location: 'Koreatown Community Center',
    topic: 'Computer Science',
    capacity: 20,
    registered: 15,
    description: 'Learn the basics of Python programming in this hands-on workshop for beginners. Perfect for students interested in coding!',
    status: 'upcoming',
    calendlyLink: 'https://calendly.com/koreatown-tutoring/python-workshop',
    photos: 0,
    videos: 0,
    participants: 0,
  },
  {
    id: '2',
    title: 'Creative Writing & Storytelling',
    date: '2025-01-22',
    time: '4:00 PM - 5:30 PM',
    location: 'Koreatown Community Center',
    topic: 'English',
    capacity: 15,
    registered: 12,
    description: 'Express yourself through creative writing! We\'ll explore different writing styles, storytelling techniques, and build confidence in writing.',
    status: 'upcoming',
    calendlyLink: 'https://calendly.com/koreatown-tutoring/creative-writing',
    photos: 0,
    videos: 0,
    participants: 0,
  },
  {
    id: '3',
    title: 'Advanced Math Problem Solving',
    date: '2025-01-29',
    time: '2:00 PM - 3:30 PM',
    location: 'Koreatown Community Center',
    topic: 'Mathematics',
    capacity: 18,
    registered: 8,
    description: 'Develop critical thinking skills through engaging math problems and puzzles. This workshop focuses on problem-solving strategies.',
    status: 'upcoming',
    calendlyLink: 'https://calendly.com/koreatown-tutoring/math-workshop',
    photos: 0,
    videos: 0,
    participants: 0,
  },
  {
    id: '4',
    title: 'Holiday Math Games Workshop',
    date: '2024-12-20',
    time: '3:30 PM - 5:00 PM',
    location: 'Koreatown Community Center',
    topic: 'Mathematics',
    capacity: 16,
    registered: 16,
    description: 'Students had a blast learning math through holiday-themed games and activities. A fun way to practice math skills!',
    status: 'past',
    calendlyLink: '',
    photos: 12,
    videos: 3,
    participants: 16,
  },
];

export const fetchWorkshopsFromNotion = async (): Promise<NotionWorkshop[]> => {
  // Debug: Log environment variables (without exposing the full API key)
  console.log('Environment check:', {
    hasApiKey: !!NOTION_API_KEY,
    apiKeyLength: NOTION_API_KEY ? NOTION_API_KEY.length : 0,
    apiKeyPrefix: NOTION_API_KEY ? NOTION_API_KEY.substring(0, 7) : 'none',
    hasDatabaseId: !!WORKSHOPS_DATABASE_ID,
    databaseId: WORKSHOPS_DATABASE_ID || 'none',
    databaseIdLength: WORKSHOPS_DATABASE_ID ? WORKSHOPS_DATABASE_ID.length : 0
  });
  
  // If Notion API is not configured, return fallback data
  if (!NOTION_API_KEY || !WORKSHOPS_DATABASE_ID) {
    console.warn('Notion API key or database ID not configured. Using fallback data.');
    return fallbackWorkshops;
  }

  try {
    // Use Netlify Functions to call Notion API
    const requestUrl = `${API_BASE_URL}/notion-query`;
    console.log('Making request to:', requestUrl);
    const requestBody = {
      databaseId: rawDatabaseId,
      query: {
        sorts: [
          {
            property: 'Date',
            direction: 'ascending',
          },
        ],
      },
    };
    
    console.log('Request body:', requestBody);
    
    const response = await fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Proxy server error: ${response.status}`);
    }

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    
    // Log the response to debug
    console.log('Notion API response:', data);
    console.log('Results array:', data.results);
    console.log('Number of results:', data.results.length);
    
    // Check if data has results property
    if (!data || !data.results) {
      console.error('Invalid response format from Notion API:', data);
      if (data.object === 'error') {
        console.error('Notion API Error:', data.message);
        throw new Error(`Notion API Error: ${data.message}`);
      }
      throw new Error('Invalid response format from Notion API');
    }
    
    const processedWorkshops = data.results.map((page: any) => {
      const properties = page.properties;
      const workshop = {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || '',
        date: properties.Date?.date?.start || '',
        time: properties.Time?.rich_text?.[0]?.plain_text || '',
        location: properties.Location?.rich_text?.[0]?.plain_text || 'Koreatown Community Center',
        topic: properties.Topic?.select?.name || '',
        capacity: properties.Capacity?.number || 20,
        registered: properties.Registered?.number || 0,
        description: properties.Description?.rich_text?.[0]?.plain_text || '',
        status: properties.Status?.select?.name === 'Yes' ? 'upcoming' : 'past',
        calendlyLink: properties.CalendlyLink?.url || '',
        photos: properties.Photos?.number || 0,
        videos: properties.Videos?.number || 0,
        participants: properties.Participants?.number || 0,
      };
      console.log('Processed workshop:', workshop);
      return workshop;
    });
    
    console.log('Final processed workshops:', processedWorkshops);
    return processedWorkshops;
  } catch (error) {
    console.error('Error fetching workshops from Notion:', error);
    console.log('Falling back to sample data...');
    return fallbackWorkshops;
  }
};

export const addWorkshopToNotion = async (workshop: Omit<NotionWorkshop, 'id'>): Promise<boolean> => {
  if (!NOTION_API_KEY || !WORKSHOPS_DATABASE_ID) {
    console.warn('Notion API key or database ID not configured');
    return false;
  }

  try {
    // Use Netlify Functions to call Notion API
    const response = await fetch(`${API_BASE_URL}/notion-pages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: WORKSHOPS_DATABASE_ID },
        properties: {
          Title: {
            title: [
              {
                text: {
                  content: workshop.title,
                },
              },
            ],
          },
          Date: {
            date: {
              start: workshop.date,
            },
          },
          Time: {
            rich_text: [
              {
                text: {
                  content: workshop.time,
                },
              },
            ],
          },
          Location: {
            rich_text: [
              {
                text: {
                  content: workshop.location,
                },
              },
            ],
          },
          Topic: {
            select: {
              name: workshop.topic,
            },
          },
          Capacity: {
            number: workshop.capacity,
          },
          Registered: {
            number: workshop.registered,
          },
          Description: {
            rich_text: [
              {
                text: {
                  content: workshop.description,
                },
              },
            ],
          },
          Status: {
            select: {
              name: workshop.status,
            },
          },
          CalendlyLink: {
            url: workshop.calendlyLink || '',
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error adding workshop to Notion:', error);
    return false;
  }
}; 