import { useCallback, useLayoutEffect, useRef } from 'react'

import { easeOutExpo } from 'utils/easeOutExpo'

function useCounter(amount: number, duration: number) {
  const count = useRef<HTMLSpanElement | null>(null)
  const animationFramId = useRef<number>(0)

  const countUp = useCallback(
    (timestamp: number) => {
      const easingProgress = Number(easeOutExpo(timestamp, duration).toFixed(3))

      const currentCount = Math.floor(amount * easingProgress)

      if (count.current) {
        count.current.textContent = `${currentCount}`
      }

      animationFramId.current = requestAnimationFrame(countUp)

      if (currentCount === amount) {
        cancelAnimationFrame(animationFramId.current)
      }
    },
    [amount, duration],
  )

  useLayoutEffect(() => {
    requestAnimationFrame(countUp)

    return () => {
      cancelAnimationFrame(animationFramId.current)
    }
  }, [countUp])

  return {
    count,
  }
}

export default useCounter
