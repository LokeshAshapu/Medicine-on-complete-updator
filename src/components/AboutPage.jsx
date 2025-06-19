import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
    <div className="about-page">
        <NavBar />
        <h1>About Us</h1>
        <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
        <p>Our team is committed to continuous improvement and innovation.</p>
        <p>Thank you for choosing us!</p>
    </div>
    );
}
export default AboutPage;