import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CompanyRoutes } from '../modules/company/company.route';
import { JobRoutes } from '../modules/Job/job.route';
import { AuthRoutes } from '../modules/auth/auth.route';

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
    path: '/job-management',
    route: JobRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
