import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
