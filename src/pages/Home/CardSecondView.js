import { Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Card1 from "../../assets/card1.svg";
import CardBack from "../../assets/cardback.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HistoryCard from "../../components/HistoryList/HistoryList";
import HistoryIcon from "../../assets/history.svg";
import ShareIcon from "../../assets/share.svg";

const CardSecondView = ({ onClick }) => {
  const [size, setSize] = useState(0);
  const [cardHeight, setCarHeight] = useState(25);
  const [flip, setFlip] = useState(false);
  const [load, setLoad] = useState(true);
  const [style, setStyle] = useState("");

  useLayoutEffect(() => {
    if (size === 1) {
      setStyle("midSize");
    }
    if (size === 2) {
      setStyle("largeSize");
    }
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 200);
  }, []);

  const handleHeight = () => {
    if (size === 0) {
      setCarHeight(35);
      setSize(1);
    }
    if (size === 1) {
      setCarHeight(85);
      setSize(2);
    }
    if (size === 2) {
      setCarHeight(25);
      setSize(0);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        gap: 3,
        marginTop: size === 0 ? -4 : 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
        }}
      >
        {(size === 1 || size === 2) && (
          <>
            <KeyboardBackspaceIcon
              sx={{
                color: "#fff",
                fontSize: "2rem",
              }}
              onClick={onClick}
            />
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}
              >
                Salary Card
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {size === 0 && (
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flex: 1 }}>
            <KeyboardBackspaceIcon
              sx={{
                color: "#fff",
                fontSize: "2rem",
              }}
              onClick={onClick}
            />
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Salary
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Card
            </Typography>
          </Box>
        </Box>
      )}

      <>
        <Box
          onClick={() => {
            setFlip((val) => !val);
          }}
        >
          {!flip ? (
            <img
              src={Card1}
              alt="card"
              style={{ width: "20rem" }}
              className={load && "rotate-horizontal"}
            />
          ) : (
            <img
              src={CardBack}
              alt="card"
              style={{ width: "20rem" }}
              className="fadeAnimation"
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
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
            <Button
              variant="outlined"
              sx={{
                padding: "1rem",
                marginRight: "1rem",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
                borderRadius: ".75rem",
              }}
            >
              <img src={HistoryIcon} alt="History" />
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "1rem",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
                borderRadius: ".75rem",
              }}
            >
              <img src={ShareIcon} alt="History" />
            </Button>
          </Box>
        </Box>
      </>
      <Box
        sx={{
          background: "#18223d",
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: `${cardHeight}vh`,
          borderRadius: "3rem 3rem 0 0",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        className={style}
        onClick={handleHeight}
      >
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <HistoryCard />
        </Box>
      </Box>
    </Box>
  );
};

export default CardSecondView;
