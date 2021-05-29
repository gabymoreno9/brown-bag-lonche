import Navbar from './components/Navbar';
import './Resources.css';

function Resources() {
  return (
    <div className="outercontainer">
        <Navbar />   
        <div className = "hero-events">
          <div className = "hero-text">
            Resources
          </div>
        </div>
      <div className = "contact-us" id = "contact">
        <h2>Resume Templates</h2>
        <p class ="events-text">
            You will find resume templates here
        </p>
      </div>
    </div>
  );
}

export default Resources;
