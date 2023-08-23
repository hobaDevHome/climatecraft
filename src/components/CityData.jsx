import Grid from "@mui/material/Grid";

import Input from "./Input";
import { useState } from "react";

import CityDetails from "./CityDetails";
import FiveDaysComponent from "./FiveDaysComponent";

// import Video from "./Video";
import axios from "axios";

import { colors } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";

const apiKey = "tkS7oaysfF2qKbLjlgGI6bKGHipxekBH";

const city = { id: 1, name: "cairo", temp: "33" };

const CityData = () => {
  const [searchPharase, setSearchPhrase] = useState("");
  const [msg, setMsg] = useState("");

  const getLocationKey = (city) => {
    let keyQuery = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    let key = "";

    axios
      .get(keyQuery, {
        headers: {
          "Access-Control-Allow-Credentials": true,
        },
        responseType: "json",
      })
      .then((response) => {
        console.error("key response", response.data[0].Key);
      });

    // axios
    //   .get(KeyQuery)
    //   .then((response) => {
    //     console.error("key response", response.data[0].Key);
    //     key = response.data[0].Key;
    //     console.log("key", key);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    // let cityQuery = `http://dataservice.accuweather.com/currentconditions/v1/127164?apikey=tkS7oaysfF2qKbLjlgGI6bKGHipxekBH`;
    // axios
    //   .get(cityQuery)
    //   .then((response) => {
    //     console.error("city response", response);
    //     // console.log("key", key);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };
  const handleSearch = (e) => {
    setSearchPhrase(e);
    getLocationKey(searchPharase);
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
