import React, { createContext, useReducer } from 'react';
import Cartcontext from './Cartcontext';
import { data } from '../data/data';
import { reducer } from './reducer';
export const AddCartcontext = createContext();
const intialState = {
  products: data,
  totalAmoute: 0,
  totalItems: 1
};
function ProductsList() {
  // const [products, setProducts] = useState(data);
  const [state, dispatch] = useReducer(reducer, intialState);
  //increment itmes
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      itemId: id
    });
  }
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      itemId: id
    });
  }
  return (
    <>
      <AddCartcontext.Provider value={{ ...state, increment, decrement }}>
        <Cartcontext />
      </AddCartcontext.Provider>

    </>



  )
}

export default ProductsList;