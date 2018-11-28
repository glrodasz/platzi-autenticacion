import React, { Component } from "react";
import PropTypes from "prop-types";

import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

import AuthService from "../services/AuthService";
import isEmptyObject from "../utils/isEmptyObject";

import {
  generalStyles,
  visibilityStyles,
  semanticStyles
} from "../utils/globalStyles";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, loggedUser: {} };
  }

  componentDidMount() {
    this.authService = new AuthService();
    const profile = this.authService.getProfile();

    if (!isEmptyObject(profile)) {
      this.setState({
        isAuthenticated: true,
        loggedUser: {
          name: profile.display_name || profile.name,
          email: profile.email,
          picture: profile.picture || profile && profile.images && profile.images[0].url
        }
      });
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  handleLogin = () => {
    this.authService.login();
  };

  handleLogout = () => {
    this.authService.logout();
    window.location.href = "/";
  };

  render() {
    const { children } = this.props;
    const { isAuthenticated, loggedUser } = this.state;

    return (
      <div className="layout">
        <AppNavbar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          isAuthenticated={isAuthenticated}
          loggedUser={loggedUser}
        />
        <main className="layout-content">{children}</main>
        <AppFooter />
        <style jsx global>
          {generalStyles}
        </style>
        <style jsx global>
          {visibilityStyles}
        </style>
        <style jsx global>
          {semanticStyles}
        </style>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
