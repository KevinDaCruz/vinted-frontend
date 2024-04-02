import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, search, handleToken, setSearch }) => {
  return (
    <header className="container">
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <input
          type="text"
          placeholder="Recherche des articles"
          name="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {token ? (
          <button
            className="log-out"
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button className="sign-up">S'inscire</button>
            </Link>
            <Link to="/login">
              <button className="login">Se connecter</button>
            </Link>
          </div>
        )}
        <Link to={token ? "/publish" : "/login"}>
          <button className="sold">Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
