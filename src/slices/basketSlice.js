import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      //itemIndex will return -1 if the item is not in the cart, otherwise it will return the index of the item.
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);


      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1
      }

      // state.cartItems.push(action.payload);

      // state.items = [...state.items, action.payload]
    },


    reduceCartItemQuantity: (state, action) => {

      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);


      if ( itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity -= 1

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },


    removeFromCart: (state, action) => {
      
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);

      let newBasket = [...state.cartItems,]

      if (index >= 0) {
        //item existes in the basket
        newBasket.splice(index, 1)
        // alert("removed from cart")
      } else {
        console.warn(`Can not remove product (id: ${action.payload.id}) as its not in the cart`)
      }

      state.cartItems = newBasket;
    },
  },
});



export const { addToCart, reduceCartItemQuantity, removeFromCart } = cartSlice.actions;


// state.cartTotalQuantity = state.cartItems.reduce( (total,item) => ( total + item.cartQuantity, 0 ))

// Selectors - This is how we pull information from the Global store slice
export const selectCartTotalQuantity = (state) => state.basket.cartItems.reduce((CountPerItem, item) => CountPerItem + item.cartQuantity, 0);

export const selectItems = (state) => state.basket.cartItems;

export const selectCartQuantity = (state) => state.basket.cartItems.map((items) => items.cartQuantity);

export const selectTotalAmount = (state) => state.basket.cartItems.reduce((total, item) => total + (item.cartQuantity * item.price), 0)


export default cartSlice.reducer;
