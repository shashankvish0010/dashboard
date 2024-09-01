import React from "react";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import TaskProgress from "@/components/TaskProgress";
import TaskAreachart from "@/components/TaskAreachart";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-slate-300 h-max w-screen flex flex-col">
        <Header />
        <div className="h-max w-[100%] p-3 flex flex-row items-center justify-center flex-wrap">
          <div className="h-screen w-[40%] flex flex-col items-center gap-2 p-2">
            <Tasks />
          </div>
          <div className="h-screen w-[40%] flex flex-col items-center gap-4 p-2">
            <TaskProgress />
            <TaskAreachart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
