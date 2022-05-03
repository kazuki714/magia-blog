import Link from "next/link";
import { client } from "../libs/client";
import { Nav } from "../components/Nav";
import Moment from 'react-moment';

export default function Home({ blog }) {
  return (
    <div>
      <Nav />
      <div class="w-full bg-white p-12">
        <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-12">
          {blog.map((blog) => (
            <Link href={`/blog/${blog.id}`} class="w-full block h-full">
              <div key={blog.id}>
                <a>
                  <img
                    class="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto max-h-60 w-full object-cover"
                    src={blog.eyecatch.url}
                    alt="blog photo"
                  />
                  <div class="bg-transparent w-full p-4">
                    <p class="text-black text-xm font-medium mb-2">
                      {blog.title}
                    </p>
                    <Moment format="YYYY/MM/DD" class="text-xs">
                      {blog.publishedAt}
                    </Moment>
                    <p class="flex flex-wrap text-black text-xs font-bold mb-2">
                      #{blog.category.name}
                    </p>
                  </div>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
