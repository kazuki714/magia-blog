import { getAllPosts } from "../libs/client";
import Meta from "../components/meta";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Posts from "../components/posts";
import Pagination from "../components/pagination";
import { eyecatchLocal } from "../libs/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero
        title="Ayuret"
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal
    }
    // const { base64 } = await getPlaiceholder(post.eyecatch.url)
    // post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    }
  }
}

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
