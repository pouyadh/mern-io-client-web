import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ContactListItem = ({ username, avatar }) => (
  <ListItem disableGutters disablePadding>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar alt={username} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={username} secondary="recently" />
    </ListItemButton>
  </ListItem>
);

export default ContactListItem;
