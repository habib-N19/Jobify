import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseQuery = fetchBaseQuery({
	baseUrl: "https://jobify-rt4m.onrender.com/api/v1",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});
export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
