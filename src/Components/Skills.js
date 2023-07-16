import React from "react";

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
    <section id="skills" className="py-10  relative z-40">
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

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-6 p-28 ">

          <div className="rounded-lg">
            <h2 className="mb-10 mt-6  bg-cyan-600"> Expertise</h2>
            <div className="flex justify-center pb-01">
              <h2>HTML 5</h2>
              {/* <h2>100%</h2> */}
            </div>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">CSS</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Bootstrap 5</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
            <h2 className="justify-center ">Tailwind CSS</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
            <h2 className="justify-center ">Javascript</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
            <h2 className="justify-center ">ES6</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
            <h2 className="justify-center ">React</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
          </div>
          <div className="">
            <h2 className="mb-10 mt-6  bg-cyan-600">Comfortable</h2>
            <h2 className="justify-center ">Javascript</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">React</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Rest APIs</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
          </div>
         
          <div className="">
            <h2 className="mb-10 mt-6  bg-cyan-600">Tools</h2>

            <h2 className="justify-center ">Git</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Github</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">VsCode</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Netlify</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Vercel</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Chrome dev tools</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Firebase</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Figma</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
          </div>

          <div className="">
            <h2 className="mb-10 mt-6  bg-cyan-600">Familiar</h2>

            <h2 className="justify-center ">Next.Js</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Node.JS</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>

            <h2 className="justify-center ">Express.js</h2>
            <progress
              className="progress progress-info w-8/12"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
