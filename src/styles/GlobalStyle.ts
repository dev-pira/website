import { createGlobalStyle } from 'styled-components'

import gridSystem from './gridSystem'

export default createGlobalStyle`

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    -webkit-font-smoothing: antialiased;
    line-height: 1.6em;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.body};
  }

  body, button, input, textarea, select{
    font-family: ${props => props.theme.fonts.default};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${props => props.theme.fonts.featured};
    font-weight: 400;
    font-style: normal;
    line-height: 1em;
  }

  ${props => gridSystem(props.theme.grid)}

  .img-fluid{
    max-width:100%;
    height:auto
  }

  a, button, select{
    cursor: pointer;
  }

  .visually-hidden,
  .visually-hidden-focusable:not(:focus) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

`
