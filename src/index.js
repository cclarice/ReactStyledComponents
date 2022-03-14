import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

/**
 *  Создание глобальных стилей
 */

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono'
`

/**
 *  Создание глобальных тем
 */

const theme = {
  colors: {
    primary: "cyan",
    secondary: 'white'
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)"
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
