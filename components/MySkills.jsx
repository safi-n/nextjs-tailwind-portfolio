import frontEndSkills from "@/data/mySkills";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <p className="l-header mb-10">My Skills</p>
        <div className="frontend-skills">
          <p className="m-header mb-8">FrontEnd</p>
          <ul>
            {frontEndSkills.map((skill) => {
              return (
                <li key={skill.id}>
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={30}
                    height={30}
                  />
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
