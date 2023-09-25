import { MdDone } from "react-icons/md";
import { watchList } from "../redux/watchListSlice";
import { useDispatch, useSelector } from "react-redux";
import { findIdInArray } from "../helper";

const MovieDetail = (props) => {
  const { moviesDetails, closePop } = props;

  const watchListMovies = useSelector(({ watch }) => watch.data);


  const dispatch = useDispatch();
  const handleWatchList = () => {
    dispatch(watchList(moviesDetails));
  };
  return (
    <div className="show-expand">
      <div className="show-content">
        <MdDone onClick={closePop} />

        <div className="show-poster">
          <span className="show-poster-bg">
            <img
              src={
                moviesDetails.Poster !== "N/A"
                  ? `http://image.tmdb.org/t/p/w1280/${moviesDetails.backdrop_path}`
                  : "https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image"
              }
              alt={moviesDetails.Title}
            />
          </span>
          <span className="show-poster-main">
            <img
              src={
                moviesDetails.Poster !== "N/A"
                  ? `http://image.tmdb.org/t/p/w1280${moviesDetails.poster_path}`
                  : "https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image"
              }
              alt={moviesDetails.Title}
            />
          </span>
        </div>

        <div className="show-detail">
          <h2>{moviesDetails.original_title}</h2>
          <ul className="show-tags">
            <li className="show-year">{moviesDetails.release_date}</li>
            <li className="show-year">{moviesDetails.original_language}</li>
          </ul>
          <div class="show-plot">
            <p>{moviesDetails.overview}</p>
          </div>

          <div class="show-credits">
            <p>
              <strong>Original Title:</strong> {moviesDetails.original_title}
            </p>
            <p>
              <strong>Popularity:</strong> {moviesDetails.popularity || "N/A "}
            </p>
            <p>
              <strong>Vote Average:</strong> {moviesDetails.vote_average}
            </p>
            <p>
              <strong>Vote Count:</strong> {moviesDetails.vote_count}
            </p>
            <p>
              <strong>Original Language:</strong>{" "}
              {moviesDetails.original_language}
            </p>
          </div>
          <button
            class="heart-button"
            onClick={() => {
              handleWatchList();
            }}
            disabled={findIdInArray(watchListMovies,moviesDetails.id )}
          >
            {findIdInArray(watchListMovies,moviesDetails.id) ? 'Already in watchList' : 'Add to WatchList'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
