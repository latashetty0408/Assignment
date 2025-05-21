import Logo from "../Logo/Logo"
import "../../assets/styles/Footer.css"
import ContactInfo from "./ContactInfo/ContactInfo"
import ExploreLinks from "./ExploreLinks/ExploreLinks"
import FindUs from "./FindUs/FindUs"
import LoremLinks from "./LinkList/LinkList"
import SocialIcons from "./SocialIcons/SocialIcons"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content justify-content-between">
          {/* Logo and Description Section */}
          <div className="col-lg-3 col-md-6">
            <Logo />
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <SocialIcons />
          </div>

          <div className="col-lg-9 flex">
          {/* Explore Links Section */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Explore</h3>
            <ExploreLinks />
          </div>

          {/* Lorem Ipsum Section */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Lorem Ipsum</h3>
            <LoremLinks />
          </div>

          {/* Find Us and Contact Info Section */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Find Us</h3>
            <FindUs />

            <h3 className="footer-heading mt-4">Contact Info</h3>
            <ContactInfo />
          </div>

          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-copyright text-center">
          COPYRIGHT @ 2024 IDEALABS. ALL RIGHTS RESERVED. | POWERED BY: DIGIHOST TECH SOLUTIONS PVT. LTD.
        </div>
      </div>
    </footer>
  )
}

export default Footer
