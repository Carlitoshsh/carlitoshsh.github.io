import * as React from 'react'
import { Page } from './components'
import { ThemeProvider } from 'styled-components'
import {
  GlobalStyles,
  theme,
} from './components'

import { Helmet } from 'react-helmet'
import { ThemeProvider as ThemeProviderMaterial } from '@rmwc/theme'

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <ThemeProviderMaterial
        options={{
          primary: '#070D59',
          secondary: '#4AC5EE',
        }}
      >
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
      </ThemeProviderMaterial>

      <Page />
    </ThemeProvider >
  </>
)

export default App
