import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import EventDetail from './pages/eventdetail.jsx';
import PrideCelebrations from './pages/pridecelebrations.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/pride-celebrations" element={<PrideCelebrations />} />
      </Routes>
    </Router>
  );
}

export default App;