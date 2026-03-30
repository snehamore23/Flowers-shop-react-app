import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/About">About</Link>&nbsp;&nbsp;
        <Link to="/Our-Service">Our Service</Link>&nbsp;&nbsp;
        <Link to="/Contact">Contact</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Navbar