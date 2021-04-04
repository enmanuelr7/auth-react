import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PublicRoute = ({component:Component, ...rest}) => {
    const { currentUser } = useAuth()
    // routeProps refers to match, location and history
    return (
        <Route {...rest} render={ routeProps => !currentUser ?
            <Component {...routeProps} /> : <Redirect to ="/" />}>
        </Route>
    )
}

export default PublicRoute;