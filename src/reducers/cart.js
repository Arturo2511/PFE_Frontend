import {
    ADD_TO_CART,
    REMOVE_FROM_CART } from "../constants/ActionTypes";


export default function cartReducer(state = {
    cart: []
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id_product
            if (state.cart.findIndex(product => product.id_product === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    cartAcc.push(product)
                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, sum: action.product.price }] }


        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}
