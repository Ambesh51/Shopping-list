
import { ActionTypes } from "../constants/action-types";

const initialState ={
    product:[],
    addTocart:[]
}


export const productReducer = (state=initialState, {type, payload}) =>{

    switch (type) {



        case ActionTypes.SET_PRODUCTS:
            console.log('state',state);
            return {...state, product:payload};

            
            case ActionTypes.SELECTED_PRODUCTS:
                // console.log('state->',-1);
                // var index = 
                return state
            break;

                case ActionTypes.ADD_TO_PRODUCTS:
                   
                // state.addTocart.push(payload);
                // console.log('pay->',payload);
                console.log('state---->',state, "and payload is : " , payload);
                // state.addTocart.push(payload);
                // state.addTocart = [...state.addTocart, payload] ;
                // console.log("state",state)
                // var index = 
                return  {...state, addTocart : [...state.addTocart, payload]};

                break;
    
                case ActionTypes.ADD_TO_CART_PRODUCTS:
                        console.log('payload',payload.value);
                       var index = state.addTocart.findIndex((item)=> item.id == payload.id)
                   
                       state.addTocart[index]["count"]=payload.value;
                       console.log("state addTocart---->",state.addTocart)
                
                    // return {...state, addTocart: [{...state["addTocart"]["count"]}]}
        return {... state, addTocart:[...state.addTocart[index]["count"]]}               
                        break;

                case ActionTypes.DELETE_PRODUCT: 
                console.log("payload of delete",payload.id);
                var index = state.addTocart.findIndex((item)=>item.id == payload.id);
                console.log("index",index)
                state.addTocart.splice(index,1);
                console.log("state update", state.addTocart);


                return {...state, addTocart:[...state.addTocart]}

            default:
                return state;
    }
};

// export const selectedProductReducer = (state=initialState, action) =>{

//     switch (action.type) {
//         case ActionTypes.SELECTED_PRODUCTS:
//             console.log('state->',state);
//             // var t= state.map((item)=>{console.log(item) 
//             // })
//             return state
//             default:
//                 return state;
//     }
// };

