import React from "react";
import {useSelector} from 'react-redux'

const Header = () => {
  const TotlaItem = useSelector((state) =>state.allProducts.addTocart); 
    //  const products =  useSelector((state) =>state)
  // console.log(products)k
// const {id, title, image, pric
  console.log('state-header',TotlaItem);
  return (
    <div className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark  justify-content-between" style={{padding:"10px", margin:"5px"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2  style={{color: 'white'}}>Shoping</h2>
       
      </nav>
      <p style={{color: 'white',maxWidth: "25%", border: "2px solid grey", paddingLeft:"10px"}}><span style={{fontSize: '30px'}}>🛒</span>
      {TotlaItem.length}</p>
    </div>
  );
};

export default Header;