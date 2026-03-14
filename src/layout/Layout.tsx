import React from 'react';
import '../styles/globals.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
