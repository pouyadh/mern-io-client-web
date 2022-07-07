import React, { useState, createContext, useContext } from "react";
import { Alert, Snackbar } from "@mui/material";

const ToasterContext = createContext();
export const useToaster = () => useContext(ToasterContext);

export const ToasterProvider = ({ children }) => {
  const [message, setMessage] = useState({
    open: false,
    msg: "",
    severity: "error",
  });
  const handleMessageClose = () => {
    setMessage({ ...message, open: false });
  };
  const toast = (severity, msg) => setMessage({ open: true, msg, severity });
  return (
    <ToasterContext.Provider value={{ toast }}>
      <Snackbar
        open={message.open}
        autoHideDuration={6000}
        onClose={handleMessageClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleMessageClose} severity={message.severity}>
          {message.msg}
        </Alert>
      </Snackbar>
      {children}
    </ToasterContext.Provider>
  );
};
