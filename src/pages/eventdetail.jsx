// src/pages/eventdetail.jsx

import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // <--- CORRECTED LINE HERE
import { events as rawEvents } from '../data/events.js'; // Import raw events
import './eventdetail.css';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

// Import all specific local image assets from src/assets here for EventDetail page too.
// This is necessary if eventdetail.jsx is accessed directly (e.g., via URL)
// and rawEvents contain simple filenames.
import digitalmarkImage from '../assets/digitalmark.png';
import musicImage from '../assets/music.png';
import yogaImage from '../assets/yoga.png';
import foodImage from '../assets/food.png';
import soundImage from '../assets/sound.png';
import indiePartyImage from '../assets/indie-party.png';
import artGalaImage from '../assets/artgala.png';
import austinImage from '../assets/austin.png';
import dallasImage from '../assets/dallas.png';
import fashionImage from '../assets/fashion.png';
import filmImage from '../assets/film.png';
import innovationwebImage from '../assets/innovationweb.png';
import seattleImage from '../assets/seattle.png';
import mountainImage from '../assets/mountain.png';
import webImage from '../assets/web.png';


// Map string image names to imported image variables (Vite-resolved URLs)
const imageMap = {
  'digitalmark.png': digitalmarkImage,
  'music.png': musicImage,
  'yoga.png': yogaImage,
  'food.png': foodImage,
  'sound.png': soundImage,
  'indie-party.png': indiePartyImage,
  'artgala.png': artGalaImage,
  'austin.png': austinImage,
  'dallas.png': dallasImage,
  'fashion.png': fashionImage,
  'film.png': filmImage,
  'innovationweb.png': innovationwebImage,
  'seattle.png': seattleImage,
  'mountain.png': mountainImage,
  'web.png': webImage,
};

// Process rawEvents once to resolve image paths before EventDetail uses them
const processedEvents = rawEvents.map(event => ({
  ...event,
  image: imageMap[event.image] || event.image,
}));


const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Initialize AOS (ensure it's done only once or re-init as needed for route changes)
    AOS.init({
      duration: 1000,
      once: false, // Set to false to allow animations to re-trigger on scroll if page is long
      mirror: true, // Set to true to animate out and in as you scroll past them
    });
    // Refresh AOS on component mount/update to detect new elements
    AOS.refresh();

    const foundEvent = processedEvents.find(e => e.id === id); // Use processedEvents
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      navigate('/');
    }
  }, [id, navigate]); // Removed processedEvents from dependency array to prevent unnecessary re-renders

  if (!event) {
    return <div className="loading-state">Loading event details...</div>;
  }

  return (
    <div className="event-detail-page">
      {/* Hero section with event image */}
      <section className="detail-hero" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="detail-hero-overlay">
          <div className="container detail-hero-content">
            <h1 className="event-title" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{event.title}</h1>
            <p className="event-date-time" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">{event.date} • {event.time}</p>
            <p className="event-location" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">{event.location}</p>
            <button className="button-primary buy-tickets-button" data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      {/* Main event content and sidebar */}
      <div className="container event-detail-content">
        <div className="detail-main">
          {/* Main Description Section */}
          <section className="event-description-section" data-aos="fade-right">
            <h2>About this Event</h2>
            <p>{event.description}</p>
            <div className="event-tags">
              {event.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </section>

          {/* New Dynamic Sections for Elaborated Details */}
          {event.agenda && event.agenda.length > 0 && (
            <section className="event-agenda-section" data-aos="fade-up">
              <h2>Event Agenda</h2>
              <ul className="agenda-list">
                {event.agenda.map((item, idx) => (
                  <li key={idx} data-aos="fade-up" data-aos-delay={100 * idx}>
                    <span className="agenda-time">{item.time}:</span> {item.item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {event.speakers && event.speakers.length > 0 && (
            <section className="event-speakers-section" data-aos="fade-up" data-aos-delay="100">
              <h2>Speakers</h2>
              <div className="speakers-grid">
                {event.speakers.map((speaker, idx) => (
                  <div className="speaker-card" key={idx} data-aos="flip-left" data-aos-delay={150 * idx}>
                    {speaker.image && <img src={speaker.image} alt={speaker.name} className="speaker-image" />}
                    <h3>{speaker.name}</h3>
                    <p>{speaker.bio}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {event.faqs && event.faqs.length > 0 && (
            <section className="event-faqs-section" data-aos="fade-up" data-aos-delay="200">
              <h2>Frequently Asked Questions</h2>
              <div className="faqs-list">
                {event.faqs.map((faq, idx) => (
                  <details className="faq-item" key={idx} data-aos="fade-up" data-aos-delay={100 * idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="event-organizer-section" data-aos="fade-right" data-aos-delay="300">
            <h2>Organizer</h2>
            <div className="organizer-info">
              <h3>{event.organizer}</h3>
              <p>Contact the organizer for more details.</p>
              <button className="button-secondary">Contact</button>
            </div>
          </section>

          {/* New Features Section - Dynamically rendered based on event.features */}
          {event.features && event.features.length > 0 && (
            <section className="event-features-section">
              <h2 data-aos="fade-up">Why You Should Attend</h2>
              <div className="features-grid">
                {event.features.map((feature, idx) => (
                  <div className="feature-box" key={idx} data-aos="flip-up" data-aos-delay={100 * idx}> {/* Different AOS effect */}
                    {feature.icon && <div className="feature-icon"><i className={feature.icon}></i></div>}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        <aside className="detail-sidebar">
          <div className="ticket-box" data-aos="zoom-in" data-aos-delay="600" data-aos-once="true">
            <span className="event-price">{event.price}</span>
            <button className="button-primary buy-tickets-button">Get Tickets</button>
          </div>
          <div className="share-box" data-aos="zoom-in" data-aos-delay="700" data-aos-once="true">
            <h4>Share this event</h4>
            <div className="share-icons">
              <a href="#" className="share-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="share-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="share-icon"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetail;