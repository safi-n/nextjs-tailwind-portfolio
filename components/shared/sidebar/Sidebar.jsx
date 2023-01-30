import socialMediaIcons from "@/data/socialMediaIcons";
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container fixed  top-[40%] flex items-center gap-5">
        <ul className="text-black rounded-tr-lg rounded-br-lg bg-white pl-4 pr-[0.5rem] py-10">
          {socialMediaIcons.map((icon) => {
            return (
              <li key={icon.id} className="flex py-6">
                <div className="icon-side">
                  <a href={icon.link} target="_blank" className="text-white">
                    <Image
                      src={icon.img}
                      alt={icon.label}
                      width="40"
                      height="40"
                      priority
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="label-side text-white space-y-16">
        {
          socialMediaIcons.map(label => <li key={label.id}>{label.label}</li>)
        }
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
