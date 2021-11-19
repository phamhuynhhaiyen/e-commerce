import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register">
            <div className="register__container">
                <p className="register__title">CREATE AN ACCOUNT</p>
                <form className="register__form">
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="text" placeholder="Username" required />
                    <input type="text" placeholder="Email" required />
                    <input type="text" placeholder="Password" required />
                    <input type="text" placeholder="Confirm password" required />
                    <p>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></p>
                    <div>
                        <button type="submit">CREATE</button>
                        <Link to="/login" className="register__form__link">OR SIGN IN</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
