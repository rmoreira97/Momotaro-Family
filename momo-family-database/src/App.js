import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LandingPage from './components/LandingPage';
import GorillaSelection from './components/GorillaSelection';
import GorillaProfile from './components/GorillaProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="landing" classNames="fade" timeout={300}>
                <LandingPage />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/gorillas"
          element={
            <TransitionGroup>
              <CSSTransition key="gorillas" classNames="fade" timeout={300}>
                <GorillaSelection />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/momofamily/:id"
          element={
            <TransitionGroup>
              <CSSTransition key="profile" classNames="fade" timeout={300}>
                <GorillaProfile />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
