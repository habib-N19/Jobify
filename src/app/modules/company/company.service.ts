import { TCompany } from "./company.interface";
import { Company } from "./company.model";

const createCompanyIntoMongoDB = async (payload: TCompany) => {
	const result = await Company.create(payload);
	return result;
};
const getAllCompanyFromDB = async () => {
	const result = await Company.find();
	return result;
};
const getSingleCompanyFromDB = async (id: string) => {
	const result = await Company.findById(id);
	return result;
};
const updateCompanyInDB = async (id: string, payload: Partial<TCompany>) => {
	const result = await Company.findByIdAndUpdate({ _id: id }, payload, {
		new: true,
	});
	return result;
};
const deleteCompanyFromDB = async (id: string) => {
	const result = await Company.findByIdAndDelete(id);
	return result;
};

export const CompanyServices = {
	createCompanyIntoMongoDB,
	getAllCompanyFromDB,
	getSingleCompanyFromDB,
	updateCompanyInDB,
	deleteCompanyFromDB,
};
