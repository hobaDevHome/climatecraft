import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import logo from "../../public/images/logo.png";
import { colors } from "../constants";

const AppTitle = () => {
  return (
    <Grid
      container
      xs={12}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}
      margin={0}
      padding={1}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: colors.white,
              fontSize: 30,
              fontFamily: "Fraunces",
            }}
          >
            Climate
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: colors.buttonYellow,
              fontSize: 30,
              fontFamily: "",
              marginLeft: 1,
            }}
          >
            Craft
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        container
        xs={0}
        sm={0}
        md={6}
        justifyContent={"end"}
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
        }}
        alignItems={"end"}
      >
        <img
          src={logo}
          style={{
            width: "25%",
            height: "auto",
            objectFit: "contian",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AppTitle;
