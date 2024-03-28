import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <input type="text" placeholder="Recherche des articles" />
        <Link to="/signup">
          <button className="sign-up">S'inscire</button>
        </Link>
        <Link to="/login">
          <button className="login">Se connecter</button>
        </Link>
        <button className="sold">Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
