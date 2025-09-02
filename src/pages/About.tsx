import React from 'react';
import { 
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  StarIcon,
  LightBulbIcon,
  BookOpenIcon,
  BeakerIcon,
  CalculatorIcon,
  CodeBracketIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Sparkles } from 'lucide-react';

const About = () => {
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
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About KSCC STEM Tutoring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A STEM-based tutoring organization hosted by the Koreatown Senior and Community Center, we strive to support young students from 
              underprivileged and low-income backgrounds.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <HeartIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide free, high-quality educational support to students who need it most, 
                helping them build confidence, develop skills, and achieve their academic goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <LightBulbIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                A community where every student has access to quality education and the support they need to succeed, 
                regardless of their background or economic circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                How It All Started
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  KSCC STEM Tutoring was founded with a simple but powerful idea: every child deserves access to quality education and support, 
                  regardless of their family's financial situation.
                </p>
                <p>
                  What started as a small group of volunteers at the Koreatown Senior and Community Center has grown into a comprehensive 
                  educational support program serving hundreds of students each year.
                </p>
                <p>
                  Our organization combines the wisdom and experience of our senior community members with the energy and knowledge of 
                  volunteer tutors to create a unique and effective learning environment.
                </p>
                <p>
                  Today, we continue to expand our programs and reach more students, always staying true to our core mission of 
                  making education accessible to all.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    100+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Students Served</p>
                    <p className="text-sm text-gray-600">Since our founding in 2018</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    65+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Volunteer Tutors</p>
                    <p className="text-sm text-gray-600">Dedicated to student success</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    5+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Years of Service</p>
                    <p className="text-sm text-gray-600">Serving the community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              What We Believe
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <HeartIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every student with empathy and understanding, recognizing that each child has unique needs and challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain high standards in our educational programs and continuously strive to improve our services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <UserGroupIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community and foster strong relationships between students, tutors, and families.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <LightBulbIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new approaches and technologies to enhance learning and make education more accessible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircleIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and accountability in all our interactions and programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <StarIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equity</h3>
              <p className="text-gray-600">
                We ensure that all students, regardless of background, have equal access to quality educational opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              What We Offer
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational support designed to meet the diverse needs of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CalculatorIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">One-on-One Tutoring</h3>
              <p className="text-sm text-gray-600">Personalized academic support in all subjects</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BeakerIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">STEM Workshops</h3>
              <p className="text-sm text-gray-600">Interactive science, technology, and math activities</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CodeBracketIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Computer Science</h3>
              <p className="text-sm text-gray-600">Programming and digital literacy skills</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Study Skills</h3>
              <p className="text-sm text-gray-600">Test preparation and learning strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <UserGroupIcon className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dedicated to Student Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            STEM Tutoring is powered by passionate high school students who organize tutoring, lead STEM workshops, and bring our mission to life for kids across Koreatown and LA County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="https://res.cloudinary.com/dtitfokc2/image/upload/v1754484248/IMG_2012_u1rysq.jpg" alt="Angela Park" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Angela Park</h3>
              <p className="text-[#4338ca] font-semibold mb-2">President</p>
              <p className="text-gray-600 text-sm">angelala800@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                {/* Replace with actual photo: <img src="/path/to/gavin-rosales-photo.jpg" alt="Gavin Rosales" className="w-full h-full object-cover" /> */}
                <span className="text-2xl font-bold text-[#4338ca]">G</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gavin Rosales</h3>
              <p className="text-[#4338ca] font-semibold mb-2">Vice President</p>
              <p className="text-gray-600 text-sm">gavinrosales@icloud.com</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="https://res.cloudinary.com/dtitfokc2/image/upload/v1754484257/IMG_2013_hb3lpj.jpg" alt="Chloe Park" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chloe Park</h3>
              <p className="text-[#4338ca] font-semibold mb-2">Secretary</p>
              <p className="text-gray-600 text-sm">kscctutoring@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                {/* Replace with actual photo: <img src="/path/to/treasurer-photo.jpg" alt="Treasurer Name" className="w-full h-full object-cover" /> */}
                <span className="text-2xl font-bold text-[#4338ca]">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">N/A</h3>
              <p className="text-[#4338ca] font-semibold mb-2">N/A</p>
              <p className="text-gray-600 text-sm">kscctutoring@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;