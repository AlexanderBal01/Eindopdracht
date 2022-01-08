import * as actionTypes from './cartConstants';

const initalState = {
    cartItems: [],
    quantity: 0,
}

export const cartReducer = (state = initalState, action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:

            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product);

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
                    quantity: state.quantity + item.qty
                }
            } else {
                return{
                    ...state,
                    cartItems: [...state.cartItems, item.product],
                    quantity: state.quantity + item.qty,
                };
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            };
        default:
            return state;
    }
}