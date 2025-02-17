import { TCompany } from "./company.type";

export type TJob = {
	_id: string;
	title: string;
	description: string;
	company: TCompany;
	salary: number;
	location: string;
	createdAt: Date;
	updatedAt: Date;
	isDeleted: boolean;
};
export type TGetJobsResponse = {
	success: boolean;
	message: string;
	data: TJob[];
	total: number;
	page: number;
	pages: number;
};
export type TGetJobResponse = {
	success: boolean;
	message: string;
	data: TJob;
};
