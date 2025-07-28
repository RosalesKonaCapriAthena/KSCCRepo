import React, { useState } from 'react';
import { addWorkshop, moveToPastWorkshops, upcomingWorkshops, pastWorkshops } from '../data/workshops';

const WorkshopAdmin = () => {
  const [newWorkshop, setNewWorkshop] = useState({
    title: '',
    date: '',
    time: '',
    location: 'Koreatown Community Center',
    topic: '',
    capacity: 20,
    registered: 0,
    description: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWorkshop(prev => ({
      ...prev,
      [name]: name === 'capacity' || name === 'registered' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWorkshop(newWorkshop);
    setNewWorkshop({
      title: '',
      date: '',
      time: '',
      location: 'Koreatown Community Center',
      topic: '',
      capacity: 20,
      registered: 0,
      description: ''
    });
    setShowForm(false);
    alert('Workshop added successfully!');
  };

  const handleMoveToPast = (workshopId: number) => {
    const photos = parseInt(prompt('Number of photos:') || '0');
    const videos = parseInt(prompt('Number of videos:') || '0');
    const participants = parseInt(prompt('Number of participants:') || '0');
    
    moveToPastWorkshops(workshopId, photos, videos, participants);
    alert('Workshop moved to past workshops!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Workshop Management</h1>
      
      {/* Add New Workshop Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors mb-8"
      >
        {showForm ? 'Cancel' : 'Add New Workshop'}
      </button>

      {/* Add Workshop Form */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Workshop</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Workshop Title</label>
                <input
                  type="text"
                  name="title"
                  value={newWorkshop.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter workshop title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newWorkshop.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="text"
                  name="time"
                  value={newWorkshop.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="e.g., 3:00 PM - 5:00 PM"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                <select
                  name="topic"
                  value={newWorkshop.topic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select topic</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English">English</option>
                  <option value="Science">Science</option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={newWorkshop.capacity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newWorkshop.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={newWorkshop.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Describe the workshop..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Add Workshop
            </button>
          </form>
        </div>
      )}

      {/* Current Workshops */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Upcoming Workshops</h2>
        <div className="space-y-4">
          {upcomingWorkshops.map((workshop) => (
            <div key={workshop.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{workshop.title}</h3>
                  <p className="text-sm text-gray-600">{workshop.date} • {workshop.time}</p>
                  <p className="text-sm text-gray-600">{workshop.registered}/{workshop.capacity} registered</p>
                </div>
                <button
                  onClick={() => handleMoveToPast(workshop.id)}
                  className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
                >
                  Move to Past
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Workshops */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Workshops</h2>
        <div className="space-y-4">
          {pastWorkshops.map((workshop) => (
            <div key={workshop.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{workshop.title}</h3>
              <p className="text-sm text-gray-600">{workshop.date}</p>
              <p className="text-sm text-gray-600">{workshop.participants} participants • {workshop.photos} photos • {workshop.videos} videos</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopAdmin; 