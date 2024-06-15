
import { useLocation } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/rootLayout/RootLayout'
import DashboardLayout from './components/layouts/dashboardLayout/DashboardLayout'
import PrivateRoute from './components/layouts/dashboardLayout/PrivateLayout'

function App() {
  const location = useLocation()
  const isDashboard = location.pathname.includes('/dashboard')

  return (
    <div className=''>
      {
        isDashboard ? (

          <PrivateRoute >
            <DashboardLayout />
          </PrivateRoute>

        ) : (<RootLayout />)


      }
    </div>
  )
}

export default App
