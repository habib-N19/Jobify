import express from 'express';
import { JobController } from './job.controller';

const router = express.Router();
router.post('/create-job', JobController.createJob);
router.get('/:id', JobController.getSingleJobById);
router.put('/update/:id', JobController.updateJob);
router.delete('/:id', JobController.deleteJob);
router.get('/company/:id', JobController.getJobByCompany);
router.get('/', JobController.getAllJob);
export const JobRoutes = router;
