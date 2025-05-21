"use client"

const CarouselIndicators = ({ total, active, onChange }) => {
  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 mx-1 rounded-full ${active === index ? "bg-orange-500" : "bg-gray-300"}`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  )
}

export default CarouselIndicators
