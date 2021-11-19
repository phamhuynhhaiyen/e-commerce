import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCard = props => {
    const product = props.product
    return (
        <div className="product-card">
            <div className="product-card__shape"></div>
            <img src={product.img}/>
            <div className="product-card__action">
                <i className='bx bx-cart-alt'></i>
                <Link to={`/catalog/${product._id}`}>
                    <i className='bx bx-search-alt-2' ></i>
                </Link>
                <i className='bx bx-heart'></i>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard

