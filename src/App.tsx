import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Families from './pages/Families';
import Tutors from './pages/Tutors';
import Workshops from './pages/Schools';
import Donate from './pages/Donate';
import SignIn from './pages/SignIn';
import Test from './pages/Test';
import GetInvolved from './pages/GetInvolved';
import Impact from './pages/Impact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/families" element={<Families />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/schools" element={<Workshops />} />
            <Route path="/contact" element={<Donate />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/workshops" element={<Workshops />} />
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