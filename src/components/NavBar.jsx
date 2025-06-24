import { Link } from 'react-router-dom';
function NavBar() {
    return (
    <nav className="bg-gray-800 p-6 shadow-md sticky top-0 z-50 transition-all  text-white">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/main" className="text-white text-lg font-bold">MediTrack</Link>
            <div>
                <Link to="/main" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
                <Link to="/medical" className="text-gray-300 hover:text-white px-3 py-2">Medical Specialities</Link>
                <Link to="/tracker" className='text-gray-300 hover:text-white px-3 py-2'>Tracker</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
            </div>
        </div>
        </nav>
    );
}
export default NavBar;