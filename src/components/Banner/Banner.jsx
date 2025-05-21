import Navbar from './Navbar';
import heroImage from '../../assets/images/hero-image.png';
import './Banner.css'; // For clip-path and background-image
import Button from '../Button/Button';

export default function Banner() {
  return (
    <section className="hero relative text-white overflow-hidden min-h-[90vh]">

      <Navbar />

      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto px-6 py-12">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Talent Analytics <br /> & Learning
          </h1>
          <p className="mt-4 text-gray-300 text-sm">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
          </p>
          <Button 
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.location.href = '#'}
            text=""
          >Get In Touch</Button>
        </div>

        <div className="flex-1 text-center mt-8 md:mt-0" style={{ height: '682px'}}>
          <img src={heroImage} alt="Professional" className="relative" style={{right: '-18%',
    top: '30px'}} />
        </div>
      </div>

    </section>
  );
}
