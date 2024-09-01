import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-transparent h-[15vh] w-screen flex flex-row items-center justify-around p-3">
      <div className="h-[100%] md:w-[20vw] gap-2 md:gap-0 flex flex-row items-center justify-evenly">
        <span className="bg-black rounded-full flex justify-center items-center text-white h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]">
          <p className="logo text-xs md:text-sm text-orange-400">LOGO</p>
        </span>
        <span className="heading_other md:text-2xl text-xl">
          <p>Dashboard</p>
        </span>
      </div>
      <div className="header_list h-[100%] w-max hidden md:flex flex-row items-center">
        <ul className="flex flex-row items-center justify-between w-[50vw] font-semibold">
          <li className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer">
            Home
          </li>
          <li className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer">
            Home
          </li>
          <li className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer">
            Home
          </li>
          <li className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer">
            Home
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
