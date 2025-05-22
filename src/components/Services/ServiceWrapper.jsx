import "./ServiceWrapper.css"
const SectionWrapper = ({ children, backgroundColor = "#0a0b2e", topSlope = true, bottomSlope = true }) => {
  return (
    <div className="relative section-angled">
      {/* Top sloped edge */}
      {/* {topSlope && (
        <div
          className="absolute top-0 left-0 w-full h-16 z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
            background: backgroundColor,
          }}
        ></div>
      )} */}

      {/* Content */}
      <div className="relative z-0">{children}</div>

      {/* Bottom sloped edge */}
      {/* {bottomSlope && (
        <div
          className="absolute bottom-0 left-0 w-full h-16 z-10"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
            background: backgroundColor,
          }}
        ></div>
      )} */}
    </div>
  )
}

export default SectionWrapper
