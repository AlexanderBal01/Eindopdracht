import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as productenReducer } from './producten/productenSlice';
import { reducer as aanbevolenReducer } from './producten/aanbevolenSlice';
import { cartReducer } from './winkelmandje/cartReducer';
import { orderReducer } from './order/orderReducer';

const rootReducer = combineReducers({
    producten: productenReducer,
    aanbevolen: aanbevolenReducer,
    cart: cartReducer,
    order: orderReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});