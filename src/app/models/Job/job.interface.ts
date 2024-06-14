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
