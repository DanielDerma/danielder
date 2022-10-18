import Link from "next/link";

const Post = ({ post }: { post: any }) => {
  const { title, description, date, path } = post;

  return (
    <div>
      <Link href={`posts/${path}`}>
        <a>
          <h3 className="mb-4 text-xl">{title}</h3>
        </a>
      </Link>

      <p className="inline mr-2 text-gray-400">{description}</p>
      <Link href={`posts/${path}`}>
        <a className="underline ">Read More →</a>
      </Link>
      <p className="mt-4 text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default Post;
