import { FaPhone, FaEnvelope } from "react-icons/fa"

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <a href="tel:+97152141269" className="contact-text">
          +971 52 141 2629
        </a>
      </div>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:mukesh.kokare@idealabs.me" className="contact-text">
          mukesh.kokare@idealabs.me
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
