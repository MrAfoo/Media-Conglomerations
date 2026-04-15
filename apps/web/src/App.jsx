import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import DisneyPage from '@/pages/DisneyPage';
import WarnerBrosPage from '@/pages/WarnerBrosPage';
import ComcastPage from '@/pages/ComcastPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disney" element={<DisneyPage />} />
        <Route path="/warner-bros" element={<WarnerBrosPage />} />
        <Route path="/comcast" element={<ComcastPage />} />
      </Routes>
    </Router>
  );
}

export default App;