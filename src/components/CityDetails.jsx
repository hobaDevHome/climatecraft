import { colors } from "../constants";
import tempImage from "../../public/images/logo.png";
import tempImage2 from "../../public/images/house.png";

import Typography from "@mui/material/Typography";
import { HourData } from "./HourData";

const CityDetails = ({ city }) => {
  return (
    <div
      style={{
        backgroundColor: colors.purple2,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: colors.white,
        borderRadius: 8,
        boxShadow: "3px 3px 5px #140c11",
        width: "100%",
      }}
    >
      <img
        src={tempImage}
        alt=""
        style={{
          width: "150px",
          height: "80px",
          objectFit: "cover",
          display: "block",
          borderRadius: 8,
          position: "relative",
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.white,
          fontSize: 30,
          fontFamily: "Fraunces",
        }}
      >
        London
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.white,
          fontSize: 20,
          fontFamily: "Fraunces",
        }}
      >
        19o
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.white,
          fontSize: 16,
          fontFamily: "",
        }}
      >
        Rainy
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.white,
          fontSize: 16,
          fontFamily: "",
        }}
      >
        Max: 24 - Min : 18
      </Typography>
      <img
        src={tempImage2}
        alt=""
        style={{
          width: "200px",
          height: "150px",
          objectFit: "cover",
          display: "block",
          borderRadius: 8,
          position: "relative",
        }}
      />
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
          width: "80%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: colors.white,
            fontSize: 16,
            fontFamily: "",
          }}
        >
          Today : July , 21
        </Typography>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {[1, 2, 3, 4].map((e) => {
            return <HourData key={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
