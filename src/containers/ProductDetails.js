import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
// import {useDispatch, useSelector } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct, addToProduct } from '../redux/actions/productsActions'







const ProductDetails = () => {

    const { productId } = useParams();
    // console.log(productId);
    const dispatch = useDispatch();
    const products = useSelector((state) => state)
    console.log('productdetails',products);
    const { id, title, image, price, category, description } = products.allProducts.product[productId - 1];
    // console.log(id, title, image, price, category);
    function HandlerAddProduct() {
        let temp =  products.allProducts.addTocart.findIndex((item)=>item.id == id)
        console.log( 'temp',temp)
        if(temp == -1){
            console.log("hello",id,title)
            dispatch(addToProduct({ id, title, image, price, category, description, count:1 }))
        }
    
    }
    // const ProductData = products
    return (
        <div className="d-flex justify-content-around" style={{ height: "100%", backgroundColor: "#f5f5f5", paddingTop:"100px" }}>

            <div className="col-5  " style={{ backgroundColor: "#fff" }}>
                <img style={{ height: "800px", width: "100%" }} className="card-img-top " src={image} alt="Card image cap" />
            </div>
            {/* <div style={{ borderLeft: "6px solid #f1f1f1", height: "500px"}}></div> */}

            <div className="col-4" style={{ backgroundColor: "#fff" }}>
                <p className="card-text font-weight-bold " style={{ fontSize: "2vw" }}>{title}</p>
                <button type="button" class="btn btn-light-grey btn-lg m-2" style={{ fontSize: "1.9vw", border: "3px solid lightblue" }}>
                    $ <span class="badge badge-secondary">{price}</span>
                </button>
                <p style={{ color: "#ffb38a", backgroundColor: "#f5f5f5", textAlign: "center", fontSize: "1.5vw" }}>{category}</p>
                <p className="card-text">{description}</p>
                <Link to={"/product/"+id+"/"+title}><button className="btn btn-primary" onClick={() => { HandlerAddProduct() }}>Add to cart</button> </Link>
            </div>


            {/* <div className="card m-5 p-5 " style={{ width: "18rem" }}>
                    <img style={{height:"500px",width:"100%"}} className="card-img-top " src={image} alt="Card image cap" />
                    <div class="vertical-divider">AND</div>
                    <div className="card-body">
                        <p className="card-text">{title}</p>
                        <p className="card-text">${price}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                        <p className="card-text">{category}</p>
                    </div>
                  
                </div> */}

        </div>
    )

}

export default ProductDetails;