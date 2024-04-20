import Link from "next/link";
import { Lexend } from "next/font/google";
import styles from "../src/app/page.module.css";

const lexend = Lexend({  weight: ['400'], subsets: ["latin"] });

const Navbar = () => {
    return (
      <div className={`${styles.topnav} ${lexend.Lexend}`}>
        {/* <a>
          <img href="/" src="Hack4All-centered.png" alt="Home" className={styles.topnav_img}></img>
        </a> */}
        <a href="/"><img href="/" src="Hack4All Logo Blue-centered.png" alt="Home" className={styles.topnav_img}></img></a>
        <b>
          <a href="https://hcb.hackclub.com/donations/start/hack4all" className={styles.topnav_item}>Donate</a>
          <a href="/events" className={styles.topnav_item}>Events</a>
          <a href="/contact" className={styles.topnav_item}>Contact Us</a>
        </b>
      </div>
      );
};


export default Navbar;