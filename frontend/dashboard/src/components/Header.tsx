import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-[15vh] w-screen flex flex-row items-center justify-around p-3">
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
          <li
            onClick={() => navigate("/")}
            className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer"
          >
            Contact
          </li>
          <li
            onClick={() => navigate("/")}
            className="hover:-translate-y-1 transition hover:text-orange-400 cursor-pointer"
          >
            Reports
          </li>
        </ul>
      </div>
      {open === true ? (
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden block h-max w-max"
        >
          <Icon icon="oui:cross" height={"2rem"} color="black" />
        </div>
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden block h-max w-max"
        >
          <Icon icon="quill:hamburger" height={"2rem"} color="black" />
        </div>
      )}
      {open == true ? (
        <div className="absolute top-[.05%] md:hidden block h-max w-screen bg-orange-400 items-center p-3">
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden block h-max w-max left-[100%]"
          >
            <Icon icon="oui:cross" height={"2rem"} color="black" />
          </div>
          <ul className="h-[25vh] text-white uppercase header_list md:hidden flex flex-col justify-around text-sm">
            <li onClick={() => navigate("/")} className="cursor-pointer">Home</li>
            <li onClick={() => navigate("/about")} className="cursor-pointer">About</li>
            <li onClick={() => navigate("/contact")} className="cursor-pointer">Contact</li>
            <li onClick={() => navigate("/")} className="cursor-pointer">Reports</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
