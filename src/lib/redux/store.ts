import * as redux from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = redux.configureStore({
    reducer: rootReducer,
});

export default store;