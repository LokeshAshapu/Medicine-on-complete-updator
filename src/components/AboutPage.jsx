import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
    <div className="flex items-center justify-center flex-col">
        <NavBar />
        <h1 className="font-bold">About Us</h1>
        <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
        <p>Our team is committed to continuous improvement and innovation.</p>
        <p>Thank you for choosing us!</p>
    </div>
    );
}
export default AboutPage;
