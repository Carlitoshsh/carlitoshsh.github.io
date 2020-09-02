import { PropsTheme, createGlobalStyle } from 'styled-components'

import { ComponentClass } from 'react'
import reset from 'styled-reset'

export const GlobalStyles: ComponentClass = createGlobalStyle`
  ${reset}
  html {
    font-family: 'Inter', sans-serif;
    font-family: var(--mdc-typography-font-family, Inter, sans-serif);
    color: ${({ theme }: PropsTheme) => theme.colors.secondary};
  }

  ** Take the whole size of the viewport as default */
  body {
    min-height: 100vh;
    min-width: 100vw;
    font-weight: 400;
    line-height: 1.65;
  }
  
  p, a, ul, li, label {
    margin-bottom: 1.15rem;
  }

  strong{
    font-weight: bold;
  }
  
  h1, h2, h3, h4, h5 {
    margin-block-end: 1.05rem;
    font-weight: bold;
    line-height: 1.15;
  }
  
  h1 {
    margin-top: 0;
    font-size: 2.488rem;
  }
  
  h2 {font-size: 2.074rem;}
  
  h3 {font-size: 1.728rem;}
  
  h4 {font-size: 1.44rem;}
  
  h5 {font-size: 1.2rem;}
  
  small, .text_small {font-size: 0.833rem;}

  [class^='mdc-'], [class*=' mdc-'] {
    font-family: 'Inter', sans-serif;
  }

  #app {
    /** Adding de default font color **/
    color: ${({ theme }: PropsTheme) => theme.colors.primaryFont};
  }
`
