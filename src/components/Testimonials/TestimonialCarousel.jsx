"use client"
import { useState, useEffect, useRef } from "react"
import CarouselNavigation from "../Carousel/CarouselNavigation"
import Heading from "../Heading/Heading.Jsx"
import TestimonialCard from "./TestimonialCard"
import CarouselIndicators from "../Carousel/CarouselIndicator"

const testimonialData = [
  {
    id: 1,
    name: "Avinash KR",
    title: "Manager",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "John Rowling",
    title: "Manager",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Sam Ipsum",
    title: "Director",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    name: "Emma Johnson",
    title: "Team Lead",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
]

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const carouselRef = useRef(null)
  const totalSlides = testimonialData.length

  // Update slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(1) // Always show 1 testimonial at a time as per design
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <div className="py-16 px-4 bg-[#0a0b2e] text-white relative">
      {/* Top sloped edge */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Heading
          title="Testimonials"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="relative mt-12">
          {/* Carousel Navigation */}
          <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />

          {/* Carousel Track */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <CarouselIndicators total={totalSlides} active={activeSlide} onChange={goToSlide} />
        </div>
      </div>

      {/* Bottom sloped edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </div>
  )
}

export default TestimonialCarousel
