import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Camera, Play, Loader2, ArrowRight, Sparkles, Star } from 'lucide-react';
import { 
  CodeBracketIcon, 
  PencilIcon, 
  CalculatorIcon, 
  BeakerIcon,
  BookOpenIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { fetchWorkshopsFromNotion } from '../services/notionService';

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

const Workshops = () => {
  const [workshops, setWorkshops] = useState<NotionWorkshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        setLoading(true);
        const data = await fetchWorkshopsFromNotion();
        setWorkshops(data);
      } catch (err) {
        setError('Failed to load workshops');
        console.error('Error loading workshops:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWorkshops();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Function to get subject icon and color
  const getSubjectIcon = (topic: string) => {
    const subjectMap: { [key: string]: { icon: any; color: string; bgColor: string } } = {
      'Computer Science': { icon: CodeBracketIcon, color: 'text-blue-600', bgColor: 'bg-blue-100' },
      'Mathematics': { icon: CalculatorIcon, color: 'text-green-600', bgColor: 'bg-green-100' },
      'English': { icon: BookOpenIcon, color: 'text-purple-600', bgColor: 'bg-purple-100' },
      'Science': { icon: BeakerIcon, color: 'text-orange-600', bgColor: 'bg-orange-100' },
      'Art': { icon: PaintBrushIcon, color: 'text-pink-600', bgColor: 'bg-pink-100' },
      'Music': { icon: MusicalNoteIcon, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
      'Other': { icon: LightBulbIcon, color: 'text-gray-600', bgColor: 'bg-gray-100' }
    };
    
    return subjectMap[topic] || subjectMap['Other'];
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-3 h-3 bg-[#4338ca] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Interactive Learning Experiences
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our engaging workshops designed to make learning fun and interactive. 
              From coding to creative writing, we offer a variety of topics for all ages.
            </p>
          </div>

          {/* Upcoming Workshops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {loading ? (
              <div className="col-span-full flex justify-center items-center py-12">
                <div className="flex items-center space-x-3">
                  <Loader2 className="h-8 w-8 animate-spin text-[#4338ca]" />
                  <span className="text-gray-600 text-lg">Loading workshops...</span>
                </div>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
                  <p className="text-red-600 font-medium">{error}</p>
                  <p className="text-red-500 text-sm mt-2">Please try refreshing the page</p>
                </div>
              </div>
            ) : (
              workshops
                .filter((workshop: NotionWorkshop) => workshop.status === 'upcoming')
                .map((workshop: NotionWorkshop) => (
              <div key={workshop.id} className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-[#4338ca]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {(() => {
                      const subjectInfo = getSubjectIcon(workshop.topic);
                      const SubjectIcon = subjectInfo.icon;
                      return (
                        <div className={`${subjectInfo.bgColor} w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <SubjectIcon className={`w-4 h-4 ${subjectInfo.color}`} />
                        </div>
                      );
                    })()}
                    <span className="text-sm font-medium text-gray-700">{workshop.topic}</span>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                    {workshop.registered}/{workshop.capacity} spots
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4338ca] transition-colors">{workshop.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{workshop.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-[#4338ca]" />
                    {formatDate(workshop.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-[#4338ca]" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#4338ca]" />
                    {workshop.location}
                  </div>
                </div>
                
                 <a 
                   href={workshop.calendlyLink || "#"}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group inline-flex items-center w-full bg-[#4338ca] text-white py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 text-center justify-center"
                 >
                   Register Now
                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
             ))
            )}
           </div>
        </div>
      </section>

      {/* Past Workshops Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Past Success Stories
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Workshop Recaps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the fun and learning that happened in our recent workshops!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops
              .filter((workshop: NotionWorkshop) => workshop.status === 'past')
              .map((workshop: NotionWorkshop) => (
              <div key={workshop.id} className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center space-x-2 mb-3">
                  {(() => {
                    const subjectInfo = getSubjectIcon(workshop.topic);
                    const SubjectIcon = subjectInfo.icon;
                    return (
                      <div className={`${subjectInfo.bgColor} w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <SubjectIcon className={`w-4 h-4 ${subjectInfo.color}`} />
                      </div>
                    );
                  })()}
                  <span className="text-sm font-medium text-gray-600">{workshop.topic}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{workshop.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{workshop.description}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-[#4338ca]" />
                  {formatDate(workshop.date)}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-[#4338ca]" />
                    {workshop.participants} participants
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Camera className="h-4 w-4 mr-1 text-[#4338ca]" />
                      {workshop.photos}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Play className="h-4 w-4 mr-1 text-[#4338ca]" />
                      {workshop.videos}
                    </div>
                  </div>
                </div>
                
                <button className="group w-full bg-gray-200 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  View Photos & Videos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Workshop Photo Gallery */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Camera className="w-4 h-4 mr-2" />
                Workshop Memories
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Workshop Photos
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Photo placeholders */}
              {[...Array(12)].map((_, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-square flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4338ca] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Join Our Community
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to Host a Workshop?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Are you passionate about a subject and want to share your knowledge? 
            We're always looking for workshop leaders and volunteers.
          </p>
          <Link
            to="/tutors"
            className="group inline-flex items-center bg-white text-[#4338ca] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Become a Workshop Leader
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Workshops; 