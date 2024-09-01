import { Piechart } from "../components/Piechart";
import React from "react";

const Tasks: React.FC = () => {
  return (
    <div className="bg-slate-800 h-max md:w-[35vw] w-[80vw] flex flex-row items-center justify-center p-2 text-white rounded-2xl">
      <div className="flex flex-col justify-center items-center">
        <Piechart title="Active Matters" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Piechart title="Pending Matters" />
      </div>
    </div>
  );
};

export default Tasks;
