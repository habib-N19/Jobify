import App from '@/App';
import DashboardLayout from '@/components/layouts/dashboardLayout/DashboardLayout';
import Login from '@/pages/auth/Login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <h2>hello </h2>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    path: '/dashboard',
                    element: <h2>dashboard home</h2>
                },
                {
                    path: '/dashboard/company-management',
                    element: <h2>company management</h2>
                },
                {
                    path: '/dashboard/job-management',
                    element: <h2>job management</h2>
                },

            ]
        },
        {
            path: '/login',
            element: <Login />
        }
    ]
)
export default router;