import frontEndSkills from "@/data/frontendSkills";
import backendSkills from "@/data/backendSkills";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <p className="l-header mb-[3.5rem]">Tech Skills</p>
        <div className="skill-main-container eqwrap">
          {/* FrontEnd container */}
          <div className="frontend-container">
            <p className="font-bold text-2xl mb-8 speciality-font">FrontEnd</p>
            <ul className="grid grid-cols-4 grid-rows-2">
              {frontEndSkills.map((skill) => {
                return (
                  <li key={skill.id} className="mb-12 mr-12">
                    <div className="skill-image">
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
          {/* BackEnd container */}
          <div className="backend-container ">
            <p className="font-bold text-2xl mb-8 speciality-font">
              BackEnd & CMS
            </p>
            <ul className="grid grid-cols-4 grid-rows-2">
              {backendSkills.map((skill) => {
                return (
                  <li key={skill.id} className="mb-12" >
                    <div className="skill-image">
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        width="auto"
                        height="auto"
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
