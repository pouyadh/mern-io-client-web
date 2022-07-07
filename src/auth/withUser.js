import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const withUser = (WrappedComponent) => (props) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return <WrappedComponent user={user} {...props} />;
};

export default withUser;
