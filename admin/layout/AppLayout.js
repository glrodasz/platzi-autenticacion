import React from "react";
import PropTypes from "prop-types";

import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

import {
  generalStyles,
  visibilityStyles,
  semanticStyles
} from "../utils/globalStyles";

const Layout = ({ children, isAuthenticated, loggedUser }) => (
  <div className="layout">
    <AppNavbar loggedUser={loggedUser} />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object.isRequired
};

Layout.defaultProps = {
  isAuthenticated: false,
  loggedUser: { name: 'Guillermo Rodas', email: 'me@guillermorodas.com' }
};

export default Layout;
