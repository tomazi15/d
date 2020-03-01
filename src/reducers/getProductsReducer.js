import { GET_PRODUCTS_DATA } from '../actions';

const getProductsReducer = (state=[], action) => {
    switch (action.type) {
        case GET_PRODUCTS_DATA:
            return state = action.products    
        default:
            return state    
    }
}

export default getProductsReducer;