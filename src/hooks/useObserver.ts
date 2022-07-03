import { RefObject, useEffect, useState } from 'react'

interface UseObserverProps {
  ref: RefObject<HTMLElement>
}

const initialOptions: IntersectionObserverInit = {
  threshold: 0.5,
}

const useObserver = ({ ref }: UseObserverProps): boolean => {
  const [observed, setObserved] = useState<boolean>(false)

  useEffect(() => {
    let observer: IntersectionObserver

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          const [entry] = entries

          if (entry.isIntersecting && ref.current) {
            setObserved(true)
            observer.unobserve(ref.current)
          }
        },
        initialOptions,
      )
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return observed
}
export default useObserver
