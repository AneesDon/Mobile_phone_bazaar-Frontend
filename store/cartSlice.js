import { createSlice } from "@reduxjs/toolkit";

const  initialState = {

    products:[],
    totalPrice:0,
    discount:0,
    address:null
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isDuplicate = state.products.some((product) => {
        return product.productId === action.payload.productId;
      });

      if (!isDuplicate) {
        state.products.push(action.payload);
        state.totalPrice += action.payload.price;
        state.discount += Math.round(action.payload.price/action.payload.discount)
      }
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.productId === action.payload
      );
      if (index !== -1) {
        state.totalPrice -= state.products[index].price
        state.discount -= Math.round(state.products[index].price/state.products[index].discount)
        state.products.splice(index, 1);
      }
    },
    setAddress:(state, action)=>{

      state.address = action.payload

    }

  },
});

export const { addProduct, removeProduct, setAddress } = cartSlice.actions;

export default cartSlice.reducer;