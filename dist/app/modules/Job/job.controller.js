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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = require("../../utils/sendResponse");
const job_service_1 = require("./job.service");
const company_service_1 = require("../company/company.service");
const createJob = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_service_1.JobServices.createJobInDB(req.body);
    yield company_service_1.CompanyServices.addJobToCompany(req.body.company, result._id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job created successfully',
        data: result,
    });
}));
const getAllJob = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = yield job_service_1.JobServices.getAllJobFromDB(page, limit);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All jobs fetched successfully',
        data: result.jobs,
        total: result.total,
        page: result.page,
        pages: result.pages,
    });
}));
const getSingleJobById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id.toString());
    const result = yield job_service_1.JobServices.getSingleJobFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job fetched successfully',
        data: result,
    });
}));
const updateJob = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('update', req.body, 'id', req.params.id);
    const result = yield job_service_1.JobServices.updateJobInDB(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job updated successfully',
        data: result,
    });
}));
const deleteJob = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobId = req.params.id;
    const result = yield job_service_1.JobServices.deleteJobFromDB(jobId);
    if (result && result.company) {
        yield company_service_1.CompanyServices.removeJobFromCompany(result.company.toString(), jobId);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Job deleted successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Job not found or already deleted',
            data: null,
        });
    }
}));
const getJobByCompany = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_service_1.JobServices.getJobByCompany(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Jobs fetched successfully',
        data: result,
    });
}));
exports.JobController = {
    createJob,
    getAllJob,
    getSingleJobById,
    updateJob,
    deleteJob,
    getJobByCompany,
};
