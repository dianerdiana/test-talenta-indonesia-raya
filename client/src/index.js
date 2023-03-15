import React from 'react'
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

// ** Styles
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

// ** Fake Database
import './@fake-db'

// ** Redux Import
import { store } from './redux/store'
import { Provider } from 'react-redux'

// ** Routing
import { BrowserRouter } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

// ** Lazy load App
const LazyApp = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ToastContainer />
        <LazyApp />
      </Suspense>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
