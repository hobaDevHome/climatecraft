import { Box } from "@mui/material";

import SingleDayForecast from "./SingleDayForecast";

const SlidingComponent = ({ contentPropsList }) => {
  const slidingContentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  const scrollableContentStyles = {
    width: "100%",
    maxHeight: "60vh",
    overflow: "auto",
    marginBottom: "16px",
  };

  return (
    <Box style={slidingContentStyles}>
      <Box style={scrollableContentStyles} className="scrollable-content">
        {contentPropsList.map((contentProps, index) => (
          <Box key={index} width="100%" marginBottom="16px">
            <SingleDayForecast {...contentProps} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SlidingComponent;
