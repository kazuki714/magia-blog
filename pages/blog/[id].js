import { client } from "../../libs/client";
import { Nav } from "../../components/Nav";
import Moment from 'react-moment';

export default function BlogId({ blog }) {
  return (
    <main>
      <Nav />
      <div class="w-full bg-white p-10 flex justify-center">
        <div class="grid">
          <img
            class="overflow-hidden shadow-lg rounded-lg m-auto max-w-96 max-h-96 object-cover"
            src={blog.eyecatch.url}
            alt="blog photo"
          />
          <p class="text-black text-2xl font-bold mb-2 mt-5 max-w-96 max-h-96">
            {blog.title}
          </p>
          <Moment format="YYYY/MM/DD" class="text-xs max-w-96 max-h-96">
            {blog.publishedAt}
          </Moment>
          <p class="flex flex-wrap text-black text-xs font-bold mb-2 max-w-96 max-h-96">
            #{blog.category.name}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </div>
      </div>
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
