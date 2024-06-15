import { baseApi } from "@/redux/api/baseApi";
import { TGetJobsResponse } from "@/types";

const jobsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getJobs: builder.query<TGetJobsResponse, { page: number; limit: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: `/job-management?page=${page}&limit=${limit}`,
				method: "GET",
			}),
		}),
	}),
});
export const { useGetJobsQuery } = jobsApi;
