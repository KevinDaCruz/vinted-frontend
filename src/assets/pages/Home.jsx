import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import mainImg from "../img/main-img.jpg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main>
      <img className="main-img" src={mainImg} alt="Image principale" />
      <div className="container home">
        {data.offers.map((offers) => {
          return (
            <Link key={offers._id} to={`/offers/${offers._id}`}>
              <div className="offers">
                <div
                  onClick={() => {
                    console.log("click");
                  }}
                  className="user-info"
                >
                  <img
                    className="profile-pic"
                    src={offers.owner.account.avatar?.url}
                    alt="profile-pic"
                  />
                  <span className="home-span">
                    {offers.owner.account.username}
                  </span>
                </div>
                <img
                  className="home-pictures"
                  src={offers.product_image.url}
                  alt=""
                />
                <div className="home-offer-info">
                  <p>{offers.product_price} €</p>
                  <div className="details">
                    <span className="home-span">
                      {offers.product_details[1].TAILLE}
                    </span>
                    <span className="home-span">
                      {offers.product_details[0].MARQUE}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Home;
