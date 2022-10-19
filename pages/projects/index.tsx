import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects.json";

const Posts: NextPage = () => {
  const data = projects.projects;
  return (
    <>
      <Head>
        <title>DanielDerma | Projects</title>
      </Head>
      <main className="bg-[#121212] min-h-screen flex justify-center">
        <section className="w-full pt-20 pb-32 mx-4 text-white md:w-2/3 lg:w-2/5">
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
          <article className="space-y-10">
            <h3 className="">Here&apos;s some of my projects.</h3>
            {data.map((project) => (
              <ProjectCard {...project} key={project.ytLink} />
            ))}
          </article>
          <footer className="mt-32">
            <p>© Daniel Derma.</p>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Posts;
