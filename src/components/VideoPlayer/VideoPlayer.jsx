import React from "react";
import { PlayCircle } from "lucide-react"; // optional, or replace with SVG
import Heading from "../Heading/Heading"; // Assuming you have a Heading component
import thumbNail from "../../assets/images/thumb.png"; // Adjust the path as necessary
import Button from "../Button/Button";

const ChroPanelSection = () => {
  return (
    <section className=" py-10 px-4 flex flex-col items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 mb-4">
        <Heading
          title="Lorem ipsum dolor"
          className="text-4xl font-bold"
          withCircle={true}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          subtitleClassName="text-lg font-medium w-2/3 text-center"
        />
      </div>

      {/* Subtitle */}
    

      {/* Video Section */}
      <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-md shadow-lg mb-8">
        <img
          src={thumbNail}// Replace with actual image path
          alt="CHRO Panel on iMocha-EY Report"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-black bg-opacity-80 flex items-center justify-center">
            <PlayCircle className="text-orange-500 w-10 h-10" />
          </div>
        </button>

        {/* Video Heading Overlay */}
      </div>

      {/* CTA Button */}
      <Button >
        Download Full Report
      </Button>
    </section>
  );
};

export default ChroPanelSection;
