import React from 'react'
import '../style/homePage.css'
import { Link } from 'react-router-dom'
import slide2 from '../../assets/headerSlides/271.jpg'
import slide3 from '../../assets/headerSlides/various-cosmetics-types-scattered-beige-table.jpg'
import slide1 from '../../assets/headerSlides/portrait-gorgeous-woman-applying-eyeshadow-with-make-up-brush.jpg'
import Slideshow from '../../components/slideShow'
import AnimatedWords from './Animation'


const Header = ({loading}) => {

  const slides = [
    <div className='header-slide'>
      <img  loading="lazy" onLoad={loading} src={slide1} alt='slide1' />
    </div>,
    <div className='header-slide'>
      <img  loading="lazy" onLoad={loading} src={slide2} alt='slide2' />
    </div>,
    <div className='header-slide'>
      <img  loading="lazy" onLoad={loading} src={slide3} alt='slide3' />
    </div>
  ];



  return (
    <>
      <div className='header-slides'>
        <Slideshow slides={slides} />
        <AnimatedWords/>
        <Link to='/products' className='button'>
          SHOP NOW
        </Link>
        <div className='blackFade'></div>
      </div>
      <button></button>
    </>
  )
}

export default Header