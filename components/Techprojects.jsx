import techProjects from "@/data/techProjects";
import Image from "next/image";

const TechProjects = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <ul>
          {techProjects.map((project) => {
            return (
              <li key={project.id}>
                <p>{project.description}</p>
                <div className="company-brand">
                  <Image
                    src={project.logo}
                    alt={project.company}
                    width={100}
                    height={100}
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
