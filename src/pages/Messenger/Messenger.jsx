import React from "react";
import { Box, Stack } from "@mui/material";
import { withUser } from "../../auth";

import Dashboard from "../../containers/Dashboard/Dashboard";

const Messenger = ({ user }) => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Stack direction="row" sx={{ flex: 1 }}>
        <Box
          sx={{
            width: "320px",
            display: { md: "block", sm: "none" },
          }}
        >
          <Dashboard />
        </Box>
        <Box sx={{ flex: 1, bgcolor: "secondary.main" }}></Box>
      </Stack>
    </Stack>
  );
};

export default withUser(Messenger);
