import React,{useEffect} from 'react';
import ProductComponent from './ProductComponent'
import {setProducts, fetchProducts} from '../redux/actions/productsActions'

import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';

const ProductListing = ()=>{
const products = useSelector((state)=> state);
const dispatch = useDispatch();




// const fetchProducts = async () =>{
//     const response = await axios
//     .get('https://fakestoreapi.com/products')
//     .catch((err) => {
//         console.log("Error", err);
//     });
//     let res= response.data
//     dispatch(setProducts(res));
// };


useEffect(()=>{
  //  console.log("useeffect")
    fetchProducts();
},[]);

// console.log('products-->',products.allProducts.product.res);

return(
    <div className='d-flex flex-wrap justify-content-between ' style={{paddingTop:"80px"}}>
        <ProductComponent/>
    </div>
)

}

export default ProductListing;