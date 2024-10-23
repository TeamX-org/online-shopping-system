import React from 'react'
import { authRoles } from '../../auth/authRoles'

const HomeView = React.lazy(() => import('./HomeView'))

const HomeRoutes = [
    {
        path: '/home',
        element: <HomeView />,
        auth: authRoles.home,
        // children: [] // for nested routes
    },
]

export default HomeRoutes


