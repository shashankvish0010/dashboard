import React from "react";
import { Areachart } from "./charts/Areachart";

const TaskAreachart: React.FC = () => {
  return (
    <div className="bg-white h-max md:w-[35vw] w-[80vw] flex flex-row items-center justify-evenly p-2 rounded-2xl">
      <div className="h-max w-[40%] flex items-center justify-center">
        <p>Active Tasks</p>
      </div>
      <div className="h-max w-[60%] flex items-center justify-center">
        <Areachart />
      </div>
    </div>
  );
};

export default TaskAreachart;
