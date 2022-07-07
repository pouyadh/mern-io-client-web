import { Box } from "@mui/system";
import React from "react";
import Header from "../../Header/Header";
import Input from "../../../components/Input/MuiInput";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { addContact } from "../../../api/user";
import { useToaster } from "../../Toaster/Toaster";

const AddNewContact = () => {
  const toaster = useToaster();
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setError(null);
    try {
      await addContact(username);
      toaster.toast("success", "Contact added");
    } catch (error) {
      setError(error.response.data.msg);
    }
  };
  return (
    <>
      <Header>
        <Header.IconButton.Back />
        <Header.Text title={"Add new contact"} />
        <Header.Filler />
        {username.length >= 4 && (
          <Header.IconButton.Done onClick={handleSubmit} />
        )}
      </Header>
      <Stack
        sx={{ p: 4 }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2">
          Please enter the user's username that you want to add to your contact
          list
        </Typography>
        <Input.Username
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          helperText={error || "Minimum 4 character"}
          error={!!error}
          autoFocus
        />
      </Stack>
    </>
  );
};

export default AddNewContact;
