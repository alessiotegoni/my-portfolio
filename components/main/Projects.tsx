import { projects } from "@/constants";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 z-50"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        My Projects
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 px-10 w-full max-w-7xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  src,
  title,
  description,
  repoName,
}: (typeof projects)[0]) {
  return (
    <div className="project_card">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 object-cover aspect-square rounded-lg"
      />

      <div className="flex flex-col justify-between flex-1 px-2 pt-4 pb-2">
        <div>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>

        <div className="mt-6">
          <a
            href={`https://github.com/alessiotegoni/${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-white cursor-pointer rounded-xl
            transition-colors duration-200 flex justify-center items-center gap-3"
          >
            <FaGithub className="text-white" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
