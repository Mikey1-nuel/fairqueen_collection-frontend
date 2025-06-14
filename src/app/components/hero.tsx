import React from "react";
import Link from "next/link";
import "../styles/hero.css";
import Footer from "./footer";

const Hero = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-container">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1 className="home-hero-heading">
              <span className="span-text a">E</span>
              <span className="span-text a">L</span>
              <span className="span-text a">E</span>
              <span className="span-text a">G</span>
              <span className="span-text a">A</span>
              <span className="span-text a">N</span>
              <span className="span-text a">C</span>
              <span className="span-text a">E</span>
            </h1>
            <p className="p-text">Your taste is in the style</p>
            <Link href="/shop" className="shop-now-btn btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="welcome-back">
          <img src="/ankara.jpg" alt="" width={350} className="welcome-img1" />
          <div className="welcome-message">
            <p className="welcome-p">Welcome to Fair Collection!</p>
            <p className="welcome-subtext">
              Discover timeless pieces where elegance meets modern luxury,
              curated to elevate your wardrobe with grace, confidence, and
              class because you deserve nothing less than extraordinary.
            </p>
          </div>
          <img
            src="/sonia-tucker.jpg"
            alt=""
            width={300}
            className="welcome-img2"
          />
        </div>
      </section>

      <section className="product-container">
        <div className="product-img-links">
          <Link className="product" href="/pages/clothing">
            <div className="product-img-wrapper">
              <div className="product-img img-scale" />
            </div>
            <p className="product-name">Designer Clothings</p>
          </Link>

          <Link className="product" href="/pages/footwear">
            <div className="product-img-wrapper">
              <div className="product-img2 img-scale" />
            </div>
            <p className="product-name">Designer Foot wears</p>
          </Link>

          <Link className="product" href="/pages/bag">
            <div className="product-img-wrapper">
              <div className="product-img3 img-scale" />
            </div>
            <p className="product-name">Desiner Bags</p>
          </Link>

          <Link className="product" href="/">
            <div className="product-img-wrapper">
              <div className="product-img4 img-scale" />
            </div>
            <p className="product-name">Sneakers</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
