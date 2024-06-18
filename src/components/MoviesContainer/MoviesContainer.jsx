import MovieShows from '@/components/MovieShows'

export default function MoviesContainer({ title, movies }) {
  return (
    <div className='my-10 w-full'>
      <h1 className='text-center text-4xl font-bold uppercase'>{title}</h1>
      {movies?.length > 0 && (
        <div className='mt-10 grid grid-cols-2 gap-8'>
          {movies.map((movie) => (
            <MovieShows key={movie.infor.id} movie={movie} />
          ))}
        </div>
      )}
      {movies?.length === 0 && (
        <div className='mt-10 w-full text-center'>There are currently no movies showing at this cinema</div>
      )}
    </div>
  )
}
