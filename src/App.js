import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Menu from './components/Menu';
import ThankYou from './components/ThankYou';
import Body from './components/Body';
import PageNot from './components/PageNot';

function App() {
 
  return (
    <div>
   <BrowserRouter>
        <Header />
  <Body/>
       
        
        <Routes>
              <Route path='/menu' element={<Menu />} />
        
              <Route path='/checkout' element={<ThankYou />} />
        
              <Route path='*' element={<PageNot />} />
        </Routes>
       
     </BrowserRouter>   
     
        
    </div>
  )
}


export default App;