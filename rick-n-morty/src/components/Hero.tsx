import React from "react";
import title from "../assets/title.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={title} alt={"Rick n Mort logo"} height={200} />
    </div>
  );
};

export default Hero;
