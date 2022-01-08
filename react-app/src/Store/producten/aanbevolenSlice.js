import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAanbevolen = createAsyncThunk(
    'producten/aanbevolenFetch',
    async() => {
        const response = await axios({
            url: "http://localhost:4000/aanbevolen",
            method: "GET",
        });
        return response;
    }
)

const aanbevolenSlice = createSlice({
    name: 'aanbevolen',
    initialState: {
        data: [],
        status: null,
        error: null,
    },

    extraReducers: {
        [fetchAanbevolen.pending]: (state, action) => {
            return { 
                ...state, 
                status: "pending", 
                data: [], 
                error: null 
            };
        },

        [fetchAanbevolen.fulfilled]: (state, action) => {
            return {
                ...state,
                status: "success",
                data: action.payload.data,
                error: null,
            };
        },

        [fetchAanbevolen.rejected]: (state, action) => {
            return { 
                ...state, 
                status: "error", 
                data: [], 
                error: action.payload 
            };
        }
    }
});

export const { reducer } = aanbevolenSlice;