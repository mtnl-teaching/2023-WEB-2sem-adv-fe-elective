import logo from "@/public/WW-logo-sort-tekst.png";
import Image from "next/image";
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
      <nav className={styles.navbar}>
        <Image src={logo} alt={"Wash worlds logo"} className={styles.logo} />
      </nav>
  );
}
