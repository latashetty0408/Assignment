
// export default function Heading({color, title, subTitle}) {
//   return (
//     <div className="relative flex flex-col items-center justify-center w-[730px] gap-3 text-center mb-10">
//         <div className="Heading">
//             <h1 className={`text-4xl font-bold text-${color}`}>{title}</h1>
//         </div>
//         <div>
//             <h5 className="text-xl font-medium text-[#220D04CC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
//         </div>
//     </div>
//   );
// };
const Heading = ({ title, subtitle, withCircle = false, className = "" }) => {
  return (
    <div className={`flex flex-col items-center mb-10 ${className}`}>
      <div className="relative mb-4">
        <h2 className="text-3xl md:text-4xl font-bold relative z-10">
        <span className="relative z-10">{title}</span>

        {withCircle && (
          // <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-orange-500 z-0"></div>
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
        )}
        </h2>
      </div>
{/* {subtitle && <p className="text-center max-w-2xl text-gray-300">{subtitle}</p>} */}
      {subtitle && <p className="text-xl font-medium text-[#220D04CC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </div>
  )
}

export default Heading