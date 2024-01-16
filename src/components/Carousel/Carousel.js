import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card1 from "../../assets/card1.svg";
import Card2 from "../../assets/card2.png";
import "./Carousel.css";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Carousel = ({ onClick, back }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (back) {
      setStyle("rotate-vertical");
      setTimeout(() => {
        setStyle("");
      }, 200);
    }
  }, [back]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "1rem",
        overflow: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        onClick={onClick}
        sx={{
          overflow: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <img
          src={Card1}
          alt="card"
          style={{
            transform: "rotate(270deg)",
          }}
          className={style}
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction} onClick={onClick}>
        <img
          src={Card2}
          alt="card"
          style={{
            transform: "rotate(270deg) scale(0.81)",
            marginTop: -25,
            marginLeft: -38,
            marginBottom: -25,
          }}
        />
      </TabPanel>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          "&>div": {
            margin: ".25rem",
          },
        }}
      >
        <div
          onClick={() => handleChange(0)}
          className={
            value === 0
              ? ["button", "active"].join(" ")
              : ["button", "inactive"].join(" ")
          }
        />
        <div
          onClick={() => handleChange(1)}
          className={
            value === 1
              ? ["button", "active"].join(" ")
              : ["button", "inactive"].join(" ")
          }
        />
      </Box>
    </Box>
  );
};

export default Carousel;
