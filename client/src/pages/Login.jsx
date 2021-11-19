import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { login } from '../redux/apiCalls'
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {isFetching, error} = useSelector(state => state.user)

    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch, {username,  password})
    }

    return (
        <div className="login">
            <form className="login__form">
                <p className="login__form__title">SIGN IN</p>
                <input type="text" placeholder="Username" required onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={handleClick} disabled={isFetching}>LOGIN</button>
                {error && <span>Incorrect username or password</span>}
                <Link to="/">Do not you remember the password?</Link>
                <Link to="/register" className="login__form__link">OR CREATE A NEW ACCOUNT</Link>
            </form>
        </div>
    )
}

export default Login
