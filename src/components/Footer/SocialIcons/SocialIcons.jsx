import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa"
import { Instagram } from "../../../icons/Instagram"
import { LinkedIn } from "../../../icons/LinkedIn"

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="social-icon">
        {/* <FaInstagram /> */}
        <Instagram />
      </a>
      <a href="#" className="social-icon">
        {/* <FaLinkedinIn /> */}
        <LinkedIn />
      </a>
      <a href="#" className="social-icon">
        <FaTwitter />
      </a>
      <a href="#" className="social-icon">
        <FaFacebookF />
      </a>
    </div>
  )
}

export default SocialIcons
