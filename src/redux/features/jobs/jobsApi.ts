import { baseApi } from "@/redux/api/baseApi";
import { TGetJobResponse, TGetJobsResponse } from "@/types";

const jobsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getJobs: builder.query<TGetJobsResponse, { page: number; limit: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: `/job-management?page=${page}&limit=${limit}`,
				method: "GET",
			}),
		}),
		getJobById: builder.query<TGetJobResponse, { jobId: string }>({
			query: (jobId) => ({
				url: `/job-management/${jobId}`,
				method: "GET",
			}),
		}),
		createJob: builder.mutation({
			query: (job) => ({
				url: `/job-management`,
				method: "POST",
				body: job,
			}),
		}),
		updateJob: builder.mutation({
			query: (job) => ({
				url: `/job-management/${job._id}`,
				method: "PATCH",
				body: job,
			}),
		}),
		deleteJob: builder.mutation({
			query: (jobId) => ({
				url: `/job-management/${jobId}`,
				method: "DELETE",
			}),
		}),
		getJobsByCompanyId: builder.query<TGetJobsResponse, { companyId: string }>({
			query: ({ companyId }) => ({
				url: `/job-management/${companyId}`,
				method: "GET",
			}),
		}),
	}),
});
export const {
	useGetJobsQuery,
	useGetJobByIdQuery,
	useCreateJobMutation,
	useUpdateJobMutation,
	useDeleteJobMutation,
	useGetJobsByCompanyIdQuery,
} = jobsApi;