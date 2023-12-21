import styles from "./Header.module.css";
import logo from "../assets/img.png";

export default function Header() {
  return (
    <header className={styles.nav}>
      <img src={logo} alt={"Rick n Mort logo"} height={50} />
      <div className={styles.buttons}>
        <p>Characters</p>
        <p>Locations</p>
        <p>Episodes</p>
      </div>
    </header>
  );
}
