import React from 'react';
import MainPage from './MainPage';

function WelcomePage() {
    return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-indigo-100">
            <h1 class="text-4xl font-bold">Welcome to Meditrack</h1>
            <p className="mt-4 text-lg text-gray-600">
                This tool helps you update the medicine on completion.
            </p>
            <div className="mt-8">
                <a href="" className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200 hover:shadow-lg">
                    Get Started <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
        </div>
    </>
    );
}

export default WelcomePage;
