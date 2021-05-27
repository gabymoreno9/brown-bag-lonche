import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <div className="Navbar">
          <a href="./app.js"><img class = "logo" src={logo}/></a>

        <div className="navbar-items">
          <ul>
              <li><Link to="app#about">About</Link></li>
              <li><Link to="events">Events</Link></li>
              <li><Link to="resources">Resources</Link></li>
              <li><Link to="recordings">Recordings</Link></li>
              <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
}
  
export default Navbar;