import Link from "next/link";
import { client } from "../libs/client";
import { Nav } from "../components/Nav";

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
                  <img alt="blog photo" src="image/inu.jpg" class="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto max-h-40 w-full object-cover"/>
                  <div class="bg-transparent w-full p-4">
                    <p class="text-black text-xm font-medium mb-2">
                      {blog.title}
                    </p>
                    <p class="flex flex-wrap text-black text-xs font-medium mb-2">
                      #{blog.category.name}
                    </p>
                    {/* <div class="flex flex-wrap justify-starts items-center mt-4">
                      <div class="text-xs mr-2 py-1.5 px-4 text-grey-300 bg-green-200 rounded-2xl">
                        #{blog.category.name}
                      </div>
                    </div> */}
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
