import { getPostBySlug, getAllSlugs } from "../libs/client"
import { extractText } from "../libs/extract-text"
import { prevNextPost } from "../libs/prev-next-post"
import Meta from "../components/meta"
import Container from "../components/Container"
import PostHeader from "../components/PostHeader"
import PostBody from "../components/PostBody"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "../components/TwoColumn"
import ConvertBody from "../components/ConvertBody"
import PostCategories from "../components/PostCategories"
import Pagination from "../components/Pagination"
import Image from "next/image"
import { eyecatchLocal } from "../libs/constants"

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
    return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} publish={publish} />

        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="{min-width: 1152px} 1152px, 100vw"
            priority
          />
        </figure>

        <PostBody>
          <PostCategories categories={categories} />
          <ConvertBody contentHTML={content} />
        </PostBody>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(({ slug }) => `/${slug}`),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)
  if (!post) {
    return { notFound: true}
  } else {
    const description = extractText(post.content)
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost
      },
    }
  }
}
