// src/pages/home.jsx

import React, { useState, useEffect, useMemo } from 'react';
import { Link /* Removed useLocation */ } from 'react-router-dom'; // useLocation removed
import EventCard from '../components/card.jsx';
import { events as rawEvents } from '../data/events.js';
import './home.css';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

// CRITICAL: Import ALL specific local image assets from src/assets here.
// MAKE SURE THE FILENAMES MATCH EXACTLY (case, hyphens/spaces, and extension).
import firstPic from '../assets/firstpic.png';
import artGalaImage from '../assets/artgala.png';
import austinImage from '../assets/austin.png';
import dallasImage from '../assets/dallas.png';
import digitalmarkImage from '../assets/digitalmark.png';
import fashionImage from '../assets/fashion.png';
import filmImage from '../assets/film.png'; // Assuming flim.png is renamed to film.png
import foodImage from '../assets/food.png';
import indiePartyImage from '../assets/indie-party.png';
import innovationwebImage from '../assets/innovationweb.png';
import musicImage from '../assets/music.png';
import seattleImage from '../assets/seattle.png';
import mountainImage from '../assets/mountain.png';
import soundImage from '../assets/sound.png';
import webImage from '../assets/web.png';
import yogaImage from '../assets/yoga.png';

// Map string image filenames (from events.js) to their imported image variables (Vite-resolved URLs)
const imageMap = {
  'firstpic.png': firstPic,
  'artgala.png': artGalaImage,
  'austin.png': austinImage,
  'dallas.png': dallasImage,
  'digitalmark.png': digitalmarkImage,
  'fashion.png': fashionImage,
  'film.png': filmImage,
  'food.png': foodImage,
  'indie-party.png': indiePartyImage,
  'innovationweb.png': innovationwebImage,
  'music.png': musicImage,
  'seattle.png': seattleImage,
  'mountain.png': mountainImage,
  'sound.png': soundImage,
  'web.png': webImage,
  'yoga.png': yogaImage,
};

// Process rawEvents to replace string image paths with imported module paths.
// This is done once when the component mounts using useMemo.
const processedEvents = rawEvents.map(event => ({
  ...event,
  image: imageMap[event.image] || event.image,
}));


// Import category icons from react-icons
import {
  FaMicrophoneAlt,
  FaTheaterMasks,
  FaCalendarAlt,
  FaHeart,
  FaGamepad,
  FaTicketAlt,
  FaGlassMartiniAlt,
  // FaChevronLeft, // Removed as carousel arrows are gone
  // FaChevronRight, // Removed as carousel arrows are gone
  FaHandshake, // For feature icons
  FaGlobe,
  FaMagic,
  FaStar,
  FaCreditCard, // Using FaCreditCard for Easy Ticketing
} from "react-icons/fa";

const categories = [
  { name: 'Music', icon: <FaMicrophoneAlt /> },
  { name: 'Nightlife', icon: <FaGlassMartiniAlt /> },
  { name: 'Arts & Culture', icon: <FaTheaterMasks /> },
  { name: 'Festivals', icon: <FaCalendarAlt /> },
  { name: 'Wellness', icon: <FaHeart /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'More', icon: <FaTicketAlt /> }, // Using FaTicketAlt for generic "More"
];

// Static features for the homepage's "Why Choose EventFlow" section
const platformFeatures = [
  { title: 'Global Reach', description: 'Access events and connect with organizers worldwide.', icon: <FaGlobe /> },
  { title: 'Seamless Experience', description: 'From discovery to attendance, enjoy a smooth journey.', icon: <FaMagic /> },
  { title: 'Trusted Platform', description: 'Join millions who rely on us for their event needs.', icon: <FaStar /> },
  { title: 'Easy Ticketing', description: 'Secure and instant ticket purchases for any event.', icon: <FaCreditCard /> },
];


const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // Removed all location-based filtering/shuffling logic for now
  // const locationHook = useLocation();
  // const queryParams = new URLSearchParams(locationHook.search);
  // const initialLocation = queryParams.get('location') || 'New York';
  // const [currentLocation, setCurrentLocation] = useState(initialLocation);
  // const getShuffledEventsByLocation = useMemo(() => (city) => { ... }, [processedEvents]);
  // useEffect(() => { setDisplayedEvents(getShuffledEventsByLocation(currentLocation)); }, [currentLocation, getShuffledEventsByLocation]);
  // useEffect(() => { ... }, [locationHook.search, currentLocation, queryParams]);

  // CRITICAL FIX: Directly set displayedEvents to ALL processedEvents to ensure all cards show
  const [displayedEvents, setDisplayedEvents] = useState(processedEvents);

  const bannerImageUrl = firstPic;

  return (
    <div className="home-page">
      {/* Background video placeholder (conceptual) */}
      <div className="background-video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-bright-lights-moving-on-stage-5452-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Section with background image and text on top of video */}
      <section className="hero-section-new" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
        {/* Conceptual floating elements */}
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>

        <div className="hero-overlay-new">
          <div className="hero-content-new container">
            <h1 className="hero-title-new" data-aos="fade-up" data-aos-duration="1000">PAINT THE TOWN RAINBOW</h1>
            <Link to="/pride-celebrations" className="button-primary hero-button-new" data-aos="zoom-in" data-aos-delay="300">Get Into Pride Celebrations</Link>
          </div>
        </div>
      </section>

      {/* Category Icons Section with background image */}
      <section className="category-icons-section" style={{ backgroundImage: `url(${bannerImageUrl})` }} data-aos="fade-up" data-aos-once="true">
        <div className="category-icons-overlay">
            <div className="container category-icons-wrapper">
                {categories.map((category, idx) => (
                <Link key={category.name} to={`/search?category=${category.name.toLowerCase()}`} className="category-icon" data-aos="flip-left" data-aos-delay={idx * 100}>
                    <div className="icon-circle">{category.icon}</div>
                    <span className="icon-label">{category.name}</span>
                </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Platform Features Section for the homepage */}
      <section className="platform-features-section container" data-aos="fade-up" data-aos-delay="100">
        <h2 data-aos="fade-up">Why Choose EventFlow?</h2>
        <div className="platform-features-grid">
          {platformFeatures.map((feature, idx) => (
            <div className="platform-feature-box" key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 150}>
              <div className="platform-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Dynamic Events Section (now showing all events) */}
      <section className="dynamic-events-section container">
        <div className="dynamic-events-header" data-aos="fade-right">
          <h2>All Available Events</h2> {/* Title changed to reflect showing all */}
          {/* Removed carousel arrows */}
          {/* <div className="carousel-arrows">
            <button className="arrow-button" aria-label="Previous"><FaChevronLeft /></button>
            <button className="arrow-button" aria-label="Next"><FaChevronRight /></button>
          </div> */}
        </div>
        <div className="event-grid">
          {displayedEvents.length > 0 ? (
            displayedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index + 1} data-aos="fade-up" data-aos-delay={(index % 4) * 50} />
            ))
          ) : (
            <p className="no-events-message" data-aos="fade-up">No events found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;