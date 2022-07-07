import { List, ListSubheader } from "@mui/material";
import React from "react";
import ContactListItem from "./ContactListItem";
import useUserContacts from "./useUserContacts";

const ContactList = ({
  onContactClick = () => {},
  search = "",
  checkedItems,
}) => {
  let contacts = useUserContacts();
  if (search && contacts) {
    contacts = contacts.filter((item) => item.username.startsWith(search));
  }
  return (
    <List>
      <ListSubheader>Contacts</ListSubheader>
      {contacts &&
        contacts.map((c) => (
          <ContactListItem
            key={c.username}
            username={c.username}
            avatar={c.avatarImage}
            onClick={() => onContactClick(c.username)}
            checked={checkedItems && (checkedItems[c.username] || false)}
          />
        ))}
    </List>
  );
};

export default ContactList;
