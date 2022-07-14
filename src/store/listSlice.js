import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: ''
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
});

export const listSelector = (state) => state.list.posts;
export default listSlice.reducer;
