import { baseApi } from "@/redux/api/baseApi";

const apiSlice = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userInfo) => ({
				url: "/auth/login",
				method: "POST",
				body: userInfo,
			}),
		}),
	}),
});

export const { useLoginMutation } = apiSlice;
