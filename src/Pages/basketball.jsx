// src/Basketball.js

import React from 'react';

const Basketball = () => {
    return (
        <div className="section-container">
            <h1>Fantasy Basketball</h1>
            <p>Dive into the world of fantasy basketball. Create your team from top players and compete for amazing rewards.</p>
            
            <h2>Match Schedule</h2>
            <p>Check out the current and upcoming basketball matches available to join.</p>
            {/* Schedule of matches can be added here */}
            
            <h2>How to Play</h2>
            <p>Understand the basics of fantasy basketball and how to score points.</p>
            {/* Instructions on how to play can be added here */}
            
            <h2>Player Stats</h2>
            <p>Analyze the stats and performance of basketball players to choose your team.</p>
            {/* Player statistics can be added here */}
            
            <h2>Winning Strategies</h2>
            <p>Learn tips and strategies to build a competitive fantasy basketball team.</p>
            {/* Strategies and tips content can be added here */}
            
            <button className="cta-button">Join a Basketball Game</button>
        </div>
    );
};

export default Basketball;
