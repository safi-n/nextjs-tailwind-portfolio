"use client";
import { useEffect, useState } from "react";
import CreativeProjects from "./CreativeProjects";
import PhotosProjects from "./PhotosProjects";
const ProjectsTabs = () => {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  if (typeof window !== "undefined") {
    const tabs = document.querySelectorAll(".project-tabs__tab");
    const tabContents = document.querySelectorAll(".tab-content-item");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // remove active class from all tabs and tab content
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // add active class to current tab and its corresponding tab content
        this.classList.add("active");
        document
          .getElementById(this.dataset.tabContent)
          .classList.add("active");
      });
    });
  }

  return (
    <div className="bg-white">
      <div className="project-tabs__container--main">
        {/* Tabs buttons */}
        <div className="project-tabs__tabs">
          <div className="project-tabs__tabs--style-container">
            <div
              className="project-tabs__tab active"
              data-tab-content="tab1-content"
            >
              Graphic & Motion Design
            </div>
            <div className="project-tabs__tab" data-tab-content="tab2-content">
              UI/UX Design
            </div>
            <div className="project-tabs__tab" data-tab-content="tab3-content">
              Photos
            </div>
          </div>
        </div>
        {/* Content Tabs */}
        <div className="tab-content">
          {/* Graphic & Motion Design */}
          <div className="tab-content-item active" id="tab1-content">
            <CreativeProjects />
          </div>
          {/* UI / UX project */}
          <div className="tab-content-item" id="tab2-content">
            <CreativeProjects />
          </div>
          {/* Photos projects */}
          <div className="tab-content-item" id="tab3-content">
            <PhotosProjects/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTabs;
