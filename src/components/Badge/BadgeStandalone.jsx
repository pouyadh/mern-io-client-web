import { Badge } from "@mui/material";

const BadgeStandalone = ({ ...props }) => (
  <Badge
    {...props}
    componentsProps={{
      badge: { styles: { position: "static", transform: "unset" } },
    }}
  />
);

export default BadgeStandalone;
