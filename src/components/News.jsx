import React from "react";
import { Box, Typography } from "@mui/material";

const NewsTicker = ({ newsItems }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        justifyContent: "center",
        height: "100px",
        marginTop: "20px",
      }}
    >
      <Box>
        <Typography
          className="flex justify-center items-center"
          sx={{
            // backgroundImage: "linear-gradient(to bottom, grey, black)",
            background:
              "linear-gradient(to right, #FCD348 28%, #FEF5B6 51%, #FCD348 71%, #C59532 100%);",
            color: "#000000",
            fontWeight: "700",
            textAlign: "center",
            fontSize: "1.2vw",
            width: "200px",
            padding: "6px",
            height: "100%",
            fontFamily: "montserrat, sans-serif",
          }}
        >
          SWITZ NEWS
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "50px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          backgroundColor: "#EDE2D7",
          backdropFilter: "blur(15px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "6px",
            animation: "scroll 40s linear infinite",
            color: "white",
            fontSize: "2vw",
            textAlign: "center",
          }}
        >
          {newsItems.map((item, index) => (
            <Typography
              key={index}
              component="span"
              sx={{
                display: "inline-block",
                color: "white",
                fontSize: "1.3vw",
                fontWeight: "500",
                fontFamily: "montserrat, sans-serif",
              }}
            >
              {item.description}
            </Typography>
          ))}
        </Box>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default NewsTicker;
