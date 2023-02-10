import {createSlice} from '@reduxjs/toolkit';
import RNFS from 'react-native-fs';

var initialState: RNFS.ReadDirItem[] = [];

export const getImageSlice = createSlice({
  name: 'IMAGE',
  initialState,
  reducers: {
    getImages: (state, action: {payload: RNFS.ReadDirItem[]; type: string}) => {
      state = action.payload;
    },
  },
});

export const {getImages} = getImageSlice.actions;
export default getImageSlice.reducer;
