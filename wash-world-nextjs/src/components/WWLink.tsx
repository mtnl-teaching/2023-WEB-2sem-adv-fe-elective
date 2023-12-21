import Link from "next/link";
import styles from "./WWButton.module.css";

export interface WWLinkProps {
  backgroundColor: string;
  badgeText: string;
  disabled: boolean;
  buttonText: string;
}

export default function WWLink({
  backgroundColor,
  badgeText,
  disabled = false,
  buttonText,
}: WWLinkProps) {
  const dynamicStyles = {
    backgroundColor,
  };

  return (
    <Link className={styles.button} style={dynamicStyles} href={""}>
      {badgeText && <span className={styles.badge}>{badgeText}</span>}
    </Link>
  );
}
