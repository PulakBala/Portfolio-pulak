import React from 'react';
import hero1 from "../assests/images/413-removebg-preview.png"

const Hero = () => {
    const social_media = [
        "logo-instagram",
        "logo-facebook",
        "logo-twitter",
      ];
    return (
        <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-slate-900 z-40"
    >
      
      <div className="flex-1 flex items-center justify-center mt-10">
        <img src={hero1} alt="" className="md:w-2/3 h-full object-cover bg-cyan-900 rounded-3xl  z-40" />

        
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className="text-cyan-600">Pulak Bala</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;