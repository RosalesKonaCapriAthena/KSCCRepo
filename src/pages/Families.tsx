import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendStudentRegistrationEmail } from '../services/emailService';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ClockIcon, 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  StarIcon,
  CalculatorIcon,
  BeakerIcon,
  BookOpenIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Families = () => {
  const [formData, setFormData] = useState({
    name: '',
    gradeLevel: '',
    subjects: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const success = await sendStudentRegistrationEmail(formData);
      
      if (success) {
        alert('Thank you for your interest! We\'ll contact you within 24 hours to discuss tutoring options.');
        setFormData({ name: '', gradeLevel: '', subjects: '', email: '' });
      } else {
        alert('There was an error sending your request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your request. Please try again or contact us directly.');
    }
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
              Free Tutoring Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Free Tutoring for Your Child
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your child with qualified volunteer tutors who are passionate about helping students succeed. 
              Our free tutoring program is designed to support students from all backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose KSCC STEM Tutoring?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Learning</h3>
                    <p className="text-gray-600">Each session is tailored to your child's unique learning style and academic needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Tutors</h3>
                    <p className="text-gray-600">All our tutors are carefully screened and trained to provide the best educational support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">Convenient sessions that fit your family's busy schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-[#4338ca] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                    <p className="text-gray-600">Regular updates on your child's progress and areas for improvement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="Enter student's full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
                  <select 
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    required
                  >
                    <option value="">Select grade level</option>
                    <option value="K-2nd Grade">K-2nd Grade</option>
                    <option value="3rd-5th Grade">3rd-5th Grade</option>
                    <option value="6th-8th Grade">6th-8th Grade</option>
                    <option value="9th-12th Grade">9th-12th Grade</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject(s) Needed</label>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="e.g., Math, Reading, Science"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:border-transparent"
                    placeholder="Enter parent's email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4338ca] text-white py-3 rounded-lg font-semibold hover:bg-[#3730a3] transition-colors"
                >
                  Sign Up for Tutoring
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring services designed to help your child excel in all subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="h-8 w-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Subjects</h3>
              <p className="text-gray-600">
                Math, Reading, Writing, Science, and Social Studies for all grade levels.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="h-8 w-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Sessions</h3>
              <p className="text-gray-600">
                30-minute to 2-hour sessions available weekdays and weekends.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4338ca]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="h-8 w-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                Satisfaction guaranteed with our experienced and certified tutors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with our tutoring program is easy and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4338ca] text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">
                Fill out our simple registration form with your child's information and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4338ca] text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                We'll assess your child's needs and match them with the most suitable tutor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4338ca] text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Schedule Sessions</h3>
              <p className="text-gray-600">
                Choose convenient time slots and start your child's tutoring journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4338ca] text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your child's improvement and receive regular progress updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Offered Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AcademicCapIcon className="w-4 h-4 mr-2" />
              Comprehensive Support
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subjects We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our tutors can help with a wide range of subjects and grade levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CalculatorIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mathematics</h3>
              <p className="text-gray-600 text-center mb-4">
                From basic arithmetic to advanced calculus
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Algebra & Geometry</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Calculus & Statistics</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BeakerIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Science</h3>
              <p className="text-gray-600 text-center mb-4">
                Explore the wonders of scientific discovery
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Biology & Chemistry</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Physics & Earth Science</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Lab Skills & Experiments</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpenIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">English</h3>
              <p className="text-gray-600 text-center mb-4">
                Master language arts and communication
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Reading Comprehension</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Writing & Grammar</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Literature Analysis</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Social Studies</h3>
              <p className="text-gray-600 text-center mb-4">
                Explore history, geography, and civics
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>World & U.S. History</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>Geography & Cultures</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>Government & Civics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-6 py-3 rounded-full text-sm font-medium">
              <StarIcon className="w-4 h-4 mr-2" />
              All subjects available for K-12 students
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from families who have benefited from our tutoring program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "My daughter's math grades improved significantly after just a few sessions. The tutors are patient and really know how to explain concepts clearly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                  <p className="text-sm text-gray-600">Parent of 8th grader</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The free tutoring program has been a lifesaver for our family. My son now has confidence in his studies and looks forward to his sessions."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James Chen</p>
                  <p className="text-sm text-gray-600">Parent of 6th grader</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-[#4338ca]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The tutors are amazing! They really care about the students and go above and beyond to help them succeed. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#4338ca]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4338ca] font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Parent of 10th grader</p>
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
            Get Started Today
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our free tutoring program and how we can help your child succeed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3 text-white">
              <PhoneIcon className="w-6 h-6" />
                              <span>213-800-1588</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <EnvelopeIcon className="w-6 h-6" />
                              <span>kscctutoring@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPinIcon className="w-6 h-6" />
              <span>Koreatown Senior & Community Center</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12138001588"
              className="group inline-flex items-center bg-white text-[#4338ca] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:kscctutoring@gmail.com"
              className="group inline-flex items-center bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Families; 