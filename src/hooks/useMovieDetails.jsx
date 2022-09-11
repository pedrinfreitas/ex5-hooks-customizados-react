import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MoviesService } from '../services/MoviesService';

export const useMovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    MoviesService.getById(movieId).then(({ data }) => {
      console.log(data);
      setMovie(data);
    });
  }, [movieId]);

  return movie;
};
