import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LinkPage from './pages/linkPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="link" element={<LinkPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
