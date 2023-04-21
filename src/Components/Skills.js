import React from 'react';

const Skills = () => {

    const skills = [
        {
          logo: "logo-html5",
          level: "Advance",
          count: 86,
        },
        {
          logo: "logo-css3",
          level: "Expect",
          count: 90,
        },
        {
          logo: "logo-nodejs",
          level: "Beginner",
          count: 40,
        },
        {
          logo: "logo-react",
          level: "Beginner",
          count: 40,
        },
      ];
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 p-12">
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg">
              <div className="flex justify-center justify-around text-2xl pb-9">
                <h2 className="border bg-cyan-600 font-bold p-2">HTML</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg">100%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="100" max="100"></progress>
              </div>
  
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg">
              <div className="flex justify-center justify-around text-2xl pb-9">
                <h2 className="border bg-cyan-600 font-bold p-2">CSS</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg">85%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="85" max="100"></progress>
              </div>
  
              
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg ">
              <div className="flex  justify-center justify-around ml-5 text-sm  md:text-2xl pb-9 w-11/12 ">
                <h2 className="border bg-cyan-600  font-bold p-2 rounded-lg">BOOTSTRAP</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg ">80%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="80" max="100"></progress>
              </div>
  
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg">
              <div className="flex justify-center justify-around text-2xl pb-9">
                <h2 className="border bg-cyan-600 font-bold p-2">TAILWIND</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg">90%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="90" max="100"></progress>
              </div>
  
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg">
              <div className="flex justify-center justify-around text-2xl pb-9">
                <h2 className="border bg-cyan-600 font-bold p-2">JS</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg">70%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="70" max="100"></progress>
              </div>
  
  
              <div className="border  py-10 bg-slate-900 md:rounded-full rounded-lg">
              <div className="flex justify-center justify-around text-2xl pb-9">
                <h2 className="border bg-cyan-600 font-bold p-2">REACT</h2>
                <h2 className="border bg-cyan-600 p-2 rounded-lg">75%</h2>
              </div>
              <progress className="progress progress-info w-8/12" value="75" max="100"></progress>
              </div>
  
  
  
            </div>
        </div>
      </section>
    );
};

export default Skills;