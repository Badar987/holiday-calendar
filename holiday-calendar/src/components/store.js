import { configureStore } from "@reduxjs/toolkit";
import holidayReducer from "../redux/reducers/holidayReducer";

const store = configureStore({
  reducer: holidayReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // If you're using thunk middleware
});

export default store;
