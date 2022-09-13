import styles from "../../styles/portfolio.module.css"
import Meta from "../../components/Meta"
import Container from "../../components/Container"
import Hero from "../../components/Hero"

export default function Portfolio() {
  return (
    <Container>
      <Meta pageTitle="Portfolio" pageDesc="ポートフォリオ"/>
      <Hero title="Portfolio" />
      <p className={styles.text}>Coming soon</p>
    </Container>
  )
}
