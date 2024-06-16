"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRoutes = void 0;
const express_1 = __importDefault(require("express"));
const job_controller_1 = require("./job.controller");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/create-job', authMiddleware_1.protectedRoute, job_controller_1.JobController.createJob);
router.get('/:id', authMiddleware_1.protectedRoute, job_controller_1.JobController.getSingleJobById);
router.put('/update/:id', authMiddleware_1.protectedRoute, job_controller_1.JobController.updateJob);
router.delete('/:id', authMiddleware_1.protectedRoute, job_controller_1.JobController.deleteJob);
router.get('/company/:id', authMiddleware_1.protectedRoute, job_controller_1.JobController.getJobByCompany);
router.get('/', job_controller_1.JobController.getAllJob);
exports.JobRoutes = router;
