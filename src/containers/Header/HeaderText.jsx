import { Stack, Typography } from "@mui/material";

const Title = ({ children }) => (
  <Typography
    variant="h6"
    sx={{
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      lineHeight: 1,
    }}
  >
    {children}
  </Typography>
);

const Subtitle = ({ children }) => (
  <Typography variant="body2" sx={{ lineHeight: 1 }}>
    {children}
  </Typography>
);

const HeaderText = ({ title, subtitle, sx, ...props }) => (
  <Stack sx={{ px: 1, ...sx }} {...props}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Stack>
);

export default HeaderText;
