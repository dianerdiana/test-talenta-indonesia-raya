// ** React Import
import { lazy } from 'react'

// ** Layout
const Layout = lazy(() => import('../../layout'))
const Fake = lazy(() => import('../../views/fake'))
const Express = lazy(() => import('../../views/express'))

const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Express />,
      },
      {
        path: '/fake',
        element: <Fake />,
      },
    ],
  },
]

export { routes }
