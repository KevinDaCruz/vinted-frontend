import { useEffect, useState } from "react";
import axios from "axios";

import mainImg from "../img/main-img.jpg";

const Home = () => {
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
    <main>
      <img className="main-img" src={mainImg} alt="Image principale" />
      <div className="container home">
        {data.offers.map((offers) => {
          return console.log(offers);
        })}
      </div>
    </main>
  );
};
export default Home;
