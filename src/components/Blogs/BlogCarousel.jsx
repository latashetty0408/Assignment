"use client"
import { useState, useEffect, useRef } from "react"
import Heading from "../Heading/Heading.Jsx"
import BlogCard from "./BlogCard"
import CarouselIndicators from "../Carousel/CarouselIndicator"
import CarouselNavigation from "../Carousel/CarouselNavigation"


const blogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "16 Jan",
    category: "Management",
    author: "David Walker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LfjAE2xM9gyRRctGaMHmPrcSxc3UDm.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "16 Jan",
    category: "Management",
    author: "David Walker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LfjAE2xM9gyRRctGaMHmPrcSxc3UDm.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "16 Jan",
    category: "Management",
    author: "David Walker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LfjAE2xM9gyRRctGaMHmPrcSxc3UDm.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "16 Jan",
    category: "Management",
    author: "David Walker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LfjAE2xM9gyRRctGaMHmPrcSxc3UDm.png",
  },
]

const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const carouselRef = useRef(null)
  const totalSlides = blogData.length

  // Update slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - slidesToShow : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const indicatorCount = Math.max(1, totalSlides - slidesToShow + 1)

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Heading
          title="Blogs"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="relative">
          {/* Carousel Navigation */}
          <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />

          {/* Carousel Track */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * (100 / slidesToShow)}%)` }}
            >
              {blogData.map((blog) => (
                <div key={blog.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <CarouselIndicators total={indicatorCount} active={activeSlide} onChange={goToSlide} />
        </div>
      </div>
    </div>
  )
}

export default BlogCarousel
