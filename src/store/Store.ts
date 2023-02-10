import {configureStore} from '@reduxjs/toolkit';
import {getImageSlice} from './Slice/RootSlice';

const store = configureStore({
  reducer: {
    images: getImageSlice.reducer,
  },
});

export type SelectorType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
