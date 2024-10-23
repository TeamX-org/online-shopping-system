import React from 'react'
import { authRoles } from '../../auth/authRoles'

const ProductView = React.lazy(() => import('./ProductView'))

const ProductRoutes = [
    {
        path: '/products',
        element: <ProductView />,
        auth: authRoles.productManagement,
        // children: [] // for nested routes
    },
]

export default ProductRoutes
