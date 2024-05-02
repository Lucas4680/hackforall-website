import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
      <main className={`${styles.main} ${aldrich.Aldrich}`}>

        <h1><div className={styles.main_title}>
          <img src="HACK.png" alt="HACK" className={`${styles.main_title_item} ${styles.hvr}`}></img>
          <img src="4.png" alt="4" className={`${styles.main_title_item} ${styles.hvr}`}></img>
          <img src="ALL.png" alt="ALL" className={`${styles.main_title_item} ${styles.hvr}`}></img>
        </div></h1>
        <div className={styles.topscroll}>
          <div className={`${styles.arrow} ${styles.bounce}`}></div>
        </div>

        <div className={styles.ourmission_container}>
          <img src="ourmission-wire.png" className={styles.ourmission_wire}></img>
          <img src="ourmission-wire-mobile.png" className={styles.ourmission_wire_mobile}></img>
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



        <div className={styles.getinvolved}>
          <h2>Get Involved</h2>
          <div className={styles.getinvolvedsections}>
            <div className={styles.getinvolvedcolumn1}>
              <h3>Join the Community</h3>
              <p>Join our community of young hackers to socialise, share projects, get help, and hang out! Be sure to introduce yourself!</p>
              <a href="https://rickroll.it/rickroll.mp4">
                <p>Join our Slack!</p>
              </a>
              <a href="https://rickroll.it/rickroll.mp4">
                <p>Join our Discord!</p>
              </a>
            </div>
            <div className={styles.getinvolvedcolumn2}>
              <div className={styles.getinvolvedsubcolumn}>
                <h3>Our Newsletter</h3>
                <p>Join our newsletter for updates and blah blah upcoming events and opportunities yap</p>
                <form className={styles.getinvolvednewsletter}>
                  <input type="text" placeholder="Email..." name="email"/>
                  <input type="submit" value=""/>
                </form>
              </div>
              <div className={styles.getinvolvedsubcolumn}>
                <h3>Check Out Events</h3>
                <p>Take a look at past and upcoming events that will blah blah let you blah create hack stuff</p>
                <a href="https://rickroll.it/rickroll.mp4">
                  <p>Events</p>
                </a>
              </div>
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}
