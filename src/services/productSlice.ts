import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./Product.model";

//initial state
const initialState = {
  products: [],
  // addProduct: {},
  deleteProduct: [],
  loading: false,
  error: false,
  // category: [],
};

//redux-toolkit
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state) => {
      state.error = true;
      state.loading = false;
    },
    getProduct: (state: any, action: PayloadAction<Product>) => {
      state.error = false;
      state.loading = false;
      state.products = action.payload;
    },
    // addCateogry: (state: any, action: PayloadAction<any>) => {
    //   state.addCateogry = action.payload;
    //   // delete state.addProduct.Weight;
    //   // delete state.addProduct.Size;
    //   // delete state.addProduct.Height;
    //   // delete state.addProduct.Width;
    //   // delete state.addProduct.Length;
    // },
    // addProduct: (state, action: PayloadAction<Product>) => {
    //   return {
    //     ...state,
    //     addProduct: { ...state.addProduct, ...action.payload },
    //   };
    // },
    deleteProduct: (state: any, action: PayloadAction<any>) => {
      // state.deleteProduct.push(action.payload);

      if (!state.deleteProduct.includes(action.payload)) {
        state.deleteProduct.push(action.payload);
      } else {
        state.deleteProduct.splice(
          state.deleteProduct.indexOf(action.payload),
          1
        );
      }
    },
  },
});

export const {
  // addCateogry,
  setError,
  setLoading,
  // addProduct,
  getProduct,
  deleteProduct,
} = productSlice.actions;

export const productSelector = (state: { product: any }) => state.product;
export default productSlice.reducer;

export const api = axios.create({
  baseURL: "https://juniortest-kelmend-imeri.000webhostapp.com/scandiwebPHP/",
});

// fetch all products
export function fetchProduct() {
  return async (dispatch: any) => {
    await api
      .get("api.php", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response: any) => {
        dispatch(getProduct(response.data));
      })
      .catch((er: any) => {
        dispatch(setError());
      });
  };
}
