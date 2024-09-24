import { useState } from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import './css/MainArea.css';


function MainArea({ page, setPage, servicePage, setServicePage}) {

  // setServicePage(page);

  return (
    <main>
     
      {(page === 'Home') && <Home setPage={setPage}/>}
      {(page === 'Service') && <Service setPage={setPage} page={page} servicePage={servicePage} setServicePage={setServicePage}/>}
      {(page === 'About') && <About/>} 
    </main>
  );
}   
export default MainArea;