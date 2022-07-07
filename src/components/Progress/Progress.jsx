import React from "react";
import { LinearProgress } from "@mui/material";

const Progress = ({ sx, ...props }) => {
  return (
    <LinearProgress
      sx={{ height: "10px", borderRadius: "10px", ...sx }}
      {...props}
    />
  );
};

export default Progress;
