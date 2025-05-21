"use client"
import { useEffect, useRef, useState } from "react"

const InfiniteLogoScroll = ({ logos, speed = 0.5 }) => {
  const scrollRef = useRef(null)
  const [duplicatedLogos, setDuplicatedLogos] = useState([])

  // Duplicate logos to create seamless scrolling effect
  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos])
  }, [logos])

  // Animate the scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth / 2

    const scroll = () => {
      scrollPosition += speed

      // Reset position when first set of logos is scrolled past
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      scroll()
    }

    scrollContainer.parentElement.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.parentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (scrollContainer.parentElement) {
        scrollContainer.parentElement.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.parentElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [duplicatedLogos, speed])

  return (
    <div className="overflow-hidden relative">
      <div ref={scrollRef} className="flex items-center transition-transform" style={{ willChange: "transform" }}>
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <img src={logo.src || "/placeholder.svg"} alt={logo.name} className={logo.className} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteLogoScroll
