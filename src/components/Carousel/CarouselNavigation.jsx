"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

const CarouselNavigation = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-gray-800" size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-gray-800" size={24} />
      </button>
    </>
  )
}

export default CarouselNavigation
