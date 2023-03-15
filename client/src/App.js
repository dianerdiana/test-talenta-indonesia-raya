import React, { Suspense } from 'react'
import Router from './router/Router'
import { routes as allRoutes } from './router/routes'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  )
}

export default App
