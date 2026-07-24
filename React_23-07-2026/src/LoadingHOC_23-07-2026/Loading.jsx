import MovieList from "./MovieList";
import withLoading from "./withLoading";

const MovieWithLoading = withLoading(MovieList);

function Loading() {
  return (
    <MovieWithLoading loading={true} />
  );
}

export default Loading;