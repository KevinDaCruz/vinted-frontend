import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <h2>Se connecter</h2>
      <form className="signup-form">
        <input
          className="input-text"
          type="email"
          placeholder="Adresse email"
        />
        <input
          className="input-text"
          type="password"
          placeholder="Mot de passe"
        />
        <button>Se connecter</button>
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </main>
  );
};
export default Login;
