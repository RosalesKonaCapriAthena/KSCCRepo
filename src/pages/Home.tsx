import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWorkshopsFromNotion } from '../services/notionService';
import { 
  CodeBracketIcon, 
  PencilIcon, 
  CalculatorIcon, 
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  BeakerIcon,
  BookOpenIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  LightBulbIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        const data = await fetchWorkshopsFromNotion();
        setWorkshops(data);
      } catch (error) {
        console.error('Error loading workshops:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWorkshops();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
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

  // Get upcoming workshops (limit to 3)
  const upcomingWorkshops = workshops
    .filter((workshop: any) => workshop.status === 'upcoming')
    .slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  KSCC
                  <br />
                  <span className="text-[#4338ca]">
                    Nexel
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Nexel is a STEM-based tutoring initiative under the Koreatown Senior and Community Center, a 501(c)(3) nonprofit serving the LA community, dedicated to providing academic support to students from underprivileged and low-income backgrounds.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/tutors"
                  className="group bg-[#4338ca] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Volunteer as a Tutor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/students"
                  className="group bg-transparent text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white hover:border-gray-200 flex items-center justify-center"
                >
                  Sign Up a Student
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column - Empty for now to let background image show through */}
            <div className="hidden lg:block">
              {/* This space allows the background image to be visible on the right side */}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#4338ca] rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-green-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              Making Real Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a real difference in students' lives through dedicated tutoring and support
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-[#4338ca] mb-2">2018</div>
              <div className="text-gray-600 text-sm font-medium">Program Started</div>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-[#4338ca] mb-2">100+</div>
              <div className="text-gray-600 text-sm font-medium">Students Served</div>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-[#4338ca] mb-2">65+</div>
              <div className="text-gray-600 text-sm font-medium">Volunteer Tutors</div>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-[#4338ca] mb-2">5+</div>
              <div className="text-gray-600 text-sm font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Highlight Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Interactive Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our engaging workshops designed to make learning fun and interactive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {loading ? (
              // Loading state
              <>
                <div className="bg-white rounded-2xl p-6 animate-pulse border border-gray-100">
                  <div className="bg-gray-200 w-12 h-12 rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-8 rounded"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 animate-pulse border border-gray-100">
                  <div className="bg-gray-200 w-12 h-12 rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-8 rounded"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 animate-pulse border border-gray-100">
                  <div className="bg-gray-200 w-12 h-12 rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-8 rounded"></div>
                </div>
              </>
            ) : upcomingWorkshops.length > 0 ? (
              // Real workshop data
              upcomingWorkshops.map((workshop: any, index: number) => {
                const subjectInfo = getSubjectIcon(workshop.topic);
                const SubjectIcon = subjectInfo.icon;
                
                return (
                  <div key={workshop.id} className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4338ca] transform hover:scale-105">
                    <div className={`${subjectInfo.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <SubjectIcon className={`w-6 h-6 ${subjectInfo.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4338ca] transition-colors">{workshop.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{workshop.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-[#4338ca]" />
                      <span>{formatDate(workshop.date)}</span>
                    </div>
                    <Link
                      to="/workshops"
                      className="group inline-flex items-center bg-[#4338ca] hover:bg-[#3730a3] text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })
            ) : (
              // No workshops state
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 mb-4">
                  <CodeBracketIcon className="w-16 h-16 mx-auto animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Workshops</h3>
                <p className="text-gray-600">Check back soon for new workshop announcements!</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              to="/workshops"
              className="group inline-flex items-center bg-[#4338ca] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Workshops
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tutoring Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  <AcademicCapIcon className="w-4 h-4 mr-2" />
                  Personalized Learning
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  One-on-One Tutoring Support
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We connect volunteer tutors with students who need extra help in math, science, and more. 
                  Our personalized approach ensures every student gets the attention they need to succeed.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Subjects Offered</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                    <CalculatorIcon className="w-4 h-4" />
                    <span>Math</span>
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                    <BeakerIcon className="w-4 h-4" />
                    <span>Science</span>
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                    <GlobeAltIcon className="w-4 h-4" />
                    <span>History</span>
                  </span>
                </div>
              </div>

              <Link
                to="/students"
                className="group inline-flex items-center bg-[#4338ca] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request a Tutor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <AcademicCapIcon className="w-10 h-10 text-[#4338ca]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Learning</h3>
                  <p className="text-gray-600 mb-6">
                    Our tutors work one-on-one with students to identify their unique learning needs and create customized lesson plans.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-4 bg-[#4338ca]/5 rounded-xl">
                      <div className="text-2xl font-bold text-[#4338ca]">1:1</div>
                      <div className="text-gray-600">Tutoring Ratio</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">Free</div>
                      <div className="text-gray-600">For Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Join Our Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our mission and make a difference in students' lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group text-center bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-[#4338ca]">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AcademicCapIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4338ca] transition-colors">Become a Tutor</h3>
              <p className="text-gray-600 mb-6">
                Sign up to volunteer your time and share your knowledge with students who need extra support.
              </p>
              <Link
                to="/tutors"
                className="group inline-flex items-center bg-[#4338ca] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
              >
                Sign Up to Tutor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="group text-center bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Get Tutoring</h3>
              <p className="text-gray-600 mb-6">
                Request free one-on-one support from our qualified volunteer tutors in any subject.
              </p>
              <Link
                to="/students"
                className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Tutoring
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;