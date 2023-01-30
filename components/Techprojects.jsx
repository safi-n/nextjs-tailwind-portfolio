import techProjects from "@/data/techProjects";
import Image from "next/image";

const TechProjects = () => {
  return (
    <div className="bg-white">
      <div className="container border-2">
        <ul className="flex">
          {techProjects.map((project) => {
            return (
              <li key={project.id} className="p-7">
                <p>{project.description}</p>
                <div className="company-brand">
                  <Image
                    src={project.logo}
                    alt={project.company}
                    width='auto'
                    height='auto'
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
