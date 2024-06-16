"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyServices = void 0;
const company_model_1 = require("./company.model");
const createCompanyIntoMongoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield company_model_1.Company.create(payload);
    return result;
});
const getAllCompanyFromDB = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const companies = yield company_model_1.Company.find().skip(skip).limit(limit);
    const total = yield company_model_1.Company.countDocuments();
    return {
        companies,
        total,
        page,
        pages: Math.ceil(total / limit),
    };
});
const getSingleCompanyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield company_model_1.Company.findById(id);
    return result;
});
const updateCompanyInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield company_model_1.Company.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteCompanyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield company_model_1.Company.findByIdAndDelete(id);
    return result;
});
const addJobToCompany = (companyId, jobId) => __awaiter(void 0, void 0, void 0, function* () {
    yield company_model_1.Company.findByIdAndUpdate(companyId, {
        $push: { jobs: jobId },
    });
});
const removeJobFromCompany = (companyId, jobId) => __awaiter(void 0, void 0, void 0, function* () {
    yield company_model_1.Company.findByIdAndUpdate(companyId, {
        $pull: { jobs: jobId },
    });
});
exports.CompanyServices = {
    createCompanyIntoMongoDB,
    getAllCompanyFromDB,
    getSingleCompanyFromDB,
    updateCompanyInDB,
    deleteCompanyFromDB,
    addJobToCompany,
    removeJobFromCompany,
};
