import React, { useEffect } from 'react';
import './App.sass';
import Body from '../Body/Body';
import TopBar from '../TopBar/TopBar';

import { useLocation } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <TopBar />
      <Body />
    </div>
  );
}

export default App;

//Used to scroll to the top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}