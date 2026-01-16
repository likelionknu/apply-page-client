import logoImg from "../../assets/shared/logo.png";
import googleImg from "../../assets/shared/google.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo">
            <img src={logoImg} alt="knu" className="logo-img" />
            <p className="logo-text">LIKELION KNU</p>
          </div>
          <div className="nav-menu">
            <p>Projects</p>
            <p className="bar"></p>
            <p>Apply</p>
            <p className="bar"></p>
            <p>Part</p>
          </div>
        </div>
        <div className="right">
          <div className="google">
            <img src={googleImg} alt="google" className="google-img" />
            <p className="google-text">Sign in with Google</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
