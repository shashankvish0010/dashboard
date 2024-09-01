import React, { useContext } from "react";
import { Piechart } from "./charts/Piechart";
import { Icon } from "@iconify/react";
import { DataContext } from "@/context/Datacontext";

const Mastertask: React.FC = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="bg-white h-max md:w-[35vw] w-[90vw] flex flex-row items-center justify-evenly p-2 rounded-2xl">
      <div className="h-max w-[70%] flex md:flex-row flex-col justify-evenly items-center">
        <div className="h-max w-max">
          <Icon icon="clarity:tasks-solid" color="orange" height={"5rem"} />
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <p className="title font-semibold text-xl md:text-2xl">
            Create Master Pending Task
          </p>
        </div>
      </div>
      {dataContext?.piechartData
        ? dataContext.piechartData.map((data) =>
            data.title == "Pending Matters" ? (
              <Piechart
                title={data.title}
                primary={"fill-black"}
                chartData={data.chartData}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default Mastertask;
