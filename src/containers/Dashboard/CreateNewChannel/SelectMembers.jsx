import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { useStepper } from "../../../components/Stepper";
import Header from "../../Header/Header";
import ContactList from "../../../components/ContactList/ContactList";
import { useMemo } from "react";

const SelectMembers = () => {
  const [search, setSearch] = useState("");
  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormikContext();
  const { previous } = useStepper();

  const handleContactClick = (username) => {
    if (values.members.indexOf(username) === -1) {
      setFieldValue("members", [...values.members, username]);
    } else {
      setFieldValue(
        "members",
        values.members.filter((m) => m !== username)
      );
    }
  };
  const members = useMemo(
    () => values.members.reduce((prv, item) => ({ ...prv, [item]: true }), {}),
    [values.members]
  );
  return (
    <>
      <Header loading={isSubmitting}>
        <Header.IconButton.Back onClick={previous} />
        <Header.TextInput
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Header.Filler />
        <Header.IconButton.Done onClick={handleSubmit} />
      </Header>
      <Typography variant="body1" sx={{ p: 2 }}>
        Select memebers that you wish to add to the channel
      </Typography>
      <Typography variant="body2" sx={{ px: 2, color: "error.main" }}>
        {errors.members}
      </Typography>
      <ContactList
        onContactClick={handleContactClick}
        search={search}
        checkedItems={members}
      />
    </>
  );
};

export default SelectMembers;
