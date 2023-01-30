import techProjects from "@/data/techProjects";
import Image from "next/image";

const TechProjects = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <p className="l-header font-bold mb-12">Tech Projects</p>
        <ul className="flex justify-evenly gap-9">
          {techProjects.map((project) => {
            return (
              <li key={project.id} className="p-4 py-7 shadow-lg">
                <p className="font-light mb-5">{project.description}</p>
                <div className="company-brand flex items-center">
                  <Image
                    src={project.logo}
                    alt={project.company}
                    width="auto"
                    height="auto"
                    priority
                  />
                  <p>{project.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechProjects;