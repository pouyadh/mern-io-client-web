import React from "react";
import ConversationList from "./ConversationList";
import EnterAvatarNameDesc from "../CreateNewChannel/EnterAvatarNameDesc";
import SelectMembers from "../CreateNewChannel/SelectMembers";
import NewGroup from "./NewGroup";
import NewPrivateChat from "./NewPrivateChat";
import { Formik } from "formik";
import { Stepper, Step } from "../../../components/Stepper";

const initialValues = {
  avatarURL: null,
  name: "",
  description: "",
  members: [],
};

const Conversations = () => {
  return <></>;
};

export default Conversations;
