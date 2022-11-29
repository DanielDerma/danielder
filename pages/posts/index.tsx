import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Post from "../../components/Post";

const Posts: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Daniel Derma | Posts</title>
      </Head>
      <main className="bg-[#121212] min-h-screen flex justify-center">
        <section className="w-full pt-20 pb-32 mx-4 text-white md:w-2/3 lg:w-2/5">
          <h1 className="text-4xl font-bold">Posts</h1>
          {/* navbar */}
          <nav className="my-11">
            <ul className="flex justify-end gap-4 ">
              <li>
                <Link href="/">
                  <a className="underline">About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="underline">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="text-gray-400">Posts</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* posts */}
          <article className="space-y-10">
            {posts.map((post: any) => {
              return <Post key={post.path} post={post} />;
            })}
          </article>
          <footer className="mt-32">
            <p>© Daniel Derma.</p>
          </footer>
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const fs = require("fs");
  const path = require("path");

  const postDirectory = path.join(process.cwd(), "pages/posts");
  let postFilenames = fs.readdirSync(postDirectory);
  postFilenames = removeItemOnce(postFilenames, "index.tsx");
  const postModules = await Promise.all(
    postFilenames.map(async (p: any) => {
      const post = await import(`./${p}`);
      return { m: post, p };
    })
  );

  const postMetadata = postModules.map(({ m, p }) => {
    return m.meta ? { ...m.meta, path: p.split(".")[0] } : null;
  });
  return {
    props: {
      posts: postMetadata,
    },
  };
};

function removeItemOnce(arr: any, value: any) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export default Posts;
