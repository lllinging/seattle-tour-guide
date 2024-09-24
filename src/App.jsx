// NOTICE: We don't do a import React from 'react';
// That is old advice, unneeded!
import { useState } from 'react';

import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';
import './css/App.css';

function App() {
  
  /*SPA single--why in app->put state in the nearest common ancestor of the component that need that state*/

  const [page, setPage] = useState('Home');
  const [servicePage, setServicePage] = useState('Service');

  return (
    
    <div className="app">
      <a className="skip-to-content-link hidden" href="#mainContent">
        Skip to content
      </a>
      <Header setPage={setPage} setServicePage={setServicePage}/>
      <MainArea setPage={setPage} page={page} servicePage={servicePage} setServicePage={setServicePage}/>
      <Footer className="footer"/>
      
    </div>
  );
}

export default App;
