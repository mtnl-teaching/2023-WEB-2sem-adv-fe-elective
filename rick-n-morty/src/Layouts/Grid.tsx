import React from "react";
import styles from "../components/CharacterGrid.module.css";

export interface GridLayoutProps {
  children: React.ReactNode;
}

const Grid = ({ children }: GridLayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Grid;
