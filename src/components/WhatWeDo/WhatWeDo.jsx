"use client"
import { useState } from "react"
// import SectionHeading from "./SectionHeading"
import { Circle } from "lucide-react"
import Heading from "../Heading/Heading.Jsx"

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState("enterprise")

  const tabs = {
    enterprise: {
      title: "Lorem ipsum dolor sit amet",
      description:
        "We offer talent transformation programs (ILTP & LMS) for professionals across hierarchy levels, empowering organizations to future-proof their workforce and business.",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    assessments: {
      title: "Assessments and Evaluations",
      description:
        "Our comprehensive assessment tools help organizations evaluate skills and competencies to make informed hiring and development decisions.",
      points: [
        "Pre-employment skill assessments",
        "Technical competency evaluations",
        "Behavioral and cognitive assessments",
        "Custom assessment development",
      ],
    },
  }

  const activeContent = tabs[activeTab]

  return (
    <div className="relative bg-white py-16">

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto border border-blue-500 rounded-lg p-8">
          <div className="mb-8">
            <Heading title="What We Do" subtitle="" />
            <p className="text-center max-w-4xl mx-auto text-gray-700 mt-4">
              Idealabs iMocha is Next Generation HR Tech organization, addressing Talent Acquisition and Talent
              Development requirements for Corporates with our Award-Winning Skill Intelligence cloud Platform, LMS- LXP
              Platform and Instructor Led Training programs (ILTP)
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex">
              {/* Enterprise Learning Tab - Speech bubble style */}
              <div className="relative">
                <button
                  className={`px-6 py-3 font-medium ${
                    activeTab === "enterprise" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  } relative z-10`}
                  onClick={() => setActiveTab("enterprise")}
                >
                  Enterprise Learning
                </button>
                {activeTab === "enterprise" && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-500 border-r-[8px] border-r-transparent"></div>
                )}
              </div>

              {/* Assessments Tab - Regular style */}
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === "assessments" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab("assessments")}
              >
                Assessments
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image with experience badge */}
            <div className="md:w-2/5 relative">
              {/* Decorative dots */}
              <div className="absolute top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Orange vertical line */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-orange-500"></div>

              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team working together"
                className="w-full rounded-lg"
              />

              {/* Experience badge */}
              <div className="absolute bottom-0 left-0 bg-[#0a0b2e] text-white p-4">
                <div className="text-orange-500 text-5xl font-bold">15</div>
                <div className="text-sm">Years Experience</div>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-0 right-0 w-16 h-16 translate-x-1/2 translate-y-1/2">
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
              <p className="text-gray-700 mb-6">{activeContent.description}</p>

              <div className="space-y-4">
                {activeContent.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-1">
                      <Circle fill="#FF5722" size={16} />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
