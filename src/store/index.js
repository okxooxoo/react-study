import { configureStore, createSlice } from '@reduxjs/toolkit';

// 찜한 전시회 데이터의 id를 저장하는 배열
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