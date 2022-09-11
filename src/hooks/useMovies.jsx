import { useEffect, useState } from 'react';

import { MoviesService } from '../services/MoviesService';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getPopularMovies().then(({ data: { results } }) => {
      setMovies(results);
    });
  }, []);

  return movies;
};
