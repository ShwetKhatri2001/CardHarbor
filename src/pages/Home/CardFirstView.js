import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import avatar from "../../assets/avatar.svg";

const CardFirstView = ({ onClick, back }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Bank
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Cards
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#94A3D3",
              fontWeight: "bold",
            }}
          >
            Balance
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              color: "rgba(255,255,255)",
              fontWeight: "bold",
            }}
          >
            $2,748.00
          </Typography>
        </Box>
        <Box>
          <Avatar src={avatar} />
        </Box>
      </Box>
      <Carousel onClick={onClick} back={back} />
    </Box>
  );
};

export default CardFirstView;
