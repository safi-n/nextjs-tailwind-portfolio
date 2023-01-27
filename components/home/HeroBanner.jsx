import Image from "next/image";
const HeroBanner = () => {
  return (
    <main className="bg-black h-[100vh] w-full overflow-hidden">
      <div className="hero-banner flex gap-[26em] h-full w-full items-center justify-center">
        <div className="hero-content text-white">
          <p className="text-[4.8em] font-bold">Hey, I'm Safi</p>
          <p className="text-[1.43em] mb-1">
            FrontEnd Developer & MultiMedia Designer
          </p>
          <div className="skills-container">
            <p className="text-[0.8em]">
              Javascript, React, NextJS, Figma, Wordpress & Adobe
              <span className="text-[#FE1DC3]"> Xd</span> -
              <span className="text-[#F39202]"> Ai</span> -
              <span className="text-[#8E8CEC]"> Ae</span> -
              <span className="text-[#2FA1F1]"> Ps</span>
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-glow-effect rounded-full">
            <Image
              src={require("../../public/assets/imgs/safiIMG.jpg")}
              alt="hero image"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
