import React, { useState } from "react";
import { Box } from "@mui/material";
import CardFirstView from "./CardFirstView";
import CardSecondView from "./CardSecondView";
import "./Home.css";

const Home = ({ cardTab, setCardTab }) => {
  const [back, setBack] = useState(false);
  return (
    <Box>
      {cardTab === 0 ? (
        <CardFirstView
          onClick={() => {
            setBack(false);
            setCardTab(1);
          }}
          back={back}
        />
      ) : (
        <CardSecondView
          onClick={() => {
            setBack(true);
            setCardTab(0);
          }}
        />
      )}
    </Box>
  );
};

export default Home;
