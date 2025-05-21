"use client"

import { useState } from "react"
import { User, Mail, Phone, MessageSquare } from "lucide-react"
import InputField from "../InputField/InputField"
import Button from "../Button/Button"
import ContactInfo from "../ContactInfo/ContactInfo"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted", formData)
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-lg p-6 md:p-10">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Send A Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            icon={<User className="text-orange-500" size={20} />}
            placeholder="Enter your name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <InputField
            icon={<Mail className="text-orange-500" size={20} />}
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <InputField
            icon={<Phone className="text-orange-500" size={20} />}
            placeholder="Enter your phone number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <InputField
            icon={<MessageSquare className="text-orange-500" size={20} />}
            placeholder="Type message here"
            type="text"
            multiline
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <div className="pt-4 flex justify-center md:justify-start">
            <Button>Submit</Button>
          </div>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="text-gray-500 font-medium text-xl">OR</div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactForm
