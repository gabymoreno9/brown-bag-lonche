import logo from '../images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
      <div className="Navbar">
          <a href="./app.js"><img class = "logo" src={logo}/></a>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Recordings</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
      </div>
    );
}
  
export default Navbar;