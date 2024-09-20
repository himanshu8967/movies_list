import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-white text-center">No movies available.</p>;
  }

  return (
    <div className="p-4 min-h-screen bg-gray-900">
      {/* Enhanced Heading */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center mb-8 tracking-wider">
        Movie List
      </h1>

      {/* Movies Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            image={movie.image}
            movie={movie.movie}
            rating={movie.rating}
            imdb_url={movie.imdb_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
