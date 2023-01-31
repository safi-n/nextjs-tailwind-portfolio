import socialMediaIcons from "@/data/socialMediaIcons";
import Image from "next/image";
const Sidebar = () => {
  return (
      <div className="slider-container">
        <ul className="">
          {socialMediaIcons.map((icon) => {
            return (
              <li key={icon.id} className="">
                <div className="icon-side">
                  <a href={icon.link} target="_blank" className="side-icon-link">
                    <Image
                      src={icon.img}
                      alt={icon.label}
                      width="auto"
                      height="auto"
                      priority
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Sidebar;
