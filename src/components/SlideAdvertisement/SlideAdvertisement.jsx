import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '@/components/Button'
import { slides } from './constant'
import NextArrow from '@/components/SliderComponent/NextArrow'
import PrevArrow from '@/components/SliderComponent/PrevArrow'

const SlideAdvertisement = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className='flex w-full justify-center'>
      <div className='relative w-full max-w-container px-container'>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className='relative h-96 overflow-hidden rounded-2xl bg-indigo-50'>
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className='h-full w-full cursor-pointer rounded-xl object-cover'
                draggable='false'
                onDragStart={(e) => e.preventDefault()}
              />
              {slide.button && <Button title='BOOK NOW' extraClass='absolute bottom-4 left-4' />}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SlideAdvertisement
