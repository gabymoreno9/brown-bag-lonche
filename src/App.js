import Navbar from './components/Navbar';
import logo from './logo.png';
import hero from './images/hero.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      
        <div className = "hero">
          <div className = "hero-text">
            Welcome to 
            <br/>
            Brown Bag 
            <br/>
            Lonche
          </div>
        </div>
      </header>
      <div className = "about">
        <h2>About</h2>
        <p>A brown bag lunch, also known as a lunch and learn or a sack lunch, is a phrase used to describe an informal opportunity for employees to learn at work. These informal events often lead to sharing knowledge and information that may not be accessible for all. Brown Bag Lonche takes the idea of these serendipitous learning oportunities and brings them to underepresented, low income students, and young professionals. Topics include first generation college student panels, how to navigate the tech industry as a person of color, socioeconomic mobility, and financial literacy.</p>
      </div>
    </div>
  );
}

export default App;
