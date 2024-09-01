import React, { useContext } from "react";
import { Areachart } from "./charts/Areachart";
import { DataContext } from "@/context/Datacontext";

const TaskAreachart: React.FC = () => {
  const dataContext = useContext(DataContext);
  console.log(dataContext?.areachartData);

  return (
    <div className="bg-white h-max md:w-[35vw] w-[90vw] flex flex-row items-center justify-evenly p-2 rounded-2xl">
      <div className="h-max w-[40%] flex items-center justify-center">
        <p className="title font-medium md:text-2xl text-xl">Active Tasks</p>
      </div>
      <div className="h-max w-[60%] flex items-center justify-center">
        {dataContext?.areachartData ? (
          <Areachart chartData={dataContext.areachartData} />
        ) : null}
      </div>
    </div>
  );
};

export default TaskAreachart;
