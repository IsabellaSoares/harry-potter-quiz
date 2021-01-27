import { createGlobalStyle, ThemeProvider } from 'styled-components'

import db from '../db.json';
import './index.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  h1 {
    font-family: 'Harry Potter';
    font-size: 25px !important;
    color: #72121E;
    padding: 5px 0 0 0;
  }
  p {
    line-height: 20px;
    font-size: 15px;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  } 
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
