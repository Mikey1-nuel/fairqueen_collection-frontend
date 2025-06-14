import React from "react";
import Image from "next/image";
import "../../styles/our-story.css";

const OurStory = () => {
  return (
    <main>
      <section className="our-story-container">
        <div className="header">
          <h1>Our Story</h1>
        </div>

        <div className="our-story-content">
          <div className="our-story-img">
            <Image src="/-1121112909.jpg" alt="" className="ceo-img1" />
            <p className="our-story-role">CEO and owner</p>
          </div>

          <div className="our-story-text">
            <h3>Fair Queen Collection</h3>
            <div className="our-story-description">
              <p>
                Fair Queen Collection was born from a dream, a dream to
                celebrate elegance, empower women, and redefine beauty through
                timeless fashion. What began as a small collection of
                thoughtfully curated pieces has grown into a bold and beloved
                brand, cherished by queens across the globe.
              </p>

              <p>
                From humble beginnings, Fair Queen started as a passion project
                run from a modest room, fueled by late nights, vision boards,
                and a relentless desire to create something beautiful. The
                brand&apos;s founder, a visionary with a deep love for fashion and
                women&apos;s empowerment, believed that every woman deserved to
                feel like royalty, confident, graceful, and unforgettable.
              </p>

              <p>
                With an eye for detail and a heart full of purpose, she
                handpicked every piece, ensuring it not only looked stunning but
                felt empowering. Slowly but surely, the collection gained
                attention. Word of mouth spread. One queen told another. And the
                Fair Queen family began to grow.
              </p>

              <p>
                Today, Fair Queen Collection stands as a reflection of that
                unwavering spirit. Every heel, every flat, every fabric and
                accessory tells a story of resilience, style, and self-worth.
                It&apos;s more than fashion, it&apos;s a movement of grace,
                confidence, and unapologetic femininity.
              </p>

              <p>
                To our founder, the heartbeat of this brand, thank you for
                showing us that queens aren&apos;t born, they&apos;re made. And
                to every woman who wears Fair Queen, know this: you are part of
                a legacy built with love, ambition, and a touch of gold.
              </p>

              <p>
                <strong>
                  Wear it proud. Rule with grace. Stay fair, Queen.
                </strong>
              </p>
            </div>
          </div>

          <div className="our-story-img2">
            <Image src="/-452779597.jpg" alt="" className="ceo-img2" />
            <p className="our-story-role">CEO and owner</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
