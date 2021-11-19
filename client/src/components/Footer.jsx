import React from 'react'
import Grid from './Grid'
import Section from './Section'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <Section>
                <Grid col={3} mdCol={2} smCol={1} gap={3}>
                    <div className="footer__left">
                        <div className="footer__left__logo">Fashi.</div>
                        <div className="footer__left__desc">There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even slightly believable.</div>
                        <div className="footer__left__social">
                            <a href="//www.facebook.com/phamhuynhhaiyen/" target="_blank">
                                <i className='bx bxl-facebook-circle' ></i>
                            </a>
                            <a href="//www.instagram.com/ph.haiyan/" target="_blank">
                                <i className='bx bxl-instagram' ></i>
                            </a>
                            <a href="#">
                                <i className='bx bxl-twitter' ></i>
                            </a>
                            
                        </div>
                    </div>
                    <div className="footer__center">
                        <div className="footer__center__title">Useful Links</div>
                        <div className="footer__center__listitem">
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/">Cart</Link>
                                <Link to="/">Man Fashion</Link>
                                <Link to="/">Woman Fashion</Link>
                                <Link to="/">Wishlist</Link>
                                
                            </div>
                            <div>
                                <Link to="/">My Account</Link>
                                <Link to="/">Order Tracking</Link>
                                <Link to="/">Wishlist</Link>
                                <Link to="/">Accessories</Link>
                                <Link to="/">Terms</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__right__title">Contact</div>
                        <div className="footer__right__item">
                            <i className='bx bxs-map'></i>
                            20/1B 449, Le Van Viet, Tang Nhon Phu A, Thu Duc.
                        </div>
                        <div className="footer__right__item">
                            <i className='bx bxs-phone' ></i>
                            +84776989265
                        </div>
                        <div className="footer__right__item">
                            <i className='bx bx-mail-send' ></i>
                            phamhuynhhaiyen1107@gmail.com
                        </div>
                    </div>
                </Grid>
            </Section>
        </div>
    )
}

export default Footer
