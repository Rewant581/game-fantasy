// src/Football.js

import React from 'react';

const Football = () => {
    return (
        <div className="section-container">
            <h1>Fantasy Football</h1>
            <p>Enter the world of fantasy football and test your football knowledge. Create your ultimate team and compete to win big prizes!</p>
            
            <h2>Upcoming Matches</h2>
            <p>Discover the upcoming football matches that you can participate in.</p>
            {/* List of upcoming matches can be added here */}
            
            <h2>Game Rules</h2>
            <p>Learn the rules of fantasy football and how points are scored.</p>
            {/* Detailed game rules and scoring system can be added here */}
            
            <h2>Player Performance</h2>
            <p>Get detailed performance metrics and statistics for football players.</p>
            {/* Player performance stats can be added here */}
            
            <h2>Fantasy Tips</h2>
            <p>Access top tips and strategies for building a strong fantasy football team.</p>
            {/* Tips and strategies content can be added here */}
            
            <button className="cta-button">Join a Football Game</button>
        </div>
    );
};

export default Football;
