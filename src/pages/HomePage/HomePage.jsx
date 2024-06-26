import React from "react";
import Contact from "@/components/Contact";
import SlideAdvertisement from "@/components/SlideAdvertisement";
import SlideFilm from "@/components/SlideFilm/SlideFilm";
import Button from "@/components/Button";
import Grandma from '@/assets/Grandma.jpg'; 
const movies = [
  {
    id: 1,
    poster: Grandma,
    ageRating: 'PG-13',
    format: '2D',
    title: 'Movie 1',
    trailerLink: 'https://example.com/trailer1',
  },
  {
    id: 2,
    poster: Grandma,
    ageRating: 'R',
    format: '3D',
    title: 'Movie 2',
    trailerLink: 'https://example.com/trailer2',
  },
  {
    id: 3,
    poster: Grandma,
    ageRating: 'PG',
    format: '2D',
    title: 'Movie 3',
    trailerLink: 'https://example.com/trailer3',
  },
  {
    id: 4,
    poster: Grandma,
    ageRating: 'R',
    format: 'IMAX',
    title: 'Movie 4',
    trailerLink: 'https://example.com/trailer4',
  },
  {
    id: 5,
    poster: Grandma,
    ageRating: 'PG-13',
    format: '3D',
    title: 'Movie 5',
    trailerLink: 'https://example.com/trailer5',
  },
  {
    id: 6,
    poster: Grandma,
    ageRating: 'R',
    format: '2D',
    title: 'Movie 6',
    trailerLink: 'https://example.com/trailer6',
  },
  {
    id: 7,
    poster: Grandma,
    ageRating: 'PG',
    format: 'IMAX',
    title: 'Movie 7',
    trailerLink: 'https://example.com/trailer7',
  },
  {
    id: 8,
    poster: Grandma,
    ageRating: 'PG-13',
    format: '3D',
    title: 'Movie 8',
    trailerLink: 'https://example.com/trailer8',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <SlideAdvertisement />
      <div>
        <h1 className="font-bold font-sans text-center px-5 py-10">NOW SHOWING</h1>
        <SlideFilm movies= {movies}/>
        <div className='flex justify-center py-10 content-center'>
          <Button title='SEE MORE' extraClass='text-yellow-500' href='/nowshowing' />
        </div>
      </div>
      <div>
        <h1 className="font-bold font-sans text-center px-5 py-10">COMING SOON</h1>
        <SlideFilm movies= {movies}/>
        <div className='flex justify-center py-10 content-center'>
          <Button title='SEE MORE' extraClass='text-yellow-500' href='/comingsoon' />
        </div>
      </div>
      <Contact />
    </div>
  );
}
