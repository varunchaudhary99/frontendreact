// export const addToCart = (item) => ({
//     type: 'ADD_TO_CART',
//     payload: item
// });

export const removeCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item
});

export const incrementCartCounter = (item) => ({
    type: 'INCREMENT_CART_COUNTER',
    payload: item
});

export const decrementCartCounter = (item) => ({
    type: 'DECREMENT_CART_COUNTER',
    payload: item
});

// action creators/addToCart.js
export const addToCart = (products) => {
    return {
      type: 'ADD_TO_CART',
      payload: products, 
    };
  };

  
