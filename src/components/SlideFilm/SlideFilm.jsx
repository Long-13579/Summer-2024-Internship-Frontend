import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/components/SlideFilm/SlideFilm.css'
import NextArrow from '@/components/SliderComponent/NextArrow'
import PrevArrow from '@/components/SliderComponent/PrevArrow'
import FilmCard from '../FilmCard/FilmCard'
import { LARGE_SCREEN, MEDIUM_SCREEN, SMALL_SCREEN } from './constant'

const SlideFilm = ({ films }) => {
  if (!films || films.length === 0) {
    return <div>Fail to fetch data</div>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: LARGE_SCREEN,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: MEDIUM_SCREEN,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: SMALL_SCREEN,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {films.map((film) => (
          <div key={film.id} className='px-2'>
            <FilmCard film={film} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlideFilm
