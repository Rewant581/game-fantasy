// src/components/RefundPolicy.js

import React from 'react';
import './refund.css'; // Make sure this CSS file exists and is correctly styled

const RefundPolicy = () => {
    return (
        <div className="refund-policy-container">
            <h3>Refund Policy</h3>
            <p>
                At Winner Go, we strive to provide the best fantasy sports experience. While we generally do not issue refunds for games or contests once they have started, we understand that certain situations may warrant a refund. Below is our refund policy tailored to fantasy sports in India.
            </p>
            <p>
                <strong>Eligibility for Refunds:</strong> Refunds are generally not issued once a contest has started. However, under certain conditions such as technical issues or contest cancellation, a refund may be considered.
            </p>
            <p>
                <strong>Technical Issues:</strong> If a game or contest is interrupted due to technical failures on our platform, players may be eligible for a refund. Each case will be evaluated individually, and players must report issues promptly.
            </p>
            <p>
                <strong>Contest Cancellation:</strong> If a contest is canceled due to unforeseen circumstances or insufficient participation, the entry fee will be automatically refunded to the players.
            </p>
            <p>
                <strong>Payment Errors:</strong> For incorrect charges or payment errors, players should contact our customer support. We will investigate and process a refund if justified.
            </p>
            <p>
                <strong>Non-Refundable Scenarios:</strong> Refunds are not provided for dissatisfaction with contest outcomes or losses due to player performance or decisions.
            </p>
            <p>
                <strong>Requesting a Refund:</strong> Players eligible for a refund should contact customer support with details. We will review and respond within a reasonable timeframe.
            </p>
            <p>
                <strong>Refunds to Original Payment Method:</strong> Approved refunds will be credited to the original payment method. The time for the refund to appear may vary based on the payment provider.
            </p>
        </div>
    );
};

export default RefundPolicy;
