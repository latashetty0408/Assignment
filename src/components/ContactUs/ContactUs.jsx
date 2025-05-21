// import ContactForm from "./components/ContactForm"

import ContactForm from "../ContactForm/ContactForm"


function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold mb-4 relative">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute -left-5 top-0 w-16 h-16 z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M 50,50 m -40,0 a 40,40 0 1,0 40,-40"
                  fill="none"
                  stroke="#FF5722"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-45, 50, 50)"
                />
              </svg>
            </span>
          </h1>
          <p className="text-center max-w-2xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
