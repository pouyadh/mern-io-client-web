import React, { useState } from "react";
import Contacts from "./Contacts/Contacts";
import Conversations from "./Conversations/Conversations";
import CreateNewChannel from "./CreateNewChannel/CreateNewChannel";
import { Switch, Case } from "../../components/Conditional";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("create-new-channel");
  return (
    <Switch expression={activeView}>
      <Case value="main" component={<Conversations />} />
      <Case value="create-new-channel" component={<CreateNewChannel />} />
    </Switch>
  );
};

export default Dashboard;
