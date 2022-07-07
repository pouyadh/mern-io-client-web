import {
  Avatar,
  Checkbox,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ContactListItem = ({ username, avatar, checked, ...props }) => {
  return (
    <ListItem
      disableGutters
      disablePadding
      {...props}
      secondaryAction={checked != undefined && <Checkbox checked={checked} />}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={username} src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={username} secondary="recently" />
      </ListItemButton>
    </ListItem>
  );
};

export default ContactListItem;
