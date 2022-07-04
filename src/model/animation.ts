import { Keyframes } from '@emotion/react'

export interface AnimationType {
  [key: string]: Keyframes
  bottomFadeIn: Keyframes
}

export interface BottomFadeInProps {
  name: string
  duration: number
  delay: number
  mode: string
  timing: string
}
