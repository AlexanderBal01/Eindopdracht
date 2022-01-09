import * as actionTypes from './cartConstants';

const initalState = {
    cartItems: [],
}

export const cartReducer = (state = initalState, action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:

            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product); 
            
            if(existItem){
                existItem.qty = existItem.qty + item.qty;
                return{
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.product === existItem.product ? item : existItem),
                }
            } else {
                return{
                    ...state,
                    cartItems: [...state.cartItems, item],
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