import { createSlice } from "@reduxjs/toolkit";
type AuthState = {
	user: object | null;
	token: string | null;
};
const initialState: AuthState = {
	user: null,
	token: null,
};
const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
