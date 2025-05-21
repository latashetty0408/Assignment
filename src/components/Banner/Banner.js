import './Banner.css';
import Button from './Button';
import heroImage from '../assets/ban-person.png'; // or use public path

export default function Banner() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Talent Analytics <br /> & Learning</h1>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</p>
          <Button label="Get In Touch" />
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Professional" />
        </div>
      </div>
      <div className="hero-decor" />
      <div className="hero-dots">
        {[...Array(16)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
}
