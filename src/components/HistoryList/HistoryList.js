import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import ShareIcon from "../../assets/sharecat.svg";
import MusicIcon from "../../assets/music.svg";
import CarIcon from "../../assets/car.svg";

const historyLogs = [
  {
    id: 1,
    title: "Card To Card",
    category: "Maria",
    amount: "+ $143.00",
    icon: ShareIcon,
    categoryGradient: "linear-gradient(180deg, #EC5B8F 0%, #DA3181 100%)",
  },
  {
    id: 2,
    title: "Apple Music",
    category: "Online",
    amount: "- $467.00",
    icon: MusicIcon,
    categoryGradient: "linear-gradient(180deg, #FEC946 0%, #E9912A 100%)",
  },
  {
    id: 3,
    title: "Uber",
    category: "Service",
    amount: "- $467.00",
    icon: CarIcon,
    categoryGradient: "linear-gradient(180deg, #3DA2FF 0%, #2167F0 100%)",
  },
  {
    id: 4,
    title: "Uber",
    category: "Service",
    amount: "- $2467.00",
    icon: CarIcon,
    categoryGradient: "linear-gradient(180deg, #3DA2FF 0%, #2167F0 100%)",
  },
];
const HistoryList = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingBottom: "3rem",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            my: 2,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Today
        </Typography>
        {historyLogs.map((log) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
              color: "#fff",
            }}
            key={log.id}
          >
            <Avatar
              sx={{
                background: log.categoryGradient,
                marginBottom: "1rem",
              }}
            >
              <img src={log.icon} alt={log.title} />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingBottom: "1rem",
                flex: 1,
                borderBottom: "1px solid #2D3757",
              }}
            >
              <Box sx={{ color: "#fff" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {log.title}
                </Typography>
                <Typography sx={{ color: "#8fb0ce", fontSize: "16px" }}>
                  {log.category}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {log.amount}
              </Typography>
            </Box>
          </Box>
        ))}
        <Typography
          sx={{
            color: "#fff",
            my: 2,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          12 March
        </Typography>
        {historyLogs.map((log) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
              color: "#fff",
            }}
            key={log.id}
          >
            <Avatar
              sx={{
                background: log.categoryGradient,
                marginBottom: "1rem",
              }}
            >
              <img src={log.icon} alt={log.title} />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingBottom: "1rem",
                flex: 1,
                borderBottom: "1px solid #2D3757",
              }}
            >
              <Box sx={{ color: "#fff" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {log.title}
                </Typography>
                <Typography sx={{ color: "#8fb0ce", fontSize: "16px" }}>
                  {log.category}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {log.amount}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HistoryList;
