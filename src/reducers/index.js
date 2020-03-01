import getProductsReducer from './getProductsReducer';
import setLikedProductReducer from './setLikedProductReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    products: getProductsReducer,
    liked: setLikedProductReducer
});

export default rootReducer;