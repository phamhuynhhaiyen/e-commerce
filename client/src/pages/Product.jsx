import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import { publishRequest } from '../requestMethod'
import numberWithCommas from '../utils/numberWithCommas'
import {useDispatch} from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Product = () => {
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        
        const getProduct = async () => {
            try {
                const res = await publishRequest.get(`/products/find/${id}`);
                setProduct(res.data)
                //console.log(res.data)
            } catch (error) {

            }
        }
        getProduct()
    }, [id])

    const handleClick = () =>{
        if(color!==""||size!==""){
            dispatch(
                addProduct({...product, quantity, color, size})
            )
        }else{
            alert("Please choose color and size!")
        }
    }

    return (
        <Section>
            <div className="product">
                <div className="product__image">
                    <img src={product.img} alt="" />
                </div>
                <div className="product__info">
                    <h1 className="product__info__title">{product.title}</h1>
                    <p className="product__info__desc">{product.desc}</p>
                    <h1 className="product__info__price">{numberWithCommas(product.price ? product.price : '')}</h1>
                    <div className="product__info__item">
                        <span>Size:</span>
                        <div>
                            {
                                product.size?.map((item, index) => (
                                    <button className={item===size ? 'active': ''} key={index} onClick={()=>setSize(item)}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <span>Color:</span>
                        <div>
                            {
                                product.color?.map((item, index) => (
                                    <button key={index} className={`bg-${item} ${item===color ? 'active': ''}`} onClick={()=>setColor(item)}></button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__quantity">
                        <div className="product__info__quantity__minus" onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)}>
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className="product__info__quantity__item">{quantity}</div>
                        <div className="product__info__quantity__plus" onClick={() => quantity === 10 ? setQuantity(10) : setQuantity(quantity + 1)}>
                            <i className='bx bx-plus' ></i>
                        </div>
                    </div>
                    <button className="product__info__addtoCart" onClick={handleClick}>
                        Add to cart
                    </button>
                </div>
            </div>
        </Section>
    )
}

export default Product
