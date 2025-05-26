"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  separator?: string
  isInView: boolean
}

const CountUp = ({ end, start = 0, duration = 2000, separator = "", isInView = false }: CountUpProps) => {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (end - start) + start)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [start, end, duration, isInView, hasAnimated])

  return <>{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)}</>
}

export default CountUp
