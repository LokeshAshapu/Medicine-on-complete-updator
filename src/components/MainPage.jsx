import React from 'react';
import NavBar from './NavBar';
import MadicalFooter from './MedicalFooter';

function MainPage(){
    return (
        <>
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold">Welcome to Meditrack</h1>
                <p className="mt-4 text-lg text-gray-600">
                    This tool helps you update the medicine on completion.
                </p>
            </div>
        </div>
        <MadicalFooter/>
        </>
    )
}

export default MainPage;