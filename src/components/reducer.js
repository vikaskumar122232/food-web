export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    let updatedCart = state.products.map((elment) => {
      if (elment.id === action.itemId) {
        return { ...elment, total: elment.total + 1, cost: elment.price * elment.total }
      }
      return elment;
    })
    return { ...state, products: updatedCart };
  }
  if (action.type === "DECREMENT") {
    const updatedCart = state.products
      .map((curElem) => {
        if (curElem.id === action.itemId) {
          return { ...curElem, total: curElem.total - 1, totalItems: curElem.total - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.totalItems !== 0);
    return { ...state, products: updatedCart };
  }


  return state;
};



