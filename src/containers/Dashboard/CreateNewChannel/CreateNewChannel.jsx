import { Formik } from "formik";
import React from "react";
import { Step, Stepper } from "../../../components/Stepper";
import EnterAvatarNameDesc from "./EnterAvatarNameDesc";
import SelectMembers from "./SelectMembers";
import validationSchema from "./validationSchema";
import * as conversationApi from "../.././../api/conversation";
import { useToaster } from "../../Toaster/Toaster";

const initialValues = {
  avatarURL: null,
  name: "",
  description: "",
  members: [],
};

const CreateNewChannel = ({ onCancel = () => {}, onDone = () => {} }) => {
  const toaster = useToaster();
  const handleSubmit = async (values) => {
    const { name, description, avatarURL, members } = values;
    try {
      await conversationApi.createChannel({
        name,
        description,
        avatarURL,
        members: members.map((m) => ({ username: m, role: "user" })),
      });
      toaster.toast("success", "Channel created.");
      onDone();
    } catch (error) {
      toaster.toast("error", error.response.data.msg);
      onCancel();
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Stepper onCancel={onCancel} onDone={onDone}>
        <Step step={0} component={<EnterAvatarNameDesc label="channel" />} />
        <Step step={1} component={<SelectMembers />} />
      </Stepper>
    </Formik>
  );
};

export default CreateNewChannel;
