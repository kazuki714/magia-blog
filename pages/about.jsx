import Meta from "../components/Meta";
import Container from "../components/Container";
import Hero from "../components/Hero";
import PostBody from "../components/PostBody";
import eyecatch from "../images/ogp.jpg";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="自己紹介"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About page" />
      <PostBody>
        <h3>このブログについて</h3>
        <p>
          Next.jsとmicroCMSを使用したnote風のサンプルブログアプリです。
        </p>
      </PostBody>
    </Container>
  )
}