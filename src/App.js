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
    </div>
  );
}

export default App;
