// src/Baseball.js

import React from 'react';

const Baseball = () => {
    return (
        <div className="section-container">
            <h1>Fantasy Baseball</h1>
            <p>Step into the world of fantasy baseball. Pick your favorite players, form your team, and compete for great prizes.</p>
            
            <h2>Current Games</h2>
            <p>View the ongoing and upcoming baseball matches available for fantasy play.</p>
            {/* List of current games can be added here */}
            
            <h2>Game Mechanics</h2>
            <p>Understand the rules and scoring for fantasy baseball.</p>
            {/* Detailed game mechanics and scoring system can be added here */}
            
            <h2>Player Insights</h2>
            <p>Get insights and performance data for baseball players to guide your selections.</p>
            {/* Player insights and stats can be added here */}
            
            <h2>Fantasy Baseball Tips</h2>
            <p>Access expert tips and strategies for building a competitive fantasy baseball team.</p>
            {/* Tips and strategies content can be added here */}
            
            <button className="cta-button">Join a Baseball Game</button>
        </div>
    );
};

export default Baseball;
