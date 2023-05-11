import sideBarSlice from "./slices/sideBarSlice";
import userSlice from "./slices/userSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        user: userSlice,
        sidebar: sideBarSlice
    }
})

export default store