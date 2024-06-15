import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from "@/components/ui/sonner"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RouterProvider router={router}>
      </RouterProvider>
      {/* </PersistGate> */}
      <Toaster />
    </Provider>

  </React.StrictMode>,
)
