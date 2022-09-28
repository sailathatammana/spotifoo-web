//NPM Packages
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import home from "../assets/icons/home.svg";
import search from "../assets/icons/search.svg";

export default function SideBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/" className="nav-link">
            <img src={logo} alt="." />
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            <img src={home} alt="." className="image" />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            <img src={search} alt="." className="image" />
            <span className="link-text">Search</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
