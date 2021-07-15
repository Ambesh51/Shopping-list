import React, { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import Button from './Button'
import { addToCartProduct } from '../redux/actions/productsActions'


function AddtoCart() {

    // const AddProductList= useSelector((state) => {state});
    const products = useSelector((state) => state.allProducts)
    const dispatch=  useDispatch();

    const Addproduct = products.addTocart;
    console.log('addProduct', Addproduct)

    function plusItem(value,id) {
        console.log('plusItem',value,id);
        dispatch(addToCartProduct({id:id,value:value}))
   
    }


    function amount() {
        var total = 0;
        for (var i of Addproduct) {
            if(i.count>1){
                console.log('count',i.count)
                total += (i.price*i.count)-i.price;
            }
            total += i.price;
        }

        return total;
    }

    var totalAmount = amount()

    // console.log(totalAmount);
    // var totalAmount=0;
    // for(var i=0; Addproduct.length;i++ ){
    //     console.log(Addproduct[i]);
    // }
    // console.log(totalAmount);

    return (<>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", width: "100%",paddingTop:"100px" }}>
            <div className="d-flex flex-column" style={{ width: "40%", alignItems: "center" }} >
                {
                    Addproduct.map((item) => {


                        return (<>
                            <div className="row p-2 m-2"  >
                                <div className="col-7" style={{ width: "", backgroundColor: "#f5f5f5" }} >
                                    <img style={{ height: "300px", width: "100%" }} className="card-img-top " src={item.image} alt="Card image cap" />
                                </div>

                                <div className="col-5" style={{ backgroundColor: "#fff", width: "100%" }}>
                                    <p className="card-text font-weight-bold " style={{ fontSize: "1vw" }}>{item.title}</p>
                                    <button type="button" class="btn btn-light-grey btn-lg m-2" style={{ fontSize: "1.9vw", border: "3px solid lightblue" }}>
                                        $ <span className="badge badge-secondary">{item.count>0?item.price * item.count:item.price}</span>
                                    </button><br />
                                    <Button plusItem={plusItem} id={item.id}/>

                                </div>

                            </div>

                        </>)
                    })
                }

            </div>
            <div>


                <div className="card p-2 m-2" >
                    <div className="card-body">
                        <h5 className="card-title">Total Amout</h5>
                        <hr />
                        <p class="card-text">No.of Items :{Addproduct.length}</p>

                        Amount
                        <button type="button" class="btn btn-light-grey btn-lg m-2" style={{ fontSize: "1vw", border: "3px solid lightblue" }}>
                            $ <span class="badge badge-secondary" style={{maxWidth:"200px"}}>{totalAmount}</span>
                        </button>
                        <button className="card-link btn btn-primary">BuyNow</button>
                        {/* <a href="#" class="card-link">Another link</a> */}
                    </div>
                </div>




            </div>
        </div>
    </>
    )
}

export default AddtoCart
