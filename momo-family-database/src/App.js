import React from 'react';
import { BrowserRouter as Router, useRoutes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import LandingPage from './components/LandingPage';
import GorillaSelection from './components/GorillaSelection';
import GorillaProfile from './components/GorillaProfile';

function AnimatedRoutes() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500 // Adjust duration as needed
    }
  });

  const routing = useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: '/gorillas', element: <GorillaSelection /> },
    { path: '/momofamily/:id', element: <GorillaProfile /> },
  ]);

  return transitions((props, item) => (
    <animated.div style={props}>
      {routing}
    </animated.div>
  ));
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
