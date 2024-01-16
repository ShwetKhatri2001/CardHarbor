import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Nav from "./components/BottomTab/BottomTab";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Catalogue from "./pages/Catalogue/Catalogue";
import CellularIcon from "./assets/cellular.svg";
import WifiIcon from "./assets/wifi.svg";
import BatteryIcon from "./assets/battery.svg";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("1");
  const [cardTab, setCardTab] = useState(0);

  const handleTab = (val = 1) => {
    setCardTab(val);
  };

  const handleHistory = () => {
    setCardTab(1);
    setValue("1");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "25rem",
        paddingBottom: 0,
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#2b4162",
        backgroundImage: "linear-gradient(to right, #313C5C 5%, #1A2440 80%)",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <Typography className="whiteText" sx={{ fontWeight: 600 }}>
          9:41
        </Typography>
        <Box className="flexRowCenter" sx={{ gap: "8px" }}>
          <img src={CellularIcon} alt="CellularIcon" />
          <img src={WifiIcon} alt="WifiIcon" />
          <img src={BatteryIcon} alt="BatteryIcon" />
        </Box>
      </Box>
      <TabContext value={value}>
        <TabPanel value="1">
          <Home cardTab={cardTab} setCardTab={handleTab} />
        </TabPanel>
        <TabPanel value="2">
          <Catalogue />
        </TabPanel>
        <TabPanel value="3" sx={{ flex: 1, overflow: "auto" }}>
          <History handleHistory={handleHistory} />
        </TabPanel>
        <TabPanel value="4">
          <Typography className="whiteText">Coming Soon ...</Typography>
        </TabPanel>
      </TabContext>
      {value !== 1 && cardTab !== 1 && (
        <Nav handleChange={handleChange} value={value} />
      )}
    </Box>
  );
};

export default App;
