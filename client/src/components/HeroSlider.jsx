import React,{useState, useEffect}  from 'react'
import slider from '../assets/slider'

const HeroSlider = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = slider.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index]);

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    return (
        <div>
            <div className="hero-slider">
                {
                    slider.map((item, itemIndex) => {
                        let position = 'nextSlide'
                        if (itemIndex === index) {
                            position = 'activeSlide';
                        }
                        if (
                            itemIndex === index - 1 ||
                            (index === 0 && itemIndex === slider.length - 1)
                        ) {
                            position = 'lastSlide';
                        }
                        return (
                            <article key={item.id} className={`hero-slider__item ${position}`}>
                                <div className="hero-slider__item__left">
                                    <img src={item.img} alt=""/>
                                    <div className="shape bg-green"></div>
                                    
                                </div>
                                <div className="hero-slider__item__right">
                                    <div className="hero-slider__item__right__title">{item.title}</div>
                                    <p>{item.desc}</p>
                                    <button>Shop Now</button>
                                </div>
                            </article>
                        )
                    })
                }
                <i className='bx bx-chevron-left' onClick={()=>setIndex(index - 1)}></i>
                <i className='bx bx-chevron-right' onClick={()=>setIndex(index + 1)}></i>
            </div>
        </div>
    )
}

export default HeroSlider
