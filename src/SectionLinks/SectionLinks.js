import React from 'react';
import './SectionLinks.css';

const SectionLinks = () => {
  return (
    <div className="section-container">
      <div className="section-box">
        <a href="/home">Medical</a>
      </div>
      <div className="section-box">
        <a href="/about">Disaster</a>
      </div>
      <div className="section-box">
        <a href="/services">Services</a>
      </div>
      <div className="section-box">
        <a href="/contact">Personal</a>
      </div>
    </div>
  );
};

export default SectionLinks;
