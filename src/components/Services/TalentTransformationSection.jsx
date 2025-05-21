import ServiceCard from "./ServiceCard";
import { FileCheck, Award, ArrowUpDown, TrendingUp } from "lucide-react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.Jsx";
import TalentTransformationImg from "../../assets/images/TalentTransformationImg.png"
import Services_1 from "../../assets/images/Services_1.png"
import Services_2 from "../../assets/images/Services_2.png"
import Services_3 from "../../assets/images/Services_3.png"
import Services_4 from "../../assets/images/Services_4.png"

const TalentTransformationSection = () => {
  return (
    <>
      <div
        class="absolute bottom-0 left-0 w-full h-16 bg-[#080A13]"
        style={{
          "clip-path": "polygon(0px 100%, 100% 0px, 100% 100%, 0px 100%)",
        }}
      ></div>
      
      <div
        className="text-white py-16 relative"
        style={{
          background: `linear-gradient(87.74deg, #050A1D 1.72%, #080A13 98.22%), 
                    linear-gradient(49.31deg, rgba(0, 0, 0, 0.2) -3.28%, rgba(253, 81, 21, 0.2) -3.27%, rgba(0, 0, 0, 0) 76.93%)`,
        }}
      >
        <div className="container mx-auto px-4">
          {/* Services heading */}
          <div className="flex justify-center mb-12">
            <Heading
              title="Services"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              withCircle={true}
              className="text-center"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Talent Transformation</h2>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-6">
                <ServiceCard
                  imageSrc={Services_1}
                  title="Compliance Tracking"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_2}
                  title="Certification Program"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_3}
                  title="Internal Mobility"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_4}
                  title="Upskilling/Re-skilling ROI"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />
              </div>

              <div className="mt-8">
                <Button onClick={() => console.log("Discover more clicked")}>
                  Discover More
                </Button>
              </div>
            </div>

            {/* Right side - Image with decorations */}
            <div className="lg:w-1/2 relative">
              

              <img
                src={TalentTransformationImg}
                alt="People working at computers"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentTransformationSection;
