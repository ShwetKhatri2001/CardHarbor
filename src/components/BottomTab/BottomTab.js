import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "../../assets/home.svg";
import CatalogueIcon from "../../assets/catalogue.svg";
import HistoryIcon from "../../assets/history.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const BottomTab = ({ handleChange, value }) => {
  const handleTabChange = (e, val) => {
    handleChange(e, val);
  };
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        background:
          "linear-gradient(to top, rgba(19, 27, 49, 0.92) 21.76%, rgba(47, 57, 91, 0.92) 97.66%)",
        borderRadius: "3rem 3rem 0 0",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <IconButton
        onClick={(e) => handleTabChange(e, "1")}
        sx={{
          color: "#fff",
          background:
            value === "1"
              ? "linear-gradient(201.63deg, #5D9EFF 7.83%, #7751FD 90.7%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <img src={HomeIcon} alt="Home" />
      </IconButton>
      <IconButton
        onClick={(e) => handleTabChange(e, "2")}
        sx={{
          color: "#fff",
          background:
            value === "2"
              ? "linear-gradient(201.63deg, #5D9EFF 7.83%, #7751FD 90.7%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <img src={CatalogueIcon} alt="Catalogue" />
      </IconButton>
      <IconButton
        onClick={(e) => handleTabChange(e, "3")}
        sx={{
          color: "#fff",
          background:
            value === "3"
              ? "linear-gradient(201.63deg, #5D9EFF 7.83%, #7751FD 90.7%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <img src={HistoryIcon} alt="History" />
      </IconButton>
      <IconButton
        onClick={(e) => handleTabChange(e, "4")}
        sx={{
          color: "#fff",
          background:
            value === "4"
              ? "linear-gradient(201.63deg, #5D9EFF 7.83%, #7751FD 90.7%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <MenuOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default BottomTab;
