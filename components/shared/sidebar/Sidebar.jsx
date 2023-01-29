import socialMediaIcons from "@/data/socialMediaIcons";
import { ReactSVG } from "react";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container fixed  top-[45%] mx-12">
        <ul className="text-white space-y-4">
          {socialMediaIcons.map((icon) => {
            return (
              <li>
                <label htmlFor={icon.label}>{icon.label}</label>
                <a href={icon.link} target="_blank">
                  <ReactSVG />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
