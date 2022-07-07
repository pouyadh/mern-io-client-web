import { InputAdornment, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

const MuiInput = ({ startAdornment, endAdornment, ...props }) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
};

const Username = (props) => (
  <MuiInput {...props} startAdornment={<AccountCircleIcon />} />
);

const Email = (props) => <MuiInput {...props} startAdornment={<MailIcon />} />;

const Password = (props) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <MuiInput
      {...props}
      type={visible ? "text" : "password"}
      startAdornment={<LockIcon />}
      endAdornment={
        visible ? (
          <IconButton onClick={() => setVisible(!visible)}>
            <VisibilityIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setVisible(!visible)}>
            <VisibilityOffIcon />
          </IconButton>
        )
      }
    />
  );
};

MuiInput.Username = Username;
MuiInput.Email = Email;
MuiInput.Password = Password;

export default MuiInput;
