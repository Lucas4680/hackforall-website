import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
      <main className={`${styles.main} ${aldrich.Aldrich}`}>
        <div className={styles.center}>
        <h1><b>
          <div className={styles.main_title}>
            <img src="HACK.png" alt="HACK" className={`${styles.main_title_item} ${styles.hvr}`}></img>
            <img src="4.png" alt="4" className={`${styles.main_title_item} ${styles.hvr}`}></img>
            <img src="ALL.png" alt="ALL" className={`${styles.main_title_item} ${styles.hvr}`}></img>
          </div>
        </b></h1>
        <br></br>
        </div>
        <div className={styles.topscroll}>
          Who We Are
          <div className={`${styles.arrow} ${styles.bounce}`}></div>
        </div>

        <div className={styles.ourmission_container}>
          <img src="ourmission-wire.png" className={styles.ourmission_wire}></img>
          <div className={`${styles.ourmission_item_1} ${styles.ourmission_item}`}>
            <h1>Hacking</h1>
            <p>At Hack4All, hacking isn’t about using computers to access unauthorized data. Here, it’s the process of finding
inventive and innovative solutions to solve problems or create new things.</p>
          </div>

          
          <div className={`${styles.ourmission_item_2} ${styles.ourmission_item}`}>
            <h1>Hack4All</h1>
            <p>Finding where to start can be the most difficult part of the hacking journey. Hack4All is a 501(c)(3) recognized club 
              that strives to give members of all skill levels not only a starting point, but a an array of resources and opportunities no matter the skill level.</p>
          </div>
          
          <div className={`${styles.ourmission_item_3} ${styles.ourmission_item}`}>
            <h1>Our Mission</h1>
            <p>With hacking, we believe the best way to learn is by doing. As such, Hack4All takes an application-based approach to best benefit hackers. 
              Hacking is a creative process that doesn’t have a one-size-fits-all course or approach, and we strive to give individual hackers freedom 
              to explore their passions while learning new knowledge.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
