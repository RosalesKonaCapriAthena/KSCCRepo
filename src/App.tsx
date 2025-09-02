import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Families from './pages/Families';
import Tutors from './pages/Tutors';
import Workshops from './pages/Workshops';
import Donate from './pages/Donate';
import SignIn from './pages/SignIn';
import Test from './pages/Test';
import GetInvolved from './pages/GetInvolved';
import Impact from './pages/Impact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Work in Progress Banner */}
        <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-yellow-800">
              <span className="font-medium">⚠️ Work in Progress:</span> This website is currently under development. 
              Information displayed may be placeholders or incorrect. Please contact us directly for accurate details.
            </p>
          </div>
        </div>
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Families />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/contact" element={<Donate />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;