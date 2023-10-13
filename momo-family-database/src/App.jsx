import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContent from './components';
 

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
