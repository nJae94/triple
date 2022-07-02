import { css, Global } from '@emotion/react'

export const ResetCss = css`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

function GlobalStyle() {
  return <Global styles={ResetCss} />
}

export default GlobalStyle
