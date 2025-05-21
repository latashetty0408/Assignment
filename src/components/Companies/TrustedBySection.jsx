import Heading from "../Heading/Heading.Jsx"
import InfiniteLogoScroll from "./InfiniteLogoScroll"
import Company_1 from "../../assets/images/Company_1.png"
import Company_2 from "../../assets/images/Company_2.png"
import Company_3 from "../../assets/images/Company_3.png"
import Company_4 from "../../assets/images/Company_4.png"
import Company_5 from "../../assets/images/Company_5.png"
import Company_6 from "../../assets/images/Company_6.png"

const TrustedBySection = () => {
  const logos = [
    {
      name: "isprz",
      src: Company_6,
      className: "h-12 object-contain",
    },
    {
      name: "AD PORTS GROUP",
      src: Company_1,
      className: "h-12 object-contain",
    },
    {
      name: "DOHA BANK",
      src: Company_2,
      className: "h-12 object-contain",
    },
    {
      name: "Dubai International Financial Centre",
      src: Company_3,
      className: "h-12 object-contain",
    },
    {
      name: "ENOVA by VEOLIA",
      src: Company_4,
      className: "h-12 object-contain",
    },
    {
      name: "mashreq",
      src: Company_5,
      className: "h-12 object-contain",
    },
  ]

  return (
    <div className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <Heading
          title="Trusted By Hundreds Of Progressive Companies"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          withCircle={true}
          className="text-center mb-16 text-black"
        />

        {/* Logo marquee */}
        <InfiniteLogoScroll logos={logos} speed={0.5} />
      </div>


    </div>
  )
}

export default TrustedBySection
