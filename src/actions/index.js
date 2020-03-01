import { PRODUCTS_API } from '../api/productsApi';

export const GET_PRODUCTS_DATA = 'GET_PRODUCTS_DATA';
export const SET_LIKED_PRODUCT = 'SET_LIKED_PRODUCT';
export const REMOVE_LIKED_PRODUCT = 'REMOVE_LIKED_PRODUCT';

export function getProductsData () {
    return async (dispatch) => {

        const response = await fetch(PRODUCTS_API, { method: 'GET' });
        const products = await response.json();

        dispatch ({
            type: GET_PRODUCTS_DATA,
            products
        });
    };   
}

export function setLikedProducts (product) {
    return {
        type: SET_LIKED_PRODUCT,
        product
    }
}

export function removeLikedProduct (product) {
    return {
        type: REMOVE_LIKED_PRODUCT,
        product
    }
}
