import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CompanyRoutes } from '../modules/company/company.route';
import { JobRoutes } from '../modules/Job/job.route';

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
