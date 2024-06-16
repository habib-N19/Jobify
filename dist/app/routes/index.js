"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const company_route_1 = require("../modules/company/company.route");
const job_route_1 = require("../modules/Job/job.route");
const auth_route_1 = require("../modules/auth/auth.route");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/company-management',
        protectedRoute: authMiddleware_1.protectedRoute,
        route: company_route_1.CompanyRoutes,
    },
    {
        path: '/job-management',
        route: job_route_1.JobRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
