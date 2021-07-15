import { ActionTypes } from '../constants/action-types'
import fakestoreapi from '../../apis/fakeStoreApi'

// export const fetchProducts = () => {
    

//      return async function(dispatch, getstate){
//          const response = await fakestoreapi.get('/products');
//          console.log(response);
//          dispatch({ type:ActionTypes.FETCH_PRODUCTS, payload: response.data})
//      }


//     // const response = await axios.get("/products");
 
//     // console.log(response);
//     //  
// }


export const fetchProducts = () => {
         return async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    console.log("response", response);
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
  };
}





export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,

    }
};

export const addToProduct = (product) => {
    return {
        type: ActionTypes.ADD_TO_PRODUCTS,
        payload: product,
    }
}

export const addToCartProduct = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART_PRODUCTS,
        payload: product,
    }
}

export const deleteProduct = (product) => {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        payload: product
    }
}