import React from 'react';

const MedicalFooter = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white pb-1">About MediTrack</h3>
          <p className="text-sm">
            MediTrack helps users stay on schedule with their medications, receive reminders, and notify caregivers upon completion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white pb-1">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Medicine Tracker</a></li>
            <li><a href="#" className="hover:underline">Auto Reminders</a></li>
            <li><a href="#" className="hover:underline">Doctor Notifications</a></li>
            <li><a href="#" className="hover:underline">Health Dashboard</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white pb-1">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Pharmacist</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white pb-1">Contact</h3>
          <p className="text-sm">123 MediCare Blvd, Health City</p>
          <p className="text-sm mt-1">Email: support@meditrack.com</p>
          <p className="text-sm">Phone: +1 (800) 456-9876</p>
        </div>
      </div>


      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} MediTrack. All rights reserved. |
        <a href="#" className="ml-2 text-blue-300 hover:underline">Privacy Policy</a> |
        <a href="#" className="ml-2 text-blue-300 hover:underline">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default MedicalFooter;
