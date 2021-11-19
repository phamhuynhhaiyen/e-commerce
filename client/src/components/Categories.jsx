import React from 'react'
import categories from '../assets/categories'
import Section from './Section'

const Categories = () => {
    return (
        <Section>
            <div className="categories">
                {
                    categories.map((item,index)=>(
                        <div className="categories__item" key={index}>
                            <img src={item.img} alt=""/>
                            <div className="categories__item__info">
                                <h1>{item.title}</h1>
                                <button>SHOP NOW</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}

export default Categories
