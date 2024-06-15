import { Link, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div>
            <nav>
                <ul className='flex  justify-between items-center w-1/3 mx-auto'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/login'>Login</Link></li>

                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
