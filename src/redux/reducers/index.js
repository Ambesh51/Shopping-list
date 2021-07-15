import {combineReducers} from 'redux';
import {productReducer
    // ,     selectedProductReducer
    }   from './productReducer'

const Rootreducers = combineReducers({
    allProducts: productReducer,
    // product: selectedProductReducer,
})

export default Rootreducers;