import creativeProjects from "@/data/creativeProjects";
import Image from "next/image";

const CreativeProjects = () => {
  return (
    <ul className="creative-projects__lists">
              {creativeProjects.map((project) => {
                return (
                  <li
                    className="creative-projects__list--item"
                    key={project.id}
                  >
                    <Image
                      src={project.img}
                      width='auto'
                      height='auto'
                      alt={project.title}
                    />
                  </li>
                );
              })}
            </ul>
  )
}

export default CreativeProjects