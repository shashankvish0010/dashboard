import React from "react";

const Boardclient: React.FC = () => {
  return (
    <div className="bg-slate-800 h-[35vh] md:w-[15vw] w-[90vw] flex flex-col items-center justify-center gap-3 p-2 text-white rounded-2xl">
      <div className="h-max w-[100%] flex flex-row items-center justify-around text-white">
        <span className="bg-orange-500 rounded-full h-[1.5rem] w-[1.5rem]"></span>
        <p className="title font-semibold text-xl">Time Recorded</p>
      </div>
      <div className="h-max w-[100%] flex flex-row items-center justify-around text-white">
        <span className="bg-orange-500 rounded-full h-[1.5rem] w-[1.5rem]"></span>
        <p className="title font-semibold text-xl">Unbilled Clients</p>
      </div>
    </div>
  );
};

export default Boardclient;
