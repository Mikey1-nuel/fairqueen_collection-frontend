"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "../styles/footer.css";

const Footer = () => {
  const FaInstagram = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaInstagram),
    { ssr: false }
  );
  const FaTiktok = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaTiktok),
    { ssr: false }
  );
  const FaCopyright = dynamic(
    () => import("react-icons/fa").then((mod) => mod.FaCopyright),
    { ssr: false }
  );
  return (
    <footer className="about-footer foot">
      <div className="hours">
        <p>HOURS</p>
        <span>Monday - Saturday: 8 AM - 7 PM</span>
      </div>

      <div className="soc-icon-cont">
        <a
          href="https://www.instagram.com/fairqueen_collections/"
          target="_blank"
        >
          <FaInstagram className="soc-icon" />
        </a>
        <a
          href="https://www.tiktok.com/@fairqueen_collections"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="soc-icon" />
        </a>
      </div>

      <div className="footer-link">
        <Link href="/pages/contact" className="about">
          CONTACT US
        </Link>
        <Link href="/pages/clothing" className="about">
          SHOP NOW
        </Link>
      </div>

      <div className="rights">
        <FaCopyright className="copyright" />
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
