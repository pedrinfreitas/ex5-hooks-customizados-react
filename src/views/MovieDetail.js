import { useMovieDetails } from '../hooks/useMovieDetails';

export default function MovieDetail() {
  const movie = useMovieDetails();

  return (
    <section>
      <h1>{movie.title}</h1>

      <section>
        <p>{movie.overview}</p>
      </section>
    </section>
  );
}
