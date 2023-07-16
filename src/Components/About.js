import React from "react";
import aboutImg from "../assests/images/412.jpg";
import resume from "../assests/pulak.pdf";
import Navbar from "./Navbar";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "00" },
  ];

  // const handleDownloadClick =()=>{
  //   const fileUrl = "../assests/pulak.pdf";
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = 'pulak.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link)
  // }
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Welcome to my portfolio, where I demonstrate my technical
                skills, problem-solving mindset, teamwork abilities, love for
                learning, attention to detail, and strong work commitment. With
                a passion for technology, I thrive in challenging environments
                and excel at finding innovative solutions. Collaboration is
                crucial to me . I continuously expand my knowledge, staying
                updated with industry trends. Meticulousness is my forte . Above
                all, my unwavering commitment drives me to surpass expectations,
                delivering exceptional outcomes. Explore my portfolio to witness
                the manifestation of my expertise, collaboration, and dedication
                to technology-driven solutions.
              </p>
              <div className="flex mt-10  items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
                <br />
                <button className="btn btn-primary ">
                  <a
                    href={resume}
                    download="Pulak_Cv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Download Cv</button>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
          <Navbar 
          
          />
        </div>
      </div>
    </section>
  );
};

export default About;
