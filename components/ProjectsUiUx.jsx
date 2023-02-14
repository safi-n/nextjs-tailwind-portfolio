import { useState } from "react";
import uiUxProjects from "@/data/uiUxProjects";
import Image from "next/image";
import closeButton from "../public/assets/png/icon-closeButton.png";

const ProjectsUiUx = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <ul className="creative-projects__lists">
        {uiUxProjects.map((project) => {
          return (
              <li className="creative-projects__list--item" key={project.id}>
                <Image
                  src={project.img}
                  width="200"
                  height="200"
                  alt={project.title}
                  priority
                  onClick={() => setSelectedImage(project)}
                />
              </li>
          );
        })}
      </ul>
      {selectedImage && (
        <div
          className="photo-project__pop-up-container"
          onClick={() => setSelectedImage(null)}
        >
          <div className="photo-project__pop-up-container--box">
            <span className="photo-project__close-image-button">
              <Image
                src={closeButton}
                alt="close-buttom"
                width="auto"
                height="auto"
              />
            </span>
            <div className="photo-project__pop-up--image-container">
              <Image
                src={selectedImage.img}
                width="auto"
                height="auto"
                alt="pop-image"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsUiUx;
