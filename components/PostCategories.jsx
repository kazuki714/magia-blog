import styles from "../styles/postcategories.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export default function PostCategories({ categories }) {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
      </h3>
      <ul className={styles.list}>
      </ul>
    </div>
  )
}
