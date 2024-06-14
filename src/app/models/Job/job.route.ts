import express from 'express';
import { JobController } from './job.controller';

const router = express.Router();
router.post('/create-job', JobController.createJob);
router.get('/:jobId', JobController.getSingleJobById);
router.patch('/:jobId', JobController.updateJob);
router.delete('/:jobId', JobController.deleteJob);
router.get('/:companyId', JobController.getJobByCompany);
router.get('/', JobController.getAllJob);
export const JobRoutes = router;
