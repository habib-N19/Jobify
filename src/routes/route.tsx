import App from '@/App';

import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
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
                    element: <h2>company management</h2>,
                    children: [
                        {
                            path: ':id',
                            element: <h1>id</h1>
                        }
                    ]
                },
                {
                    path: '/dashboard/job-management',
                    element: <h2>job management</h2>,
                    children: [
                        {
                            path: ':id',
                            element: <h1>id</h1>
                        }
                    ]
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