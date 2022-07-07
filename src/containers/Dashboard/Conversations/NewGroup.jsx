import { Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Header/Header";
import ContactList from "../../../components/ContactList/ContactList";

const NewGroup = () => {
  const [search, setSearch] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const handleContactClick = (username) => {
    setCheckedItems((prv) => ({ ...prv, [username]: !prv[username] }));
  };
  const handleSubmit = () => {
    const users = Object.entries(checkedItems).reduce(
      (prv, [username, checked]) => (checked ? [...prv, username] : prv),
      []
    );
    console.log(users);
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
        <Header.IconButton.Done onClick={handleSubmit} />
      </Header>
      <Typography variant="body1" sx={{ p: 2 }}>
        Select memebers that you wish to add to the group
      </Typography>
      <ContactList
        onContactClick={handleContactClick}
        search={search}
        checkedItems={checkedItems}
      />
    </>
  );
};

export default NewGroup;
