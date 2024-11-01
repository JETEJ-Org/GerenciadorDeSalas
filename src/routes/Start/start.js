import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';

const Start = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
        <Header />
        <main style={{ padding: '20px' }}>
        </main>
      </div>
    </div>
  );
};

export default Start;