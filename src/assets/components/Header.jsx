import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <input type="text" placeholder="Recherche des articles" />
        <button>S'inscire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
