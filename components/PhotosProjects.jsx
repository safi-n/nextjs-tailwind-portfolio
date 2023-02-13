import { useState } from "react";
import photosProjects from "@/data/photosProjects";
import Image from "next/image";

const PhotosProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <ul className="creative-projects__lists">
        {photosProjects.map((project) => {
          return (
            <>
              <li className="creative-projects__list--item" key={project.id}>
                <Image
                  src={project.url}
                  width="200"
                  height="200"
                  alt={project.title}
                  priority
                  onClick={() => setSelectedImage(project)}
                />
              </li>
            </>
          );
        })}
      </ul>
      {selectedImage && (
        <div
          className="photo-project__pop-up-container"
          onClick={() => setSelectedImage(null)}
        >
          <div className="photo-project__pop-up--image-container">
            <span>X</span>
            <Image
              src={selectedImage.url}
              width="auto"
              height="auto"
              alt="pop-image"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotosProjects;
