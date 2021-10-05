import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import React from 'react';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <Navbar />
      <main className="contenido_pag">{children}</main>
    </>
  );
};

export default PrivateLayout;
