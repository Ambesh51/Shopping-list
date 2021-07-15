import React, { useState,useEffect } from 'react';
import { deleteProduct } from '../redux/actions/productsActions'
import {useDispatch  } from 'react-redux'

function Button({plusItem,id}) {
    const [additem, setAdditem] = useState(1);
    const dispatch = useDispatch();

    function HandleAdditem() {
        setAdditem((prev)=>prev + 1)        
    }

    function HandleDeleteItem(id){
        console.log("id",id)
            dispatch(deleteProduct({id:id}));
    }

    useEffect(()=>{
       
        plusItem(additem,id);
       
    },[additem]);

    return (
        <div>
            <button className="btn btn-primary btn-sm  m-3" onClick={() => { HandleAdditem() }} >+</button>
            <input type="text" className="m-1" value={additem} style={{ width: "20px", border: "none" }} />
            <button className="btn btn-primary btn-sm  m-3" onClick={() => { setAdditem(additem - 1) }}>-</button>
          <button className="btn btn-primary btn-sm"onClick={() =>{HandleDeleteItem(id)}}>Delete</button>
        </div>
    )
}

export default Button
