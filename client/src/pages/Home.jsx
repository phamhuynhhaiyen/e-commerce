import React from 'react'
import Categories from '../components/Categories'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import ProductCard from '../components/ProductCard'
import popularProduct from '../assets/popularProduct'
import Grid from '../components/Grid'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <>
            <HeroSlider/>
            <Categories/>
            <Section>
                <SectionTitle>Popular Product</SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={3}
                        smCol={1}
                        gap={1}
                    >
                    {
                        popularProduct.map((item, index)=>(
                            <ProductCard product={item} key={index}/>
                        ))
                    }
                    </Grid>
                </SectionBody>
            </Section>
            <Newsletter/>
        </>
    )
}

export default Home
