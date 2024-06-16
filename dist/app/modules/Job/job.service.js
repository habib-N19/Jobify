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
exports.JobServices = void 0;
const job_model_1 = require("./job.model");
const createJobInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.create(payload);
    return result;
});
const getAllJobFromDB = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const jobs = yield job_model_1.Job.find().skip(skip).limit(limit).populate('company');
    const total = yield job_model_1.Job.countDocuments();
    return {
        jobs,
        total,
        page,
        pages: Math.ceil(total / limit),
    };
});
const getSingleJobFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findById(id).populate('company');
    return result;
});
const updateJobInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteJobFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findByIdAndDelete(id);
    return result;
});
const getJobByCompany = (companyId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(companyId);
    const result = yield job_model_1.Job.find({ company: companyId }).populate('company');
    return result;
});
exports.JobServices = {
    createJobInDB,
    getAllJobFromDB,
    getSingleJobFromDB,
    updateJobInDB,
    deleteJobFromDB,
    getJobByCompany,
};
