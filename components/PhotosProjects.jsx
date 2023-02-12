import photosProjects from "@/data/photosProjects";
import Image from "next/image";

const PhotosProjects = () => {
  return (
    <ul className="creative-projects__lists">
              {photosProjects.map((project) => {
                return (
                  <li
                    className="creative-projects__list--item"
                    key={project.id}
                  >
                    <Image
                      src={`https"//unsplash.com/photos/${project.url}`}
                      width='200'
                      height='200'
                      alt={project.title}
                      priority
                    />
                  </li>
                );
              })}
            </ul>
  )
}

export default PhotosProjects