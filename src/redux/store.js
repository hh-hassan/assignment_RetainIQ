import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';
import designReducer from './designSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
    design: designReducer,
  },
});

export default store;