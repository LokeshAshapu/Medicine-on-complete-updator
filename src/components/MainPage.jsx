import React from 'react';
import NavBar from './NavBar';
import MadicalFooter from './MedicalFooter';

function MainPage(){
    return (
        <>
        <div className='bg-white'>
            <NavBar />
                <div className=' p-10 mt-6 flex-col items-center '>
                    <h2 className='text-3xl font-bold mb-2 text-center text-indigo-700'>About This Project</h2>
                    <div className='flex items-center p-3 sm:flex-col lg:flex-row'>
                        <p className='text-gray-700 text-center mr-5'>
                            This project is a comprehensive directory of medical specialities, designed to help users quickly understand the various branches of medicine. Each speciality card provides a brief description, making it easier for students, professionals, and patients to explore and learn about different fields in healthcare.
                        </p>
                        <img src="src\assets\medicine.png" alt="Medicine" width="30%" className='rounded-lg shadow-2xl md:mt-5'/>
                    </div>
                </div>
            <MadicalFooter/>
        </div>
        </>
    )
}

export default MainPage;