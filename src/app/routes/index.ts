import { Router } from 'express';
import { UserRoutes } from '../models/user/user.route';
import { CompanyRoutes } from '../models/company/company.route';
import { JobRoutes } from '../models/Job/job.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/company-management',
    route: CompanyRoutes,
  },
  {
    path: '/job',
    route: JobRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
