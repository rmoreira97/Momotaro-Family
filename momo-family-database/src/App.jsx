import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '/home/rmoreira97/gorilla/momo-family-database/src/components/LandingPage.jsx';
import GorillaSelection from '/home/rmoreira97/gorilla/momo-family-database/src/components/GorillaSelection.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gorillas" element={<GorillaSelection />} />
      </Routes>
    </Router>
  );
}

export default App;