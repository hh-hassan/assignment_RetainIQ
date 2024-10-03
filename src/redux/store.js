import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import tableReducer from './tableSlice';
import designReducer from './designSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    table: tableReducer,
    design: designReducer,
  },
});

export default store;