import { getAllPosts } from "../libs/client";
import Meta from "../components/meta";
import Container from "../components/Container";
import Posts from "../components/posts";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}