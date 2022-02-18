import React, { useContext } from 'react'
import Products from './Products';
import { AddCartcontext } from './ProductsList';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "../css/header.css";
function Cartcontext() {
  const { products } = useContext(AddCartcontext)
  const navigaate = useNavigate();

  return (
    <>

      {
        products.map((items) => {
          return <Products key={items.id}{...items} />



        })

      }

      <div className='render__checkout__btn'>

        <Button onClick={() => { navigaate("/oder") }} >checkout</Button>

      </div>

    </>
  )
}

export default Cartcontext;
