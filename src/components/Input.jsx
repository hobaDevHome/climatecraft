import TextField from "@mui/material/TextField";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { colors } from "../constants";

const Input = ({ handleSearch }) => {
  const [searchPharase, setSearchPhrase] = useState("");
  return (
    <div
      style={{
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextField
        size="small"
        value={searchPharase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(searchPharase);
          }
        }}
        sx={{
          paddingRight: 1,
          "& .MuiInputLabel-root": { color: "orange" },

          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "orange",
            },
          },
          "& .MuiInputBase-input": { color: "orange" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "orange",
            },
            "&:hover fieldset": {
              borderColor: "orange",
            },
            "&.Mui-focused fieldset": {
              borderColor: "orange",
            },
          },
        }}
        fullWidth
        id="outlined-basic"
        label="search by a city name or zip code"
        variant="outlined"
        endAdornment={
          <InputAdornment position="end">
            <ZoomInIcon size="large" style={{ color: "red" }} />
          </InputAdornment>
        }
      />
      <ColorButton
        variant="contained"
        onClick={() => handleSearch(searchPharase)}
      >
        Search
      </ColorButton>
    </div>
  );
};

export default Input;

const ColorButton = styled(Button)(({ theme }) => ({
  color: colors.purple1,
  fontWeight: "bold",
  backgroundColor: colors.buttonYellow,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
