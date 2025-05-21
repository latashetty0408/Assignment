"use client"

const Button = ({ children, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors"
    >
      {children}
    </button>
  )
}

export default Button
