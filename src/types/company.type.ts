import { TJob } from "./job.type";

export type TCompany = {
	_id: string;
	name: string;
	industry: string;
	contactEmail: string;
	address: string;
	jobs: TJob[];
	createdAt: Date;
	updatedAt: Date;
	isDeleted: boolean;
};
export type TGetCompaniesResponse = {
	success: boolean;
	message: string;
	data: TCompany[];
	total: number;
	page: number;
	pages: number;
};
export type TGetCompanyResponse = {
	success: boolean;
	message: string;
	data: TCompany;
};
