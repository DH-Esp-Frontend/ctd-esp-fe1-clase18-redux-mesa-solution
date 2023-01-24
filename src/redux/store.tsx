import { configureStore} from "@reduxjs/toolkit";
import messageSlice from "../redux/slice";


const store = configureStore({
  reducer:messageSlice
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

