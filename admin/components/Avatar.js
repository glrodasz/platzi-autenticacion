import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

const Avatar = ({ picture, name }) => (
  <span className="avatar">
    <Image src={picture} avatar />
    {name}
  </span>
);

Avatar.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string
};

Avatar.defaultProps = {
  picture: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
};

export default Avatar;
