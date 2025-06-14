"use client";
import React from "react";
import { useState } from "react";
import "../../styles/cloth-detail.css";

const ClothDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["40", "41", "42", "43", "44", "45", "46", "47", "48"];

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };
  return (
    <main>
      <section className="detail-container">
        <img
          src="/Screenshot_20250606_115944.jpg"
          alt=""
          width={500}
          className="detail-img-wrapper"
        />
        <div className="detail-content">
          <h2 className="detail-price">₦ 10,000</h2>
          <p className="detail-sizes">Sizes:</p>
          <div className="detail-size-options">
            {sizes.map((size) => (
              <label
                key={size}
                className={`size-option-radio ${
                  selectedSize === size ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                />
                {size}
              </label>
            ))}
          </div>
          <button className="btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
      </section>
    </main>
  );
};

export default ClothDetail;
