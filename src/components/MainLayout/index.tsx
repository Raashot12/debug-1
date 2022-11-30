import NavBar from '../NavBar/index';
import Footer from '../Footer/index';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
export default MainLayout;
