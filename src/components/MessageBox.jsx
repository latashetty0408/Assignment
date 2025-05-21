import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MessageBox({ icon, text }) {
  return (
    <div className="relative bg-[#1A1A1A] text-white rounded-lg py-4 px-6 md:py-5 md:px-7 text-sm md:text-base leading-relaxed break-words">
      <FontAwesomeIcon icon={icon} className="mr-3 text-lg md:text-xl" />
      <span>{text}</span>

      {/* Desktop Tail (points left, hidden on mobile) */}
      <div className="hidden md:block absolute top-1/2 left-0 transform -translate-x-[15px] -translate-y-1/2 w-0 h-0 border-t-[15px] border-b-[15px] border-r-[15px] border-t-transparent border-b-transparent border-r-[#1A1A1A]"></div>

      {/* Mobile Tail (points bottom, hidden on desktop) */}
      <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[15px] w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#1A1A1A]"></div>
    </div>
  );
}

export default MessageBox;