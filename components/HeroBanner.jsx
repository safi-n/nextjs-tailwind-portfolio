import Image from "next/image";
const HeroBanner = () => {
  return (
    <main className="container overflow-hidden absolute top-[27%] left-[15%] p-24">
      <div className="flex gap-10 justify-between items-center">
        <div className="hero-content text-white leading-12">
          <p className="xl-header">Hey, I'm <span className="cool-font">Safi</span></p>
          <p className="m-header -mt-2">
            FrontEnd Developer & MultiMedia Designer
          </p>
          <div className="skills-container">
            <p className="text-[0.85em] font-light">
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
              src={require("../public/assets/imgs/safiIMG.jpg")}
              alt="hero image"
              width='auto'
              height='auto'
              className="rounded-full hero-img"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
