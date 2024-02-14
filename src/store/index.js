import { configureStore, createSlice } from '@reduxjs/toolkit';

const starDatas = createSlice({
	name: 'starDatas',
	initialState: [],
	reducers: {
		push: (state, action) => {
			const id = action.payload;
			return [...state, id];
		},
		pop: (state, action) => {
			const id = action.payload;
			return state.filter(itemId => itemId !== id);
		},
	}
});

export const { push, pop } = starDatas.actions;

export default configureStore({
	reducer: {
		starDatas: starDatas.reducer,
	}
})