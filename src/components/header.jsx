// src/components/header.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { FaSearch, FaMapMarkerAlt, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('New York');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for "${searchTerm}" in "${location}"`);
    navigate(`/?location=${location}&search=${searchTerm}`);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content container">
        <Link to="/" className="header-logo">
          <span className="gradient-text">EventFlow</span>
        </Link>

        <form onSubmit={handleSearchSubmit} className="header-search-form">
          <div className="search-input-group">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="location-input-group">
            <FaMapMarkerAlt className="location-icon" />
            <input
              type="text"
              placeholder="New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>

        <nav className="header-nav">
          <ul>
            <li><Link to="/create-event">Create Event</Link></li>
            <li><Link to="/help"><FaQuestionCircle /> Help Center</Link></li>
            <li><button className="login-button"><FaUserCircle /> Log In</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;