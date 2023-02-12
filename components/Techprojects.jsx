import techProjects from "@/data/techProjects";
import Image from "next/image";
const TechProjects = () => {
  return (
    <div className="bg-white flex-col">
      <div className="tech-projects__container--main">
        <p className="l-header font-bold mb-12">Projects</p>
        <ul className="tech-projects__lists--container gap-9">
          {techProjects.map((project) => {
            return (
              <li key={project.id} className="p-4 py-7 project-item">
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
      <div className="tech-projects__scroll--button">
        <button>see more projects →</button>
      </div>
    </div>
  );
};

export default TechProjects;
