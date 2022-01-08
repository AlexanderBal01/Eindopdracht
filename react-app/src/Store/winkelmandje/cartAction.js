import * as actionTypes from './cartConstants';
import axios from 'axios';

export const addToCart = (item, qty) => async (dispatch, getState) =>{
    const response = await axios({
        url: `http://localhost:4000/producten/${item.id}`,
        method: "GET",
        responseType: "json",
    });
    console.log(response);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: [
                response.data[0].id,
                response.data[0].productnaam,
                response.data[0].afbeelding,
                response.data[0].prijs,
            ],
            qty
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) =>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};