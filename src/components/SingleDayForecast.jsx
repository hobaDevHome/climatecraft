// import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../constants";

const SingleDayForecast = ({ day, temp, state }) => {
  return (
    <div
      style={{
        backgroundColor: colors.purple3,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: colors.white,
        borderRadius: 8,
        boxShadow: "3px 3px 5px #140c11",
        width: 180,
      }}
    >
      <Typography variant="h6">{temp}</Typography>
      <img
        src={`../../public/images/${state}-icon.png`}
        alt=""
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          display: "block",
          borderRadius: 8,
          position: "relative",
        }}
      />

      <Typography>{day}</Typography>
    </div>
  );
};

export default SingleDayForecast;
