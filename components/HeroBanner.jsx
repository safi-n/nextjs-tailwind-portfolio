import Image from "next/image";
const HeroBanner = () => {
  return (
    <main className="h-[100vh]">
        <div className="hero-main-container">
        <div className="hero-content">
          <p className="xl-header">
            Hey, I'm <span className="cool-font" >Safi</span>
          </p>
          <p className="m-header -mt-2 max-[800px]:text-center">
            FrontEnd Developer & MultiMedia Designer
          </p>
          <div className="skills-container max-[800px]:mt-5">
            <p className="mini-font font-light">
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
              width="auto"
              height="auto"
              className="rounded-full"
              priority
            />
          </div>
        </div>
        </div>
    </main>
  );
};

export default HeroBanner;
