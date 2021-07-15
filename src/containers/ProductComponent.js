import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';


function ProductComponent() {
    const products = useSelector((state) => state)
    console.log(products)
// const {id, title, image, price, category} =products
// console.log("id",id, title)
    // const { id, title } = products[0];
    // console.log(id, title);


    return (
        <>{
            products.allProducts.product.map(((item,key)=>{
                return   <div  id={key} className="justify-content-between">
                    <Link to={"/product/"+item.id}>
                <div className="card m-5 " style={{ width: "22rem" }}>
                    <img style={{height:"400px",width:"100%"}} className="card-img-top " src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">${item.price}</p>
                        <p className="card-text">{item.category}</p>
                    </div>
                  
                </div> 
                 </Link>
            </div>
            }))
        }
          
        </>




        // <div className="four column wide">
        //     <div className="ui link cards">
        //         <div className="card">
        //             <div className="image"></div>
        //             <div className="content">
        //                 <div className="header">{title }</div>
        //             </div>

        //         </div>
        //     </div>

        // </div>


    )
}

export default ProductComponent
