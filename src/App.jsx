import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import TrustedBySection from "./components/Companies/TrustedBySection"
import TalentTransformationSection from "./components/Services/TalentTransformationSection"
import LearningDevelopmentSection from "./components/Services/LearningDevelopmentSection"
import StatsSection from "./components/StatsSection/StatsSection"
import WhatWeDo from "./components/WhatWeDo/WhatWeDo"
import BlogCarousel from "./components/Blogs/BlogCarousel"
import TestimonialCarousel from "./components/Testimonials/TestimonialCarousel"
import FaqSection from "./components/Faq/FaqSection"
import ContactPage from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import SectionWrapper from "./components/Services/ServiceWrapper"

function App() {
  return (
    <div className="App">
            {/* Trusted By Section 1 */}
      <TrustedBySection />
<SectionWrapper backgroundColor="#0a0b2e">
        <div className="pt-16">
          {" "}
          {/* Add padding to account for the top slope */}
          {/* Talent Transformation Section */}
          <TalentTransformationSection />
          {/* Learning & Development Section */}
          <LearningDevelopmentSection />
        </div>
      </SectionWrapper>
      {/* Services & Talent Transformation Section */}
      {/* <TalentTransformationSection /> */}

      {/* Learning & Development Section */}
      {/* <LearningDevelopmentSection /> */}

       <StatsSection />
      <WhatWeDo />
       <TestimonialCarousel />
       <BlogCarousel />
      <div className="faq-section">
        <FaqSection />
      </div>
            <ContactPage />
      <Footer />
    </div>
  )
}

export default App

