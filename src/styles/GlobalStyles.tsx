import emotionReset from 'emotion-reset'
import { css, Global } from '@emotion/react'

export const ResetCss = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
  }
`

function GlobalStyle() {
  return <Global styles={ResetCss} />
}

export default GlobalStyle
