import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContent from '/home/rmoreira97/gorilla/momo-family-database/src/components/AppContent.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
