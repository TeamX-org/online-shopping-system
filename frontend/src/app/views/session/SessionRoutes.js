import React from 'react'

const NotFound = React.lazy(() => import('./NotFound'))

const SessionRoutes = [
    {
        path: '/session/404',
        element: <NotFound />,
    },
]

export default SessionRoutes
