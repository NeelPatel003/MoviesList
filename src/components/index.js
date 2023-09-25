/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieByID,
  getMovieBySearch,
  getMovieList,
} from "../redux/movieSlice";
import { Route, Link } from "react-router-dom";
const index = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(({ movie }) => movie.movieDetail);

  const [showPop, setShowPop] = useState(false);
  const [initValue, setInitValue] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    search: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setInitValue((old) => ({ ...old, isLoading: true }));

      const params = {};

      if (initValue.page) {
        params.page = initValue.page;
      }

      if (initValue.search) {
        params.query = initValue.search;
      }

      const response = await dispatch(getMovieBySearch(params));

      const json = response?.payload !== undefined ? response.payload : null;

      if (json !== null) {
        setInitValue((old) => ({
          ...old,
          isLoading: false,
          data: json?.results,
          total: json?.total_results,
        }));
      } else {
        setInitValue((old) => ({ ...old, isLoading: true }));
      }
    };
    fetchData();
  }, [initValue.page, initValue.search]);

  useEffect(() => {
    const fetchData = async () => {
      setInitValue((old) => ({ ...old, isLoading: true }));

      const params = {};

      if (initValue.page) {
        params.page = initValue.page;
      }
      const response = await dispatch(getMovieList(params));

      const json = response?.payload !== undefined ? response.payload : null;

      if (json !== null) {
        setInitValue((old) => ({
          ...old,
          isLoading: false,
          data: json?.results,
          total: json?.total_results,
        }));
      } else {
        setInitValue((old) => ({ ...old, isLoading: true }));
      }
    };
    fetchData();
  }, [initValue.page]);

  const handleCardClicked = (movieId) => {
    // getMovie(movieId);
    dispatch(getMovieByID(movieId));
    setShowPop(true);
  };

  const genCards = () => {
    let allCards = [];
    if (initValue?.data) {
      initValue?.data?.map((movie) => {
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
     
      ><Link to="/watchList">WatchList</Link></h1>
      <Search
        getInputValue={(val) =>
          setInitValue((old) => ({ ...old, search: val }))
        }
        getSubmit={() => setInitValue((old) => ({ ...old }))}
      />

      {showPop ? (
        <MovieDetail
          moviesDetails={moviesDetails}
          closePop={() => setShowPop(false)}
        />
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
