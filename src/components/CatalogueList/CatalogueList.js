import React from "react";

import { Button, Box, Avatar, Typography } from "@mui/material";
import TelephoneIcon from "../../assets/telephone.svg";
import WifiIcon from "../../assets/wifi.svg";
import CarIcon from "../../assets/car.svg";
import HomeIcon from "../../assets/homefill.svg";
import FlashIcon from "../../assets/flash.svg";

const catalogueLogs = [
  {
    id: 1,
    title: "Mobile",
    amount: "34.00",
    icon: TelephoneIcon,
  },
  {
    id: 2,
    title: "Internet and TV",
    amount: "21.00",
    icon: WifiIcon,
  },
  {
    id: 3,
    title: "Traffic and fines",
    amount: "1,221.00",
    icon: CarIcon,
  },
  {
    id: 4,
    title: "Housing Services",
    amount: "0.00",
    icon: HomeIcon,
  },
  {
    id: 5,
    title: "Utility payment",
    amount: "442.00",
    icon: FlashIcon,
  },
];

const CatalogueList = () => {
  return catalogueLogs.map((log) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
      key={log.id}
    >
      <Avatar
        sx={{
          background: "linear-gradient(180deg, #68ADFF 0%, #4F45FF 100%)",
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
          <Typography sx={{ color: "#8fb0ce" }}>
            The debt is ${log.amount}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          disabled={Number(log.amount) === 0}
          sx={{
            "&:disabled": {
              color: "primary.main",
              opacity: "0.5",
              borderColor: "#7295FB",
            },
            borderWidth: 1,
            borderColor: "#7295FB",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              textTransform: "capitalize",
              color: "#7295FB",
            }}
          >
            Pay
          </Typography>
        </Button>
      </Box>
    </Box>
  ));
};

export default CatalogueList;
