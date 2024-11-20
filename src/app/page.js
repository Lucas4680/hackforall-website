import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

//HELLO 
export default function Home() {
  return (
    <div>
      <div
        className={styles.div1}>
        <a href="#hack"><img src="HACK.png" alt="HACK" className={`${styles.main_title_item} ${styles.hvr}`}></img></a>
        <a href="#for"><img src="4.png" alt="4" className={`${styles.main_title_item} ${styles.hvr}`}></img></a>
        <a href="#all"><img src="ALL.png" alt="ALL" className={`${styles.main_title_item} ${styles.hvr}`}></img></a>
      </div>

      <div style={{
        color:"black",
        height: 1000,
        paddingLeft: 50
      }}>
        <br></br><br></br><br></br>
        <h1 id="hack">We are more than just a Club, we Hack</h1>
        <text>big yap session here !!!</text>
        <br></br><br></br><br></br>
        <h1 id="for">We are Community Driven</h1>
        <text>big yap session here</text>
        <br></br><br></br><br></br>
        <h1 id="all">We are open to anyone</h1>
        <text>big yap session here</text>
      </div>
    </div>
  );
}