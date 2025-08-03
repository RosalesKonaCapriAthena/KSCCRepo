import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Star, Clock } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

const Donate = () => {
  console.log('Donate component loaded!');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('=== FORM SUBMISSION STARTED ===');
    e.preventDefault();
    
    console.log('Contact form submitted with data:', formData);
    
    try {
      console.log('Calling sendContactEmail...');
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      };
      console.log('Contact data being sent:', contactData);
      const success = await sendContactEmail(contactData);
      console.log('sendContactEmail result:', success);
      
      if (success) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Want to volunteer or support our mission? We'd love to hear from you. Reach out to us today.
          </p>
        </div>

        {/* Original Contact Layout - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Contact Information */}
          <div>
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Send Us a Message
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible. Whether you have questions about our programs, want to volunteer, or are interested in supporting our mission, we're here to help.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-[#4338ca]">213-800-1588</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-[#4338ca]">kscctutoring@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-[#4338ca]">Koreatown Senior & Community Center<br />Los Angeles, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4338ca]/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-[#4338ca]">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Tutoring Information">Tutoring Information</option>
                    <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                    <option value="Workshop Information">Workshop Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4338ca] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Ways to Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Support Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ways to Support KSCC Nexel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can help us continue our mission of providing free educational support to students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-6">
                Share your knowledge and skills by becoming a volunteer tutor or helping with our programs.
              </p>
              <a
                href="/tutors"
                className="inline-flex items-center bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
              >
                Volunteer
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Organizations can partner with us to expand our reach and impact in the community.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
              >
                Partner
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#4338ca]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-[#4338ca]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Help us reach more students by sharing our programs with families and schools in your community.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Center Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#4338ca]/10 text-[#4338ca] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Find Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Koreatown, our center is easily accessible and welcoming to all.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Google Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 mb-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-500">Koreatown Senior & Community Center</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">KSCC Nexel</h3>
              <p className="text-lg text-gray-600 mb-8">Koreatown Senior & Community Center<br />Los Angeles, CA</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#4338ca] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3730a3] transition-all duration-300 transform hover:scale-105"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
                <a
                  href="tel:+12138001588"
                  className="inline-flex items-center bg-white text-[#4338ca] border-2 border-[#4338ca] px-8 py-4 rounded-xl font-semibold hover:bg-[#4338ca] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate; 