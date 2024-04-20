import Link from "next/link";
import { Lexend } from "next/font/google";
import styles from "../src/app/page.module.css";

const lexend = Lexend({  weight: ['400'], subsets: ["latin"] });

const Footer = () => {
    return (
      <div className={styles.Footer}>
        <div className={styles.FooterColumn}>
            <img src="Hack4All-Logo-Grayscale.png" alt="Hack4All Logo"></img>
            <p>© 2024 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)</p>
        </div>
        <div className={styles.FooterColumn}>
            <h1>Hack4All</h1>
            <a href="/events">Events</a>
            <a href="/contact">Contact</a>
            <a href="https://hcb.hackclub.com/donations/start/hack4all">Donate</a>
        </div>
        <div className={styles.FooterColumn}>
            <h1>Resources</h1>
            <a href="https://hackclub.com">Hack Club</a>
            <a href="https://www.curseforge.com/minecraft/mc-mods/full-brightness-toggle">Placeholder</a>
            <a href="https://rickroll.it/rickroll.mp4">Placeholder2</a>
        </div>
      </div>
      );
};


export default Footer;