import React from 'react';
import NavBar from './NavBar';
import MadicalFooter from './MedicalFooter';

function MainPage(){
    const Spacalities=[
        {
            id: 1,
            name: 'Cardiology',
            description: 'Cardiology is the branch of medicine that deals with disorders of the heart and blood vessels.',
            render_to: 'https://www.youtube.com/watch?v=Fu1u11iRKAE'
        },
        {
            id: 2,
            name: 'Neurology',
            description: 'Neurology is the branch of medicine that deals with disorders of the nervous system.',
            render_to: 'https://www.youtube.com/watch?v=BImxBFWxr7E'
        },
        {
            id: 3,
            name: 'Orthopedics',
            description: 'Orthopedics is the branch of medicine that deals with the correction of deformities of bones or muscles.',
            render_to: 'hhttps://www.youtube.com/watch?v=4QbarirGQbs'
        },
        {
            id: 4,
            name: 'Pediatrics',
            description: 'Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents.',
            render_to: 'https://www.youtube.com/watch?v=dhpCdqOtuj0'
        },
        {
            id: 5,
            name: 'Dermatology',
            description: 'Dermatology is the branch of medicine that deals with the skin, nails, hair, and its diseases.',
            render_to: 'https://www.youtube.com/watch?v=s-26VmKhGHM'
        },
        {
            id: 6,
            name: 'Psychiatry',
            description: 'Psychiatry is the branch of medicine that deals with the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.',
            render_to: 'https://www.youtube.com/watch?v=NQHo9vnWvHU'
        },
        {
            id: 7,
            name: 'Obstetrics and Gynecology',
            description:'Obstetrics and Gynecology is the branch of medicine that deals with childbirth and the care of women before, during, and after they give birth.',
            render_to: 'https://www.youtube.com/watch?v=Nz9msbDY1xE&t=19s'
        },
        {
            id: 8,
            name: 'Oncology',
            description: 'Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.',
            render_to: 'https://www.youtube.com/watch?v=vSe2RhUIjj8&t=17s'
        },
        {
            id: 9,
            name: 'Gastroenterology',
            description: 'Gastroenterology is the branch of medicine that deals with the digestive system and its disorders.',
            render_to: 'https://www.youtube.com/watch?v=V92_srz55xQ'
        },
        {
            id: 10,
            name: 'Endocrinology',
            description: 'Endocrinology is the branch of medicine that deals with the endocrine system, its diseases, and its specific secretions called hormones.',
            render_to: 'https://www.youtube.com/watch?v=wOAVmrfcRgI'
        },
        {
            id: 11,
            name: 'Urology',
            description: 'Urology is the branch of medicine that focuses on the urinary tract and the male reproductive system.',
            render_to: 'https://www.youtube.com/watch?v=c9x2XxUs8ns'
        },
        {
            id: 12,
            name: 'Ophthalmology',
            description: 'Ophthalmology is the branch of medicine that deals with the anatomy, physiology, and diseases of the eye.',
            render_to: 'https://www.youtube.com/watch?v=dr-LjK6BpFQ'
        },
        {
            id: 13,
            name: 'Rheumatology',
            description: 'Rheumatology is the branch of medicine that deals with the diagnosis and therapy of rheumatic diseases.',
            render_to: 'https://www.youtube.com/watch?v=vo6-EINYeiY'
        },
        {
            id: 14,
            name: 'Hematology',
            description: 'Hematology is the branch of medicine concerned with the study, diagnosis, treatment, and prevention of blood disorders.',
            render_to: 'https://www.youtube.com/watch?app=desktop&v=Aal8wVuHybc'
        },
        {
            id: 15,
            name: 'Pulmonology',
            description: 'Pulmonology is the branch of medicine that deals with diseases involving the respiratory tract.',
            render_to: 'https://www.youtube.com/watch?v=v026ge-oTyw'
        },
        {
            id: 16,
            name: 'Nephrology',
            description: 'Nephrology is the branch of medicine that deals with the study of kidney function and kidney diseases.',
            render_to: 'https://www.youtube.com/watch?v=LnLqv6pIWso'
        },
        {
            id: 17,
            name: 'Geriatrics',
            description: 'Geriatrics is the branch of medicine that focuses on health care of elderly people.',
            render_to: 'https://www.youtube.com/watch?v=RIpKOALkFjI'
        },
        {
            id: 18,
            name: 'Infectious Diseases',
            description: 'Infectious Diseases is the branch of medicine that deals with the diagnosis and treatment of infections caused by bacteria, viruses, fungi, and parasites.',
            render_to: 'https://www.youtube.com/watch?v=Kr-H3pJ--zo'
        }
    ]
    return (
        <>
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center p-10 bg-white">
                <h1 className='text-3xl font-bold text-indigo-600 mb-3'>Medical Specialities</h1>
                <div className='grid grid-cols-3 gap-6 p-3 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3'>
                    {Spacalities.map((speciality) => (
                        <div key={speciality.id} className='bg-slate-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <h2 className='text-xl font-semibold text-black mb-2'>{speciality.name}</h2>
                            <p className='text-gray-600'>{speciality.description}</p>
                            {speciality.render_to && (
                                <a href={speciality.render_to} target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline mt-2 inline-block'>
                                    Watch Video
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <div className='bg-white p-4 rounded-lg mt-6 flex-col items-center '>
                    <h2 className='text-3xl font-bold mb-2 text-center text-indigo-700'>About This Project</h2>
                    <div className='flex items-center p-3  md:flex-col lg:flex-row'>
                        <p className='text-gray-700 text-center mr-5'>
                            This project is a comprehensive directory of medical specialities, designed to help users quickly understand the various branches of medicine. Each speciality card provides a brief description, making it easier for students, professionals, and patients to explore and learn about different fields in healthcare. And from this page, you can navigate to the <a href="/about" className="text-indigo-600 font-semibold hover:underline">About Us</a> page to learn more about the project and its creators.
                        </p>
                        <img src="src\assets\medicine.png" alt="Medicine" width="30%" className='rounded-lg shadow-2xl md:mt-5'/>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-lg mt-6 col-span-3'>
                    <h1 className='text-3xl font-bold mb-6 text-center text-indigo-700'>Track to fill</h1>
                    <div className='flex flex-col lg:flex-row items-center justify-around bg-yellow-50 p-6 rounded-lg shadow-md gap-8'>
                        <img src="src/assets/remainder.png" alt="tracker" className='rounded-md w-full md:w-2/3 lg:w-1/2'/>
                        <form className='w-full md:w-4/5 lg:w-1/2 flex flex-col items-center bg-white p-6 rounded-lg shadow-md'>
                            <div className='flex flex-col w-full mb-4'>
                                <label className='text-lg font-semibold mb-2'>Enter your email to get updates:</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                                    required
                                />
                            </div>
                            <div className='flex flex-col w-full mb-4'>
                                <label className='text-lg font-semibold mb-2'>Medicine Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter medicine name"
                                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                                    required
                                />
                            </div>
                            <div className='flex flex-col w-full mb-4'>
                                <label className='text-lg font-semibold mb-2'>Time to take:</label>
                                <input
                                    type="time"
                                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 w-full sm:w-auto'>
                                    Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <MadicalFooter/>
        </>
    )
}

export default MainPage;