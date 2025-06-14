"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link onClick={handleLogoClick} href="/">
              <h3>
                FAIR<span>Q</span>COLLECTION
              </h3>
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link href="/pages/clothing">Shop</Link>
            </li>
            <li>
              <Link href="/pages/our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
          </ul>

          <Link href="/pages/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar (Hamburger + Cart) */}
      <nav className="mobile-nav-opens">
        <div className="navbar-container">
          <div className="logo">
            <Link onClick={handleLogoClick} href="/">
              <h3>
                FAIR<span>Q</span>COLLECTION
              </h3>
            </Link>
          </div>

          <div className="icon-cont">
            <Link href="/pages/cart" className="cart-link">
              <FaShoppingCart className="cart-icon" />
            </Link>

            <a
              onClick={toggleMenu}
              className={`nav_hamburger-wrapper ${menuOpen ? "open" : ""}`}
            >
              <div className="nav_hamburger-line_1"></div>
              <div className="nav_hamburger-line_2"></div>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile nav links */}
      <div
        onClick={toggleMenu}
        className={`mobile-nav-links ${menuOpen ? "open" : ""}`}
      >
        <div className="nav-link-img">
          <img src="/KS254_Batch1_FINAL_90_of_137_1000x1501.jpg" alt=""  />
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/pages/clothing">Shop</Link>
          </li>
          <li>
            <Link href="/pages/our-story">Our Story</Link>
          </li>
          <li>
            <Link href="/pages/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
