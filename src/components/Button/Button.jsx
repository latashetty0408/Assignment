"use client"

const Button = ({ children, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ borderRadius: "101px" }}
      className="bg-[#FF4D00] text-white font-medium py-3 px-8 rounded-md  transition-colors"
    >
      {children}
    </button>
  )
}

export default Button
