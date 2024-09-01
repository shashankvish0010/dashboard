import React, { useContext } from "react";
import Progressbar from "./Progressbar";
import { DataContext } from "@/context/Datacontext";

const TaskProgress: React.FC = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="bg-slate-800 h-max md:w-[35vw] w-[90vw] flex flex-row items-center justify-evenly p-2 text-white rounded-2xl">
      {dataContext?.progressData
        ? dataContext.progressData.map((data) => (
            <Progressbar
              title={data.title}
              value={data.value}
              primary={data.primary}
              secondary={data.secondary}
            />
          ))
        : null}
    </div>
  );
};

export default TaskProgress;
