import { SET_LIKED_PRODUCT, REMOVE_LIKED_PRODUCT } from '../actions';

const setLikedProductReducer = (state=[], action) => {
    switch (action.type) {
        case SET_LIKED_PRODUCT:
            return [
                ...state,
                action.product
            ]
        case REMOVE_LIKED_PRODUCT:
            return state.filter((item) => item !== action.product);
        default:
            return state    
    }
}

export default setLikedProductReducer;