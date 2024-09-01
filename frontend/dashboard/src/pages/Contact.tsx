import React from "react";
import { Icon } from "@iconify/react";
import Icons from "../components/Icons";

const Contact: React.FC = () => {
  const IconArr: String[] = [
    "devicon:cplusplus",
    "logos:javascript",
    "devicon:typescript",
    "devicon:postgresql-wordmark",
    "devicon:mongodb-wordmark",
    "skill-icons:react-dark",
    "logos:nodejs",
    "skill-icons:expressjs-dark",
    "devicon:tailwindcss",
    "logos:webrtc",
    "devicon:socketio",
    "logos:html-5",
    "devicon:css3-wordmark",
    "vscode-icons:file-type-scss",
    "logos:figma",
    "devicon:git",
    "devicon:github",
    "logos:docker-icon",
  ];
  return (
    <div className="bg-slate-300 flex flex-col md:h-max h-screen w-screen">
      <div className="flex flex-col h-[100vh] w-screen md:justify-evenly gap-y-10 items-center">
        <div className="bg-white h-max flex md:flex-row flex-col gap-5 shadow-2xl rounded md:w-max w-[75vw] p-3 items-center">
          <div>
            <img
              className="rounded-full shadow-xl border-2 border-blue-600 hover: hover:shadow-2xl cursor-pointer"
              src="https://portfolio-six-gold-87.vercel.app/assets/Profile_Picture-DWaK0oNq.jpeg"
              alt=""
              height="200px"
              width="200px"
            />
          </div>
          <div className=" bg-white flex flex-col h-max gap-3 p-2 md:w-[65vw] w-[50vw]">
            <h1 className="md:text-xl text-base font-semibold">
              Shashank Vishwakarma
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Hello! I'm a full-stack developer, driven by a passion for
              crafting meaningful solutions. With a curious mind and a love for
              learning, I'm always exploring new libraries and frameworks to
              enhance project efficiency and performance.
            </p>
          </div>
        </div>

        <div className="bg-white h-max flex flex-col gap-5 shadow-2xl rounded md:w-[80vw] w-[75vw] p-3 items-center">
          <p className="title text-xl font-bold">
            Explored <span className="text-indigo-600">Tech Stack</span>
          </p>
          <div className="h-max w-[100%] flex items-center flex-wrap justify-around gap-3">
            {IconArr.map((icon) => (
              <Icons iconName={icon} />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-max shadow-2xl w-max items-center">
          <div className="p-2 flex h-max w-max justify-center items-center">
            <h1 className="text-black font-semibold md:text-xl capitalize text-base">
              Let's connect on
            </h1>
          </div>
          <div className="bg-white flex md:flex-row flex-col items-center h-max w-max gap-5 p-2">
            <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
              <Icon icon="ic:baseline-email" color="orange" height="4vh" />
              <p className="text-gray-600 font-medium">
                shashankvishwakarma001@gmail.com
              </p>
            </div>
            <a href="https://github.com/shashankvish0010">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="icon-park:github" height="4vh" />
                <p className="text-gray-600 font-medium">GitHub</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/shashank-vishwakarma-650555283/">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="devicon:linkedin" height="4vh" />
                <p className="text-gray-600 font-medium">Linkedin</p>
              </div>
            </a>
            <a href="https://twitter.com/ShashankVis001">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="line-md:twitter-x-alt" height="4vh" />
                <p className="text-gray-600 font-medium">Twitter</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
