import { Avatar } from "@mui/material";
import PropTypes from "prop-types";

const HeaderAvatar = ({ src, alt }) => (
  <Avatar sx={{ mx: 1 }} src={src} alt={alt} />
);

HeaderAvatar.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default HeaderAvatar;
