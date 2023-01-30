import frontEndSkills from "@/data/frontendSkills";
import backendSkills from "@/data/backendSkills";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="frontend-container">
            <p className="l-header font-bold mb-10">My Skills</p>
            <div className="frontend-skills">
              <p className="font-bold text-2xl mb-8 speciality-font">
                FrontEnd
              </p>
              <ul className="grid grid-cols-4 grid-rows-2 gap-16">
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
          <div className="backend-container mt-24">
            <p className="font-bold text-2xl mb-8 speciality-font">BackEnd</p>
            <ul className="grid grid-cols-3 grid-rows-3 gap-16">
              {backendSkills.map((skill) => {
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
    </div>
  );
};

export default MySkills;
