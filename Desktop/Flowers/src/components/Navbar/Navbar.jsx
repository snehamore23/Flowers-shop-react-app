import "./Navbar.css";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { FileUser } from "lucide-react";
import { Phone } from "lucide-react";
import { HeartHandshake } from "lucide-react";

function Navbar({active}) {
  return (
    <div className="navbar">
      <Link to="/" className={`menu-item ${active === 'home' ? 'active-menu' : ''}`}>
        <House className="menu-icons" /> Home
      </Link>&nbsp;&nbsp;
      <Link to="/about" className={`menu-item ${active === 'about' ? 'active-menu' : ''}`}>
        <FileUser className="menu-icons" />About
      </Link>&nbsp;&nbsp;
      <Link to="/contact" className={`menu-item ${active === 'contact' ? 'active-menu' : ''}`}>
        <Phone className="menu-icons" />Contact
      </Link>&nbsp;&nbsp;
      <Link to="/our-service" className={`menu-item ${active === 'our-service' ? 'active-menu' : ''}`}>
        <HeartHandshake className="menu-icons" />Our Service
      </Link>&nbsp;&nbsp;
    </div>
  );
}

export default Navbar;