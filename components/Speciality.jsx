import specialityIcons from "@/data/specialityIcons";
import Image from "next/image";

const Speciality = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <div className="spciality-container">
          <div className="speciality-lists">
            <ul className="flex-col space-y-9">
              {
                specialityIcons.map(speciality =>{
                  return (
                    <li key={speciality.id} className="flex">
                      <div className="speciality-icon w-[8rem] mr-7">
                        <Image src={speciality.icon} width='auto' height='auto' alt={speciality.title}/>
                      </div>
                      <div className="speciality-description">
                        <p className="n-header">{speciality.title}</p>
                        <p>{speciality.description}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="speciality-header">
            <p className="l-header">Turning ideas <span className="speciality-font"> into product </span> is my specialty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
