import { MoviesList } from '../components/MoviesList';
import { useMovies } from '../hooks/useMovies';

export function Home() {
  const movies = useMovies();

  return (
    <div className="App">
      <MoviesList movies={movies} />
    </div>
  );
}
