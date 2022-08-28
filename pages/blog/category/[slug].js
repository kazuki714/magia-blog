import { getAllCategories, getAllPostsByCategory } from "../../../libs/client";
import Meta from "../../../components/meta";
import Container from "../../../components/Container";
import PostHeader from "../../../components/PostHeader";
import Posts from "../../../components/posts";
import { eyecatchLocal } from "../../../libs/constants";

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostsByCategory(cat.id)
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  }
}
