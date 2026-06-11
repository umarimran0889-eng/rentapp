import "./Navbar.css";
import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">SHOP.co</a>
      </div>

      <ul className="Nav-links">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrival</a>
        <a href="#">Brands</a>
      </ul>

      <div className="Search-bar">
        <span className="search-icon">
          <FaSearch />
        </span>

        <input
          type="text"
          id="Input-text"
          placeholder="Search for Products..."
        />
      </div>

      <div className="Nav_icons">
        <button className="icon-btn">
          <FaShoppingCart />
        </button>

        <button className="icon-btn">
          <FaUser />
        </button>

        <button
          className="Navscroll"
          onClick={() => setMenuopen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search for Products..."
            />
          </div>

          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrival</a>
          <a href="#">Brands</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;