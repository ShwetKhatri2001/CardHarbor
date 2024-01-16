import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import avatar from "../../assets/avatar.svg";

const PageHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Avatar src={avatar} />
    </Box>
  );
};

export default PageHeader;
