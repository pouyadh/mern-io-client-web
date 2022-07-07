import React from "react";
import Proptypes from "prop-types";

import { Stack } from "@mui/material";
import HeaderLogo from "./HeaderLogo";

import HeaderText from "./HeaderText";
import HeaderAvatar from "./HeaderAvatar";
import HeaderProgress from "./HeaderProgress";
import HeaderFiller from "./HeaderFiller";
import HeaderTextInput from "./HeaderTextInput";
import HeaderIconButton from "./HeaderIconButton";

const Header = ({ children, progressProps, loading, progress = 0 }) => {
  return (
    <header>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light" ? "grey.200" : "grey.900",
          minHeight: "50px",
        }}
      >
        {children}
      </Stack>
      <HeaderProgress
        {...progressProps}
        variant={loading ? "indeterminate" : "determinate"}
        value={progress}
      />
    </header>
  );
};

Header.defaultProps = {
  children: null,
  progressProps: {
    variant: "determinate",
    value: 0,
  },
};

Header.prototype = {
  children: Proptypes.oneOfType([
    Proptypes.element,
    Proptypes.arrayOf(Proptypes.element),
  ]),
  progressProps: Proptypes.shape({
    variant: Proptypes.string,
    value: Proptypes.number,
    maxValue: Proptypes.number,
  }),
};

Header.Avatar = HeaderAvatar;
Header.Filler = HeaderFiller;
Header.IconButton = HeaderIconButton;
Header.Logo = HeaderLogo;
Header.Text = HeaderText;
Header.TextInput = HeaderTextInput;

export default Header;
