import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <h2>S'inscrire</h2>
      <form className="signup-form">
        <input
          className="input-text"
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input className="input-text" type="email" placeholder="Email" />
        <input
          className="input-text"
          type="password"
          placeholder="Mot de passe"
        />
        <div className="check-box-glob">
          <div className="check-box">
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </main>
  );
};
export default Signup;
