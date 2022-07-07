import { Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import LogoText from "../../components/Logo/LogoText";
const HeaderLogo = ({ subtitle }) => {
  const subtitleRef = useRef(subtitle);
  if (subtitle) {
    subtitleRef.current = subtitle;
  }
  return (
    <Stack alignItems="start" sx={{ px: 1 }}>
      <LogoText
        height={subtitle ? "12px" : "16px"}
        style={{ transition: "height .1s ease" }}
      />
      <Typography
        variant="body2"
        sx={{
          height: subtitle ? "1em" : "0em",
          opacity: subtitle ? 1 : 0,
          transition: "all .1s ease",
        }}
      >
        {subtitleRef.current}
      </Typography>
    </Stack>
  );
};
export default HeaderLogo;
