import React from 'react';
import { Users, Clock, Award, TrendingUp, Star, Quote } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '100+',
      label: 'Students Served',
      description: 'Since our founding in 2018',
      color: 'bg-blue-600'
    },
    {
      icon: Users,
      number: '65+',
      label: 'Volunteer Tutors',
      description: 'Dedicated volunteers in our program',
      color: 'bg-green-600'
    },
    {
      icon: Clock,
      number: '2,500+',
      label: 'Hours of Tutoring',
      description: 'Delivered to students',
      color: 'bg-orange-600'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Parent Satisfaction',
      description: 'Rate from surveys',
      color: 'bg-purple-600'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Workshops Held',
      description: 'STEM workshops completed',
      color: 'bg-pink-600'
    },
    {
      icon: Star,
      number: '4.8/5',
      label: 'Academic Improvement',
      description: 'Reported by teachers',
      color: 'bg-indigo-600'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Parent',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'KSCC Nexel has been a game-changer for my daughter. Her confidence in math has skyrocketed, and she actually looks forward to homework now!'
    },
    {
      name: 'Alex Chen',
      role: 'High School Student',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The chemistry workshops were amazing! I never thought I could understand molecular structures, but now I\'m considering majoring in chemistry.'
    },
    {
      name: 'Jessica Kim',
      role: 'Volunteer Tutor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Tutoring with KSCC Nexel has been incredibly rewarding. Seeing students have those "aha!" moments makes all the preparation worth it.'
    },
    {
      name: 'David Rodriguez',
      role: 'College Student',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The programming workshop introduced me to coding, and now I\'m pursuing a computer science degree. Thank you for opening this door!'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: '5th Anniversary Milestone',
      description: 'Celebrated 5 years of serving the Koreatown community with STEM education'
    },
    {
      year: '2022',
      title: '100+ Students Milestone',
      description: 'Reached our 100th student served since program inception'
    },
    {
      year: '2021',
      title: '65+ Tutors Milestone',
      description: 'Expanded to over 65 dedicated volunteer tutors'
    },
    {
      year: '2018',
      title: 'Program Founded',
      description: 'Nexel tutoring initiative launched under KSCC'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring success through the growth of our students, the dedication of our tutors, 
            and the strength of our community connections.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievement Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm min-w-fit">
                    {achievement.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                  <Quote className="h-6 w-6 text-blue-600 ml-auto" />
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Student success story"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">From Struggling to Thriving</h3>
              <p className="text-lg text-gray-600 mb-6">
                When Emma first joined our program, she was failing algebra and had lost confidence in her math abilities. 
                Through consistent one-on-one tutoring and participation in our problem-solving workshops, she not only 
                brought her grade up to an A- but also discovered a passion for engineering.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, Emma is a senior in high school with plans to study mechanical engineering at UCLA. She credits 
                KSCC Nexel with helping her realize that she could excel in STEM subjects.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                "KSCC Nexel didn't just help me with math – they helped me believe in myself."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Be Part of Our Growing Impact</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Every tutor, every student, every workshop contributes to building a stronger, more educated community. 
            Join us in making a difference that lasts a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Involved Today
            </a>
            <a
              href="/workshops"
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              View Upcoming Workshops
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;