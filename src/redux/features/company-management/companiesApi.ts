import { baseApi } from "@/redux/api/baseApi";
import { TGetCompaniesResponse, TGetCompanyResponse } from "@/types";

const companiesApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getCompanies: builder.query<
			TGetCompaniesResponse,
			{ page: number; limit: number }
		>({
			query: ({ page = 1, limit = 10 }) => ({
				url: `/company-management?page=${page}&limit=${limit}`,
				method: "GET",
			}),
		}),
		getCompanyById: builder.query<TGetCompanyResponse, { companyId: string }>({
			query: ({ companyId }) => ({
				url: `/company-management/${companyId}`,
				method: "GET",
			}),
		}),
		createCompany: builder.mutation({
			query: (company) => ({
				url: "/company-management/create-company",
				method: "POST",
				body: company,
			}),
		}),
		updateCompany: builder.mutation({
			query: ({ id, company }) => ({
				url: `/company-management/update/${id}`,
				method: "PUT",
				body: company,
			}),
		}),
		deleteCompany: builder.mutation({
			query: (companyId) => ({
				url: `/company-management/${companyId}`,
				method: "DELETE",
			}),
		}),
	}),
});
export const {
	useGetCompaniesQuery,
	useGetCompanyByIdQuery,
	useCreateCompanyMutation,
	useUpdateCompanyMutation,
	useDeleteCompanyMutation,
} = companiesApi;
