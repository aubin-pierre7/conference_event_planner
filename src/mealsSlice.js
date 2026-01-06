import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Petit déjeuner', cost: 50, selected: false },
    { name: 'Goûter', cost: 25, selected: false },
    { name: 'Déjeuner', cost: 65, selected: false },
    { name: 'Dîner', cost: 70, selected: false },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
    },
  },
});
export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;