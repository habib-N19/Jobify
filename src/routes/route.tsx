import App from '@/App';

import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import CompaniesDashboard from '@/pages/dashboard/companies/CompaniesDashboard';
import CompanyDetails from '@/pages/dashboard/companies/CompanyDetails';
import CreateCompany from '@/pages/dashboard/companies/CreateCompany';
import UpdateCompany from '@/pages/dashboard/companies/UpdateCompany';
import CreateJob from '@/pages/dashboard/jobs/CreateJob';
import JobDetails from '@/pages/dashboard/jobs/JobDetails';
import JobsDashboard from '@/pages/dashboard/jobs/JobsDashboard';
import UpdateJob from '@/pages/dashboard/jobs/UpdateJob';
import HomePage from '@/pages/home/HomePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                }
            ]
        },
        {
            path: '/dashboard',
            element: <App />,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/company-management',
                    element: <CompaniesDashboard />
                },

                {
                    path: '/dashboard/company-management/:id',
                    element: <CompanyDetails />
                },
                {
                    path: '/dashboard/company-management/add-company',
                    element: <CreateCompany />
                },
                {
                    path: '/dashboard/company-management/update/:id',
                    element: <UpdateCompany />
                }

                ,
                {
                    path: '/dashboard/job-management',
                    element: <JobsDashboard />,

                },
                {
                    path: '/dashboard/job-management/:id',
                    element: <JobDetails />
                },
                {
                    path: '/dashboard/job-management/add-job',
                    element: <CreateJob />
                },
                {
                    path: '/dashboard/job-management/update/:id',
                    element: <UpdateJob />
                }


            ]
        },
        {
            path: '/login',
            element: <Login />
        }
    ]
)
export default router;