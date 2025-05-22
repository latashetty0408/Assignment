
import "./Heading.css";
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
const Heading = ({ title, subtitle, withCircle = false, className = "", subtitleClassName = "" }) => {
  return (
    <div className={`flex flex-col items-center mb-10 ${className} relative`}>
      <div className="relative mb-4">
        <h2 className="text-3xl md:text-4xl font-bold relative z-10">
        <span className="relative z-10">{title}</span>

        {withCircle && (
          // <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-orange-500 z-0"></div>
          <div className="absolute orange-circle">
            <svg width="66" height="73" viewBox="0 0 66 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.4431 38.2171C3.74597 43.0565 5.82064 47.6686 8.73318 51.8405C14.4922 60.3973 21.8309 66.8768 31.4402 70.5596C35.6383 72.0961 40.0346 72.9938 44.6142 72.5479C51.311 72.0589 56.7646 69.55 61.1074 64.5956C63.2458 62.2249 65.0749 58.591 65.5375 57.1006C65.6036 56.8877 62.3756 54.4853 62.3756 54.4853C62.3095 54.6982 62.2434 54.9111 62.1773 55.124C60.1499 59.3966 56.8283 62.5672 52.4918 64.4891C47.876 66.5577 43.2154 66.5116 38.3926 65.4815C33.9963 64.5838 30.0775 62.9006 26.4892 60.1529C18.0333 54.2603 12.5024 46.4746 9.5513 37.1555C9.17602 36.1053 8.86682 34.8422 8.55763 33.5791C8.31451 32.1031 8.0714 30.6271 7.89438 28.9382C7.59145 24.6426 8.27353 20.1859 10.0216 16.0601C11.7698 11.9342 14.5989 8.84419 18.509 6.78993C23.6023 3.93584 29.0347 3.75464 34.7103 5.04944C38.1877 5.89536 41.4669 7.38002 44.6799 9.07759C49.9078 12.5677 55.1145 18.3853 58.5495 23.8865L61.6665 24.3872C61.3062 24.0419 60.2103 22.3012 59.8499 21.956C54.3702 13.2525 47.0315 6.773 37.4883 2.87721C33.3563 1.12784 29.1732 0.296289 24.4465 0.463109C13.8608 0.678772 5.31373 7.12928 1.92844 17.2828C0.606743 21.541 0.174057 24.4411 0.476978 28.7368C0.491925 29.4417 0.654003 30.4257 0.668958 31.1306L1.72244 37.5265C2.36206 37.7251 2.29598 37.938 2.4431 38.2171Z" fill="#FF4D00"/>
            </svg>
          </div>

        //   <span className="absolute -left-5 top-0 w-16 h-16 z-0">
        //   <svg viewBox="0 0 100 100" className="w-full h-full">
        //     <path
        //       d="M 50,50 m -40,0 a 40,40 0 1,0 40,-40"
        //       fill="none"
        //       stroke="#FF5722"
        //       strokeWidth="8"
        //       strokeLinecap="round"
        //       transform="rotate(-45, 50, 50)"
        //     />
        //   </svg>
        // </span>
        )}
        </h2>
      </div>
{/* {subtitle && <p className="text-center max-w-2xl text-gray-300">{subtitle}</p>} */}
      {subtitle && <p className={`text-xl font-medium text-[#220D04CC] ${subtitleClassName}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </div>
  )
}

export default Heading