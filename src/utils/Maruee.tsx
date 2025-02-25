import React from "react";
import styles from "./marqueeCarousel.module.css";
import celestial from '../assets/logo/celestial1.png';
import apex from '../assets/logo/apexw1.png';
import quantum from '../assets/logo/quantrumw1.png';
import acme from '../assets/logo/acme1.png';
import pulse from '../assets/logo/pulsew1.png';

export const MarqueeCarousel = () => {
  return (
    <div className={styles.marqueeCarouselWrap}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeCont}>
          {/* Logos (Duplicated for smooth scrolling) */}
          {[celestial, apex, quantum, acme, pulse, celestial, apex, quantum, acme, pulse, celestial, apex, quantum, acme, pulse].map((logo, index) => (
            <img key={index} src={logo} alt="marqueeLogo" className={styles.marqueeLogo} />
          ))}
        </div>
      </div>
    </div>
  );
};
