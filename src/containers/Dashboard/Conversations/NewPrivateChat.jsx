import { Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Header/Header";
import ContactList from "../../../components/ContactList/ContactList";

const NewPrivateChat = () => {
  const [search, setSearch] = useState("");
  const handleContactClick = (username) => {
    console.log(username);
  };
  return (
    <>
      <Header>
        <Header.IconButton.Back />
        <Header.TextInput
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Header.Filler />
        <Header.IconButton.Search />
      </Header>
      <Typography variant="body1" sx={{ p: 2 }}>
        Select one of your contacts to start a private chat with
      </Typography>
      <ContactList onContactClick={handleContactClick} search={search} />
    </>
  );
};

export default NewPrivateChat;
