import specialityIcons from "@/data/specialityIcons";
import Image from "next/image";

const Speciality = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="speciality-main-container">
          <ul className="border-2">
            {specialityIcons.map((speciality) => {
              return (
                <li key={speciality.id}>
                  <div className="icon-speciality">
                    <Image
                      src={speciality.icon}
                      alt={speciality.title}
                      width="auto"
                      height="auto"
                    />
                  </div>
                  <div>
                    <p className="n-header">{speciality.title}</p>
                    <p className="font-light">{speciality.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="lg-header border-2">
            <p>
              Turning ideas <span id="speciality-font">into products</span> is
              my speciality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
