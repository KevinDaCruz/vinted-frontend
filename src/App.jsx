import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// import des pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";

// import des components
import Header from "./assets/components/Header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
    // console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
