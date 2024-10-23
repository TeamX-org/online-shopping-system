import React from 'react'
import { Navigate } from 'react-router-dom'

import ProductRoutes from './views/product/ProductRoutes'
import HomeRoutes from './views/home/HomeRoutes'
import SessionRoutes from './views/session/SessionRoutes'

const RedirectRoute = [
    {
        path: '/',
        element: <Navigate to="/home" replace />
    },
]

const ErrorRoute = [
    {
        path: '*',
        element: <Navigate to="/session/404" replace />
    },
]

const routes = [
    ...HomeRoutes,
    ...ProductRoutes,
    ...SessionRoutes,
    ...RedirectRoute,
    ...ErrorRoute,
]

export default routes
