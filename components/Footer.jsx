import Container from "./Container";
import Logo from "./Logo";
import Social from "./Social";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  )
}
