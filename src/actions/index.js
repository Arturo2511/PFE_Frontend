import * as types from '../constants/ActionTypes'
import store from "../store";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    fetch('http://localhost:3030/article/')
          .then(res => {
              return res.json()
           })
          .then(products => { 
                dispatch(receiveProducts(products));
                return products;
           });
}
export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})

//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product) => (dispatch) => {
    toast.success("Article ajouté au panier");
        dispatch(addToCartUnsafe(product))

}
export const addToCartUnsafe = (product) => ({
    type: types.ADD_TO_CART,
    product
});
export const removeFromCart = product_id => ({
    type: types.REMOVE_FROM_CART,
    product_id
});

// Filters
export const filterBrand = (brand) => ({
    type: types.FILTER_BRAND,
    brand
});
export const filterColor = (color) => ({
    type: types.FILTER_COLOR,
    color
});
export const filterPrice = (value) => ({
    type: types.FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});

