import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter bg-pink">
            <h1>Newsletter</h1>
            <p>Get template updates from your favorite products.</p>
            <div className="newsletter__email">
                <input placeholder="Your Email"/>
                <button><i className='bx bxs-send' ></i></button>
            </div>
        </div>
    )
}

export default Newsletter
