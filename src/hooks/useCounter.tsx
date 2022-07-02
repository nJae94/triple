import { useLayoutEffect, useRef } from 'react'

import { easeOutExpo } from 'utils/easeOutExpo'

const ANIMATION_DURATION = 2000
const FRAME_DURATION = 1000 / 60

function useCounter(amount: number) {
  const count = useRef<HTMLSpanElement | null>(null)
  const currentFrame = useRef(0)

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      currentFrame.current++
      const totalFrame = Math.round(ANIMATION_DURATION / FRAME_DURATION)
      const nowProgress = currentFrame.current / totalFrame
      const easingProgress = easeOutExpo(nowProgress)
      const currentCount = Math.round(amount * easingProgress)

      if (count.current) {
        count.current.textContent = `${currentCount}`
      }

      if (currentCount === amount) {
        clearInterval(timer)
      }
    }, FRAME_DURATION)

    return () => {
      clearInterval(timer)
    }
  })

  return {
    count,
  }
}

export default useCounter
