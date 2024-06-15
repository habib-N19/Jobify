
import { useLocation } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/rootLayout/RootLayout'
import DashboardLayout from './components/layouts/dashboardLayout/DashboardLayout'

function App() {
  const location = useLocation()
  const isDashboard = location.pathname.includes('/dashboard')

  return (
    <div className=''>
      {
        isDashboard ? (<DashboardLayout />) : (<RootLayout />)


      }
    </div>
  )
}

export default App
