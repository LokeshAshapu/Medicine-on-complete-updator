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
                    <div className='flex items-center p-3 sm:flex-col md:flex-col lg:flex-row'>
                        <p className='text-gray-700 text-center mr-5'>
                            This project is a comprehensive directory of medical specialities, designed to help users quickly understand the various branches of medicine. Each speciality card provides a brief description, making it easier for students, professionals, and patients to explore and learn about different fields in healthcare.
                        </p>
                        <img src="src\assets\medicine.png" alt="Medicine" width="30%" className='rounded-lg shadow-2xl md:mt-5'/>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-indigo-600 mt-5'>Key Features:</h3>
                        <ul className='list-disc list-inside text-gray-700'>
                            <li>Comprehensive list of medical specialities</li>
                            <li>Brief descriptions for each speciality</li>
                            <li>User-friendly interface</li>
                            <li>Responsive design for all devices</li>
                        </ul>
                    </div>
                    <div className='mt-5 p-6'>
                        <p className='text-indigo-400'>Medical Alert Scheduler is a simple yet powerful web-based reminder system designed to help individuals manage their daily medication or health-related tasks effectively. Our goal is to ensure that no dose or important medical task is ever missed. <br />
                                This platform allows users to set daily alerts at specific times, providing a convenient way to stay on track with medications, health checks, or doctor consultations. Once a time is scheduled, the system will automatically send out reminders each day — keeping health routines consistent and on time.<br/>
                                Whether you're managing your own health or caring for a loved one, this tool can play a crucial role in promoting regularity, safety, and peace of mind.
                        </p>
                    </div>
                </div>
            <MadicalFooter/>
        </div>
        </>
    )
}

export default MainPage;