import Image from "next/image";
const HeroBanner = () => {
  return (
    <main className="bg-black h-[100vh] w-full overflow-hidden items-center">
      <div className="hero-banner flex gap-[20em]">
        <div className="hero-content text-white">
          <p className="text-[4.5em] font-bold ">Hey, I'm Safi</p>
          <p className="text-[1.3em]">
            FrontEnd Developer & MultiMedia Designer
          </p>
          <div className="skills-container flex">
            <p className="">
              Javascript, React, NextJS, Figma, Wordpress & Adobe 
            </p>
            <span className="text-[#FE1DC3]"> Xd</span> -
            <span className="text-[#F39202]"> Ai</span> -
            <span className="text-[#8E8CEC]"> Ae</span> -
            <span className="text-[#2FA1F1]"> Ps</span>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src={require("../../public/assets/imgs/safiIMG.jpg")}
            alt="hero image"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
