import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
