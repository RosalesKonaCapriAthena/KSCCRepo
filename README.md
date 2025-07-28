# KoreaTown Tutoring Website

A React-based website for KoreaTown Tutoring with Notion API integration for workshop management.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root with your Notion credentials:
```env
VITE_NOTION_API_KEY=your_notion_integration_token_here
VITE_WORKSHOPS_DATABASE_ID=your_notion_database_id_here
```

See `ENV_SETUP.md` for detailed instructions on getting these values.

### 3. Start Development Servers

**Option A: Start both servers together (recommended)**
```bash
npm run dev:full
```

**Option B: Start servers separately**
```bash
# Terminal 1: Start API server
npm run api

# Terminal 2: Start Vite dev server
npm run dev
```

## Development

- **Frontend**: http://localhost:5173
- **API Server**: http://localhost:3001

The API server handles Notion API requests and provides endpoints:
- `POST /api/notion/query` - Query workshops from Notion database
- `POST /api/notion/pages` - Add new workshops to Notion database

## Production Deployment

For production, you'll need to:
1. Deploy the API server (`api-server.js`) to a hosting service
2. Update the `API_BASE_URL` in `src/services/notionService.ts` to point to your deployed API server
3. Deploy the frontend to your hosting service

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run api` - Start API server
- `npm run dev:full` - Start both servers together
- `npm run build` - Build for production
- `npm run preview` - Preview production build 