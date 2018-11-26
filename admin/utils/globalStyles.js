import css from "styled-jsx/css";

import {
  CLOUDS,
  PACIFIC_BLUE,
  CONCRETE,
  ALABASTER,
  ASBESTOS,
  POMEGRANATE
} from "./colors";

export const generalStyles = css.global`
    body {
      background-color: ${CLOUDS};
      font-family: 'Open Sans', sans-serif;
    }
  
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Source Sans Pro', sans-serif;
    }
  
    .layout {
      padding-top: 80px;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
  
    .layout-content {
      flex: 1;
      padding: 0 20px 50px;
    }
  `;

export const visibilityStyles = css.global`
    @media only screen and (max-width: 767px) {
        .mobile.hidden,
        .tablet.only,
        .small.monitor.only,
        .large.monitor.only {
            display: none !important;
        }
    }
  
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .mobile.only,
        .tablet.hidden,
        .small.monitor.only,
        .large.monitor.only {
            display: none !important;
        }
    }
  
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .mobile.only,
        .tablet.only,
        .small.monitor.hidden,
        .large.monitor.only {
            display: none !important;
        }
    }
  
    @media only screen and (min-width: 1200px) {
        .mobile.only,
        .tablet.only,
        .small.monitor.only,
        .large.monitor.hidden {
            display: none !important;
        }
    }
  `;

export const semanticStyles = css.global`
    .header {
      font-family: 'Source Sans Pro', sans-serif !important;
    }
  
    .ui.card,
    .ui.message,
    .ui.segment {
      border: 0;
      border-radius: 0;
      box-shadow:
        0 1px 3px 0 rgba(0,0,0,0.14),
        0 1px 1px 0 rgba(0,0,0,0.12),
        0 2px 1px -1px rgba(0,0,0,0.1) !important;
    }
  `;
