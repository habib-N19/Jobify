import { TJob } from './job.interface';
import { Job } from './job.model';

const createJobInDB = async (payload: TJob) => {
  const result = await Job.create(payload);
  return result;
};
const getAllJobFromDB = async () => {
  const result = await Job.find();
  return result;
};
const getSingleJobFromDB = async (id: string) => {
  const result = await Job.findById(id);
  return result;
};
const updateJobInDB = async (id: string, payload: Partial<TJob>) => {
  const result = await Job.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteJobFromDB = async (id: string) => {
  const result = await Job.findByIdAndDelete(id);
  return result;
};
const getJobByCompany = async (companyId: string) => {
  const result = await Job.find({ company: companyId });
  return result;
};

export const JobServices = {
  createJobInDB,
  getAllJobFromDB,
  getSingleJobFromDB,
  updateJobInDB,
  deleteJobFromDB,
  getJobByCompany,
};
