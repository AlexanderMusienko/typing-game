import { css } from "@emotion/react";
import { TTheme } from "../types/theme.type";

export const resetCSS = css`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
  }
`;

export const normalizeCSS = (theme: TTheme) => css`
  * {
    font-family: "Open Sans", "Helvetica Neue", sans-serif, system-ui,
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
    box-sizing: border-box;
  }

  #root {
    background-color: transparent;
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    background-color: ${theme.colors.backgroundPrimary};
    height: 100%;
  }

  div {
  }

  p,
  a,
  button,
  input,
  span {
    color: ${theme.colors.primary};
    font-size: 16px;
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }
`;
