import React, { useRef, useState, useEffect } from 'react'
import categories from '../assets/categories'
import productSize from '../assets/product-size'
import productColor from '../assets/product-color'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import { publishRequest } from '../requestMethod'

const Catalog = () => {
    const filterRef = useRef(null)
    const filterActive = () => filterRef.current.classList.toggle("active")

    const initFilter = {
        cat: "",
        size: "",
        color: "",
    }
    const [filter, setFilter] = useState(initFilter)
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publishRequest.get('/products');
                setProducts(res.data)
                setFilterProducts(res.data)
            } catch (error) {

            }
        }
        getProducts()
    }, [])

    useEffect(() => {
        let temp = products
        if (filter.cat !== '') {
            temp = temp.filter(e => e.categories.find(categories => filter.cat.includes(categories)))
        }
        if (filter.size !== '') {
            temp = temp.filter(e => e.size.find(size => filter.size.includes(size)))
        }

        if (filter.color !== '') {
            temp = temp.filter(e => e.color.find(color => filter.color.includes(color)))
        }

        setFilterProducts(temp)

    }, [filter])

    return (
        <div className="catalog">
            <div className="catalog__filter" ref={filterRef}>
                <div className="catalog__filter__close" onClick={filterActive}>
                    <i className='bx bx-left-arrow-alt'></i>
                </div>
                <input type="text" placeholder="Search" />
                <div className="catalog__filter__title">
                    Categories
                </div>
                <div className="catalog__filter__content">
                    <button
                        onClick={() => setFilter({ ...filter, cat: '' })}
                        className={filter.cat === '' ? 'active' : ''}>
                        All
                    </button>
                    {
                        categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setFilter({ ...filter, cat: `${item.cat}` })}
                                className={filter.cat === item.cat ? 'active' : ''}>
                                {item.cat}
                            </button>
                        ))
                    }
                </div>
                <div className="catalog__filter__title">
                    Size
                </div>
                <div className="catalog__filter__content">
                    <button
                        onClick={() => setFilter({ ...filter, size: '' })}
                        className={filter.size === '' ? 'active' : ''}>
                        All
                    </button>
                    {
                        productSize.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setFilter({ ...filter, size: `${item.size}` })}
                                className={filter.size === item.size ? 'active' : ''}>
                                {item.display}
                            </button>
                        ))
                    }
                </div>
                <div className="catalog__filter__title">
                    Colors
                </div>
                <div className="catalog__filter__colors">
                    <button
                        onClick={() => setFilter({ ...filter, color: '' })}
                        className={filter.color === '' ? 'active' : ''}>
                        All
                    </button>
                    {
                        productColor.map((item, index) => (
                            <button
                                key={index}
                                className={`bg-${item.color} ${filter.color === item.color ? 'active' : ''}`}
                                onClick={() => setFilter({ ...filter, color: `${item.color}` })}></button>
                        ))
                    }
                </div>
                <button className="catalog__filter__clear" onClick={() => setFilter(initFilter)}>
                    Clear Filter
                </button>
            </div>
            <div className="catalog__content">
                <div className="catalog__content__filter">
                    <button onClick={filterActive}>Filter</button>
                    <hr />
                    <form>
                        <label>Sort by</label>
                        <select>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </select>
                    </form>
                </div>
                <Grid
                    col={3}
                    smCol={1}
                    gap={1}
                >
                    {
                        filterProducts.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))
                    }

                </Grid>
            </div>

        </div>
    )
}

export default Catalog
