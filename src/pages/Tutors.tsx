import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ClockIcon, 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  BookOpenIcon,
  BeakerIcon,
  CalculatorIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Tutors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    educationLevel: '',
    subjects: '',
    hoursAvailable: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in volunteering! We\'ll contact you within 24 hours to discuss next steps.');
    setFormData({ name: '', email: '', educationLevel: '', subjects: '', hoursAvailable: '' });
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
              Make a Difference
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Become a Volunteer Tutor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share your knowledge and make a lasting impact on students' lives. 
              Join our community of dedicated volunteers helping students succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Volunteer with Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <HeartIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Make a Real Impact</h3>
                    <p className="text-gray-600">Help close the opportunity gap and see students grow academically and personally.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <UserGroupIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Join a Community</h3>
                    <p className="text-gray-600">Connect with other passionate volunteers and education professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Commitment</h3>
                    <p className="text-gray-600">Volunteer as little as 1 hour per week or as much as you'd like.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <StarIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Support</h3>
                    <p className="text-gray-600">Receive comprehensive training and ongoing support to be the best tutor possible.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Become a Tutor</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                  <select 
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    required
                  >
                    <option value="">Select your education level</option>
                    <option value="High School Graduate">High School Graduate</option>
                    <option value="Some College">Some College</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjects You Can Tutor</label>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="e.g., Math, English, Science"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hours Available per Week</label>
                  <select 
                    name="hoursAvailable"
                    value={formData.hoursAvailable}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    required
                  >
                    <option value="">Select hours available</option>
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="3-5 hours">3-5 hours</option>
                    <option value="6-10 hours">6-10 hours</option>
                    <option value="10+ hours">10+ hours</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4338ca] text-white py-3 rounded-lg font-semibold hover:bg-[#3730a3] transition-colors"
                >
                  Apply to Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Requirements & Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to get started as a volunteer tutor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#4338ca]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply Online</h3>
              <p className="text-gray-600">
                Fill out our simple application form with your background and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#4338ca]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Background Check</h3>
              <p className="text-gray-600">
                Complete a background check to ensure student safety.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#4338ca]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training</h3>
              <p className="text-gray-600">
                Complete our comprehensive tutor training program.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#4338ca]">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Tutoring</h3>
              <p className="text-gray-600">
                Begin working with students and making a difference!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Needed Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <LightBulbIcon className="w-4 h-4 mr-2" />
              Areas of Need
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subjects We Need Help With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're looking for tutors in these high-demand subjects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CalculatorIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
              <p className="text-sm text-gray-600">High demand for algebra, geometry, and calculus tutors</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BeakerIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Science</h3>
              <p className="text-sm text-gray-600">Biology, chemistry, and physics support needed</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">English</h3>
              <p className="text-sm text-gray-600">Reading comprehension and writing skills</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CodeBracketIcon className="w-6 h-6 text-[#4338ca]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Computer Science</h3>
              <p className="text-sm text-gray-600">Programming and web development skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              Volunteer Stories
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Volunteers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our dedicated volunteer tutors about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Volunteering as a tutor has been incredibly rewarding. Seeing my students' confidence grow and their grades improve makes every session worthwhile."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">D</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Kim</p>
                  <p className="text-sm text-gray-600">Math Tutor, 2 years</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The training and support I received made me feel confident in my ability to help students. The community here is amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">L</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lisa Park</p>
                  <p className="text-sm text-gray-600">Science Tutor, 1 year</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I love the flexibility of the program. I can tutor when it fits my schedule, and the impact I'm making is truly meaningful."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">English Tutor, 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            Join Our Team
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your journey as a volunteer tutor and help shape the future of our community's students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3 text-white">
              <PhoneIcon className="w-6 h-6" />
              <span>(213) 555-0123</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <EnvelopeIcon className="w-6 h-6" />
              <span>volunteer@ksccnexel.org</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPinIcon className="w-6 h-6" />
              <span>Koreatown Senior & Community Center</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12135550123"
              className="group inline-flex items-center bg-white text-[#4338ca] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call to Volunteer
            </a>
            <a
              href="mailto:volunteer@ksccnexel.org"
              className="group inline-flex items-center bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Send Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutors; 