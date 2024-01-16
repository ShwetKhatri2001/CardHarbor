import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/PageHeader/PageHeader";
import HistoryList from "../../components/HistoryList/HistoryList";

const History = ({ handleHistory }) => {
  return (
    <Box>
      <Header title={"History"} />
      <Box
        sx={{
          overflow: "auto",
          height: "80vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        onClick={handleHistory}
      >
        <HistoryList />
      </Box>
    </Box>
  );
};

export default History;
