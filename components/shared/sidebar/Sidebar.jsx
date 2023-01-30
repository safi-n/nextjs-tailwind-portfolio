import socialMediaIcons from "@/data/socialMediaIcons";
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container fixed  top-[40%] flex items-center gap-5">
        <ul className="text-black space-y-10 rounded-tr-lg rounded-br-lg bg-white pl-4 pr-3 py-8 icon-slider-container">
          {socialMediaIcons.map((icon) => {
            return (
              <li key={icon.id} className="flex">
                <div className="icon-side">
                  <a href={icon.link} target="_blank" className="text-white">
                    <Image
                      src={icon.img}
                      alt={icon.label}
                      width="23"
                      height="23"
                      priority
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
