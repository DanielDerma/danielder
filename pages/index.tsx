import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="bg-[#121212] h-screen flex justify-center">
      <section className="w-full md:w-2/3 lg:w-2/5 mt-[90px] text-white mx-4">
        <h1 className="text-4xl font-bold">About</h1>
        {/* navbar */}
        <nav className="my-11">
          <ul className="flex justify-end gap-4 ">
            <li>
              <Link href="/">
                <a className="text-gray-400">About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="underline">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="underline">Posts</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* info about */}
        <article className="">
          <p className="mb-4">
            Hey, I&apos;m a Senior Software Engineer at Company. I enjoy working
            with Next.js and crafting beautiful front-end experiences.
          </p>
          <p className="mb-4">
            Desarrollador de Software enfocado en producir software de manera
            eficaz, con metodologías y equipos de desarrollo ágil. Actualmente
            estudio en el Tec de Delicias, Chihuahua
          </p>
        </article>
        {/* divider */}
        <div className="w-full my-14 border-gray-600 border-[1px] border-b-transparent" />
        {/* social */}
        <article>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 ">
              <p>LinkedIn</p>
              <a href="#" className="underline">
                ↗
              </a>
            </li>
            <li className="flex gap-2">
              <p>GitHub</p>
              <a href="#" className="underline">
                ↗
              </a>
            </li>
            <li className="flex gap-2">
              <p>Email</p>
              <a href="#" className="underline">
                ↗
              </a>
            </li>
            <li className="flex gap-2">
              <p>CV</p>
              <a href="#" className="underline">
                ↗
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Home;
