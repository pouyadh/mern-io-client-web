import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Progress from "../../components/Progress/Progress";
import LogoIcon from "../../components/Logo/LogoIcon";
import LogoText from "../../components/Logo/LogoText";

const appVersion = process.env.REACT_APP_VERSION;

const Loading = () => {
  return (
    <Container disableGutters>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <LogoIcon sx={{ fontSize: "128px", mb: 4 }} />
        <LogoText height="50px" />
        <Progress sx={{ width: "96px", mt: 10 }} />
        <Typography variant="subtitle2" color="grey.600" sx={{ mt: 4 }}>
          V{appVersion}
        </Typography>
      </Stack>
    </Container>
  );
};

export default Loading;
