import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

import Logo from "../components/Logo";
import Avatar from "../components/Avatar";

import { PACIFIC_BLUE } from "../utils/colors";

const navbarMenuStyles = {
  backgroundColor: PACIFIC_BLUE,
  border: "0",
  boxShadow:
    "0 3px 4px 0 rgba(0,0,0,0.12), 0 3px 3px -2px rgba(0,0,0,0.1), 0 1px 8px 0 rgba(0,0,0,0.14)"
};

const menuItemStyles = {
  padding: "0 15px"
};

const dropdownStyles = {
  color: "white"
};

const dropdownMenuStyles = {
  width: "150px"
};

const Navbar = ({ loggedUser: { name, email, picture } }) => {
  const showEmail = name && email;

  return (
    <nav className="navbar">
      <Menu fixed="top" style={navbarMenuStyles}>
        <Logo />
        <Menu.Menu position="right">
          <Menu.Item style={menuItemStyles}>
            <Dropdown
              style={dropdownStyles}
              trigger={<Avatar picture={picture} />}
              pointing="top right"
            >
              <Dropdown.Menu style={dropdownMenuStyles}>
                <Dropdown.Item disabled>
                  <span>
                    <span>{name || email}</span>
                    {showEmail && (
                      <p>
                        <small>{email}</small>
                      </p>
                    )}
                  </span>
                </Dropdown.Item>
                <Link href="/auth/sign-off">
                  <Dropdown.Item>
                    <span>
                      <Icon name="log out" />
                      <span>Salir</span>
                    </span>
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
};

Navbar.propTypes = {
  loggedUser: PropTypes.object.isRequired
};

export default Navbar;
