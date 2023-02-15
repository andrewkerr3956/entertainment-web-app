import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "src/types/User";
import initialState from "../initialState";

const userSlice = createSlice({
    name: "user",
    initialState: initialState.user,
    reducers: {
        loginUser(state: any, action: PayloadAction<User>) {
            state.username = action.payload.username
        }
    }
})

export const { loginUser } = userSlice.actions;
export default userSlice;