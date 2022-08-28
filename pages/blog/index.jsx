import { getAllPosts } from "../../libs/client"
import Meta from "../../components/Meta"
import Container from "../../components/Container"
import Hero from "../../components/Hero"
import Posts from "../../components/posts"

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="記事一覧"/>
      <Hero title="Blog" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
