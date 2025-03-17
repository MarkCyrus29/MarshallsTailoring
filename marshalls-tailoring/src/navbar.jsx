import { Link } from "react-router-dom";
import logo from "./assets/marshalls_logo.png";
import marshalls_tailoring from "./assets/marshalls_tailoring.png";
import { useState } from "react";
import "./styles/App.css";
import "./styles/navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-contents">
        <div className="navbar-marshalls">
          <Link to="/">
            <img className="logo lg:h-24" src={logo} alt="Marshalls Logo" />
          </Link>
        </div>

        <div className="title-container">
          <img
            className="title sm:opacity-0 lg:opacity-100"
            src={marshalls_tailoring}
            alt="Marshalls Tailoring"
          />
        </div>

        <div className="links-container">
          <div className="xs:hidden lg:flex ">
            <div className="links">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/suits" className="hover:text-blue-400">
                Suits
              </Link>
              <Link to="/contacts" className="hover:text-blue-400">
                Contacts
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <label className="burger" htmlFor="burger">
              <input
                type="checkbox"
                id="burger"
                onChange={toggleMenu}
                checked={isOpen}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } hidden-links absolute top-full left-0 w-full text-white text-center transition-opacity duration-500 ease-in-out z-50`}
      >
        <Link
          to="/"
          className="block py-1 my-0.5 "
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/suits"
          className="block py-1 my-0.5 "
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Suits
        </Link>
        <Link
          to="/contacts"
          className="block py-1 my-0.5 "
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};
