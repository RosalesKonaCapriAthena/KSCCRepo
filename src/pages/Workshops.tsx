import React from 'react';
import { Calendar, Clock, Users, ExternalLink, ChevronRight } from 'lucide-react';

const Workshops = () => {
  const upcomingWorkshops = [
    {
      title: 'Introduction to Robotics',
      date: 'March 15, 2025',
      time: '2:00 PM - 4:00 PM',
      capacity: '20 students',
      description: 'Build and program your first robot using Arduino and basic sensors.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Chemistry Lab: Color-Changing Reactions',
      date: 'March 22, 2025',
      time: '1:00 PM - 3:00 PM',
      capacity: '15 students',
      description: 'Explore acid-base reactions through exciting color-changing experiments.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Coding for Beginners: Python Basics',
      date: 'March 29, 2025',
      time: '10:00 AM - 12:00 PM',
      capacity: '25 students',
      description: 'Learn programming fundamentals and create your first Python project.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Math Olympics: Problem Solving Fun',
      date: 'April 5, 2025',
      time: '3:00 PM - 5:00 PM',
      capacity: '30 students',
      description: 'Work in teams to solve challenging math problems and puzzles.',
      image: 'https://images.pexels.com/photos/6238122/pexels-photo-6238122.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const pastWorkshops = [
    {
      title: 'Solar-Powered Car Challenge',
      participants: '18 students',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'DNA Extraction Lab',
      participants: '12 students',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Website Design Workshop',
      participants: '22 students',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Physics of Flight',
      participants: '16 students',
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">STEM Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on learning experiences that make science, technology, engineering, and math exciting and accessible. 
            Join us for interactive workshops designed to spark curiosity and creativity.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-green-600" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-orange-600" />
                      <span>{workshop.capacity}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-colors flex items-center justify-center">
                    RSVP for Workshop
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Information */}
        <section className="bg-blue-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Information</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our STEM workshops</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Who Can Attend?</h3>
              <p className="text-gray-600">
                Students ages 8-18. All skill levels welcome. No prior experience required for most workshops.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">When & Where?</h3>
              <p className="text-gray-600">
                Weekends at the Koreatown Senior & Community Center. Check individual workshop details for specific times.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Join?</h3>
              <p className="text-gray-600">
                RSVP through our online form. Workshops are free, but space is limited so sign up early!
              </p>
            </div>
          </div>
        </section>

        {/* Past Workshops */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Workshop Highlights</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take a look at some of the amazing workshops we've hosted and the incredible projects our students have created.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 text-sm">{workshop.participants} participated</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Want to see more workshop photos and updates?
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Follow Us on Social Media
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workshops;