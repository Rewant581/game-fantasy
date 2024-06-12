// src/components/AboutUs.js

import React from 'react';
import './about.css'; 
import play from '../Images/play.png'; 
import app from '../Images/app.png'; 
import img3 from '../Images/img3.png'; 

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-text">
                <h2>About Winner Go</h2>
                <p>
                    "Sports" and fantasy are at the heart of who we are. At Winner Go, we go beyond just offering a platform for cricket enthusiasts to indulge in their cricket fantasies. Our mission is to elevate the skill level of our users, providing a secure and exciting environment for playing fantasy games.
                </p>
                <p>
                    Winner Go is India's fastest-growing fantasy sports website, dedicated to sports fans, particularly cricket and football aficionados. While winning cash prizes is a significant motivation for playing fantasy sports in India, we believe the real thrill lies in the fun and excitement that fantasy sports bring to every match.
                </p>
                <p>
                    Our platform strictly recommends users to be 18 years of age or older. We ensure adherence to all necessary rules and regulations to promote a safe and responsible gaming environment. Our services are not available to residents of states where fantasy sports are restricted, including Assam, Nagaland, Odisha, Sikkim, Telangana, Meghalaya, Andhra Pradesh, Tamil Nadu, and Arunachal Pradesh.
                </p>
                <p>
                    We encourage all players to familiarize themselves with our policies on fair play, privacy, and refunds to ensure a smooth and enjoyable experience. Join Winner Go to experience the ultimate thrill of fantasy sports while playing responsibly.
                </p>
            </div>
            <div className="about-us-images">
                <img src={img3} alt="Fantasy Sports App" className="phone-image" />
                <div className="store-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={play} alt="Google Play Store" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src={app} alt="Apple App Store" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
