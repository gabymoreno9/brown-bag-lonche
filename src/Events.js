import Navbar from './components/Navbar';
import './Events.css';

function Events() {
  return (
    <div className="outercontainer">
        <Navbar />   
        <div className = "hero-events">
          <div className = "hero-text">
            Events
          </div>
        </div>
      <div className = "contact-us" id = "contact">
        <h2>Events</h2>
        <p class ="events-text">
            Lists for new events will appear in this page.
        </p>
      </div>
    </div>
  );
}

export default Events;
