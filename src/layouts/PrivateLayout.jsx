import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import React from 'react';
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <>
        <Sidebar />
        <Header />
        <Navbar />
        <main className="contenido_pag">{children}</main>
        </>
    </PrivateRoute>
  );
};

export default PrivateLayout;
