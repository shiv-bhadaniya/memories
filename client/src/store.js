import { rootreducers } from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: rootreducers,  
});

export default store;

