import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/Login'
import Routes from '../routes/Routes'
import Footer from './Footer'
import Header from './Header'
import Register from '../pages/Register'
import { useSelector } from 'react-redux'

const Layout = () => {
    const user = useSelector(state => state.user.currentUser)
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
            <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
            <Route render={props => (
                <>
                    <Header />
                    <div className="main">
                        <Routes />
                    </div>
                    <Footer />
                </>
            )
            }
            />   
         </Switch>        
        </BrowserRouter>
    )
}

export default Layout
