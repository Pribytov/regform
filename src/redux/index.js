import { configureStore } from '@reduxjs/toolkit';
import regReducer from './reg/reducer';

export const store = configureStore({
    reducer : {
        reg: regReducer,
    }
});