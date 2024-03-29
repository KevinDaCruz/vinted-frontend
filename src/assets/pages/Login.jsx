import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response.status === 400) {
        // Je met à jour mon state errorMessage
        setErrorMessage("Adresse mail ou mot de passe invalide");
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all the fields");
      }
    }
  };
  return (
    <main>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          className="input-text"
          type="email"
          name="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="password"
          name="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Se connecter</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </main>
  );
};
export default Login;
