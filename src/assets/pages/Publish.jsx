import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [trade, setTrade] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <main className="publish-main">
      <div className="container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="file-select">
            <div className="dashed-preview">
              <div className="input-design">
                <label className="label-file">
                  <span className="input-sign">+</span>
                  <span>Ajoute une photo</span>
                </label>
                <input
                  id="file"
                  type="file"
                  className="input-file"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                value={title}
                placeholder="Ex: Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                value={description}
                placeholder="Ex: Porté quelques fois, taille correctement..."
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                value={brand}
                placeholder="Ex: Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                value={size}
                placeholder="Ex: L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                value={color}
                placeholder="Ex: Red"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>État</h4>
              <input
                type="text"
                value={condition}
                placeholder="Ex: Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                value={city}
                placeholder="Ex: Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="number"
                  value={price}
                  placeholder="0,00 €"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <div className="checkbox-input">
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={trade}
                    onChange={() => {
                      setTrade(!trade);
                    }}
                  />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>

          <div className="submit-publish">
            <button type="submit" className="publish-button">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
export default Publish;
