import { LinearProgress } from "@mui/material";

const HeaderProgress = (props) => (
  <LinearProgress
    sx={{
      height: "2px",
      bgcolor: (theme) =>
        theme.palette.mode === "light" ? "grey.300" : "grey.800",
    }}
    {...props}
  />
);

export default HeaderProgress;
