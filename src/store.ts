import { configureStore } from "@reduxjs/toolkit"
import BookReducers from "./reducers/BookReducer"
const store = configureStore({
    reducer: {
        books: BookReducers
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;