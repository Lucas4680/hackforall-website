import Link from "next/link";
import { Lexend } from "next/font/google";
import styles from "../src/app/page.module.css";

const lexend = Lexend({  weight: ['400'], subsets: ["latin"] });

const Navbar = () => {
    return (
      <div>
        <div className={`${styles.topnav} ${lexend.Lexend}`}>
          {/* <a>
            <img href="/" src="Hack4All-centered.png" alt="Home" className={styles.topnav_img}></img>
          </a> */}
          <a href="/"><img href="/" src="Hack4All-centered.png" alt="Home" className={`${styles.topnav_img} ${styles.hvr}`}></img></a>
          <div>
            <a href="/contact" className={styles.topnav_item}>Contact Us</a>
            <a href="/events" className={styles.topnav_item}>Events</a>
            <a href="https://hcb.hackclub.com/donations/start/hack4all" className={styles.topnav_item}>Donate</a>
          </div>
        </div>
      <div>
      </div>
      </div>
      );
};


export default Navbar;