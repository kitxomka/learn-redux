import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import counterBReducer from './counterBReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        counterB: counterBReducer 
    },
})