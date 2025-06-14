"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import "../../styles/bag-detail.css";

const BagDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = [
    "Black",
    "Brown",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gray",
    "Pink",
  ];

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };
  return (
    <main>
      <section className="detail-container">
        <Image
          src="/Screenshot_20250606_115627.jpg"
          alt=""
          width={500}
          height={500}
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

export default BagDetail;
