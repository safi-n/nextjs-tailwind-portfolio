import specialityIcons from "@/data/specialityIcons";
import Image from "next/image";

const Speciality = () => {
  return (
    <div className=" bg-white">
      <div className="speciality-conatiner container justify-between items-center">
        <ul className="description-data">
          {
            specialityIcons.map(speciality => {
              return (
                <li key={speciality.id} className="mb-12 flex gap-10">
                  <div className="icon-speciality">
                    <Image src={speciality.icon} alt={speciality.title} width='auto' height='auto'/>
                  </div>
                  <div className="description-li w-[50%] ">
                    <p className="n-header">{speciality.title}</p>
                    <p className="font-light">{speciality.description}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="lg-header w-[70%]">
          <p>
            Turning ideas <span id="speciality-font">into products</span> is my speciality
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
