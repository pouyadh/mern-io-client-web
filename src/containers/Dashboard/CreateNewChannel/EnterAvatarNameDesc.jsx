import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Field, useFormikContext } from "formik";
import Header from "../../Header/Header";
import Input from "../../../components/Input/Input";
import InputAvatar from "../../../components/Input/InputAvatar";
import { useStepper } from "../../../components/Stepper";

const EnterAvatarNameDesc = () => {
  const { values, setFieldValue, errors } = useFormikContext();
  const { next, cancel } = useStepper();
  const handleRemoveAvatar = () => {
    setFieldValue("avatarURL", null);
  };
  return (
    <>
      <Header>
        <Header.IconButton.Back onClick={cancel} />
        <Header.Text title={`New Channel`} />
        <Header.Filler />
        <Header.IconButton.Done onClick={next} />
      </Header>
      <Typography variant="body1" sx={{ p: 2 }}>
        Select an avatar, a name and a description for this Channel
      </Typography>
      <Stack sx={{ p: 2 }} spacing={2}>
        <InputAvatar
          src={values.avatarURL}
          onChange={(url) => setFieldValue("avatarURL", url)}
          size={128}
        />
        <Button onClick={handleRemoveAvatar}>Remove image</Button>
        <Field component={Input} label="Name" name="name" autoFocus />
        <Field
          component={Input}
          label="Description(optional)"
          name="description"
        />
      </Stack>
    </>
  );
};

export default EnterAvatarNameDesc;
