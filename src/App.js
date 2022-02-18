import React from 'react'
import Header from './components/Header';
import { Routes,Route,Link } from "react-router-dom";
import Body from './components/Body';
import Oder from './components/Oder';
import PageNot from './components/PageNot';
import ProductsList from './components/ProductsList';
function App() {
  return ( 
      <div>  
        <Header />
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/menu' element={<ProductsList />} />
           <Route path ='*' element={<PageNot/>}/>
          <Route path='/oder' element={<Oder />} />
        </Routes>
      </div> 
  );
}
export default App;