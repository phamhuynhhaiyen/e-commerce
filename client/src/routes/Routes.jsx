import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/catalog" exact component={Catalog}/>
            <Route path="/catalog/:id" exact component={Product}/>
            <Route path="/cart" exact component={Cart}/>
        </Switch>
    )
}

export default Routes
