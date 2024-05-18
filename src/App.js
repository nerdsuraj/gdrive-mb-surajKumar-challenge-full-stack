import './App.css';
import Portfolio from './componantes/portfolio/portfolio';
import Uncover from './componantes/uncover/uncover';
import GetStarted from './componantes/getstarted/getstarted';
import Footer from './componantes/footer/footer';
import images from './images/images.png';

function App() {


  return (
    <div className="app">
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <img src={images} alt="Metomic Logo" />
          </div>
          <nav className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#resources">Resource Centre</a>
            <a href="#company">Company</a>
            <a href="#partners">Partners</a>
            <button className="nav-button">Run free scan</button>
            <button className="nav-button primary">Book a demo</button>
          </nav>
        </div>
      </header>
      <div className="content">
        <div className="left-panel">
          <h2>Data Breach Finder</h2>
          <h3 className="text-white">Check if your Google Drive is leaking sensitive data</h3>
          <button className="btn">Free Google Drive Risk Report</button>
          <ul className="text-white">
            <li>See how secure your Google Drive account is in seconds</li>
            <li>Discover who still has access to your files, and who they were created by</li>
            <li>Find risky files exposed publicly to anyone on the internet</li>
          </ul>
          <p className="text-white">After your scan is completed, we'll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files' content at any time.</p>
        </div>
        <div className="right-panel">
          <img src="https://i.ibb.co/qDjMj8y/image-1.png" alt="Google Drive Risk Report" className="report-image" />
        </div>
      </div>
      <Portfolio />
      <Uncover />
      <GetStarted />
      <Footer />
    </div>

  );
}

export default App;
