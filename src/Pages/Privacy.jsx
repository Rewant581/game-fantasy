// src/components/PrivacyPolicy.js

import React from 'react';
import './Privacy.css'; // Ensure you have the appropriate styling in privacypolicy.css

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h3>Privacy Policy</h3>

            <p>
                At Winner Go, we are dedicated to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines our practices regarding the collection, use, and protection of your data when you engage with our fantasy sports platform.
            </p>

            <h4>1. Data Collection</h4>
            <p>
                We collect various types of information to provide and enhance our services:
                <br /><strong>Personal Information:</strong> When you register and use our services, we collect personal information such as your name, email address, and payment details. This data is essential for creating and managing your account, processing transactions, and providing customer support.
                <br /><strong>Usage Data:</strong> We collect information about your interactions with our platform, such as your game activity, preferences, and log data. This helps us improve your experience and tailor our services to better meet your needs.
                <br /><strong>Device and Technical Data:</strong> Information about the device you use to access our platform, including IP address, browser type, and operating system, is collected to ensure compatibility and security.
            </p>

            <h4>2. Data Usage</h4>
            <p>
                The data we collect is used for the following purposes:
                <br /><strong>Account Management:</strong> To create and maintain your user account, verify your identity, and facilitate transactions.
                <br /><strong>Service Delivery:</strong> To provide, operate, and improve our fantasy sports platform, including customer support and personalized features.
                <br /><strong>Communication:</strong> To send you updates, notifications, and promotional content related to our services. You can opt out of non-essential communications at any time.
                <br /><strong>Security and Compliance:</strong> To protect against fraud, unauthorized access, and other security issues, and to comply with legal obligations.
            </p>

            <h4>3. Data Protection</h4>
            <p>
                We are committed to safeguarding your personal information through robust security measures:
                <br /><strong>Encryption:</strong> We use advanced encryption technologies to protect your data during transmission and storage.
                <br /><strong>Access Controls:</strong> Access to your personal information is restricted to authorized personnel who need it to perform their job functions.
                <br /><strong>Regular Audits:</strong> We conduct regular security audits to identify and address potential vulnerabilities.
                <br /><strong>Compliance:</strong> We adhere to applicable data protection laws and regulations, ensuring your rights are respected and protected.
            </p>

            <h4>4. Third-Party Sharing</h4>
            <p>
                We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners who assist us in providing our services under strict confidentiality agreements:
                <br /><strong>Service Providers:</strong> We may share your data with third-party service providers who help us operate our platform, such as payment processors and customer support services.
                <br /><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.
                <br /><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, users, or the public.
            </p>

            <h4>5. Cookies</h4>
            <p>
                Our website uses cookies and similar technologies to enhance your experience and analyze usage:
                <br /><strong>Functionality Cookies:</strong> These cookies are essential for the operation of our site, enabling basic features like navigation and access to secure areas.
                <br /><strong>Performance Cookies:</strong> These cookies help us understand how users interact with our site by collecting information about page visits, traffic sources, and user behavior.
                <br /><strong>Personalization Cookies:</strong> These cookies allow us to provide personalized content and ads based on your browsing history and preferences.
                <br /><strong>Cookie Management:</strong> You can manage your cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our platform.
            </p>

            <h4>6. Your Rights</h4>
            <p>
                You have the following rights regarding your personal information:
                <br /><strong>Access:</strong> You can request a copy of the personal information we hold about you.
                <br /><strong>Correction:</strong> You can ask us to update or correct any inaccuracies in your personal information.
                <br /><strong>Deletion:</strong> You can request the deletion of your personal information under certain conditions.
                <br /><strong>Objection:</strong> You can object to the processing of your personal information for specific purposes, such as direct marketing.
                <br /><strong>Data Portability:</strong> You can request to receive your personal data in a structured, commonly used, and machine-readable format.
            </p>

            <h4>7. Changes to this Policy</h4>
            <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this policy regularly to stay informed about how we protect your information.
                <br /><strong>Contact Information:</strong> If you have any concerns or questions about your privacy or our data practices, please contact our customer support team at <a href="mailto:support@winnergo.com">support@winnergo.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
