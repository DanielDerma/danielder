const ProjectCard = ({
  name,
  ytLink,
  githubLink,
}: {
  name: string;
  ytLink: string;
  githubLink: string;
}) => {
  return (
    <div className="">
      <iframe
        width="100%"
        height="350"
        src={ytLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex gap-2 my-2 mt-2">
        <p className="">GitHub</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
