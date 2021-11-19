import React, { useState } from 'react'
import Section from '../components/Section'
import { useSelector } from 'react-redux'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)

    return (
        <div className="cart">
            <Section>
                <div className="cart__title">
                    <h1>YOUR BAG</h1>
                </div>
                <div className="cart__container">
                    <div className="cart__product">
                        {
                            cart.products.map((product) => (
                                <div className="cart__product__item" key={product._id}>
                                    <div className="cart__product__item__left">
                                        <img src={product.img} alt="" />
                                        <div className="cart__product__item__left__specific">
                                            <p><span>Product:</span> {product.title}</p>
                                            <div className={`bg-${product.color}`}></div>
                                            <p><span>Size:</span> {product.size}</p>
                                        </div>
                                    </div>
                                    <div className="cart__product__item__right">
                                        <div className="cart__product__item__right__quantity">
                                            <div className="cart__product__item__right__quantity__minus">
                                                <i className='bx bx-minus'></i>
                                            </div>
                                            <div className="cart__product__item__right__quantity__item">{product.quantity}</div>
                                            <div className="cart__product__item__right__quantity__plus">
                                                <i className='bx bx-plus' ></i>
                                            </div>
                                        </div>
                                        <div className="cart__product__item__right__price">
                                            {numberWithCommas(product.price * product.quantity)}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="cart__checkout">
                        <h1>ORDER SUMARY</h1>
                        <p><span>Subtotal:</span> {numberWithCommas(cart.total)}</p>
                        <p><span>Estimated shipping:</span> 30,000</p>
                        <p><span>Shipping discount</span> 30,000</p>
                        <h4><span>Total:</span> {numberWithCommas(cart.total)}</h4>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Cart
