/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";
import MovieDetail from "./MovieDetail";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByID } from "../redux/movieSlice";
import { Link } from "react-router-dom";

const index = () => {
  const dispatch = useDispatch();
  const watchListMovies = useSelector(({ watch }) => watch.data);
  const moviesDetails = useSelector(({ movie }) => movie.movieDetail);

  const [showPop, setShowPop] = useState(false);
  const [initValue, setInitValue] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    search:''
  });



  const handleCardClicked = (movieId) => {
    // getMovie(movieId);
    dispatch(getMovieByID(movieId));
    setShowPop(true);
  };

  const genCards = () => {
    let allCards = [];
    if (watchListMovies) {
      watchListMovies?.map((movie) => {
        allCards.push(<Card {...movie} cardClicked={handleCardClicked} />);
      });
    }
    return allCards;
  };

  let allCards = genCards();

  return (
    <div className="main">
      <h1 className="head">Movieflix</h1>
      <h1
        style={{ cursor: "pointer", color: "white" }}
      ><Link to="/">Home</Link></h1>

      {showPop ? (
        <MovieDetail  moviesDetails={moviesDetails} closePop={() => setShowPop(false)} />
      ) : null}

      <div className="cards">
        {initValue?.loading ? (
          <Loader />
        ) : allCards.length === 0 ? (
          <div className="error">
            No movie found...
            <i class="far fa-grin-beam-sweat"></i>
          </div>
        ) : (
          allCards
        )}
      </div>

      <div className="paginate">
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={initValue?.total}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={(newPage) => {
            setInitValue((old) => ({ ...old, page: newPage?.selected + 1 }));
          }}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default index;
