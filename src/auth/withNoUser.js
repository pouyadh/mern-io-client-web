import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const withNoUser = (WrappedComponent) => (props) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return <WrappedComponent {...props} />;
};

export default withNoUser;
