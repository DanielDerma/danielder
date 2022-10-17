import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Posts: NextPage = () => {
  return (
    <main className="bg-[#121212] h-screen flex justify-center">
      <section className="w-full md:w-2/3 lg:w-2/5 mt-[90px] text-white mx-4">
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
      </section>
    </main>
  );
};

export default Posts;
