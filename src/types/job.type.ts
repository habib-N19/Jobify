export type TJob = {
	_id: string;
	title: string;
	description: string;
	company: string;
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
