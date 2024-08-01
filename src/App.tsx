import React, { useRef, useEffect, useState } from 'react';
import MenuPage from './components/Navbar';
import LocationPage from './components/Location';
import FooterPage from './components/Footer';
import BackTop from './components/BackTop';

const App = () => {

  return (
    <div>
      <MenuPage />
      <LocationPage />
      <FooterPage />
      <BackTop />
    </div>
  );
};

export default App;
