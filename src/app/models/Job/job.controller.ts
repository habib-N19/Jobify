import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { JobServices } from './job.service';

const createJob = catchAsync(async (req, res) => {
  const result = await JobServices.createJobInDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
});
const getAllJob = catchAsync(async (req, res) => {
  const result = await JobServices.getAllJobFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All jobs fetched successfully',
    data: result,
  });
});
const getSingleJobById = catchAsync(async (req, res) => {
  const result = await JobServices.getSingleJobFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job fetched successfully',
    data: result,
  });
});
const updateJob = catchAsync(async (req, res) => {
  const result = await JobServices.updateJobInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job updated successfully',
    data: result,
  });
});
const deleteJob = catchAsync(async (req, res) => {
  const result = await JobServices.deleteJobFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job deleted successfully',
    data: result,
  });
});
const getJobByCompany = catchAsync(async (req, res) => {
  const result = await JobServices.getJobByCompany(req.params.companyId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs fetched successfully',
    data: result,
  });
});
export const JobController = {
  createJob,
  getAllJob,
  getSingleJobById,
  updateJob,
  deleteJob,
  getJobByCompany,
};
