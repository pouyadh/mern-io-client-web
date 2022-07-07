import React from "react";
import { List, ListSubheader } from "@mui/material";
import Header from "../../Header/Header";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ContactListItem from "./ContactListItem";
import ContactListButton from "./ContactListButton";
import useUserContacts from "./useUserContacts";
const avatar = "https://mui.com/static/images/avatar/3.jpg";

const ContactList = () => {
  const contacts = useUserContacts();
  return (
    <>
      <Header>
        <Header.IconButton.Back />
        <Header.Text title={"Your Contacts"} />
        <Header.Filler />
        <Header.IconButton.Search />
      </Header>
      <List>
        <ContactListButton icon={<PersonAddAltRoundedIcon />}>
          Add new contact
        </ContactListButton>
        <ListSubheader>Contacts</ListSubheader>
        {contacts &&
          contacts.map((c) => (
            <ContactListItem
              key={c.username}
              username={c.username}
              avatar={c.avatarImage}
            />
          ))}
      </List>
    </>
  );
};

export default ContactList;
