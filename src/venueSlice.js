// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "",
      name: "Salle de conférence (Capacité:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "",
      name: "Salle d'auditorium (Capacité:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "",
      name: "Salle de présentation (Capacité:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "",
      name: "Grande salle de réunion (Capacité:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "",
      name: "Petite salle de réunion (Capacité:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Salle d'auditorium (Capacité:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});
export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;