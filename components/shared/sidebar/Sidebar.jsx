import socialMediaIcons from "@/data/socialMediaIcons";
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container fixed  top-[45%] mx-12">
        <ul className="text-white space-y-4">
          {socialMediaIcons.map((icon) => {
            return (
              <li key={icon.id}>
                <label htmlFor={icon.label}>{icon.label}</label>
                <a href={icon.link} target="_blank">
                  <Image src={icon.img} alt={icon.label} width={25} height={25}/>
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
