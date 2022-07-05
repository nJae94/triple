import { useCallback, useLayoutEffect, useRef } from 'react'

import { easeOutExpo } from 'utils/easeOutExpo'

function useCounter(amount: number, duration: number, observed = true) {
  const count = useRef<HTMLSpanElement | null>(null)
  const animationFramId = useRef<number>(0)
  const startTime = useRef<number>(0)
  const endTime = useRef<number>(0)

  const countUp = useCallback(() => {
    endTime.current = new Date().getTime()
    const easingProgress = Number(
      easeOutExpo(endTime.current - startTime.current, duration).toFixed(3),
    )

    const currentCount = Math.floor(amount * easingProgress)

    if (count.current) {
      count.current.textContent = `${currentCount}`
    }

    animationFramId.current = requestAnimationFrame(countUp)

    if (currentCount === amount) {
      cancelAnimationFrame(animationFramId.current)
    }
  }, [amount, duration])

  useLayoutEffect(() => {
    if (observed) {
      startTime.current = new Date().getTime()
      requestAnimationFrame(countUp)
    }

    return () => {
      cancelAnimationFrame(animationFramId.current)
    }
  }, [countUp, observed])

  return {
    count,
  }
}

export default useCounter
