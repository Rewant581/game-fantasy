// src/Footer.js

import React from 'react';
import './Footer.css';
import logo from '../Images/logo.png'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    {/* <p>This website is owned by:</p>
                    <img src="path_to_ability_games_logo" alt="Winner Go" className="footer-owned-by" /> */}
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/Disclaimer">Disclaimer</a></li>
                        <li><a href="/Privacy">Privacy Policy</a></li>
                        <li><a href="/fairplay">Fair Play Policy</a></li>
                        <li><a href="/refund">Refund Policy</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                       
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li>Support number: <a href="tel:1234567899">1234567899</a></li>
                        <li>Email: <a href="mailto:support@winnergo.com">support@winnergo.com</a></li>
                        
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="whatsapp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="footer-disclaimer">
                        <p>This platform is strictly for users aged 18 and above. Winner Go adheres to all applicable Indian laws and regulations governing fantasy sports. Our services are designed to provide a secure and compliant environment, promoting responsible play. Please review our terms, policies, and fair play guidelines before participating. Users from states where fantasy sports are prohibited (Assam, Nagaland, Odisha, Sikkim, Telangana, Meghalaya, Andhra Pradesh, Tamil Nadu, and Arunachal Pradesh) are not permitted to register or play on our platform.
</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-partners">
                    {/* <h5>Official Partner:</h5> */}
                </div>
                <div className="footer-payment-partners">
                    {/* <h5>Payment Partner:</h5> */}       
                </div>
            </div>
        </footer>
    );
}

export default Footer;
