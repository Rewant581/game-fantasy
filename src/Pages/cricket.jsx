// src/Cricket.js

import React from 'react';

const Cricket = () => {
    return (
        <div className="section-container">
            <h1>Fantasy Cricket</h1>
            <p>Join our exciting fantasy cricket games and showcase your knowledge of the sport. Create your team and compete with others to win amazing prizes!</p>
            
            <h2>Current Matches</h2>
            <p>Explore the ongoing and upcoming cricket matches to join.</p>
            {/* List of matches can be added here */}
            
            <h2>Rules and Scoring</h2>
            <p>Understand how the fantasy cricket game works, including detailed scoring rules.</p>
            {/* Detailed rules and scoring system can be added here */}
            
            <h2>Player Statistics</h2>
            <p>Analyze player performance and statistics to help build your winning team.</p>
            {/* Player stats table or visualization can be added here */}
            
            <h2>Tips and Strategies</h2>
            <p>Get expert tips and strategies to maximize your chances of winning.</p>
            {/* Tips and strategies content can be added here */}
            
            <button className="cta-button">Join a Cricket Game</button>
        </div>
    );
};

export default Cricket;
