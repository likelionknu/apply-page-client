import logoImg from "../../assets/shared/logo.png";
import googleImg from "../../assets/shared/google.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="header-left">
          <div className="logo">
            <img src={logoImg} alt="knu" className="logo-img" />
            <p className="logo-text">LIKELION KNU</p>
          </div>
          <div className="desktop-menu">
            <a>Projects</a>
            <span className="menu-divider"></span>
            <a>Apply</a>
            <span className="menu-divider"></span>
            <a>Part</a>
          </div>
        </div>
        <div className="header-right">
          <div className="google-action">
            <img src={googleImg} alt="google" className="google-img" />
            <p className="google-text">Sign in with Google</p>
          </div>
          <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
