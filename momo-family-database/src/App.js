import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import GorillaSelection from './components/GorillaSelection';
import GorillaProfile from './components/GorillaProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gorillas" element={<GorillaSelection />} />
          <Route path="/momofamily/:id" element={<GorillaProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
