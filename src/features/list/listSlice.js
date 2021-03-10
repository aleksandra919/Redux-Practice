import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
          },
    },
});

export const { addItem } = listSlice.actions;

export const selectList = state => state.list.items

export default listSlice.reducer