import { ReactNode } from "react";
import styles from "./WWButton.module.css";

export interface WWButtonProps {
  backgroundColor?: string;
  badgeText?: string;
  disabled?: boolean;
  buttonText: string;
  onClick: () => void;
  children?: ReactNode;
}

export default function WWButton({
  backgroundColor = "#00c167",
  badgeText,
  disabled = false,
  buttonText,
  onClick,
  children,
}: WWButtonProps) {
  const dynamicStyles = {
    backgroundColor,
  };

  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={dynamicStyles}
    >
      {badgeText && <span className={styles.badge}>{badgeText}</span>}
      {buttonText}
      {children}
    </button>
  );
}
