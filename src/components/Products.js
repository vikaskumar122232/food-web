import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@material-ui/core';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddCartcontext } from './ProductsList';
function Products({ id, title, price, total, image }) {
  const { increment, decrement } = useContext(AddCartcontext)

  return (<>

    <div className='menu__card'>
      <div className="column">
        <div className='row'>
          <div className='card' >
            <img src={image} alt="" />
            <h5>{title}</h5>
            <div className="text">
              <p className='price'>Price: {price}</p>

              {total >= 1 ? <p>item: {total}</p> : <p></p>}

              {total >= 1 ? <p>cost: {price * total}</p> : <p className='cost'></p>}

            </div>
            <div className='menu__btn'>
              <Button onClick={() => increment(id)}>
                <AddIcon />
              </Button>

              <Button onClick={() => decrement(id)}>
                <RemoveIcon />
              </Button>
            </div>
          </div>

        </div>
      </div>

    </div>


  </>
  )
}

export default Products