import React, { useContext } from "react";
import { Barchart } from "./charts/Barchart";
import { DataContext } from "@/context/Datacontext";

const TaskBarchart: React.FC = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="bg-slate-800 h-[35vh] md:w-[15vw] w-[90vw] flex flex-row items-center justify-center p-2 text-white rounded-2xl">
      {dataContext?.barchartData ? (
        <Barchart chartData={dataContext.barchartData} />
      ) : null}{" "}
    </div>
  );
};

export default TaskBarchart;
