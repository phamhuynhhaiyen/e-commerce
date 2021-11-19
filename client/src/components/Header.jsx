import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useSelector} from 'react-redux'
const menuNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Product",
        path: "/catalog"
    },
    {
        display: "Contact",
        path: "/contact"
    },
    {
        display: "Sign In",
        path: "/login"
    }
]
const Header = () => {
    const location = useLocation()
    const activeMenu = useRef(null)
    const menuToggle = () => activeMenu.current.classList.toggle('active')
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)

    return (
        <div className="header">
            <Link to="/" className="header__logo">Fashi.</Link>
            <div className="header__menu" ref={activeMenu}>
                {
                    menuNav.map((item, index) => (
                        <Link to={item.path} key={index} className={item.path === location.pathname ? `active` : ``}>
                            {item.display}
                        </Link>
                    ))
                }
            </div>
            <div className="header__icon">
                <Link to="/login">SIGN IN</Link>
                <i className="bx bx-menu" onClick={menuToggle}></i>
                <Link to="/"><i className='bx bx-search-alt-2' ></i></Link>
                <Link to="/"><i className='bx bxs-heart' ></i></Link>
                <Link to="/cart">
                    <i className='bx bxs-cart-alt' ></i>
                    {
                        quantity === 0 ? '' : <span>{quantity}</span>
                    }
                </Link>

            </div>
        </div>
    )
}

export default Header
