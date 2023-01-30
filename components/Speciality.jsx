import specialityIcons from "@/data/specialityIcons";
import Image from "next/image";

const Speciality = () => {
  return (
    <div className=" bg-white">
      <div className="flex container justify-between border-2 items-center">
        <ul className="description-data">
          {
            specialityIcons.map(speciality => {
              return (
                <li key={speciality.id} className="mb-12">
                  <div className="icon-speciality">
                    <Image src={speciality.icon} alt={speciality.title} width={70} height={70}/>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="l-header w-[23rem]">
          <p>
            Turning ideas <span id="speciality-font">into products</span> is my speciality
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
