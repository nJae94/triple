import { css, keyframes } from '@emotion/react'

import { AnimationType, BottomFadeInProps } from 'model/style'

const Animation: AnimationType = {
  bottomFadeIn: keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,
}

export const showAnimation = ({
  name,
  duration,
  delay,
  mode,
  timing,
}: BottomFadeInProps) => css`
  animation-name: ${Animation[name]};
  animation-duration: ${duration}ms;
  animation-delay: ${delay}ms;
  animation-fill-mode: ${mode};
  animation-timing-function: ${timing};
`
