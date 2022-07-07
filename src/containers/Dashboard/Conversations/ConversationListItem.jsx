import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import BadgeStandalone from "../../../components/Badge/BadgeStandalone";

const ConversationListItem = ({
  name,
  lastMessage,
  lineClamp = 2,
  unreadCount,
  avatar,
}) => {
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={lastMessage}
          secondaryTypographyProps={{
            style: {
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: lineClamp,
              WebkitBoxOrient: "vertical",
            },
          }}
        />
        <ListItemText
          sx={{ flex: "0 0 auto" }}
          primary={<Typography variant="subtitle2">19:30</Typography>}
          secondary={
            <BadgeStandalone badgeContent={unreadCount} color="primary" />
          }
          secondaryTypographyProps={{ style: { textAlign: "center" } }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ConversationListItem;
