import styles from "../styles/hero.module.css";
import Image from "next/image";
import cube from "../images/ogp.jpg";

export default function Hero({ title, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
          />
        </figure>
      )}
    </div>
  )
}
