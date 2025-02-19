import { configureStore, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },

    removeFromCart: (state, action) => {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
    },

    resetCart: (state) => {
      return [];
    },
  },
});

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addToProducts: (state, action) => {
      state.push(action.payload);
    },

    removeFromProducts: (state, action) => {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
    },

    resetProducts: () => {
      return [];
    },
  },
});

const userState = {
  currentUser: null,
  users: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    registerUser: (state, action) => {
      const { username, password } = action.payload;
      if (!state.users[username]) {
        state.users[username] = {
          password,
          cart: [],
        };
      }
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users[username];
      if (user && user.password === password) {
        state.currentUser = username;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null; // Clear the current user
    },
    updateUsers: (state, action) => {
      state.users[action.payload.currentUser] = {
        ...state.users[action.payload.currentUser],
        password: action.payload.newPassword,
      };
    },

    userAddToCart: (state, action) => {
      const currentUser = state.currentUser; // pid_id , qty
      if (currentUser) {
        const existingProduct = state.users[currentUser].cart.find(
          (item) => item.product_id === action.payload.product_id
        );
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.users[currentUser].cart.push({
            ...action.payload,
            quantity: 1,
          });
        }
      }
    },
    userRemoveFromCart: (state, action) => {
      const currentUser = state.currentUser;
      if (currentUser) {
        const existingProduct = state.users[currentUser].cart.find(
          (item) => item.product_id === action.payload.product_id
        );
        if (existingProduct) {
          if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1; // Decrement quantity if more than 1
          } else {
            state.users[currentUser].cart = state.users[
              currentUser
            ].cart.filter(
              (item) => item.product_id !== action.payload.product_id
            ); // Remove product if quantity is 1
          }
        }
      }
    },
    clearCart: (state) => {
      const currentUser = state.currentUser;
      if (currentUser) {
        state.users[currentUser].cart = []; // Clear the cart for the current user
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    user: userSlice.reducer,
  },
});

export { store };
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export const { addToProducts, removeFromProducts, resetProducts } =
  productSlice.actions;
export const {
  registerUser,
  loginUser,
  updateUsers,
  logoutUser,
  userAddToCart,
  userRemoveFromCart,
  clearCart,
} = userSlice.actions;
