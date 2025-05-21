import './Navbar.css';
import logo from '../assets/logo.png'; // or use public path

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Idealabs Logo" />
      </div>
      <ul className="nav-links">
        {["Home", "About Us", "Talent Transformation", "Learning & Development", "Blogs"].map((item, idx) => (
          <li key={idx} className="nav-item">
            {item}
          </li>
        ))}
        <li className="contact-info">
          <a href="tel:9320398943"> +971 52 141 2629 </a>
        </li>
      </ul>
    </nav>
  );
}
