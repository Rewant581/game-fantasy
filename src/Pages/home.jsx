

import React, { useState } from 'react';
import './home.css';
// import about from '../Pages/about';
import img from "../Images/img.png"
import imgg2 from "../Images/imgg2.png"
import img4 from "../Images/img4.png"
import img5 from "../Images/img5.png"
import play from "../Images/play.png"
import app from "../Images/app.png"
import million from "../Images/million.png"
import secure from "../Images/secure.png"
import prizes from "../Images/prizes.png"
import head from "../Images/head.png"

const Home = () => {
    const [visibleQuestion, setVisibleQuestion] = useState(null);

    const faqData = [
        {
            question: "How do I join a game?",
            answer: "To join a game, register on our platform, choose the sport you want to play, and follow the instructions to enter a contest."
        },
        {
            question: "How are points calculated?",
            answer: "Points are calculated based on the performance of the players in the real matches. Each action like runs, goals, or wickets earns points according to our scoring system."
        },
        {
            question: "Are Fantasy sports legal in India?",
            answer: "Online fantasy cricket in India is a safe, secure, and completely legal game. The playing procedure of fantasy sports doesn’t match with that of the provisions laid under the Public Gambling Act 1867. Hence, it is a “mere game of skill” and not a gambling act. Hence it is completely legitimate."
        },
        {
            question: "Can I play Fantasy sports from all mobile devices?",
            answer: "Of course, you can. The beauty of online fantasy games is that you can play them anytime and at any place from any device – be it a smartphone, tablet, PC, or a laptop! All fantasy cricket apps are made keeping in mind the dual user-interface – Android and iOS platforms."
        }
    ];

    const reviewsData = [
        
        {
            name: "John Doe",
            // image: "path_to_john_doe_image",
            review: "I love playing fantasy games on this platform! The interface is user-friendly, and the prizes are amazing."
        },
        {
            name: "Ayush",
            // image: "path_to_jane_smith_image",
            review: "Winner Go has been my go to for fantasy sports. The variety of games and the level of competition is fantastic."
        },
        {
            name: "Rohit",
            // image: "path_to_samuel_green_image",
            review: "Secure and fun to use. I appreciate the attention to detail and the excellent customer support provided."
        },
        {
            name: "Shubham",
            // image: "path_to_emma_brown_image",
            review: "A great platform for all fantasy sports lovers. Highly recommended!"
        }
    ];

    const toggleAnswer = (index) => {
        setVisibleQuestion(visibleQuestion === index ? null : index);
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <img src={img4} alt="Winner Go" className="hero-logo" />
                <h1>Winner Go</h1>
                <p>One Stop for Fantasy Gaming</p>
                <div className="app-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={play} alt="Google Play" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src={app} alt="App Store" />
                    </a>
                </div>
                <div className="hero-background">
                    <div className="hero-cricket">
                        <img src={img5} alt="Cricket" />
                    </div>
                    {/* <div className="hero-football">
                        <img src="path_to_football_image" alt="Football" />
                    </div> */}
                </div>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
                <h2>Winner Go promises the best playing experience!</h2>
                <div className="middle-content">
                    <div className="phone-images">
                        <img src={img} alt="Winner Go" className="phone-image" />
                        <img src={imgg2} alt="Winner Go" className="phone-image" />
                        <img src={img4} alt="Winner Go" className="phone-image" />
                    </div>
                    <div className="feature-highlights">
                        <div className="highlight">
                            <img src={million} alt="Feature Icon" />
                            <p>4 Million+ Users</p>
                        </div>
                        <div className="highlight">
                            <img src={secure} alt="Feature Icon" />
                            <p>100% Secure</p>
                        </div>
                        <div className="highlight">
                            <img src={prizes} alt="Feature Icon" />
                            <p>Exciting Prizes</p>
                        </div>
                        <div className="highlight">
                            <img src={head} alt="Feature Icon" />
                            <p>Head-to-Head Matches</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-content">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer(index)}>
                                {item.question}
                            </div>
                            {visibleQuestion === index && (
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews-section">
                <h2>What Our Customers Say</h2>
                <div className="reviews-content">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="review-item">
                            {/* <img src={review.image} alt={`${review.name}'s picture`} className="review-image" /> */}
                            <p className="review-text">"{review.review}"</p>
                            <p className="review-author">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
