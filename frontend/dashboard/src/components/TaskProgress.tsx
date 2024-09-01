import React from "react";
import Progressbar from "./Progressbar";

const TaskProgress: React.FC = () => {
  return (
    <div className="bg-slate-800 h-max md:w-[35vw] w-[80vw] flex flex-row items-center justify-evenly p-2 text-white rounded-2xl">
      <Progressbar
        title="Time Interno"
        value={30}
        primary={"bg-slate-700"}
        secondary={"bg-white"}
      />
      <Progressbar
        title="Mopheos"
        value={30}
        primary={"bg-orange-400"}
        secondary={"bg-white"}
      />
      <Progressbar
        title="Appontes"
        value={40}
        primary={"bg-slate-600"}
        secondary={"bg-white"}
      />
    </div>
  );
};

export default TaskProgress;
