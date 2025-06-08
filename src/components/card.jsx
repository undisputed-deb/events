// src/components/card.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { FaUsers } from 'react-icons/fa';

const EventCard = ({ event, index }) => {
  return (
    <Link to={`/event/${event.id}`} className="event-card">
      <div className="card-image-wrapper">
        <img src={event.image} alt={event.title} className="card-image" />
        {event.status && (
            <span className={`card-status-badge ${event.status.toLowerCase().replace(/\s/g, '-')}`}>
                {event.status}
            </span>
        )}
        {index !== undefined && <span className="card-number">{index}</span>}
      </div>
      <div className="card-content">
        <p className="card-date">{event.date} • {event.time}</p>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-location">{event.location}</p>
        <p className="card-price">{event.price}</p>
        {event.followers > 0 && (
          <p className="card-followers">
            <FaUsers /> {event.followers.toLocaleString()} followers
          </p>
        )}
      </div>
    </Link>
  );
};

export default EventCard;