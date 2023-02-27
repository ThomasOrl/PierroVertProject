import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Realisations" element={<Realisations />} />
          <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
