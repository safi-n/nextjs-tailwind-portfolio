import frontEndSkills from "@/data/mySkills";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <p className="l-header font-bold mb-10">My Skills</p>
        <div className="frontend-skills">
          <p className="font-bold text-2xl mb-8">FrontEnd</p>
          <ul className="flex gap-32">
            {frontEndSkills.map((skill) => {
              return (
                <li key={skill.id}>
                  <div className="skill-image h-[4em]">
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p>{skill.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
