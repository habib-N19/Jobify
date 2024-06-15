import { baseApi } from "@/redux/api/baseApi";

const companiesApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getCompanies: builder.query({
			query: () => ({
				url: "/company-management",
				method: "GET",
			}),
		}),
		getCompanyById: builder.query({
			query: (companyId) => ({
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
			query: (company) => ({
				url: `/company-management/${company._id}`,
				method: "PATCH",
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
