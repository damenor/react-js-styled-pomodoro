import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import AppTitle from '../components/AppTitle'
import AppSettings from '../components/AppSettings'
import AppContainer from '../components/AppContainer'
import AppStatus from '../components/AppStatus'
import Timer from '../components/Timer'
import { APP_TITLE } from '../constants'
import GlobalStyle from '../styles/global'
import { darkTheme, lightTheme } from '../styles/theme'

const AppComponent = () => {

  const [ isDark, setIsDark ] = useState(true)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppTitle>{ APP_TITLE }</AppTitle>
        <AppStatus />
        <Timer />
        <AppSettings></AppSettings>
      </AppContainer>
    </ThemeProvider>
  )

}

export default AppComponent
