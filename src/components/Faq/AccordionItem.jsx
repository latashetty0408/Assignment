import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"


const AccordionItem = ({ faq, isOpen, index, toggleAccordion }) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className={`rounded-[18px]  mb-7 ${isOpen ? "border-1 border-orange-500" : "border"}`}>
      <button
        className="w-full px-7 py-3.5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{faq.question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-orange-500" : "text-white"
          }`}
          size={20}
        />
      </button>

      {/* Bootstrap-style collapse */}
      <div className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: `${height}px` }}>
        <div ref={contentRef} className="px-7 pb-4 text-gray-300">
          <p className="m-0">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem;