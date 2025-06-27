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
                        <div className='flex flex-col gap-3 md:mb-5'>
                            <p className='text-gray-700 text-start mr-5'>
                                This project is a <span className='font-bold'>comprehensive and user-friendly directory of medical specialities,</span>  developed to help users easily explore and understand the diverse branches of modern medicine.
                            </p>
                            <p className='text-gray-700 text-start mr-5'>
                                Each speciality is presented in an intuitive card format, offering <span className='font-bold'>concise yet informative descriptions</span> that make learning accessible to everyone — whether you're a medical student, healthcare professional, or a patient seeking clarity about your treatment options.
                            </p>
                            <p className='text-gray-700 text-start mr-5 '>
                                Our goal is to <span className='font-bold'>simplify complex medical information</span> and present it in a visually organized manner. By bridging the gap between <br /> medical knowledge and public understanding, this platform serves as an educational tool, a reference guide, and a first step toward informed healthcare decisions.
                            </p>
                            <p className='text-gray-700 text-start mr-5'>
                                Explore the fields of cardiology, neurology, orthopedics, psychiatry, and many more — all in one place.
                            </p>
                        </div>
                        
                        <img src="src\assets\medicine.png" alt="Medicine" width="30%" className='rounded-lg shadow-2xl md:mt-5'/>
                    </div>
                    <div className='mt-5 p-6 flex gap-6'>
                        <img src="src\assets\dosage_limit.png" alt="dosage_limit" className='rounded-lg shadow-2xl md:mb-5'/>
                        <div className='flex gap-5 flex-col'>
                            <p>
                                <span className='font-bold'>Medical Alert Scheduler</span> is a simple yet powerful web-based reminder system designed to help individuals manage their daily medication or health-related tasks effectively. Our goal is to ensure that no dose or important medical task is ever missed.
                            </p>
                            <p>
                                This platform allows users to <span className='font-bold'>set daily alerts</span> at specific times, providing a convenient way to stay on track with medications, health checks, or doctor consultations. Once a time is scheduled, the system will automatically send out reminders each day — keeping health routines consistent and on time.
                            </p>
                            <p>Whether you're managing your own health or caring for a loved one, this tool can play a crucial role in promoting regularity, safety, and peace of mind.</p>
                        </div>
                    </div>
                </div>
            <MadicalFooter/>
        </div>
        </>
    )
}

export default MainPage;