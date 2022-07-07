import React from "react";
import { IconButton } from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DoneIcon from "@mui/icons-material/Done";

const HeaderIconButton = ({ children, ...props }) => (
  <IconButton sx={{ color: "text.primary" }} {...props}>
    {children}
  </IconButton>
);

const withIcon = (Icon) => (props) => {
  return (
    <HeaderIconButton {...props}>
      <Icon />
    </HeaderIconButton>
  );
};
HeaderIconButton.Next = withIcon(ArrowForwardRoundedIcon);
HeaderIconButton.Back = withIcon(ArrowBackRoundedIcon);
HeaderIconButton.Search = withIcon(SearchIcon);
HeaderIconButton.Menu = withIcon(MenuIcon);
HeaderIconButton.Done = withIcon(DoneIcon);

export default HeaderIconButton;
