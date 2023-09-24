import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img className="logo" src={logo} alt="Логотип приложения" />
    </Link>
  );
}
