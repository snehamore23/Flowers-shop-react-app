import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Heart } from "lucide-react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Flower Shop</h3>
          <p>
            Fresh bouquets delivered with care. We create beautiful arrangements for every
            occasion and make every moment special.
          </p>
        </div>

        <div className="footer-column footer-links">
          <h4>Quick links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/our-service">Our Service</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <span>hello@flowershop.com</span>
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>Flower Street, Garden City</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <Heart size={14} /> love for flowers and happy moments.
        </p>
        <p>© {new Date().getFullYear()} Flower Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer