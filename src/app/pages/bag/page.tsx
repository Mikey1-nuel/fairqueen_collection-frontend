import React from "react";
import Link from "next/link";
import "../../styles/bag.css";

const Bags = () => {
  return (
    <main>
      <section className="bag-container">
        <div className="bag-img-links">
          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img1 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>

          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img2 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>

          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img3 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>

          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img4 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>

          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img5 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>

          <Link className="bag" href="/pages/bag-detail">
            <div className="bag-img-wrapper">
              <div className="bag-img6 img-scale" />
            </div>
            <p className="bag-price">₦ 10,000</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Bags;
