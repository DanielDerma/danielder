import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Posts: NextPage = () => {
  return (
    <main className="bg-[#121212] h-screen flex justify-center">
      <section className="w-full md:w-2/3 lg:w-2/5 mt-[90px] text-white mx-4">
        <h1 className="text-4xl font-bold">Projects</h1>
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
                <a className="text-gray-400">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="underline">Posts</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* projects */}
        <article className="">
          <h3>Here&apos;s some of my projects.</h3>
          <div className="">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/WH4svm2U6p4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Posts;
