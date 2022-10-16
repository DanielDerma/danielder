import { NextPage } from 'next'
import Head from "next/head";


const Posts: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={
            `${
              process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
            }/api/og` + `?title=Daniel Derma | Posts.`
          }
        />
      </Head>
    </div>
  )
}

export default Posts