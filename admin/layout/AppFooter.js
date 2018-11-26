import React from "react";
import Link from "next/link";
import { Menu, Button } from "semantic-ui-react";

import { SPRAY } from "../utils/colors";

const Footer = () => (
  <footer>
    <Menu className="mobile hidden" secondary>
      <Menu.Item>
        <img src="/static/logo/felida-music-white@2x.png" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item style={{ color: "white" }}>
          Felida Music {new Date().getFullYear()} | All rights reserved
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <style jsx>{`
      footer {
        background-color: ${SPRAY};
      }
    `}</style>
  </footer>
);

export default Footer;
