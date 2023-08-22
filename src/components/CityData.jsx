import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import Input from "./Input";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectStatus,
  selectError,
  selectTotal,
} from "../store/movieSlice";
import CityDetails from "./CityDetails";
import FiveDaysComponent from "./FiveDaysComponent";

import Video from "./Video";

import { colors } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";

const apiKey = "18a85a90";

const city = { id: 1, name: "cairo", temp: "33" };

const CityData = () => {
  const [searchPharase, setSearchPhrase] = useState("");
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const getMovies = useCallback((page = 1) => {
    if (searchPharase === "") {
      setMsg("");
    } else {
      setMsg("");

      let query = `http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=${page}`;

      dispatch(fetchMovies(query));

      if (status === "failed") {
        setMsg(error);
      }
    }
  });
  useEffect(() => {
    getMovies(1);
  }, [searchPharase, dispatch]);

  const handleSearch = (e) => {
    setSearchPhrase(e);

    getMovies(1);
  };

  return (
    <Grid container item xs={12} padding={1}>
      {/* search and input section  */}
      <Grid
        item
        xs={12}
        padding={1}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Input handleSearch={handleSearch} />
        <div style={{ color: colors.white }}>{/* <p>{msg}</p> */}</div>
        {/* <Video /> */}
      </Grid>
      {/* loading section  */}

      {status === "loading" && (
        <Grid
          item
          xs={12}
          padding={1}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <CircularProgress />
        </Grid>
      )}

      {/* city details section  */}
      <Grid
        item
        container
        xs={12}
        padding={1}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="row"
      >
        {/* ////////// city details grid /////////////// */}
        <Grid
          item
          xs={8}
          padding={1}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <CityDetails city={city} />
        </Grid>
        {/* /// 5 days grid ////// */}
        <Grid
          item
          xs={4}
          padding={1}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <FiveDaysComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityData;
