import { configureStore } from "@reduxjs/toolkit"
import BookReducers from "./reducers/BookReducer"
import AuthReducers from "./reducers/AuthReducer"
const store = configureStore({
    reducer: {
        books: BookReducers,
        authData:AuthReducers
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;