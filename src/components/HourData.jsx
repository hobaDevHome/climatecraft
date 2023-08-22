import tempImage3 from "../../public/images/rain1.png";
import Typography from "@mui/material/Typography";
import { colors } from "../constants";

export const HourData = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: colors.white,
          fontSize: 16,
          fontFamily: "",
          margin: 1,
        }}
      >
        10 AM
      </Typography>
      <img
        src={tempImage3}
        alt=""
        style={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
          display: "block",
          borderRadius: 8,
          position: "relative",
        }}
      />
    </div>
  );
};
