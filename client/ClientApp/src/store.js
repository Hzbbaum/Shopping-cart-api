import { configureStore } from '@reduxjs/toolkit';
import listReducer from './smart components/listSlice'

export default configureStore({
  reducer: {
    list: listReducer,
  },
});