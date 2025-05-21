"use client"
import { useState, useEffect, useRef } from "react"

const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const observer = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Set up Intersection Observer to trigger animation when element is in view
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCounter()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.current.observe(countRef.current)
    }

    return () => {
      if (observer.current && countRef.current) {
        observer.current.unobserve(countRef.current)
      }
    }
  }, [end])

  const animateCounter = () => {
    const startTime = Date.now()
    const endValue = Number.parseInt(end, 10)

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Easing function for smoother animation
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentCount = Math.floor(easedProgress * endValue)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(endValue)
      }
    }

    updateCounter()
  }

  // Format number with commas for thousands
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <span ref={countRef} className="text-orange-500 text-5xl font-bold">
      {formattedCount}
      {suffix}
    </span>
  )
}

export default CounterAnimation
