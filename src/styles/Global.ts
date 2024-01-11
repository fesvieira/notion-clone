import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Work Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, span, button, textarea {
    color: rgb(24, 24, 27f);
  }

`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  padding: 2rem;
  margin: 0;

  height: 100dvh;
  width: 100%;

  background: linear-gradient(
    to right,
    rgb(249, 168, 212),
    rgb(216, 180, 254),
    rgb(129, 140, 248)
  );
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 1rem;

  height: 100%;
  width: 100%;
`;
