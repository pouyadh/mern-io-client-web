import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ContactListButton = ({ icon, children, ...props }) => (
  <ListItem disableGutters disablePadding {...props}>
    <ListItemButton>
      <ListItemIcon sx={{ justifyContent: "center" }}>{icon}</ListItemIcon>
      <ListItemText primary={children} />
    </ListItemButton>
  </ListItem>
);

export default ContactListButton;
