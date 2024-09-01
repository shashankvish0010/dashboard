import React, { useContext, useEffect } from "react";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import TaskProgress from "@/components/TaskProgress";
import TaskAreachart from "@/components/TaskAreachart";
import TaskBarchart from "@/components/TaskBarchart";
import Boardclient from "@/components/Boardclient";
import Mastertask from "@/components/Mastertask";
import Timesheet from "@/components/Timesheet";
import { DataContext } from "@/context/Datacontext";

const Home: React.FC = () => {
  const dataContext = useContext(DataContext);
  useEffect(() => {
    dataContext?.fetchData();
  }, []);

  return (
    <>
      <div className="bg-slate-300 h-max w-screen flex flex-col">
        <div className="h-max w-[100%] p-3 flex flex-col md:flex-row md:items-start items-center justify-center">
          <div className="h-max w-[40%] flex flex-col items-center justify-start gap-4 p-2">
            <Tasks />
            <div className="h-max md:w-[100%] w-[90vw] flex flex-row items-center justify-evenly">
              <Boardclient />
              <TaskBarchart />
            </div>
            <Mastertask />
          </div>
          <div className="h-max w-[40%] flex flex-col items-center justify-start gap-4 p-2">
            <TaskProgress />
            <TaskAreachart />
            <Timesheet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
