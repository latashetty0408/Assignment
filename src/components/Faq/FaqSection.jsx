"use client"
import { useState, useRef, useEffect } from "react"
import AccordionItem from "./AccordionItem"
import Heading from "../Heading/Heading.Jsx"

const faqData = [
  {
    question: "What is Idealabs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Why Idealabs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Lorem ipsum dolor sit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(2) // Set the third item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative bg-[#0a0b2e] text-white">
      {/* Top sloped edge */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>

      <div className="py-24 px-4 relative z-10">
        <div className="max-w-[823px] mx-auto flex flex-col justify-center items-center">
          <Heading title="FAQ'S" color="white" />
          {/* <div className="flex flex-col items-center mb-10">
            <h2 className="text-4xl font-bold mb-4 relative">
              <span className="relative z-10">FAQ'S</span>
              <span className="absolute -left-5 top-0 w-16 h-16 z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M 50,50 m -40,0 a 40,40 0 1,0 40,-40"
                    fill="none"
                    stroke="#FF5722"
                    strokeWidth="8"
                    strokeLinecap="round"
                    transform="rotate(-45, 50, 50)"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-center max-w-2xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div> */}

          <div>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                index={index}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
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

export default FaqAccordion

