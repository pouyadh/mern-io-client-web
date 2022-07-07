import React from "react";
import Header from "../../Header/Header";

import { Box, Fab, List, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ConversationListItem from "./ConversationListItem";
import useUserConversations from "./useUserConversations";

const avatar = "https://mui.com/static/images/avatar/2.jpg";

const ConversationList = () => {
  const conversations = useUserConversations();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Header>
        <Header.IconButton.Menu />
        <Header.Logo subtitle={conversations ? undefined : "Updating..."} />
        <Header.Filler />
        <Header.IconButton.Search />
      </Header>
      <List sx={{ userSelect: "none" }}>
        {conversations &&
          conversations.map((c) => (
            <ConversationListItem
              key={c._id}
              name={c.type}
              avatar={avatar}
              lastMessage={JSON.parse(c.messages[0].body).text}
              unreadCount={1}
            />
          ))}
      </List>
      <Fab
        color="primary"
        sx={{ position: "absolute", right: 16, bottom: 16 }}
        onClick={handleClick}
      >
        <EditIcon />
      </Fab>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>New Private Chat</MenuItem>
        <MenuItem onClick={handleClose}>New Channel</MenuItem>
        <MenuItem onClick={handleClose}>New Group</MenuItem>
      </Menu>
    </Box>
  );
};

export default ConversationList;
