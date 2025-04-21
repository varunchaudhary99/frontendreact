// let parsedProduct =null
// let storedProduct = localStorage.getItem('currentProduct')
// if(storedProduct && storedProduct !== undefined){
//     parsedProduct = storedProduct ?JSON.parse(storedProduct): null

// }
// let intialState = {
//     product:parsedProduct
// }
// let currentProductReducer =(state = intialState,action) => {
//     switch(action.type){
//         case 'SET_CURRENT_PRODUCT':
//             localStorage.setItem('currentProduct',JSON.stringify(action.payload))


//                       return{
//                         ...state,
//                         product:action.payload
//                       }
//                        default:
//                         return state
//     }
// }
// export default currentProductReducer

let parsedProduct = null;
let storedProduct = localStorage.getItem('currentProduct');

// Check if the storedProduct is not "undefined" (as a string) and try to parse it
if (storedProduct && storedProduct !== "undefined") {
  try {
    parsedProduct = JSON.parse(storedProduct);
  } catch (e) {
    console.error("Error parsing storedProduct from localStorage:", e);
  }
}

const initialState = {
  product: parsedProduct,
};

const currentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      // Ensure that payload is a valid JSON object or serializable
      try {
        localStorage.setItem('currentProduct', JSON.stringify(action.payload));
      } catch (e) {
        console.error("Error saving to localStorage:", e);
      }

      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default currentProductReducer;
