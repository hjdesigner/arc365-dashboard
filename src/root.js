import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { CategoryProvider } from 'contexts';
import theme from 'utils/themes';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body,
  html,
  #root {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <GlobalStyle whiteColor />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default Root;
