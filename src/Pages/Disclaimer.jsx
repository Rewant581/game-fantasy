// src/components/Disclaimer.js

import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
    return (
        <div className="disclaimer-container">
            <h3>Disclaimer</h3>
            <p>
                Fantasy sports games are a game of skill and are designed to enhance your sports knowledge and engagement. 
                Participating in fantasy sports requires an understanding of the game and strategic thinking. While it is a form of entertainment,
                it should be played responsibly.
            </p>
            <p>
                By playing fantasy sports on our platform, you acknowledge that you understand and comply with the laws of your jurisdiction 
                regarding fantasy sports. Fantasy sports are legal in many areas, but it's your responsibility to ensure compliance with local laws.
            </p>
            <p>
                Please note that fantasy sports are not gambling and are considered a game of skill. We promote responsible play and advise our 
                users to participate in moderation. If you have any concerns or require support, please contact our customer service team.
            </p>
            <p>
                Users must be at least 18 years old to participate in fantasy sports on our platform. By joining, you agree to our terms and conditions 
                and acknowledge that you are of legal age in your jurisdiction.
            </p>
        </div>
    );
};

export default Disclaimer;
