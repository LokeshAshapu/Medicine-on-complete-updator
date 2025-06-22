import React from 'react';
import NavBar from './NavBar';
import MadicalFooter from './MedicalFooter';

function MainPage(){
    return (
        <>
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center p-10 bg-white">
                <h1 className='text-3xl font-bold text-indigo-600 mb-3'>Medical Specialities</h1>
                <div className='grid grid-cols-3 gap-6 p-3 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3'>
                    <div className='bg-blue-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Cardiology</h2>
                        <p className='text-gray-700'>Cardiology is the branch of medicine that deals with disorders of the heart and blood vessels.</p>
                    </div>
                    <div className='bg-green-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Neurology</h2>
                        <p className='text-gray-700'>Neurology is the branch of medicine that deals with disorders of the nervous system.</p>
                    </div>
                    <div className='bg-yellow-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Orthopedics</h2>
                        <p className='text-gray-700'>Orthopedics is the branch of medicine that deals with the correction of deformities of bones or muscles.</p>
                    </div>
                    <div className='bg-red-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Pediatrics</h2>
                        <p className='text-gray-700'>Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents.</p>
                    </div>
                    <div className='bg-purple-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Dermatology</h2>
                        <p className='text-gray-700'>Dermatology is the branch of medicine that deals with the skin, nails, hair, and their diseases.</p>
                    </div>
                    <div className='bg-pink-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Psychiatry</h2>
                        <p className='text-gray-700'>Psychiatry is the branch of medicine focused on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.</p>
                    </div>
                    <div className='bg-teal-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Gastroenterology</h2>
                        <p className='text-gray-700'>Gastroenterology is the branch of medicine focused on the digestive system and its disorders.</p>
                    </div>
                    <div className='bg-orange-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Oncology</h2>
                        <p className='text-gray-700'>Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Endocrinology</h2>
                        <p className='text-gray-700'>Endocrinology is the branch of medicine that deals with the endocrine system, its diseases, and its specific secretions called hormones.</p>
                    </div>
                    <div className='bg-indigo-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Urology</h2>
                        <p className='text-gray-700'>Urology is the branch of medicine that focuses on the urinary tract and the male reproductive system.</p>
                    </div>
                    <div className='bg-lime-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Rheumatology</h2>
                        <p className='text-gray-700'>Rheumatology is the branch of medicine that deals with the diagnosis and therapy of rheumatic diseases.</p>
                    </div>
                    <div className='bg-emerald-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Hematology</h2>
                        <p className='text-gray-700'>Hematology is the branch of medicine concerned with the study of blood, blood-forming organs, and blood diseases.</p>
                    </div>
                    <div className='bg-cyan-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Pulmonology</h2>
                        <p className='text-gray-700'>Pulmonology is the branch of medicine that deals with diseases involving the respiratory tract.</p>
                    </div>
                    <div className='bg-teal-200 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Geriatrics</h2>
                        <p className='text-gray-700'>Geriatrics is the branch of medicine that focuses on health care of elderly people.</p>
                    </div>
                    <div className='bg-amber-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Infectious Diseases</h2>
                        <p className='text-gray-700'>Infectious Diseases is the branch of medicine that deals with the diagnosis and treatment of infections.</p>
                    </div>
                    <div className='bg-fuchsia-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Obstetrics and Gynecology</h2>
                        <p className='text-gray-700'>Obstetrics and Gynecology is the branch of medicine that deals with childbirth and the care of women before, during, and after they give birth.</p>
                    </div>
                    <div className='bg-violet-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Anesthesiology</h2>
                        <p className='text-gray-700'>Anesthesiology is the branch of medicine that focuses on the relief of pain and total care of surgical patients before, during, and after surgery.</p>
                    </div>
                    <div className='bg-sky-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Radiology</h2>
                        <p className='text-gray-700'>Radiology is the branch of medicine that uses imaging techniques to diagnose and treat diseases within the body.</p>
                    </div>
                    <div className='bg-slate-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Pathology</h2>
                        <p className='text-gray-700'>Pathology is the branch of medicine that studies the causes and effects of disease, especially the examination of samples of body tissue for diagnostic or forensic purposes.</p>
                    </div>
                    <div className='bg-zinc-100 p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-2'>Ophthalmology</h2>
                        <p className='text-gray-700'>Ophthalmology is the branch of medicine and surgery that is concerned with the diagnosis and treatment of eye disorders.</p>
                    </div>
                    
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
                    <h1 className='text-3xl font-bold mb-2 text-center text-indigo-700'>Track to fill</h1>
                </div>
            </div>
        </div>
        <MadicalFooter/>
        </>
    )
}

export default MainPage;