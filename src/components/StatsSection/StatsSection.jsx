"use client"
import CounterAnimation from "./CounterAnimation"
import StatItem from "./StatItem"

const StatsSection = () => {
  const stats = [
    { number: "20", description: "Customers across MEA Regions" },
    { number: "500", description: "Days Training Delivered" },
    { number: "30000", description: "Assessment Executed" },
    { number: "40", description: "Programs Added" },
    { number: "3500", description: "Professional Onboarded On LMS" },
    { number: "300", description: "Facilitator's & SME's" },
  ]

  return (
    <div className="relative bg-[#0a0b2e] py-16 text-white">
        <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading with orange circle */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-2">
              <h2 className="text-4xl font-bold relative z-10">Lorem Ipsum</h2>
              <div className="absolute top-0 right-0 w-12 h-12 rounded-full border-2 border-orange-500 z-0"></div>
            </div>
            <p className="text-center max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          {/* First row of stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StatItem description={stats[0].description}>
              <CounterAnimation end={stats[0].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[1].description}>
              <CounterAnimation end={stats[1].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[2].description}>
              <CounterAnimation end={stats[2].number} suffix="+" />
            </StatItem>
          </div>

          {/* Second row of stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem description={stats[3].description}>
              <CounterAnimation end={stats[3].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[4].description}>
              <CounterAnimation end={stats[4].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[5].description}>
              <CounterAnimation end={stats[5].number} suffix="+" />
            </StatItem>
          </div>
        </div>
      </div>

      {/* Sloped bottom edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </div>
  )
}

export default StatsSection
