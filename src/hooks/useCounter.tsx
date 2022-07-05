import { useLayoutEffect, useRef } from 'react'

import { easeOutExpo } from 'utils/easeOutExpo'

const ANIMATION_DURATION = 2000

function useCounter(amount: number) {
  const count = useRef<HTMLSpanElement | null>(null)
  const currentFrame = useRef<number>(0)

  useLayoutEffect(() => {
    let animationFramId = 0

    const countUp = (timestamp: number) => {
      currentFrame.current++
      const easingProgress = Number(
        easeOutExpo(timestamp, ANIMATION_DURATION).toFixed(3),
      )

      const currentCount = Math.floor(amount * easingProgress)

      if (count.current) {
        count.current.textContent = `${currentCount}`
      }

      animationFramId = requestAnimationFrame(countUp)

      if (currentCount === amount) {
        cancelAnimationFrame(animationFramId)
      }
    }
    requestAnimationFrame(countUp)

    return () => {
      cancelAnimationFrame(animationFramId)
    }
  })

  return {
    count,
  }
}

export default useCounter
