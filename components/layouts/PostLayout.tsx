import Head from "next/head";
import Link from "next/link";

const Post = ({ meta, children }: { meta: any; children: any }) => {
  const { title, author, date } = meta;

  return (
    <>
      <Head>
        <title>{title} | DanielDerma</title>
        <meta name="og:title" content="Daniel Derma" />
        <meta name="og:description" content="Daniel Derma | Posts" />
        <meta
          name="og:image"
          content={`${
            process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
          }/api/og-post?title=daniel der`}
        />
      </Head>
      <main className="bg-[#121212] min-h-screen flex justify-center">
        <section className="w-full pt-20 pb-32 mx-4 text-white md:w-2/3 lg:w-2/5">
          <h1 className="text-4xl font-bold mb-11">{title}</h1>
          <nav>
            <ul className="flex justify-between">
              <li>
                <p className="inline">{author}</p>
                <p className="inline mx-2">•</p>
                <p className="inline">{date}</p>
              </li>
              <li>
                <Link href="/posts">
                  <a className="underline">Go back</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* divider */}
          <div className="w-full my-14 border-gray-600 border-[1px] border-b-transparent" />
          {/* post */}
          <article className="max-w-full space-y-8">{children}</article>

          <footer className="mt-32">
            <p>© Daniel Derma.</p>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Post;
