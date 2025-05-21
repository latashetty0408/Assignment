"use client"

import { useState } from "react"

const InputField = ({ icon, placeholder, type, multiline = false, value, onChange }) => {
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`flex items-center bg-white rounded-md p-3 border ${focused ? "border-orange-500" : "border-gray-200"}`}
    >
      <div className="mr-3">{icon}</div>
      {multiline ? (
        <textarea
          className="flex-1 outline-none bg-transparent placeholder-gray-400 text-gray-700 resize-none h-24"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          className="flex-1 outline-none bg-transparent placeholder-gray-400 text-gray-700"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  )
}

export default InputField
