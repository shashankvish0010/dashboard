import React, { useContext } from "react";
import { Piechart } from "./charts/Piechart";
import { DataContext } from "@/context/Datacontext";

const Tasks: React.FC = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="bg-slate-800 h-max md:w-[35vw] w-[90vw] flex flex-row items-center justify-center p-2 text-white rounded-2xl">
      {dataContext?.piechartData
        ? dataContext?.piechartData.map((data) => (
            <div className="flex flex-col justify-center items-center">
              <Piechart
                title={data.title}
                primary={data.primary}
                chartData={data.chartData}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Tasks;
