import emotionReset from 'emotion-reset'
import { css, Global } from '@emotion/react'

export const ResetCss = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
  }

  strong {
    font-weight: bolder;
  }
`

function GlobalStyle() {
  return <Global styles={ResetCss} />
}

export default GlobalStyle
