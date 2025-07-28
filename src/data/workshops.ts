export interface Workshop {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  topic: string;
  capacity: number;
  registered: number;
  description: string;
}

export interface PastWorkshop {
  id: number;
  title: string;
  date: string;
  photos: number;
  videos: number;
  participants: number;
  description: string;
}

export const upcomingWorkshops: Workshop[] = [
  {
    id: 1,
    title: "Introduction to Coding with Python",
    date: "2025-01-15",
    time: "3:00 PM - 5:00 PM",
    location: "Koreatown Community Center",
    topic: "Computer Science",
    capacity: 20,
    registered: 15,
    description: "Learn the basics of Python programming in this hands-on workshop for beginners."
  },
  {
    id: 2,
    title: "Math Problem Solving Strategies",
    date: "2025-01-22",
    time: "4:00 PM - 6:00 PM",
    location: "Koreatown Community Center",
    topic: "Mathematics",
    capacity: 25,
    registered: 18,
    description: "Master essential problem-solving techniques for algebra and geometry."
  },
  {
    id: 3,
    title: "Creative Writing Workshop",
    date: "2025-01-29",
    time: "3:30 PM - 5:30 PM",
    location: "Koreatown Community Center",
    topic: "English",
    capacity: 15,
    registered: 12,
    description: "Develop your creative writing skills through fun exercises and storytelling."
  },
  {
    id: 4,
    title: "Science Experiments at Home",
    date: "2025-02-05",
    time: "2:00 PM - 4:00 PM",
    location: "Koreatown Community Center",
    topic: "Science",
    capacity: 30,
    registered: 22,
    description: "Discover exciting science experiments you can do with household materials."
  }
];

export const pastWorkshops: PastWorkshop[] = [
  {
    id: 1,
    title: "Holiday Math Games",
    date: "2024-12-20",
    photos: 8,
    videos: 2,
    participants: 25,
    description: "Students had a blast learning math through holiday-themed games and activities."
  },
  {
    id: 2,
    title: "Art & Science Fusion",
    date: "2024-12-13",
    photos: 12,
    videos: 1,
    participants: 18,
    description: "Combining creativity with scientific principles in this unique workshop."
  },
  {
    id: 3,
    title: "Reading Comprehension Workshop",
    date: "2024-12-06",
    photos: 6,
    videos: 3,
    participants: 20,
    description: "Students improved their reading skills through interactive activities and discussions."
  }
];

// Helper function to add a new workshop
export const addWorkshop = (workshop: Omit<Workshop, 'id'>) => {
  const newId = Math.max(...upcomingWorkshops.map(w => w.id)) + 1;
  const newWorkshop: Workshop = {
    ...workshop,
    id: newId
  };
  upcomingWorkshops.push(newWorkshop);
  return newWorkshop;
};

// Helper function to move a workshop to past workshops
export const moveToPastWorkshops = (workshopId: number, photos: number = 0, videos: number = 0, participants: number = 0) => {
  const workshopIndex = upcomingWorkshops.findIndex(w => w.id === workshopId);
  if (workshopIndex !== -1) {
    const workshop = upcomingWorkshops[workshopIndex];
    const pastWorkshop: PastWorkshop = {
      id: workshop.id,
      title: workshop.title,
      date: workshop.date,
      photos,
      videos,
      participants,
      description: workshop.description
    };
    pastWorkshops.push(pastWorkshop);
    upcomingWorkshops.splice(workshopIndex, 1);
    return pastWorkshop;
  }
  return null;
}; 