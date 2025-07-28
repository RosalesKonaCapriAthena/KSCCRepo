// Alternative: Manual Notion export
// Export your Notion database as JSON and paste it here
// This is simpler than API integration but requires manual updates

export interface NotionWorkshop {
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

// Sample data - replace with your actual Notion export
export const notionWorkshops: NotionWorkshop[] = [
  {
    id: "1",
    title: "Introduction to Coding with Python",
    date: "2025-01-15",
    time: "3:00 PM - 5:00 PM",
    location: "Koreatown Community Center",
    topic: "Computer Science",
    capacity: 20,
    registered: 15,
    description: "Learn the basics of Python programming in this hands-on workshop for beginners.",
    status: "upcoming",
    calendlyLink: "https://calendly.com/your-username/python-workshop"
  },
  {
    id: "2",
    title: "Math Problem Solving Strategies",
    date: "2025-01-22",
    time: "4:00 PM - 6:00 PM",
    location: "Koreatown Community Center",
    topic: "Mathematics",
    capacity: 25,
    registered: 18,
    description: "Master essential problem-solving techniques for algebra and geometry.",
    status: "upcoming",
    calendlyLink: "https://calendly.com/your-username/math-workshop"
  },
  {
    id: "3",
    title: "Creative Writing Workshop",
    date: "2025-01-29",
    time: "3:30 PM - 5:30 PM",
    location: "Koreatown Community Center",
    topic: "English",
    capacity: 15,
    registered: 12,
    description: "Develop your creative writing skills through fun exercises and storytelling.",
    status: "upcoming",
    calendlyLink: "https://calendly.com/your-username/writing-workshop"
  },
  {
    id: "4",
    title: "Science Experiments at Home",
    date: "2025-02-05",
    time: "2:00 PM - 4:00 PM",
    location: "Koreatown Community Center",
    topic: "Science",
    capacity: 30,
    registered: 22,
    description: "Discover exciting science experiments you can do with household materials.",
    status: "upcoming",
    calendlyLink: "https://calendly.com/your-username/science-workshop"
  },
  {
    id: "5",
    title: "Holiday Math Games",
    date: "2024-12-20",
    time: "3:00 PM - 5:00 PM",
    location: "Koreatown Community Center",
    topic: "Mathematics",
    capacity: 25,
    registered: 25,
    description: "Students had a blast learning math through holiday-themed games and activities.",
    status: "past",
    photos: 8,
    videos: 2,
    participants: 25
  },
  {
    id: "6",
    title: "Art & Science Fusion",
    date: "2024-12-13",
    time: "3:00 PM - 5:00 PM",
    location: "Koreatown Community Center",
    topic: "Art",
    capacity: 20,
    registered: 18,
    description: "Combining creativity with scientific principles in this unique workshop.",
    status: "past",
    photos: 12,
    videos: 1,
    participants: 18
  },
  {
    id: "7",
    title: "Reading Comprehension Workshop",
    date: "2024-12-06",
    time: "3:00 PM - 5:00 PM",
    location: "Koreatown Community Center",
    topic: "English",
    capacity: 20,
    registered: 20,
    description: "Students improved their reading skills through interactive activities and discussions.",
    status: "past",
    photos: 6,
    videos: 3,
    participants: 20
  }
];

// Helper functions
export const getUpcomingWorkshops = () => {
  return notionWorkshops.filter(workshop => workshop.status === 'upcoming');
};

export const getPastWorkshops = () => {
  return notionWorkshops.filter(workshop => workshop.status === 'past');
};

export const addWorkshop = (workshop: Omit<NotionWorkshop, 'id'>) => {
  const newId = (Math.max(...notionWorkshops.map(w => parseInt(w.id))) + 1).toString();
  const newWorkshop: NotionWorkshop = {
    ...workshop,
    id: newId
  };
  notionWorkshops.push(newWorkshop);
  return newWorkshop;
}; 