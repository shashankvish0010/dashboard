import React from "react";
import { Icon } from "@iconify/react";

const Timesheet: React.FC = () => {
  return (
    <div className="bg-slate-800 h-[40vh] md:w-[35vw] w-[90vw] flex flex-col items-center justify-around p-2 text-white rounded-2xl">
      <div className="h-max w-[100%] flex flex-row items-center justify-center">
        <p className="title font-medium md:text-2xl text-xl">
          Daily Timesheet Summary
        </p>
      </div>
      <span className="bg-slate-200 rounded-md h-[.25rem] w-[90%]"></span>
      <div className="h-[20vh] w-[100%] flex flex-col items-center justify-around">
        <div className="h-max w-[100%] flex flex-row items-center justify-around text-slate-200">
          <div className="flex flex-row gap-2 items-center">
            <span className="bg-orange-500 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
              <Icon icon="carbon:time-filled" color="white" height={"1.5rem"} />
            </span>
            <p className="title font-medium text-xl">Unbilled Cients</p>
          </div>
          <div>
            <p className="title font-medium text-xl">2.20</p>
          </div>
        </div>
        <div className="h-max w-[100%] flex flex-row items-center justify-around text-white">
          <div className="flex flex-row gap-2 items-center">
            <span className="bg-orange-500 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
              <Icon icon="tdesign:money" color="white" height={"1.5rem"} />
            </span>
            <p className="title font-medium text-xl">Unbilled Cients</p>
          </div>
          <div>
            <p className="title font-medium text-xl">2.20</p>
          </div>
        </div>
        <div className="h-max w-[100%] flex flex-row items-center justify-around text-slate-200">
          <div className="flex flex-row gap-2 items-center">
            <span className="bg-orange-500 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
              <Icon icon="iconamoon:invoice" color="white" height={"1.5rem"} />
            </span>
            <p className="title font-medium text-xl">Invoice</p>
          </div>
          <div className="bg-orange-400 text-white flex flex-row items-center h-max w-max p-2 gap-2 rounded-2xl">
            <p className="title font-medium text-base">Download</p>
            <Icon icon="el:download" color="white" height={"3vh"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheet;
