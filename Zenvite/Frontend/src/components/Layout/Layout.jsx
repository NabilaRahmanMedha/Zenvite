import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Routers from '../../router/Routers';
import AdminHeader from '../AdminHeader/AdminHeader';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;