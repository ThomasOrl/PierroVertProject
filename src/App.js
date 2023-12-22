import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/ServicesCards";
import Realisations from "./components/pages/Realisations";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicesCards" element={<Services />} />
          <Route exact path="/realisations" element={<Realisations />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
