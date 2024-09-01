import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const About: React.FC = () => {
  return (
    <div className="bg-slate-300 title min-h-screen max-h-max w-screen p-3 flex flex-col items-center gap-5">
      <div className="bg-white h-max w-[90vw] flex flex-col p-8 rounded-xl shadow-md border-2 gap-5 m-5 border-gray-200">
        <div className="h-max w-[80vw] flex flex-col gap-1">
          <h2 className="text-purple-600 text-xl font-bold">
            Build Process and Tech Stack
          </h2>
          <h3 className="text-base title font-semibold">Frontend:</h3>
          <p className="content flex gap-1 text-base font-normal">
            I tried to breakdown each section as a seperate component, as when
            if we consider this project is being build for a real Law firm
            business, its gonna be more complex
          </p>
          <h3 className="text-base title font-semibold">Data:</h3>
          <p className="content flex gap-1 text-base font-normal">
            For data, I used React Context for state management on the frontend
            side, and created fake but relevant data at the backend.
          </p>
          <h3 className="text-base title font-semibold">Other Libraries</h3>
          <p className="content flex gap-1 text-base font-normal">
            I used Tailwind CSS, ShadCN/Ui modern web libraries to integrate
            functional charts, included Bar Chart, Area Chart, Pie Chart,
            Progress Bar, and each are functional feature.
          </p>
          <h3 className="text-base title font-semibold">Backend</h3>
          <p className="content flex gap-1 text-base font-normal">
            Just for the sake of project, I used a simple Node Js Server to
            interact with, as I didn't need to connect to any database, created
            a simple API route to fetch all the relevant data.
          </p>
          <h3 className="text-base title font-semibold">Working:</h3>
          <p className="content flex gap-1 text-base font-normal">
            Just start the backend server and then frontend, You can see the
            Dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
