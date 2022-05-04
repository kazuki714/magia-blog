import { client } from "../../libs/client";
import { Nav } from "../../components/Nav";
import Moment from 'react-moment';
import styles from '../../styles/Home.module.scss';

export default function BlogId({ blog }) {
  return (
    // <main className={styles.main}>
    <main>
      <Nav />
        <div class="container max-w-96 max-h-96 md:max-w-3xl m-auto mx-auto px-4 md:px-24">
          <img
            class="overflow-hidden shadow-lg rounded-lg m-auto max-w-96 max-h-96 object-cover"
            src={blog.eyecatch.url}
            alt="blog photo"
          />

          <div class="font-sans">
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {blog.title}
            </h1>
            <p class="flex flex-wrap text-black text-xs font-bold mb-2">
              #{blog.category.name}
            </p>
            <Moment format="YYYY/MM/DD" class="text-sm md:text-base font-normal text-gray-600">
              {blog.publishedAt}
            </Moment>
          </div>
          <div className='break-words whitespace-pre-wrap'
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
            className={styles.post}
          />
        </div>
      {/* <div class="w-full h-full bg-white p-10 flex justify-center grid grid-cols-1"> */}
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

