import { baseApi } from "@/redux/api/baseApi";

const apiSlice = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useLoginMutation } = apiSlice;
