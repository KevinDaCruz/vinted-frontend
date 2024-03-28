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
          <p className="offer-price">{data.product_price} €</p>
          {data.product_details.map((detail) => {
            const keys = Object.keys(detail);
            const keyName = keys[0];
            return (
              <p key={keyName}>
                {keyName} {detail[keyName]}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Offer;
