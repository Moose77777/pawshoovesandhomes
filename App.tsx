import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutAndSafety from './pages/AboutAndSafety';
import ServicesAndPricing from './pages/ServicesAndPricing';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutAndSafety />} />
          <Route path="/services" element={<ServicesAndPricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;