import React from 'react';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Sparkles } from 'lucide-react';

const Donate = () => {
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
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our programs? Want to volunteer or support our mission? 
              We'd love to hear from you. Reach out to us today.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <PhoneIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team to get answers to your questions.
              </p>
              <a
                href="tel:+12135550123"
                className="text-[#4338ca] font-semibold hover:text-[#3730a3] transition-colors"
              >
                (213) 555-0123
              </a>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <EnvelopeIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us a message and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@ksccnexel.org"
                className="text-[#4338ca] font-semibold hover:text-[#3730a3] transition-colors"
              >
                info@ksccnexel.org
              </a>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPinIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Stop by our center to meet our team and see our programs in action.
              </p>
              <p className="text-[#4338ca] font-semibold">
                965 Normandie Ave STE 200
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                Send Us a Message
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Whether you have questions about our programs, want to volunteer, or are interested in supporting our mission, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(213) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@ksccnexel.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">965 Normandie Ave STE 200<br />Los Angeles, CA 90006</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-xl flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Volunteer Information</option>
                    <option>Tutoring Services</option>
                    <option>Donation/Support</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4338ca] text-white py-4 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartIcon className="w-4 h-4 mr-2" />
              Support Our Mission
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ways to Support KSCC Nexel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              There are many ways you can help us continue our mission of providing free educational support to students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <HeartIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your financial support helps us provide free tutoring, workshops, and educational resources to students in need.
              </p>
              <button className="bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105">
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <UserGroupIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-6">
                Share your knowledge and skills by becoming a volunteer tutor or helping with our programs.
              </p>
              <button className="bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105">
                Volunteer
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BuildingOfficeIcon className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Organizations can partner with us to expand our reach and impact in the community.
              </p>
              <button className="bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105">
                Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPinIcon className="w-4 h-4 mr-2" />
              Find Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Center
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Koreatown, our center is easily accessible and welcoming to all
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="w-full h-64 rounded-xl overflow-hidden mb-6 shadow-lg">
                              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1234567890123!2d-118.302222!3d34.056944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8e2e2e2e2e2%3A0x1234567890abcdef!2s965%20S%20Normandie%20Ave%20STE%20200%2C%20Los%20Angeles%2C%20CA%2090006!5e0!3m2!1sen!2sus!4v1716240000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KSCC Nexel Location - 965 Normandie Ave STE 200"
                  className="rounded-xl"
                ></iframe>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">KSCC Nexel</h3>
            <p className="text-gray-600 mb-4">965 Normandie Ave STE 200, Los Angeles, CA 90006</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Get Directions
              </a>
              <a
                href="tel:+12135550123"
                className="inline-flex items-center bg-white text-[#4338ca] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border border-[#4338ca]"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate; 