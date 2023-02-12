"use client";
import creativeProjects from "@/data/creativeProjects";
import Image from "next/image";
import { useEffect, useState } from "react";
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
          <div className="tab-content-item active" id="tab1-content">
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
          </div>
          <div className="tab-content-item" id="tab2-content">
            <h2>Tab 2 Content</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
          </div>
          <div className="tab-content-item" id="tab3-content">
            <h2>Tab 3 Content</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTabs;
