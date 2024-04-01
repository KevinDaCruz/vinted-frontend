import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="main-offer">
      <div className="offer-container">
        <img
          className="offer-picture"
          src={data.product_image.secure_url}
          alt=""
        />
        <div className="offer-info">
          <div>
            <p className="offer-price">{data.product_price} €</p>
            {data.product_details.map((detail) => {
              const keys = Object.keys(detail);
              const keyName = keys[0];
              return (
                <ul className="offer-list" key={keyName}>
                  <li>
                    {keyName} {detail[keyName]}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="divider"></div>
          <div>
            <p className="name">{data.product_name}</p>
            <p className="description">{data.product_description}</p>
            <div className="offer-user-info">
              <img
                src={data.owner.account.avatar?.secure_url}
                alt="user avatar"
              />
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    </main>
  );
};
export default Offer;
