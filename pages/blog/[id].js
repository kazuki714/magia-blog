import { client } from "../../libs/client";
import { Nav } from "../../components/Nav";

export default function BlogId({ blog }) {
  return (
    <main>
      <Nav />
      <div class="w-full bg-white p-8 flex justify-center">
        <div class="grid grid-cols-1 gap-1 ">
          <img alt="blog photo" src="../image/inu.jpg" class="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:h-100 md:w-85 m-auto max-w-80 w-full object-cover"/>
          <p class="text-black text-2xl font-bold mb-2 mt-5">
            {blog.title}
          </p>
          <p>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
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
