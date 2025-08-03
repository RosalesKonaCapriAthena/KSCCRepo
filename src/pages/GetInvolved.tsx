import React from 'react';
import { GraduationCap, Users, ExternalLink, CheckCircle } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Involved with KCC Spark</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of passionate educators and eager learners. Whether you want to teach or learn, 
            there's a place for you at KCC Spark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Tutors */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">For Tutors</h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Make a meaningful impact in your community by sharing your knowledge and helping students achieve their academic goals.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Volunteer with Us?</h3>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-gray-600">Choose your own hours and commitment level</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Training Provided</h4>
                  <p className="text-gray-600">We'll help you become an effective tutor</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Community Impact</h4>
                  <p className="text-gray-600">Directly help students in your local community</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership Development</h4>
                  <p className="text-gray-600">Build valuable teaching and mentoring skills</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• High school diploma or currently enrolled in college</li>
                <li>• Strong knowledge in at least one academic subject</li>
                <li>• Commitment to at least 2 hours per week for 3 months</li>
                <li>• Passion for helping others learn and succeed</li>
              </ul>
            </div>

            <a
              href="https://forms.google.com/tutor-application"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply to Become a Tutor
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* For Students/Families */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">For Students & Families</h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Get the academic support you need to succeed. Our free tutoring program is designed to help students 
              of all ages and skill levels reach their potential.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h3>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Support</h4>
                  <p className="text-gray-600">One-on-one and small group tutoring sessions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Multiple Subjects</h4>
                  <p className="text-gray-600">Math, Science, English, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Free of Charge</h4>
                  <p className="text-gray-600">All tutoring services are completely free</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Convenient Locations</h4>
                  <p className="text-gray-600">Sessions at KCC and online options available</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">How to Request Tutoring:</h4>
              <ol className="text-gray-600 space-y-2">
                <li>1. Fill out our online request form</li>
                <li>2. We'll match you with a qualified tutor</li>
                <li>3. Schedule your first session</li>
                <li>4. Start your learning journey!</li>
              </ol>
            </div>

            <a
              href="https://forms.google.com/student-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Request Tutoring
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-lg text-gray-600 mb-6">
            We're here to help! Contact us to learn more about our programs or get assistance with the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:kscctutoring@gmail.com"
              className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;