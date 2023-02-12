import React from "react";

const ProjectsTabs = () => {
  if(process.browser) {
    const tabs = Document.querySelectorAll(".tab");
    const tabContents = Document.querySelectorAll(".tab-content-item");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // remove active class from all tabs and tab content
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
  
        // add active class to current tab and its corresponding tab content
        this.classList.add("active");
        document.getElementById(this.dataset.tabContent).classList.add("active");
      });
    });
  }


  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="tabs">
          <div className="tab active" data-tab-content="tab1-content">
            Tab 1
          </div>
          <div className="tab" data-tab-content="tab2-content">
            Tab 2
          </div>
          <div className="tab" data-tab-content="tab3-content">
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-content-item active" id="tab1-content">
            <h2>Tab 1 Content</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              nesciunt, ducimus sapiente dolores eligendi, iusto impedit amet
              ipsa, incidunt eaque nostrum a aliquid assumenda libero!
            </p>
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
