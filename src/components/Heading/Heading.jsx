
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
          <>
          <div className="absolute orange-circle hidden md:block ">
           <svg width="67" height="73" viewBox="0 0 67 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.02123 38.2981C4.3241 43.1375 6.39876 47.7496 9.31131 51.9216C15.0703 60.4783 22.4091 66.9578 32.0183 70.6407C36.2164 72.1771 40.6127 73.0749 45.1923 72.629C51.8891 72.1399 57.3428 69.6311 61.6855 64.6767C63.8239 62.3059 65.653 58.6721 66.1156 57.1817C66.1817 56.9688 62.9537 54.5663 62.9537 54.5663C62.8876 54.7792 62.8215 54.9921 62.7554 55.205C60.728 59.4776 57.4064 62.6482 53.0699 64.5701C48.4541 66.6387 43.7935 66.5927 38.9707 65.5626C34.5744 64.6648 30.6557 62.9817 27.0673 60.2339C18.6114 54.3414 13.0805 46.5557 10.1294 37.2365C9.75414 36.1863 9.44495 34.9233 9.13575 33.6602C8.89264 32.1842 8.64953 30.7082 8.4725 29.0193C8.16958 24.7237 8.85166 20.267 10.5998 16.1411C12.3479 12.0153 15.177 8.92524 19.0871 6.87099C24.1804 4.0169 29.6129 3.8357 35.2884 5.13049C38.7658 5.97642 42.045 7.46108 45.258 9.15864C50.486 12.6487 55.6926 18.4664 59.1276 23.9676L62.2447 24.4683C61.8843 24.123 60.7884 22.3823 60.4281 22.037C54.9484 13.3335 47.6096 6.85406 38.0664 2.95826C33.9344 1.20889 29.7513 0.377344 25.0246 0.544164C14.439 0.759827 5.89186 7.21034 2.50657 17.3638C1.18487 21.622 0.752182 24.5222 1.0551 28.8178C1.07005 29.5227 1.23213 30.5067 1.24708 31.2116L2.30057 37.6076C2.94019 37.8061 2.8741 38.019 3.02123 38.2981Z" fill="#FF4D00"/>
</svg>

          </div>

          <div className="absolute orange-circle-mobile block md:hidden">
          <svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.33237 27.6102C3.26619 31.0788 4.7532 34.3846 6.84075 37.3748C10.9685 43.5078 16.2285 48.1519 23.1159 50.7916C26.1248 51.8929 29.2759 52.5363 32.5583 52.2167C37.3582 51.8662 41.2671 50.068 44.3797 46.5169C45.9124 44.8177 47.2234 42.2132 47.555 41.1449C47.6023 40.9923 45.2887 39.2704 45.2887 39.2704C45.2413 39.423 45.1939 39.5756 45.1466 39.7282C43.6934 42.7905 41.3127 45.063 38.2045 46.4406C34.8962 47.9232 31.5557 47.8902 28.099 47.1519C24.948 46.5084 22.1392 45.302 19.5673 43.3326C13.5065 39.1092 9.54233 33.5288 7.42713 26.8493C7.15815 26.0966 6.93654 25.1913 6.71492 24.286C6.54067 23.2281 6.36642 22.1702 6.23954 20.9597C6.02242 17.8808 6.5113 14.6865 7.76425 11.7293C9.0172 8.77214 11.045 6.55737 13.8475 5.08499C17.4981 3.03933 21.3918 2.90946 25.4597 3.8375C27.9521 4.44381 30.3025 5.50793 32.6054 6.72465C36.3525 9.22614 40.0843 13.3959 42.5463 17.3389L44.7805 17.6977C44.5222 17.4503 43.7367 16.2026 43.4784 15.9552C39.5509 9.71698 34.2909 5.07286 27.4508 2.28056C24.4893 1.02671 21.491 0.430701 18.1032 0.550269C10.516 0.704845 4.38987 5.32822 1.96349 12.6057C1.01617 15.6577 0.706037 17.7364 0.923156 20.8153C0.933874 21.3205 1.05004 22.0258 1.06076 22.531L1.81584 27.1153C2.27428 27.2576 2.22692 27.4102 2.33237 27.6102Z" fill="#FF4D00"/>
</svg>

          </div>
          </>
          

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