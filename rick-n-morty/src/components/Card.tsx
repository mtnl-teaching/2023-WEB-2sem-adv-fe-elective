import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  subTitle: string;
  img?: string;
}

const Card = ({
  title,
  subTitle,
  img = "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
}: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={`Portrait of ${name}`} className={styles.img} />
      <div className={styles.cardDrawer}>
        <p className={styles.name}>{title}</p>
        <p className={styles.specie}>{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
