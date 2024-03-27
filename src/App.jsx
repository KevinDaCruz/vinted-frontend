import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";

// import des components
import Header from "./assets/components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
