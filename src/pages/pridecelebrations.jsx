// src/pages/pridecelebrations.jsx

import React from 'react';
import './pridecelebrations.css'; // Create this CSS file for styling

const PrideCelebrations = () => {
  return (
    <div className="pride-page container">
      <h1>🌈 Get Into Pride Celebrations! 🏳️‍🌈</h1>
      <p>This is a dedicated page for all upcoming Pride-related events.</p>
      <div className="pride-events-list">
        {/* You would fetch and display actual pride events here */}
        <p>Stay tuned for amazing events!</p>
        {/* Example: <EventCard key={event.id} event={event} /> */}
      </div>
      <p>Thank you for celebrating diversity and inclusion!</p>
    </div>
  );
};

export default PrideCelebrations;