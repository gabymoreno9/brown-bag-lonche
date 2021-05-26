import Navbar from './components/Navbar';
import './Contact.css';

function Contact() {
  return (
    <div className="outercontainer">
        <Navbar />   
        <div className = "hero">
          <div className = "hero-text">
            Contact Us
          </div>
        </div>
      <div className = "contact-us" id = "contact">
        <h2>Contact Us</h2>
        <p class ="contact-text">
            Reach out to us at brownbaglonche@gmail.com 
            <br>
            </br>
            or check us out on instagram on @brownbaglonche
        </p>
      </div>
    </div>
  );
}

export default Contact;
