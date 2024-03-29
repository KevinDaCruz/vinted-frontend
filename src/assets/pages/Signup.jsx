import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          "Cette email est déjà utilisé, veuillez entrer une nouvelle adresse mail"
        );
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tout les champs");
      }
    }
  };

  return (
    <main>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          className="input-text"
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="check-box-glob">
          <div className="check-box">
            <input
              checked={newsletter}
              type="checkbox"
              name="newsletter"
              value={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="conditions">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">S'inscrire</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </main>
  );
};
export default Signup;
