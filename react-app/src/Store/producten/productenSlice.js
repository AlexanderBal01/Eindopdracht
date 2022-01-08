import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducten = createAsyncThunk(
    'producten/productenFetch',
    async() => {
        const response = await axios({
            url: "http://localhost:4000/producten",
            method: "GET",
        });
        return response;
    }
)

const productenSlice = createSlice({
    name: 'producten',
    initialState: {
        data: [],
        status: null,
        error: null,
    },

    extraReducers: {
        [fetchProducten.pending]: (state, action) => {
            return { 
                ...state, 
                status: "pending", 
                data: [], 
                error: null 
            };
        },

        [fetchProducten.fulfilled]: (state, action) => {
            return {
                ...state,
                status: "success",
                data: action.payload.data,
                error: null,
            };
        },

        [fetchProducten.rejected]: (state, action) => {
            return { 
                ...state, 
                status: "error", 
                data: [], 
                error: action.payload 
            };
        }
    }
});

export const { reducer } = productenSlice;