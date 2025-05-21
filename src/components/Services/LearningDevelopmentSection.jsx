import ServiceCard from "./ServiceCard";
import Heading from "../Heading/Heading.Jsx"
import Button from "../Button/Button"
import LearingDevelopmentImg from "../../assets/images/Learing&DevelopmentImg.png"
import Services_5 from "../../assets/images/Services_5.png"
import Services_6 from "../../assets/images/Services_6.png"
import Services_7 from "../../assets/images/Services_7.png"
import Services_8 from "../../assets/images/Services_8.png"

const LearningDevelopmentSection = () => {
  return (
    <div
      className="text-white py-16 relative"
      style={{
        background: `linear-gradient(87.74deg, #050A1D 1.72%, #080A13 98.22%), 
                    linear-gradient(49.31deg, rgba(0, 0, 0, 0.2) -3.28%, rgba(253, 81, 21, 0.2) -3.27%, rgba(0, 0, 0, 0) 76.93%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Image with decorations */}
          <div className="lg:w-1/2 relative">
            <img
              src={LearingDevelopmentImg}
              alt="People in a meeting"
              className="rounded-lg w-full"
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 relative">
            {/* Vertical dotted line */}

            <div className="lg:pl-12">
              <Heading
                title="Learning & Development"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <div className="mt-8 space-y-6">
                <ServiceCard
                  imageSrc={Services_5}
                  title="Diversity Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_6}
                  title="Lateral Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_7}
                  title="University Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_8}
                  title="Remote Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                                <Button onClick={() => console.log("Discover more clicked")}>Discover More</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningDevelopmentSection
