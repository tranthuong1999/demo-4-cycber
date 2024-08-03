import React, { useRef, useEffect, useState, ReactNode } from 'react';
import MenuPage from './components/Navbar';
import LocationPage from './components/Location';
import FooterPage from './components/Footer';
import BackTop from './components/BackTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressPage from './components/Address';
import DetailRoomPage from './components/DetailRoom';
import NotFoundPage from './components/NotFound';
import RegisterRoomPage from './components/RegisterRoom';

const App = () => {

  type LayoutProps = {
    children: ReactNode;
  };

  const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <MenuPage />
        <LocationPage />
        {children}
        <FooterPage />
        <BackTop />
      </>
    );
  };

  const SecondaryLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <MenuPage />
        {children}
        <FooterPage />
        <BackTop />
      </>
    );
  };



  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <AddressPage />
            </MainLayout>
          }
        />
        <Route
          path="/room/:province"
          element={
            <MainLayout>
              <DetailRoomPage />
            </MainLayout>
          }
        />
        <Route
          path="/room-detail/:codeRoom"
          element={
            <SecondaryLayout>
              <RegisterRoomPage />
            </SecondaryLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
