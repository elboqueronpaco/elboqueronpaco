import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
        </Switch>
    )
}

export default Main
